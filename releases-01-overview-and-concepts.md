# Releases — Overview & Concepts
*What they are, why they matter, and how they fit into Lodestone*

---

## What Is a Release?

A Release in Lodestone is a Kanban-style board populated with Features, used to communicate progress across the product development lifecycle. It answers the question stakeholders ask most often:

> "How are things going — and when will it be done?"

Releases are communication artifacts, not delivery systems. They don't manage sprints, assign tickets, or replace tools like JIRA. They sit on top of execution and translate delivery status into a clear, shareable picture of progress.

---

## Releases in the Planning Stack

Lodestone's three core planning modules each answer a different question:

| Module | Answers |
|---|---|
| Roadmaps | WHAT are we building, and WHY? |
| **Releases** | **WHEN is it happening, and how is progress tracking?** |
| Strategy | Where are we investing over the long term? |

Roadmaps define intent. Releases track execution against that intent over time.

---

## Key Concepts

### The Kanban Board
A Release is displayed as a Kanban board with columns representing status stages. Features appear as cards and move between columns as their status changes. The same status stages used across the platform (configured in Settings) apply here — Not Started, In Progress, Completed by default.

### Status as a Single Source of Truth
Moving a Feature card in a Release updates that Feature's status everywhere — the backlog, other Releases, and any other view. There is no separate Release-specific status. This means your Release board always reflects reality, and a status update in JIRA (via the integration) flows through to your Release automatically.

### Actual vs Forecast Mode
Every Release has two modes:

- **Actual** — the real current state of Features based on their true status
- **Forecast** — a hypothetical projection where you can move Features forward to represent anticipated progress

Forecast mode lets you communicate expected timelines and upcoming milestones without altering real data. Forecast changes are saved separately and persist until manually cleared — toggling back to Actual shows the real state, but your forecast positions are preserved for next time.

### Release Notes
Each Release includes a built-in Release Notes generator. Select the Features you want to include, choose an audience (internal or external), and Lodestone generates a tailored set of notes. Release Notes can be exported as a PDF or copied directly for use elsewhere. A single Release can produce multiple sets of notes — for example, one internal and one external — though regenerating overwrites the previous version.

---

## How Releases Relate to the Rest of Lodestone

| Object | Relationship |
|---|---|
| Features | Features populate the Release board. A Feature can belong to multiple Releases. Removing a Feature from a Release doesn't affect the Feature itself. |
| Roadmaps | Releases can be created directly from a Roadmap, automatically pulling in all its Features. Roadmaps define intent; Releases track execution. |
| Settings | Status stages are configured globally in Settings and shared across all Releases. |
| Integrations | JIRA status changes sync into Lodestone and update Feature status on Release boards automatically. |

---

## Who Can Create Releases

Any workspace member can create a Release — it is not restricted to admins. A workspace can have multiple Releases running simultaneously, with no limit.

---

## Archiving Releases

Releases can be archived when they're no longer active. Archiving has no effect on the Features within it — they remain in the backlog and any other Releases they belong to. Archived Releases are removed from the active list but preserved for reference.

---

*Next: How-tos & Workflows — step-by-step guides for creating, managing, and exporting Releases.*
