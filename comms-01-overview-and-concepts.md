# Comms Packages — Overview & Concepts
*What stakeholder communication looks like with a system behind it*

---

## What Is a Comms Package?

A Comms Package is a curated collection of Lodestone artifacts — roadmaps, releases, strategies, bento grids, and documents — assembled into a single stakeholder communication and delivered by email. You choose what to include, who receives it, and how often it goes out. Lodestone handles the rest.

Each send delivers a clean, formatted email with named links to each included artifact. The artifacts are sent as **frozen snapshots** — recipients see exactly what you shared at the moment of delivery, not the live artifact as it appears after subsequent edits. The record of what was communicated stays intact.

---

## Why It Exists

Most product updates leave the team in an informal, inconsistent pattern: a Slack message with a link, a forwarded export, or nothing at all. The artifacts exist. The communication around them doesn't. When updates do go out, the effort is non-repeatable — someone remembers to do it, assembles it ad hoc, and sends it in whatever form felt right that week.

Comms Packages turn stakeholder communication into a structured, repeatable workflow. You build a package once: select the artifacts, define the audience, set a cadence. From that point, the update goes out on schedule without requiring anyone to reconstruct it each time. The result is more consistent communication, less coordination overhead, and a permanent record of what was actually sent and when.

---

## Key Concepts

### Artifacts

An artifact is anything you include in a package. The following artifact types are supported:

| Type | Source module |
|---|---|
| Roadmap | Roadmaps module |
| Release | Releases module |
| Strategy | Strategy module |
| Bento Grid | Bento Grids module |
| Document (PRD, Opportunity Canvas, etc.) | Documents, generated from a Backlog item |

You can include multiple artifacts of different types in a single package. They are delivered in the order you arrange them.

### Snapshots

When a package is sent, each included artifact is captured as a snapshot — a frozen copy of the artifact at that moment. Recipients receive a link to the snapshot, not a live link to the artifact itself. This means:

- Subsequent edits to the roadmap, release, or strategy do not change what recipients received
- Each send creates a new set of snapshots reflecting the current state at that send time
- Snapshot links remain permanently accessible

This behavior is intentional: it preserves the integrity of what was communicated.

### Recipients

Recipients are the email addresses that receive each package send. You can enter individual addresses manually. Recurring packages support saving a recipient list as a **Recipient Group** — a named, reusable list you can apply to future packages without re-entering addresses.

### Cadence

Cadence controls when and how often a package is sent:

| Cadence | Behavior |
|---|---|
| Once | Sends once at the scheduled time. |
| Weekly | Sends automatically on the same day of the week, every week. |
| Biweekly | Sends automatically every two weeks. |
| Monthly | Sends automatically once per month. |

For one-time packages, you can schedule delivery for a specific date and time, or send immediately.

### Package Status

Each package has a status reflecting its current state:

| Status | Meaning |
|---|---|
| Scheduled | Package is queued for its first send at a specific time. |
| Active | Recurring package is running and will continue sending on its cadence. |
| Paused | Recurring sends are temporarily suspended. The package can be resumed. |
| Sent | One-time package has been delivered. No further sends will occur. |
| Cancelled | Package has been cancelled and will not send again. |

---

## How Comms Packages Relate to the Rest of Lodestone

Comms Packages are a delivery layer, not a creation tool. All content comes from other modules:

| Module | Role in Comms |
|---|---|
| Roadmaps | Roadmaps can be included as artifacts in a package |
| Releases | Releases can be included as artifacts |
| Strategy | Strategies can be included as artifacts |
| Bento Grids | Bento Grids can be included as visual artifacts |
| Documents | PRDs, Opportunity Canvases, and other documents can be included |

Artifacts must already exist before they can be added to a package. Comms Packages do not create or modify the underlying artifacts.

---

## Who Can Use Comms Packages

All workspace members (Admin and Builder roles) can view, create, and manage Comms Packages. There are no role restrictions on this module.

---

*Next: How-tos & Workflows — creating a package, scheduling a send, managing recipient groups, and viewing package history.*
