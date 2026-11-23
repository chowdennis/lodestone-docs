#!/usr/bin/env node
// Step 3: render a changelog entry from a JSON draft and run every format check.
//
//   node routine/scripts/render-entry.mjs --draft <entry.json> [--release <release.json>]... [--existing <file.mdx>] [--out <file.mdx>]
//   node routine/scripts/render-entry.mjs --check <file.mdx> [--release <release.json>]...
//
// Draft JSON:
//   { "date": "2026-11-20", "title": "...", "releasePrs": [791], "sourcePrs": [777, 789, 790],
//     "new": [{ "lead": "Copy or move items between workspaces.", "text": "Select items ..." }],
//     "improved": [...], "fixed": [...] }
// "text" may be empty only for a security line. --existing merges into a same-day
// entry (its items first, PR lists unioned; the draft's title wins). --release
// files supply the flag names that must not appear. Exits 1 if any check fails.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { args, die, parseFrontmatter, readHolds } from './lib.mjs';

const SECTIONS = [['new', 'New'], ['improved', 'Improved'], ['fixed', 'Fixed']];
const KEYS = ['title', 'slug', 'date', 'releasePrs', 'sourcePrs'];
const BULLET = /^- \*\*([^*]+?\.)\*\*(?: (.+))?$/;

