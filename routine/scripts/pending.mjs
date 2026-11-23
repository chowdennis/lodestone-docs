#!/usr/bin/env node
// Step 1: list lodestone-app production releases still waiting for a changelog
// entry, oldest first.
//
//   node routine/scripts/pending.mjs            # human summary + routine/out/pending.json
//   node routine/scripts/pending.mjs --json     # JSON only
//
// Pending = production merges after the newest release already accounted for
// (listed in any entry's releasePrs on website main, or in skipped.toml) that
// are themselves not accounted for. Releases older than that were decided
// during the backfill (some deliberately left out) and never come back.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { args, ensureOut, productionMerges, readSiteEntries, readSkipped, syncWorkClones, torontoDate } from './lib.mjs';

const opts = args();
syncWorkClones({ quiet: opts.json });

const entries = readSiteEntries('origin/main');
const listed = new Set(entries.flatMap(e => e.fm.releasePrs || []));
const skipped = new Set(readSkipped().map(s => s.release_pr));
const merges = productionMerges();

let floor = -1;
merges.forEach((m, i) => { if (m.pr && (listed.has(m.pr) || skipped.has(m.pr))) floor = i; });
if (floor < 0) {
  console.error('✗ No production merge matches any releasePrs or skipped.toml entry; refusing to guess a starting point.');
  process.exit(1);
}

const pending = merges.slice(floor + 1).filter(m => !(m.pr && (listed.has(m.pr) || skipped.has(m.pr))))
  .map(m => ({ releasePr: m.pr, sha: m.sha, mergedAt: m.date, date: torontoDate(m.date), subject: m.subject }));
const last = merges[floor];
const result = {
  lastAccountedFor: { releasePr: last.pr, sha: last.sha, date: torontoDate(last.date) },
  pending,
};
writeFileSync(join(ensureOut('.'), 'pending.json'), JSON.stringify(result, null, 2) + '\n');

if (opts.json) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`Last release accounted for: #${last.pr} (${result.lastAccountedFor.date})`);
  console.log(`${pending.length} pending release${pending.length === 1 ? '' : 's'}${pending.length ? ', oldest first:' : '.'}`);
  for (const p of pending) {
    console.log(`  #${p.releasePr ?? '?'}  ${p.date}  ${p.sha.slice(0, 8)}${p.releasePr ? '' : '  (not a PR merge: handle by hand)'}`);
  }
}
