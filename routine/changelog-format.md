# Changelog entry format

Entries live in `chowdennis/lodestone-website` at `content/changelog/<YYYY-MM-DD>.mdx`, one per lodestone-app production release, rendered newest first on lodestone.pm/changelog. `routine/scripts/render-entry.mjs` writes the file from a JSON draft and runs every check below; never hand-write the MDX.

## What counts as a release

- A merge into lodestone-app's `production` branch (there are no GitHub Releases or tags). Its PR is the release PR.
- The release range is the previous production merge up to this one: every PR merged to `main` in between.
- The date is the release PR's merge time in America/Toronto (a merge at 22:27 Toronto on Nov 20 is `2026-11-20`, even though it is Nov 21 in UTC).
- Two releases on the same Toronto day share one file: the second adds its items and PR numbers to the first.

## Frontmatter

```yaml
---
title: "Copy and move work between workspaces, and clone your settings"
slug: "2026-11-20"
date: "2026-11-20"
releasePrs: [791]
sourcePrs: [777, 789, 790]
---
```

- `title`: the headline. Names the one or two changes a PM would care about most. No trailing period.
- `slug` and `date`: both the Toronto date, quoted.
- `releasePrs`: the production merge PR(s). A standalone entry (announcing something released earlier, such as a lifted hold) has `releasePrs: []`.
- `sourcePrs`: every PR in the range, announced or not, ascending.
- PR numbers are for traceability only and never appear in the body.

## Body

- Sections in this order, each omitted when empty: `## New`, `## Improved`, `## Fixed`.
- Each item is one bullet: `- **Lead.** Sentence or two.` The lead is a short phrase ending in a period inside the bold; the text after it ends with a period.
- A security line, when there is one, goes last in Improved and may be a lead with no text after it.
- Light releases get short entries. Don't pad.

## Checks (enforced by render-entry.mjs)

- Frontmatter keys exactly `title, slug, date, releasePrs, sourcePrs`; `slug` equals `date`; the date matches the file name.
- Only the three section headings, in order, none empty, at least one present.
- Every body line is blank, a heading, or a well-formed bullet.
- No em or en dashes anywhere.
- No `API` (a third-party "API key" is fine), `REST`, `endpoint` or `webhook URL` in the body.
- No PR references (`#123`), flag names from `app/featureFlags.ts`, or keywords of active holds.
