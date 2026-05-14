# Releases — How-tos & Workflows
*Step-by-step guides for the most common Release workflows*

---

## Creating a Release

Any workspace member can create a Release. There are two starting points.

### Option A: Create a blank Release

1. Navigate to the Releases module from the left-hand navigation.
2. Create a new Release and give it a name. Names can be changed at any time.
3. A Kanban board is created with your default status stages.
4. Add Features from your backlog using the Feature dropdown.

### Option B: Create from a Roadmap

1. Navigate to the Releases module.
2. Choose the option to create from an existing Roadmap.
3. Select the Roadmap. All Features from that Roadmap are automatically added to the Release.
4. Give the Release a name.

Creating from a Roadmap is the most common pattern for quarterly or milestone-based tracking — it ensures your Release reflects your planned work without having to add Features one by one.

---

## Adding and Removing Features

### Adding Features
Use the Feature dropdown on the Release board to select Features from your backlog. Features appear as cards in the column matching their current status.

### Removing Features
To remove a Feature from a Release, use the remove option on the Feature card. Removing a Feature from a Release does not affect the Feature itself — it remains in the backlog and any other Releases it belongs to.

---

## Updating Feature Status

Feature status can be updated directly from the Release board by dragging a card to a different column. This updates the Feature's status everywhere — in the backlog, in other Releases, and in any other view.

> **Important:** Because status is a single source of truth, a status change here is a real change. If your team uses JIRA and has the integration active, status changes in JIRA will also flow through to your Release board automatically.

---

## Using Forecast Mode

Forecast mode lets you project anticipated progress without changing real status data.

1. Toggle the Release to **Forecast** mode using the Actual / Forecast toggle.
2. Move Feature cards to the columns representing their anticipated status.
3. Export the forecast view as a PNG or PPT to share with stakeholders.

Forecast changes are saved separately from actual status and persist until you manually clear them. Toggling back to Actual shows the real state — your forecast positions are preserved for when you return to Forecast mode.

> **Use case:** Before a stakeholder check-in, switch to Forecast, move Features to reflect what you expect to be completed by the meeting date, and export that view to share as a "projected status" snapshot.

---

## Generating Release Notes

Release Notes are generated from within the Release and can be tailored to different audiences.

1. Open the Release.
2. Navigate to the Release Notes section.
3. Select the Features you want to include from the board.
4. Choose your audience:
   - **Internal** — suitable for team members, leadership, and CS
   - **External** — suitable for customers and partners
5. Generate. Lodestone produces a text-based set of notes tailored to the chosen audience.

Release Notes can be:
- **Exported as a PDF** for distribution
- **Copied** directly for use in email, Slack, or other channels

> **Note:** Regenerating Release Notes overwrites the previous version. If you need to preserve a previous version, copy or export it before regenerating.

---

## Creating Multiple Sets of Release Notes

A single Release can have multiple sets of Release Notes — for example, one for an internal audience and one for customers.

Generate internal notes first, export or copy them, then generate again with the External audience setting to produce the external version.

---

## Exporting a Release

Releases can be exported in two formats:

### PNG
A static image of the Kanban board in its current state. Useful for quick sharing in emails, Slack, or documents.

### PPT
A PowerPoint version of the board. Useful when incorporating the Release view into a larger presentation.

Both the **Actual** and **Forecast** views can be exported — make sure you're in the correct mode before exporting.

> **Note:** Release exports do not include AI-generated text or speaker notes. The export is a clean visual of the board as-is.

---

## Renaming a Release

Release names can be edited at any time. Click the Release name to edit it directly.

---

## Archiving a Release

When a Release is complete or no longer active:

1. Open the Release settings or options menu.
2. Select Archive.

Archiving removes the Release from your active list but preserves it for reference. All Features in the Release are unaffected — they remain in the backlog and any other Releases they belong to.

---

*Next: Advanced Features & Customization — Forecast mode strategy, Release Notes best practices, and JIRA sync behavior.*
