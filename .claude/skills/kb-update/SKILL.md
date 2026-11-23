---
name: kb-update
description: Post-release routine that updates docs.lodestone.pm (this repo) and lodestone.pm/changelog for every lodestone-app production release not yet announced. Use when the user says "kb update", "let's update the docs", "run kb-update", asks for a dry run of it against a release (e.g. "dry run on #791"), or asks to announce something that was held or flagged off ("announce #777").
---

# kb update

Updates both customer-facing outputs for each pending lodestone-app production release:

- **Knowledge base**: this repo, published to docs.lodestone.pm by Vercel on every push to `main`.
- **Changelog**: `chowdennis/lodestone-website` `content/changelog/<date>.mdx`, live on lodestone.pm/changelog once `main` deploys.

Rules for both outputs: `routine/writing-for-customers.md`. Changelog format and checks: `routine/changelog-format.md`. Read both before drafting.

**Nothing touches a repo until the user says go (Step 4).** Everything uses the user's own `git` and `gh` logins. No tokens, no other services.

Scripts are in `routine/scripts/` (Node, no dependencies; run from the repo root). They keep read-only clones of lodestone-app and a scratch clone of lodestone-website in `~/.cache/lodestone-kb-update/` and write drafts to `routine/out/` (gitignored).

## Step 0: start clean

- `git switch main && git pull --rebase` in this repo. Stop if the working tree has changes you didn't make; ask.
- Check the PostHog MCP: look for PostHog tools (such as feature-flag listing). If they're missing or ask for an API key, use the manual fallback in Step 2. Don't ask for or create a key.
- **Production PostHog project: "Lodestone APP", ID `31407`.** It is the only project the flag check reads. The organization also has "Lodestone MKG" (99165) and "Lodestone - Staging" (504111); never read flags from them, and never use whatever project happens to be active without checking. Run `project-get` and confirm it returns ID `31407` and name "Lodestone APP"; if not, `switch-project` to `31407` and check again. If the switch fails or the ID or name differs, stop and use the manual fallback in Step 2.

## Step 1: find pending releases

`node routine/scripts/pending.mjs`

Pending = lodestone-app production merges after the newest release already in any entry's `releasePrs` (website `main`) or in `routine/skipped.toml`. Tell the user how many are pending and list them (PR, Toronto date). If none, say so and stop. Process them oldest first; Steps 2 and 3 run for each before Step 4 shows them all.

A pending item marked "not a PR merge" can't be handled automatically: show it and ask.

## Step 2: gather and gate each release

`node routine/scripts/release.mjs --pr <N>` writes `routine/out/<date>-pr<N>/dossier.md` and `release.json`. Read the dossier, then open the code where a PR description is thin. Contributors (Ash, Tarun and others) describe customer-facing changes in their PR descriptions; they have no access to this repo. The app clone is at `~/.cache/lodestone-kb-update/lodestone-app`; read files at the release SHA with `git show <sha>:<path>`.

**Feature flags.** For every flag in the dossier, get its production state:
- PostHog MCP connected: look the flag up in project `31407` ("Lodestone APP", confirmed in Step 0) and nowhere else. A flag missing from 31407 counts as **off**, even if another project has it. When reporting a flag's state, name the project ID it came from. It is **on** only if it's active with a 100% rollout and no property filters. Anything else (inactive, partial rollout, filtered to some orgs or users) counts as **off**.
- No MCP, or it wants an API key: list the flags and ask the user to confirm each one's production state. Don't guess and don't continue the release until they answer.
- Items behind an off flag are left out, reason "behind <flag description>, off in production". Don't name the flag in customer text.

**Other gates.** Environment switches listed in the dossier (`*_ENABLED` and similar) and UI that is hidden or removed in the same range: ask, don't guess.

**Holds.** PRs and keywords in `routine/holds.toml` are left out, reason "on hold: <reason>".

**Internal-only changes** are left out (writing-for-customers.md lists them). If nothing customer-facing remains, the release is **nothing to announce**: no changelog entry and no KB change.

## Step 3: draft both outputs

**Changelog entry.** Write `routine/out/<date>-pr<N>/entry.json` (shape in `render-entry.mjs`), then:

`node routine/scripts/render-entry.mjs --draft routine/out/<date>-pr<N>/entry.json --release routine/out/<date>-pr<N>/release.json`

If the dossier says a same-day entry already exists, first copy it out of the website clone (`git -C ~/.cache/lodestone-kb-update/lodestone-website show origin/main:content/changelog/<date>.mdx > routine/out/<date>-pr<N>/existing.mdx`) and add `--existing routine/out/<date>-pr<N>/existing.mdx`. Fix the draft until every check passes. `sourcePrs` lists every PR in the range, announced or not.

