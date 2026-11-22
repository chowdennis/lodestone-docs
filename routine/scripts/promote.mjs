#!/usr/bin/env node
// Step 5 (website): put an approved changelog entry live on lodestone.pm.
//
//   node routine/scripts/promote.mjs --plan                       # read-only: what --apply would do
//   node routine/scripts/promote.mjs --apply --entry <file.mdx>    # after "go"
//
// The staging guard: staging may hold nothing main lacks except changelog
// entries. If it holds anything else, stop and say what. Otherwise:
//   1. if staging is behind main, fast-forward staging to main;
//   2. open changelog/<date> into staging and merge it (your gh login);
//   3. wait for Vercel's Preview build of staging;
//   4. fast-forward main to staging, so the two branches are identical;
//   5. print main's SHA for verify.mjs.
// Never force-pushes. Exits 2 when the guard stops it, 1 on any other error.
import { copyFileSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { SITE_DIR, SITE_REPO, args, die, gh, git, parseFrontmatter, syncWorkClones, tryGit, waitForDeployment } from './lib.mjs';

const opts = args();
if (!opts.plan && !opts.apply) die('usage: promote.mjs --plan | --apply --entry <file.mdx>');
syncWorkClones();

const rev = ref => git(SITE_DIR, 'rev-parse', ref).trim();
const isAncestor = (a, b) => tryGit(SITE_DIR, 'merge-base', '--is-ancestor', a, b);
const isChangelog = f => /^content\/changelog\/\d{4}-\d{2}-\d{2}\.mdx$/.test(f);

function guard() {
  const ahead = git(SITE_DIR, 'log', '--format=%h %s', 'origin/main..origin/staging').trim().split('\n').filter(Boolean);
  const behind = git(SITE_DIR, 'rev-list', '--count', 'origin/staging..origin/main').trim();
  const files = git(SITE_DIR, 'diff', '--name-only', 'origin/main...origin/staging').trim().split('\n').filter(Boolean);
  const foreign = files.filter(f => !isChangelog(f));
  return { ahead, behind: Number(behind), files, foreign, stagingIsAncestor: isAncestor('origin/staging', 'origin/main') };
}

function stop(g, why) {
  console.error(`✗ Staging guard: ${why}`);
  if (g.foreign.length) console.error(`  Files on staging that main doesn't have:\n    ${g.foreign.join('\n    ')}`);
  if (g.ahead.length) console.error(`  Commits on staging that main doesn't have:\n    ${g.ahead.join('\n    ')}`);
  console.error('  The changelog was not touched. Resolve staging by hand, then run promote.mjs again.');
  process.exit(2);
}

const g = guard();
const describe = () => {
  const lines = [`main ${rev('origin/main').slice(0, 8)}, staging ${rev('origin/staging').slice(0, 8)}`];
  if (!g.ahead.length && !g.behind) lines.push('staging and main are identical');
  if (g.behind) lines.push(`staging is ${g.behind} commit${g.behind > 1 ? 's' : ''} behind main${g.stagingIsAncestor ? ' (fast-forwardable)' : ''}`);
  if (g.ahead.length) lines.push(`staging has ${g.ahead.length} commit${g.ahead.length > 1 ? 's' : ''} main lacks, touching: ${g.files.join(', ') || '(no file changes)'}`);
  return lines.join('; ');
};

if (opts.plan) {
  console.log(`Website: ${describe()}.`);
  if (g.foreign.length) { console.log('Would STOP: staging holds changes other than changelog entries (listed below).'); stop(g, 'staging holds changes other than changelog entries.'); }
  const steps = [];
  if (g.behind && !g.ahead.length) steps.push('fast-forward staging to main');
  if (g.behind && g.ahead.length && !g.stagingIsAncestor) steps.push('STOP: staging and main have diverged, so main could not be fast-forwarded to staging');
  if (g.ahead.length) steps.push(`include the changelog entries already on staging (${g.files.join(', ')})`);
  steps.push('open changelog/<date> into staging and merge it', 'wait for the staging Preview build', 'fast-forward main to staging', 'wait for the Production build and check lodestone.pm/changelog');
  console.log(`Would: ${steps.join('; then ')}.`);
  process.exit(0);
}

// --apply
const entryPath = opts.entry;
if (!entryPath || entryPath === true) die('--apply needs --entry <file.mdx>');
const entry = parseFrontmatter(readFileSync(entryPath, 'utf8'));
const date = entry?.fm?.date;
if (!date || basename(entryPath) !== `${date}.mdx`) die(`${entryPath} must be named <date>.mdx after its frontmatter date`);

if (g.foreign.length) stop(g, 'staging holds changes other than changelog entries.');
if (g.behind) {
  if (g.ahead.length || !g.stagingIsAncestor) stop(g, 'staging and main have diverged, so main could not be fast-forwarded to staging afterwards.');
  console.log(`Fast-forwarding staging to main (${g.behind} commit${g.behind > 1 ? 's' : ''}).`);
  git(SITE_DIR, 'push', '--quiet', 'origin', 'origin/main:refs/heads/staging');
  git(SITE_DIR, 'fetch', '--quiet', 'origin');
}

// The entry PR.
const branch = `changelog/${date}`;
const target = `content/changelog/${date}.mdx`;
if (tryGit(SITE_DIR, 'ls-remote', '--exit-code', '--heads', 'origin', branch)) die(`branch ${branch} already exists on the website repo; delete or merge it first`);
git(SITE_DIR, 'checkout', '--quiet', '-B', branch, 'origin/staging');
copyFileSync(entryPath, join(SITE_DIR, target));
if (!git(SITE_DIR, 'status', '--porcelain').trim()) {
  console.log(`${target} on staging already matches the entry; skipping the PR.`);
} else {
  git(SITE_DIR, 'add', target);
  const releases = entry.fm.releasePrs?.length ? ` (lodestone-app release ${entry.fm.releasePrs.map(n => `#${n}`).join(', ')})` : '';
  git(SITE_DIR, 'commit', '--quiet', '-m', `content(changelog): ${date}${releases}`, '-m', entry.fm.title);
  git(SITE_DIR, 'push', '--quiet', '-u', 'origin', branch);
  const body = [
    `Changelog entry for ${date}${releases}, approved in the kb update routine.`, '',
    `**${entry.fm.title}**`, '', entry.body.trim(), '',
    'Merged into `staging` by the routine; `main` is then fast-forwarded to `staging`.', '',
    '🤖 Generated with [Claude Code](https://claude.com/claude-code)',
  ].join('\n');
  const url = gh('pr', 'create', '-R', SITE_REPO, '--base', 'staging', '--head', branch, '--title', `Changelog: ${date}`, '--body', body).trim();
  console.log(`Opened ${url}`);
  gh('pr', 'merge', url, '-R', SITE_REPO, '--merge', '--delete-branch');
  console.log('Merged into staging.');
  git(SITE_DIR, 'fetch', '--quiet', '--prune', 'origin');
}
git(SITE_DIR, 'checkout', '--quiet', '--detach', 'origin/staging');

const stagingSha = rev('origin/staging');
const previewUrl = await waitForDeployment(SITE_REPO, stagingSha, 'Preview').catch(e => die(e.message));
console.log(`Staging preview built: ${previewUrl}`);

// Promote: main becomes exactly staging.
const g2 = guard();
if (g2.foreign.length) stop(g2, 'staging changed while the preview was building and now holds non-changelog changes.');
if (!isAncestor('origin/main', 'origin/staging')) stop(g2, 'main moved while the preview was building and is no longer behind staging.');
git(SITE_DIR, 'push', '--quiet', 'origin', 'origin/staging:refs/heads/main');
git(SITE_DIR, 'fetch', '--quiet', 'origin');
if (rev('origin/main') !== rev('origin/staging')) die('main and staging differ after the fast-forward; check the website repo.');
console.log(`main fast-forwarded to staging: both at ${rev('origin/main')}`);
console.log(`Next: node routine/scripts/verify.mjs --site ${rev('origin/main')} --anchor ${date}`);
