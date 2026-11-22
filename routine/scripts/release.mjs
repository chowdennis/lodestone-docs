#!/usr/bin/env node
// Step 2: gather everything about one production release into a dossier the
// session drafts from. Read-only.
//
//   node routine/scripts/release.mjs --pr 791
//
// Writes routine/out/<date>-pr<N>/release.json and dossier.md, and prints the
// dossier path. The release range is the previous production merge up to this
// one (<sha>^1..<sha>); its date is the merge time in America/Toronto.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  APP_DIR, APP_REPO, SITE_DIR, args, die, ensureOut, ghJson, git, productionMerges, readHolds, syncWorkClones,
  torontoDate, tryGit,
} from './lib.mjs';

const opts = args();
const releasePr = Number(opts.pr);
if (!releasePr) die('usage: release.mjs --pr <release PR number>');
syncWorkClones();

const merge = productionMerges().find(m => m.pr === releasePr);
if (!merge) die(`#${releasePr} is not a first-parent merge on lodestone-app production.`);
const { sha } = merge;
const date = torontoDate(merge.date);
const range = `${sha}^1..${sha}`;

// PRs in the range, from merge-commit subjects and squash-merge "(#123)" suffixes.
const commitLines = git(APP_DIR, 'log', '--format=%H%x09%P%x09%s', range).trim().split('\n').filter(Boolean);
const prCommit = new Map();
const commitSubjects = [];
for (const line of commitLines) {
  const [c, parents, subject] = line.split('\t');
  if (c === sha) continue;
  const n = subject.match(/Merge pull request #(\d+)/)?.[1] || subject.match(/\(#(\d+)\)\s*$/)?.[1];
  if (n && !prCommit.has(Number(n))) prCommit.set(Number(n), { commit: c, isMerge: parents.includes(' ') });
  if (!parents.includes(' ')) commitSubjects.push(subject);
}

// Feature flags at this release and at the previous one.
function flagsAt(ref) {
  let src = '';
  try { src = git(APP_DIR, 'show', `${ref}:app/featureFlags.ts`); } catch { return []; }
  const body = src.match(/FEATURE_FLAGS\s*=\s*\{([\s\S]*?)\}\s*as const/)?.[1] || '';
  return [...body.matchAll(/["']([\w-]+)["']\s*:\s*(true|false)/g)].map(m => ({ key: m[1], localDefault: m[2] === 'true' }));
}
const flags = flagsAt(sha);
const previousFlags = new Set(flagsAt(`${sha}^1`).map(f => f.key));

const holds = readHolds();
const INTERNAL = [
  /^\.github\//, /^\.husky\//, /^test\//, /^tests?\//, /^playwright\//, /^mocks\//, /^scripts\//, /^docs\//, /^kb\//,
  /^screenshots\//, /\.(test|spec)\.[jt]sx?$/, /\.md$/, /^Dockerfile/, /^docker-compose/, /^fly\.toml$/,
  /^\.(eslint|prettier|gitignore|prettierignore|nvmrc)/, /^(vitest|playwright)\.config\./, /^package-lock\.json$/,
];

function diffFor(n) {
  const c = prCommit.get(n);
  if (!c) return '';
  try {
    return c.isMerge ? git(APP_DIR, 'diff', `${c.commit}^1`, c.commit) : git(APP_DIR, 'show', '--format=', c.commit);
  } catch { return ''; }
}

const prs = [];
for (const n of [...prCommit.keys()].sort((a, b) => a - b)) {
  const p = ghJson('pr', 'view', String(n), '-R', APP_REPO, '--json', 'number,title,body,author,labels,files,mergedAt,baseRefName,headRefName,url');
  if (p.baseRefName === 'production') continue; // an earlier release merge, not a source PR
  const files = (p.files || []).map(f => f.path);
  const added = diffFor(n).split('\n').filter(l => l.startsWith('+') && !l.startsWith('+++'));
  const flagMentions = flags.map(f => f.key).filter(k => added.some(l => l.includes(`"${k}"`) || l.includes(`'${k}'`)));
  const envSwitches = [...new Set(added.flatMap(l => [...l.matchAll(/process\.env\.([A-Z0-9_]*(?:ENABLED|DISABLED|FLAG|ENABLE|DISABLE)[A-Z0-9_]*)/g)].map(m => m[1])))];
  const text = `${p.title}\n${p.body || ''}`.toLowerCase();
  const heldBy = holds.filter(h => h.prs.includes(n) || h.keywords.some(k => text.includes(k.toLowerCase()))).map(h => h.key);
  prs.push({
    number: n, title: p.title, author: p.author?.login, url: p.url, base: p.baseRefName, head: p.headRefName,
    labels: (p.labels || []).map(l => l.name), body: (p.body || '').trim(), files,
    likelyInternal: files.length > 0 && files.every(f => INTERNAL.some(rx => rx.test(f))),
    flagMentions, envSwitches, heldBy,
  });
}

const releaseView = ghJson('pr', 'view', String(releasePr), '-R', APP_REPO, '--json', 'title,body,url');
const sameDay = tryGit(SITE_DIR, 'cat-file', '-e', `origin/main:content/changelog/${date}.mdx`);
const result = {
  releasePr, sha, mergedAt: merge.date, date, range, url: releaseView.url,
  releaseTitle: releaseView.title,
  sourcePrs: prs.map(p => p.number),
  likelyNothingToAnnounce: prs.length === 0 || prs.every(p => p.likelyInternal),
  sameDayEntryExists: sameDay,
  flags: flags.map(f => ({ ...f, newThisRelease: !previousFlags.has(f.key), usedBy: prs.filter(p => p.flagMentions.includes(f.key)).map(p => p.number) })),
  holds: holds.map(h => ({ ...h, matchedPrs: prs.filter(p => p.heldBy.includes(h.key)).map(p => p.number) })).filter(h => h.matchedPrs.length),
  envSwitches: [...new Set(prs.flatMap(p => p.envSwitches))],
  prs,
  commitSubjects,
};

const dir = ensureOut(`${date}-pr${releasePr}`);
writeFileSync(join(dir, 'release.json'), JSON.stringify(result, null, 2) + '\n');

const md = [];
md.push(`# Release #${releasePr}, live ${date} (Toronto)`, '');
md.push(`- Production merge: ${sha} at ${merge.date}`, `- Range: ${range} (${prs.length} PRs, ${commitSubjects.length} non-merge commits)`);
md.push(`- Release PR: ${releaseView.url}`);
if (sameDay) md.push(`- ⚠️ content/changelog/${date}.mdx already exists on website main: add to it rather than replacing it.`);
if (result.likelyNothingToAnnounce) md.push(`- Every PR touches only CI, tests, scripts or docs: likely nothing to announce.`);
md.push('', '## Feature flags at this release', '');
if (!flags.length) md.push('None registered.');
for (const f of result.flags) {
  md.push(`- \`${f.key}\`${f.newThisRelease ? ' (new this release)' : ''}${f.usedBy.length ? `, referenced by ${f.usedBy.map(n => `#${n}`).join(', ')}` : ''}: confirm the production state in PostHog.`);
}
if (result.envSwitches.length) md.push('', `Environment switches added in this range (ask, don't guess): ${result.envSwitches.join(', ')}`);
md.push('', '## Holds matched', '');
md.push(result.holds.length ? result.holds.map(h => `- ${h.key}: ${h.matchedPrs.map(n => `#${n}`).join(', ')} (${h.reason})`).join('\n') : 'None.');
md.push('', '## Pull requests');
for (const p of prs) {
  md.push('', `### #${p.number} ${p.title}`, `${p.author} · ${p.head} → ${p.base}${p.labels.length ? ` · labels: ${p.labels.join(', ')}` : ''}${p.likelyInternal ? ' · likely internal' : ''}${p.heldBy.length ? ` · ON HOLD (${p.heldBy.join(', ')})` : ''}`);
  if (p.flagMentions.length) md.push(`Flags referenced: ${p.flagMentions.join(', ')}`);
  if (p.envSwitches.length) md.push(`Env switches added: ${p.envSwitches.join(', ')}`);
  md.push('', p.body ? p.body.slice(0, 6000) : '(no description)', '');
  md.push(`Files (${p.files.length}): ${p.files.slice(0, 60).join(', ')}${p.files.length > 60 ? ', …' : ''}`);
}
md.push('', '## Non-merge commit subjects', '', ...commitSubjects.map(s => `- ${s}`), '');
writeFileSync(join(dir, 'dossier.md'), md.join('\n'));
console.log(join(dir, 'dossier.md'));
