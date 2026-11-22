# CLAUDE.md: lodestone-docs

The Lodestone end-user knowledge base, published at **docs.lodestone.pm**. This repo is the **source of truth** for the KB. It used to be a copy of `lodestone-app/kb/`, synced by a workflow; that sync and the app's `kb/` folder were retired in Nov 2026. Edit the KB here and nowhere else.

## Publishing

- VitePress site (`npm run build` → `.vitepress/dist`, never committed). Sidebar and site config: `.vitepress/config.mjs`; theme: `.vitepress/theme/`.
- One branch, `main`. Vercel's Git integration deploys every push to `main` to Production (docs.lodestone.pm) in under a minute. There is no staging.
- Every `.md` file in the repo becomes a page unless `srcExclude` in `.vitepress/config.mjs` excludes it. Non-doc files (this file, `routine/`, `.claude/`) are excluded; keep new non-doc Markdown out of the root or add it there.

## The kb update routine

After each lodestone-app production release, the user says **"kb update"** or **"let's update the docs"** in a Claude Code session here. That runs `.claude/skills/kb-update/SKILL.md`: find pending releases, gate them (PostHog flags, `routine/holds.toml`, internal-only), draft the KB changes and the lodestone.pm changelog entry, show everything, and only after "go" publish the KB, promote the changelog entry through website staging to main, and confirm both are live.

- `routine/writing-for-customers.md`: audience and tone rules for the KB and the changelog (the one shared copy).
- `routine/changelog-format.md`: the changelog MDX format and its checks.
- `routine/holds.toml`: shipped work not to announce or document yet. `routine/skipped.toml`: releases reviewed with nothing to announce.
- `routine/scripts/`: the deterministic steps (pending, release, render-entry, record-skip, publish-docs, promote, verify). Node, no dependencies; they use the user's `git` and `gh` logins.

## KB conventions

- Files: `<module>-<nn>-<type>.md`, four per module: `01-overview-and-concepts`, `02-how-tos-and-workflows`, `03-advanced-and-customization`, `04-troubleshooting-and-faqs`. Each module has a `moduleGroup("<module>", "<Label>")` sidebar entry.
- Written for product managers, not developers: see `routine/writing-for-customers.md`.
- Only what is live in production. Uncertain behavior: `> ⚠️ **[NEEDS REVIEW]** <reason>`.
- Two roles, **Admin** and **Builder**; document role differences in Overview and Troubleshooting files.
