# Dashboard — Overview & Concepts
*What the Dashboard shows, how it's organized, and why it's designed this way*

---

## What Is the Dashboard?

The Dashboard is the first thing you see when you log into Lodestone. It gives you a live view of what is happening across your workspace — organized not by module, but by the stage of product work each item represents.

It is called the **Command Deck**: a five-column view of the full product lifecycle, from raw ideas to shipped releases. Each column represents a distinct phase of the PM's job, and every recent object in your workspace lands in one of those columns.

---

## The Five Columns

| Column | What it shows |
|---|---|
| **Collecting Data** | New Extracts and Competitive Intelligence reports — signals recently surfaced from transcripts and competitor tracking |
| **Processing Data** | Documents recently generated or updated for backlog items — PRDs, User Stories, UAT plans, Opportunity Canvases, and other written artifacts |
| **Making Plans** | Roadmaps, Strategies, and Feature Auctions recently created or updated |
| **Aligning Plans** | Exports, shared snapshots, and outputs recently sent to stakeholders |
| **Executing Plans** | Backlog items with active status (In Progress or Completed), Releases, Release Notes, and Bento Grids |

The columns reflect a mental model: data comes in, gets processed, turns into plans, those plans get shared, and then execution happens. The Dashboard makes that flow visible at a glance.

---

## What Each Item Shows

Each item in the Dashboard shows:

- **Title** — the name of the object
- **Feature key** — for backlog items, their unique key (e.g. FEAT-7)
- **Detail line** — a brief description (source, count, status, or metadata depending on type)
- **Type badge** — a color-coded label showing what kind of object it is (ROADMAP, PRD, FEATURE, RELEASE BOARD, etc.)
- **Time since update** — how long ago the item was last changed ("5m ago", "2h ago", "yesterday")

For items in the **Aligning Plans** column, additional context appears:
- The export format used (PNG, PPT, MD, etc.)
- Who it was shared with, when applicable
- A **"Newer version available"** warning if the source artifact has been updated since it was exported — a prompt to reshare a fresh version

---

## New Item Highlighting

Items you haven't seen before are highlighted. The Dashboard tracks the last time you visited and marks any objects created or updated since then with:

- A cyan left-side accent line on the row
- A cyan count badge on the column header showing how many new items are in that column
- A total new-item count shown in the Command Deck header

This makes it easy to orient yourself after returning to Lodestone: you know exactly what changed since you were last here.

---

## Column Reordering

The five columns can be dragged into any order. If you spend more time in Executing Plans than Collecting Data, drag the columns to match your workflow. The order is preserved for your session.

---

## Who Can See the Dashboard

Every workspace member sees the same Dashboard. The objects shown are filtered to your organization — every member sees activity across the full workspace, not just their own objects.

---

*Next: How-tos & Workflows — navigating the Dashboard and reading it effectively.*
