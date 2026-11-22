# Writing for customers

The one set of audience and tone rules for everything customers read about the product: the knowledge base on docs.lodestone.pm and the changelog on lodestone.pm/changelog. The kb update routine reads this file for both. Rules that apply to only one of them are marked.

## Audience

- Product managers and product leaders using Lodestone. Not developers.
- They want to know what they can do now, what works differently, and what was fixed. They don't care how it was built.

## Voice

- Clear, grounded, pragmatic. No hype, no superlatives, no exclamation marks.
- Present tense, active voice, second person ("you").
- Short paragraphs. Use a table for comparisons; use bullet lists sparingly.
- Use the product's own names exactly as they appear in the app: module names from the main navigation, button and menu labels in **bold**, paths as `Settings > Integrations`.
- Match the existing KB files. Read the files you are changing before writing.

## What may be described

- Only what is shipped and live in production for customers.
- A feature behind a feature flag (`app/featureFlags.ts` in lodestone-app) is live only if PostHog shows that flag active in production at 100% rollout with no filters. Anything less counts as off. Outside production, flags default to on, so staging and local behavior prove nothing.
- Anything listed in `routine/holds.toml` is not announced or documented until its hold is removed, even if the code is live.
- If a behavior is inferred from code but uncertain, the KB flags it with `> ⚠️ **[NEEDS REVIEW]** <reason>`; the changelog leaves it out and the routine asks.

## What is never described

- Implementation details: frameworks, databases, queues, file names, loaders, environment variables, flag names.
- Internal-only changes: CI, infrastructure, refactors, tests, developer tooling, performance work with no visible change, analytics and logging.
- Bug fixes with no user-visible change.
- Planned or in-progress work.
- PR numbers, branch names, or people's names.

## Security work

- One plain line at most, with no detail about the weakness (for example: "Stronger access controls and protection for integration credentials.").

## Roles

- Lodestone has two roles: **Admin** and **Builder**. When a change applies to one role only, say so (the KB marks sections *Admin only.*).

## Changelog only

- Never mention the REST API or developer endpoints. (The KB keeps its own `api-*` module.)
- No em dashes or en dashes.
- Format and checks are in `routine/changelog-format.md`.

## Knowledge base only

- File naming and structure: `<module>-<nn>-<type>.md`, four files per module (`01-overview-and-concepts`, `02-how-tos-and-workflows`, `03-advanced-and-customization`, `04-troubleshooting-and-faqs`), each module listed in `.vitepress/config.mjs` with `moduleGroup("<module>", "<Label>")`.
- Edit only the affected sections; don't rewrite sections that are still accurate.
- Always document: a new module or feature area, a new field, a new action, changed behavior, a new integration, a new role permission or restriction, anything removed or renamed that users would look up.
