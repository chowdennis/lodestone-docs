// Shared helpers for the kb update routine. No dependencies: Node built-ins,
// plus the git and gh CLIs on PATH, authenticated as the person running it.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const APP_REPO = 'Lodestone-PM/lodestone';
export const SITE_REPO = 'chowdennis/lodestone-website';
export const DOCS_REPO = 'chowdennis/lodestone-docs';
export const SITE_URL = 'https://www.lodestone.pm';
export const DOCS_URL = 'https://docs.lodestone.pm';

export const ROUTINE_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
export const DOCS_ROOT = join(ROUTINE_DIR, '..');
export const OUT_DIR = join(ROUTINE_DIR, 'out');

// Read-only (app) and scratch (website) clones live outside the docs repo so
// VitePress never sees them.
export const WORK_DIR = join(process.env.XDG_CACHE_HOME || join(homedir(), '.cache'), 'lodestone-kb-update');
export const APP_DIR = join(WORK_DIR, 'lodestone-app');
export const SITE_DIR = join(WORK_DIR, 'lodestone-website');

export function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'], ...opts });
}
export const git = (dir, ...args) => run('git', ['-C', dir, ...args]);
export const gh = (...args) => run('gh', args);
export const ghJson = (...args) => JSON.parse(gh(...args));

export function tryGit(dir, ...args) {
  try { git(dir, ...args); return true; } catch { return false; }
}

/** Clone (blobless) or fetch the app and website repos into the work dir. */
export function syncWorkClones({ quiet = false } = {}) {
  mkdirSync(WORK_DIR, { recursive: true });
  for (const [repo, dir] of [[APP_REPO, APP_DIR], [SITE_REPO, SITE_DIR]]) {
    if (!existsSync(join(dir, '.git'))) {
      if (!quiet) console.error(`Cloning ${repo} into ${dir}`);
      run('gh', ['repo', 'clone', repo, dir, '--', '--filter=blob:none', '--quiet']);
    } else {
      git(dir, 'fetch', '--quiet', '--prune', 'origin');
    }
  }
}

/** YYYY-MM-DD in America/Toronto for an ISO timestamp. */
export function torontoDate(iso) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(new Date(iso));
}
export const todayToronto = () => torontoDate(new Date().toISOString());

/**
 * Minimal TOML reader for holds.toml and skipped.toml: [[table]] arrays,
 * key = "string" | integer | true/false | [array of strings or integers],
 * # comments. Anything else throws, so a typo can't be silently ignored.
 */
export function parseToml(text, file = 'toml') {
  const out = {};
  let current = null;
  const value = (raw, ln) => {
    raw = raw.trim();
    if (/^"(?:[^"\\]|\\.)*"$/.test(raw)) return JSON.parse(raw);
    if (/^-?\d+$/.test(raw)) return Number(raw);
    if (raw === 'true' || raw === 'false') return raw === 'true';
    if (raw.startsWith('[') && raw.endsWith(']')) {
      const inner = raw.slice(1, -1).trim();
      if (!inner) return [];
      return inner.match(/"(?:[^"\\]|\\.)*"|[^,\s]+/g).map(v => value(v, ln));
    }
    throw new Error(`${file}:${ln}: unsupported value ${raw}`);
  };
  text.split('\n').forEach((line, i) => {
    const ln = i + 1;
    let inStr = false, cut = line.length;
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '\\' && inStr) { j++; continue; }
      if (ch === '"') inStr = !inStr;
      else if (ch === '#' && !inStr) { cut = j; break; }
    }
    const s = line.slice(0, cut).trim();
    if (!s || s.startsWith('#')) return;
    const table = s.match(/^\[\[([A-Za-z_]+)\]\]$/);
    if (table) { current = {}; (out[table[1]] ||= []).push(current); return; }
    const kv = s.match(/^([A-Za-z_]+)\s*=\s*(.+)$/);
    if (!kv || !current) throw new Error(`${file}:${ln}: can't parse "${line}"`);
    current[kv[1]] = value(kv[2], ln);
  });
  return out;
}

export function readHolds() {
  const file = join(ROUTINE_DIR, 'holds.toml');
  return (parseToml(readFileSync(file, 'utf8'), 'holds.toml').hold || []).map(h => ({
    key: h.key, prs: h.prs || [], keywords: h.keywords || [], reason: h.reason || '', added: h.added || '',
  }));
}

