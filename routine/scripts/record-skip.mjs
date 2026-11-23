#!/usr/bin/env node
// Record a reviewed release that gets no changelog entry, so it stops coming
// back as pending. Run after "go"; publish-docs.mjs commits the change.
//
//   node routine/scripts/record-skip.mjs --pr 795 --reason "Nothing to announce: CI and infrastructure only."
import { appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROUTINE_DIR, args, die, readSkipped, todayToronto } from './lib.mjs';

const opts = args();
const pr = Number(opts.pr);
if (!pr || !opts.reason || opts.reason === true) die('usage: record-skip.mjs --pr <release PR> --reason "<why>"');
if (readSkipped().some(s => s.release_pr === pr)) { console.log(`#${pr} is already in skipped.toml`); process.exit(0); }
appendFileSync(join(ROUTINE_DIR, 'skipped.toml'),
  `\n[[skip]]\nrelease_pr = ${pr}\nreason = ${JSON.stringify(opts.reason)}\nrecorded = "${todayToronto()}"\n`);
console.log(`Recorded #${pr} in routine/skipped.toml`);
