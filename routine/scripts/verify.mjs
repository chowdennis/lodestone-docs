#!/usr/bin/env node
// Step 5 (confirm): wait for Vercel's Production deployments and check the
// live pages.
//
//   node routine/scripts/verify.mjs --site <main sha> --anchor 2026-11-20 [--text "headline"]
//   node routine/scripts/verify.mjs --docs <main sha> --page settings-02-how-tos-and-workflows --text "Clone Settings" [--page ... --text ...]
//
// --page/--text pairs are matched in order. Exits 1 if anything is missing.
import { DOCS_REPO, DOCS_URL, SITE_REPO, SITE_URL, pageContains, waitForDeployment } from './lib.mjs';

const argv = process.argv.slice(2);
const val = flag => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : undefined; };
const all = flag => argv.flatMap((a, i) => (a === flag ? [argv[i + 1]] : []));

let failed = false;
const report = (label, r) => {
  if (r.status !== 200 || r.missing.length) {
    failed = true;
    console.log(`✗ ${label}: HTTP ${r.status}${r.missing.length ? `, missing ${r.missing.map(m => JSON.stringify(m)).join(', ')}` : ''}`);
  } else console.log(`✓ ${label}: found ${r.found.map(m => JSON.stringify(m)).join(', ')}`);
};

try {
  if (val('--site')) {
    await waitForDeployment(SITE_REPO, val('--site'), 'Production');
    const anchor = val('--anchor');
    const needles = [`id="${anchor}"`, ...(argv.includes('--text') && !val('--docs') ? all('--text') : [])];
    report(`${SITE_URL}/changelog#${anchor}`, await pageContains(`${SITE_URL}/changelog`, needles));
  }
  if (val('--docs')) {
    await waitForDeployment(DOCS_REPO, val('--docs'), 'Production');
    const pages = all('--page');
    const texts = all('--text');
    for (let i = 0; i < pages.length; i++) {
      const url = `${DOCS_URL}/${pages[i].replace(/^\//, '').replace(/\.md$/, '')}`;
      report(url, await pageContains(url, texts[i] ? [texts[i]] : []));
    }
  }
} catch (e) {
  console.log(`✗ ${e.message}`);
  failed = true;
}
process.exit(failed ? 1 : 0);