export function checkEntry(text, { expectedDate, flagNames = [], holdKeywords = [] } = {}) {
  const errors = [];
  const parsed = parseFrontmatter(text);
  if (!parsed) return ['missing frontmatter'];
  const { fm, body, keys } = parsed;
  if (keys.join(',') !== KEYS.join(',')) errors.push(`frontmatter keys must be exactly ${KEYS.join(', ')} (got ${keys.join(', ')})`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.date || '')) errors.push('date must be YYYY-MM-DD');
  if (fm.slug !== fm.date) errors.push('slug must equal date');
  if (expectedDate && fm.date !== expectedDate) errors.push(`date ${fm.date} doesn't match the file name ${expectedDate}`);
  if (!/^date: "/m.test(text) || !/^slug: "/m.test(text)) errors.push('date and slug must be quoted');
  if (!fm.title || /\.$/.test(fm.title)) errors.push('title must be present and not end with a period');
  for (const k of ['releasePrs', 'sourcePrs']) if (!Array.isArray(fm[k]) || fm[k].some(n => !Number.isInteger(n))) errors.push(`${k} must be a list of PR numbers`);

  const headings = [];
  let itemsInSection = 0;
  body.split('\n').forEach((line, i) => {
    const where = `body line ${i + 1}`;
    if (!line.trim()) return;
    const h = line.match(/^## (.+)$/);
    if (h) {
      if (headings.length && itemsInSection === 0) errors.push(`section "${headings.at(-1)}" is empty`);
      headings.push(h[1]); itemsInSection = 0; return;
    }
    const b = line.match(BULLET);
    if (!b) { errors.push(`${where}: not a heading or a "- **Lead.** Text." bullet: ${line}`); return; }
    if (!headings.length) errors.push(`${where}: bullet before any section heading`);
    if (b[2] && !/[.!?]$/.test(b[2].trim())) errors.push(`${where}: text must end with a period`);
    itemsInSection++;
  });
  if (headings.length && itemsInSection === 0) errors.push(`section "${headings.at(-1)}" is empty`);
  const allowed = SECTIONS.map(s => s[1]);
  if (!headings.length) errors.push('needs at least one of New, Improved, Fixed');
  if (headings.some(h => !allowed.includes(h))) errors.push(`only ${allowed.join(', ')} sections are allowed`);
  const order = headings.map(h => allowed.indexOf(h));
  if (order.some((v, i) => i && v <= order[i - 1])) errors.push('sections must be in the order New, Improved, Fixed, each once');

  const all = `${fm.title}\n${body}`;
  if (/[–—]/.test(all)) errors.push('no em or en dashes');
  for (const [rx, label] of [[/\bAPI\b(?! keys?\b)/, 'API'], [/\bREST\b/, 'REST'], [/\bendpoints?\b/i, 'endpoint'], [/webhook URL/i, 'webhook URL']]) {
    if (rx.test(all)) errors.push(`mentions "${label}"`);
  }
  if (/#\d+/.test(all)) errors.push('mentions a PR number');
  for (const f of flagNames) if (all.includes(f)) errors.push(`mentions the feature flag "${f}"`);
  for (const k of holdKeywords) if (all.toLowerCase().includes(k.toLowerCase())) errors.push(`mentions "${k}", which is on hold`);
  return errors;
}

function itemsFrom(body) {
  const out = { new: [], improved: [], fixed: [] };
  let key = null;
  for (const line of body.split('\n')) {
    const h = line.match(/^## (.+)$/);
    if (h) { key = SECTIONS.find(s => s[1] === h[1])?.[0] ?? null; continue; }
    const b = line.match(BULLET);
    if (b && key) out[key].push({ lead: b[1], text: b[2] || '' });
  }
  return out;
}

export function renderEntry(d) {
  const nums = xs => `[${[...new Set(xs)].sort((a, b) => a - b).join(', ')}]`;
  const lines = ['---', `title: ${JSON.stringify(d.title)}`, `slug: "${d.date}"`, `date: "${d.date}"`,
    `releasePrs: ${nums(d.releasePrs || [])}`, `sourcePrs: ${nums(d.sourcePrs || [])}`, '---'];
  for (const [key, label] of SECTIONS) {
    const items = d[key] || [];
    if (!items.length) continue;
    lines.push('', `## ${label}`, '');
    for (const { lead, text } of items) {
      const l = lead.trim().replace(/\.?$/, '.');
      lines.push(`- **${l}**${text?.trim() ? ` ${text.trim()}` : ''}`);
    }
  }
  return lines.join('\n') + '\n';
}

const opts = args();
const releases = [].concat(opts.release || []).filter(r => r !== true);
const flagNames = releases.flatMap(r => JSON.parse(readFileSync(r, 'utf8')).flags.map(f => f.key));
const holdKeywords = readHolds().flatMap(h => h.keywords);

if (opts.check) {
  const text = readFileSync(opts.check, 'utf8');
  const errors = checkEntry(text, { expectedDate: basename(opts.check, '.mdx'), flagNames, holdKeywords });
  if (errors.length) { console.error(`✗ ${opts.check}\n  - ${errors.join('\n  - ')}`); process.exit(1); }
  console.log(`✓ ${opts.check} passes every check`);
  process.exit(0);
}

if (!opts.draft) die('usage: render-entry.mjs --draft <entry.json> [--release <release.json>] [--existing <file.mdx>] [--out <file.mdx>]');
const draft = JSON.parse(readFileSync(opts.draft, 'utf8'));
if (opts.existing) {
  const ex = parseFrontmatter(readFileSync(opts.existing, 'utf8'));
  if (!ex || ex.fm.date !== draft.date) die(`--existing must be the ${draft.date} entry`);
  const old = itemsFrom(ex.body);
  for (const [key] of SECTIONS) draft[key] = [...old[key], ...(draft[key] || [])];
  draft.releasePrs = [...(ex.fm.releasePrs || []), ...(draft.releasePrs || [])];
  draft.sourcePrs = [...(ex.fm.sourcePrs || []), ...(draft.sourcePrs || [])];
}
const text = renderEntry(draft);
const out = opts.out || join(dirname(opts.draft), `${draft.date}.mdx`);
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, text);
const errors = checkEntry(text, { expectedDate: basename(out, '.mdx'), flagNames, holdKeywords });
if (errors.length) { console.error(`✗ ${out}\n  - ${errors.join('\n  - ')}`); process.exit(1); }
console.log(`✓ ${out} rendered and passes every check`);
