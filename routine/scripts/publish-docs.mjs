#!/usr/bin/env node
// Step 5 (docs): build, commit and push the approved KB changes (and any
// skipped.toml/holds.toml updates) to lodestone-docs main. Vercel deploys main
// to docs.lodestone.pm.
//
//   node routine/scripts/publish-docs.mjs --message "docs: KB update for release #791"
//
// Refuses unless you're on main and your main matched origin/main before the
// edits (the routine pulls at the start). A failed VitePress build (for
// example a dead link) stops it before anything is committed.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { DOCS_ROOT, args, die, git, run } from './lib.mjs';

const opts = args();
if (!opts.message || opts.message === true) die('usage: publish-docs.mjs --message "<commit message>"');

const branch = git(DOCS_ROOT, 'rev-parse', '--abbrev-ref', 'HEAD').trim();
if (branch !== 'main') die(`lodestone-docs is on "${branch}"; the routine publishes from main.`);
git(DOCS_ROOT, 'fetch', '--quiet', 'origin');
if (git(DOCS_ROOT, 'rev-parse', 'HEAD').trim() !== git(DOCS_ROOT, 'rev-parse', 'origin/main').trim()) {
  die('local main is not at origin/main. Commit nothing; pull (git pull --rebase --autostash) and re-check the edits.');
}
const changes = git(DOCS_ROOT, 'status', '--porcelain').trim();
if (!changes) die('nothing to publish.');
console.log(`Publishing:\n${changes}`);

if (!existsSync(join(DOCS_ROOT, 'node_modules'))) run('npm', ['install', '--no-audit', '--no-fund'], { cwd: DOCS_ROOT, stdio: 'inherit' });
try {
  run('npm', ['run', 'build'], { cwd: DOCS_ROOT, stdio: ['ignore', 'pipe', 'inherit'] });
} catch {
  die('VitePress build failed (see above); nothing was committed.');
}
console.log('✓ VitePress build passed');

git(DOCS_ROOT, 'add', '-A');
git(DOCS_ROOT, 'commit', '--quiet', '-m', opts.message, '-m', 'Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>');
git(DOCS_ROOT, 'push', '--quiet', 'origin', 'main');
const sha = git(DOCS_ROOT, 'rev-parse', 'HEAD').trim();
console.log(`Pushed ${sha} to lodestone-docs main.`);
console.log(`Next: node routine/scripts/verify.mjs --docs ${sha} --page <page> --text "<new phrase>"`);