Write for PMs: headline first, then New / Improved / Fixed, one `- **Lead.** Sentence.` bullet each. Light releases get short entries. Security work is one line at most.

**KB changes.** For the same release:
1. **What changed:** the dossier and the code at the release SHA: new routes, data-model fields, changed UI behavior, new integrations, removed or renamed features. Scope it to this release's range.
2. **What's documented:** read the affected KB files in this repo (tone, structure, level of detail).
3. **Module coverage:** list every module in the app's main navigation (`createNavigation` in `app/components/chrome/AppLayout.tsx` at the release SHA, including the Discovery tabs). Each needs all four files here (`<module>-01` to `<module>-04`) and a `moduleGroup("<module>", "<Label>")` entry in `.vitepress/config.mjs`. A gap is a CREATE NEW change.
4. **Gate:** the same flag, hold and internal-only decisions as the changelog. The KB never documents what the changelog leaves out.
5. **Change list:** one entry per change:
   ```
   CHANGE 1
   Type: UPDATE EXISTING | CREATE NEW
   File: <filename>.md
   Section: <section heading if updating>
   Reason: <one sentence: what changed in the app>
   ```
6. **Draft the edits** in the working tree of this repo (uncommitted), editing only affected sections. Uncertain behavior gets `> ⚠️ **[NEEDS REVIEW]** <reason>`. A new module gets all four files, `01` ending with `*Next: How-tos & Workflows — ...*`, plus its sidebar entry.

## Step 4: show everything, then wait

Show, per release, oldest first:
- **Release:** PR, Toronto date, number of source PRs.
- **New integration or new feature area:** called out separately at the top, or "none".
- **Changelog entry:** the rendered MDX, verbatim.
- **KB changes:** the change list, then `git diff` of the drafted edits (summarize very long new files and offer the full text).
- **Left out, and why:** every PR or item not announced, with its reason (internal-only, flag off, on hold, needs your answer).
- **Nothing to announce** releases: say so plainly, with the one-line reason; on go they're recorded in `routine/skipped.toml`.

Then also run `node routine/scripts/promote.mjs --plan` and report what it says about website staging, so the user knows before saying go whether the website step can run.

Stop. Make changes the user asks for and show them again. Proceed only on an explicit go.

## Step 5: after "go"

1. **Record skips:** for each nothing-to-announce release, `node routine/scripts/record-skip.mjs --pr <N> --reason "Nothing to announce: <why>."`
2. **Publish the docs:** `node routine/scripts/publish-docs.mjs --message "docs: KB update for release #<N>[, #<M>]"`. It builds VitePress first (dead links fail the build) and pushes to `main` only if the build passes. If there are no KB edits but skipped.toml changed, it still commits that.
3. **Changelog**, one entry at a time, oldest first: `node routine/scripts/promote.mjs --apply --entry routine/out/<date>-pr<N>/<date>.mdx`. It runs the staging guard, fast-forwards staging if it's only behind, opens and merges `changelog/<date>` into staging, waits for the staging preview, then fast-forwards `main` to staging so they're identical. **If it exits 2 (the guard stopped it), tell the user exactly what staging holds and stop the website step; the docs update stands.**
4. **Confirm both are live:**
   - `node routine/scripts/verify.mjs --docs <docs sha> --page <page> --text "<a new phrase>"` for each changed page;
   - `node routine/scripts/verify.mjs --site <main sha> --anchor <date> --text "<headline>"`.

   Report each check with its URL. A failure is reported as a failure, with the output.

## Dry run

"kb update --dry-run <N>" or "dry run on #<N>": run Steps 1 to 4 for release N even if it's already published (skip `pending.mjs`'s filter; still run it to show the real pending count). Write only to `routine/out/`. KB edits are drafted as patch files in `routine/out/<date>-pr<N>/kb.patch` instead of the working tree. Run `promote.mjs --plan` only. Never record skips, publish, or promote.

## Announcing held or flagged work later

"announce #<PR>" (for example when Amplitude goes live or a flag reaches 100%): confirm it's live (the flag rule, or the user's word for a hold), gather it with `release.mjs` on the release that shipped it and keep only that PR, then draft a standalone entry dated today in Toronto with `releasePrs: []` and `sourcePrs: [<PR>]`, plus its KB changes. On go, also remove its `holds.toml` entry (publish-docs commits that) and promote as usual. A same-day entry gets merged with `--existing`.
