# Features — Overview & Concepts
*What they are, why they matter, and how they fit into Lodestone*

---

## What Is a Feature?

In Lodestone, a Feature is any idea, suggestion, or initiative your team might pursue to improve or evolve your product. Features are the atomic unit of planning — nearly everything else in the platform is built on top of them.

A Feature can represent just about anything:

- New functionality
- Enhancements or iterations on existing capabilities
- Bugs or technical debt
- Infrastructure work or internal tooling
- Experiments

> **Key idea:** Lodestone intentionally avoids rigid distinctions like "Bug vs Feature vs Task." Everything is a Feature — meaning is expressed through metadata, tags, and context rather than type labels.

---

## Why Features Exist

Ideas arrive constantly in product management, but structure arrives late. By the time most teams get around to formally capturing an idea, context has been lost, discussions have moved on, and the original signal is diluted.

Features solve this by giving you a place to capture ideas quickly, with minimal friction. You can start with just a name and add context over time as the idea matures.

Features are designed to be:

- **Lightweight at creation** — a name is all you need to get started
- **Richer as they evolve** — description, evaluation scores, and status build up over time
- **Flexible across planning horizons** — a Feature can live in a backlog for weeks or ship next sprint

---

## Key Concepts

### The Feature Backlog

The Feature Backlog is your central list of all Features in Lodestone. Think of it as your idea inventory — everything your team is considering, regardless of where it sits in the planning lifecycle.

From the backlog you can create, search, filter, and open any Feature to see its full details and associated documents.

### Feature Fields

Features have a small set of fields, intentionally kept simple:

| Field | Purpose |
|---|---|
| Name | The only required field. A short label that identifies the idea. |
| Description | Context for the Feature. Required for AI document generation — the richer the description, the better the output. |
| Status | Where the Feature is in its lifecycle (e.g. Not Started, In Progress, Completed). Fully customizable. |
| Evaluation criteria | Scoring inputs like Value, Effort, RICE, ICE, and more. Used to inform prioritization discussions. |

### Feature Status

Every Feature has a status that reflects where it sits in your team's workflow. The default stages are Not Started, In Progress, and Completed — but you can rename these and add new ones in Settings to match how your team actually works.

Status is important because it propagates automatically. When you update a Feature's status, that change is reflected everywhere the Feature appears — in Releases, the backlog, and any other view.

### Feature Evaluation

Lodestone supports a wide range of prioritization frameworks, including Value/Effort, RICE, ICE, WSJF, MoAR, Kano, and more. You can also define your own custom scoring criteria.

The intent behind evaluation is deliberate: scores are decision aids, not decision makers. They give you something concrete to discuss with stakeholders and help surface relative priorities — but experienced PMs treat them as directional signals, not absolute rankings.

> **A note on prioritization:** Less experienced PMs often rely heavily on scores. More experienced PMs use them as conversation fuel. Lodestone supports both approaches — it never enforces a score-based outcome.

### Features as Shared Objects

One of the most important things to understand about Features is that they are reusable across the platform. A single Feature can belong to multiple Roadmaps, multiple Releases, and multiple Strategies simultaneously.

This means you never need to duplicate a Feature to represent it in different contexts. A Feature working its way through a quarterly release can also be part of your annual roadmap — it's the same object, appearing in both places.

Because Features are shared across the platform, deletion has broad consequences. Deleting a Feature removes it from every Roadmap, Release, and Strategy it belonged to, and permanently deletes its associated Documents. There is no undo.

---

## How Features Relate to the Rest of Lodestone

Features are the seed from which most other Lodestone objects grow:

| Object | Relationship to Features |
|---|---|
| Extracts | AI-analyzed ideas from meeting transcripts. When accepted, an Extract becomes a Feature. |
| Documents | Written artifacts created for a Feature — PRDs, user stories, opportunity canvases, and more. |
| Roadmaps | Features are the building blocks. They roll up into themes and goals in the sunburst visualization. |
| Releases | Features populate Kanban-style Release boards to track and communicate progress. |
| Strategy | Features participate in bottom-up Strategy, where tags and scores drive investment aggregation. |
| Feature Auctions | Features are the items stakeholders "buy" in collaborative prioritization sessions. |

---

## What Features Are Not

It's worth being clear about what Features are not, because the name can be misleading if you're coming from a delivery tool:

- **Not JIRA tickets.** Features represent product intent, not delivery tasks. They don't track implementation details, assignees, or sprint membership.
- **Not rigid templates.** Features don't require a specific set of fields or a particular workflow to be useful.
- **Not automatically prioritized.** Evaluation scores inform the conversation — they don't make the call.

> **The boundary between Lodestone and delivery tools:** Features live in Lodestone. Developer tasks live in JIRA, Asana, or Azure DevOps. Lodestone integrates with these systems, but it doesn't replace them — it sits upstream, focused on product thinking and communication.

---

*Next: How-tos & Workflows — step-by-step guides for working with Features in Lodestone.*