export function readSkipped() {
  const file = join(ROUTINE_DIR, 'skipped.toml');
  return parseToml(readFileSync(file, 'utf8'), 'skipped.toml').skip || [];
}

/** Parse the frontmatter of a changelog MDX file (the subset the site uses). */
export function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (!kv) continue;
    const raw = kv[2].trim();
    if (raw.startsWith('[')) fm[kv[1]] = raw.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean).map(Number);
    else fm[kv[1]] = raw.replace(/^"(.*)"$/, '$1');
  }
  return { fm, body: text.slice(m[0].length), keys: m[1].split('\n').map(l => l.split(':')[0]) };
}

/** Every changelog entry on a website ref: [{ file, fm }]. */
export function readSiteEntries(ref = 'origin/main') {
  const files = git(SITE_DIR, 'ls-tree', '--name-only', `${ref}:content/changelog`).split('\n').filter(f => f.endsWith('.mdx'));
  return files.map(file => ({ file, fm: parseFrontmatter(git(SITE_DIR, 'show', `${ref}:content/changelog/${file}`))?.fm || {} }));
}

/** Production first-parent merges, oldest first: [{ sha, date (ISO), pr, subject }]. */
export function productionMerges() {
  return git(APP_DIR, 'log', 'origin/production', '--first-parent', '--merges', '--reverse', '--format=%H%x09%cI%x09%s')
    .trim().split('\n').filter(Boolean).map(line => {
      const [sha, date, subject] = line.split('\t');
      const m = subject.match(/Merge pull request #(\d+)/);
      return { sha, date, subject, pr: m ? Number(m[1]) : null };
    });
}

export function ensureOut(name) {
  const dir = join(OUT_DIR, name);
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function die(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

export function args(argv = process.argv.slice(2)) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) out[key] = true;
      else { out[key] = next; i++; }
    } else out._.push(a);
  }
  return out;
}

export const sleep = ms => new Promise(r => setTimeout(r, ms));

/**
 * Wait for the Vercel deployment of `sha` in `environment` ("Production" or
 * "Preview") on `repo` to succeed. Vercel reports through GitHub deployment
 * statuses. Returns the deployment URL; throws on failure or timeout.
 */
export async function waitForDeployment(repo, sha, environment, { timeoutMin = 15, log = console.error } = {}) {
  const deadline = Date.now() + timeoutMin * 60_000;
  let announced = false;
  while (Date.now() < deadline) {
    const deps = ghJson('api', `repos/${repo}/deployments?sha=${sha}&environment=${encodeURIComponent(environment)}&per_page=5`);
    if (deps.length) {
      const statuses = ghJson('api', `repos/${repo}/deployments/${deps[0].id}/statuses?per_page=1`);
      const state = statuses[0]?.state;
      if (state === 'success') return statuses[0].environment_url || statuses[0].target_url || '';
      if (state === 'failure' || state === 'error') throw new Error(`${environment} deployment of ${sha.slice(0, 8)} on ${repo} ended in "${state}": ${statuses[0].target_url || ''}`);
      if (!announced) { log(`  waiting for the ${environment} deployment of ${sha.slice(0, 8)} on ${repo} (${state || 'queued'})…`); announced = true; }
    } else if (!announced) { log(`  waiting for Vercel to start the ${environment} deployment of ${sha.slice(0, 8)} on ${repo}…`); announced = true; }
    await sleep(15_000);
  }
  throw new Error(`timed out after ${timeoutMin} min waiting for the ${environment} deployment of ${sha.slice(0, 8)} on ${repo}`);
}

/** Fetch a page (bypassing caches) and report which of the expected strings it contains. */
export async function pageContains(url, needles) {
  const res = await fetch(`${url}${url.includes('?') ? '&' : '?'}kbcheck=${Date.now()}`, { headers: { 'cache-control': 'no-cache' }, redirect: 'follow' });
  const html = res.ok ? await res.text() : '';
  const text = html.replace(/&amp;/g, '&').replace(/&#x27;|&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"');
  return { status: res.status, found: needles.filter(n => text.includes(n)), missing: needles.filter(n => !text.includes(n)) };
}
