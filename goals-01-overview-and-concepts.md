# Goals & Objectives — Overview & Concepts
*What goals are, why they exist, and how they connect to the rest of your planning*

---

## What Is a Goal?

In Lodestone, a Goal is the highest-level thing your team is working toward. Goals sit above Features, Epics, and other Backlog objects in your planning hierarchy — they represent the outcomes you're organizing work around, not the work itself.

Goals are deliberately lightweight. Each Goal has a name and an optional description. There are no scoring fields, no evaluation criteria, and no status stages. A Goal's value comes from what connects to it, not from the data it holds on its own.

> **Key idea:** Goals are not tasks. They don't move through a workflow. They serve as anchor points — a way to see, at a glance, which roadmaps, releases, strategies, and backlog objects are contributing to each of your most important objectives.

---

## Goals and the Object Hierarchy

Goals use your organization's **top-tier object type** — the type designated in Settings > Taxonomy as the highest level of your hierarchy. This means:

- Goals appear in the Goals & Objectives module as a flat list
- They do not appear in the Backlog's main list (top-tier objects are excluded there)
- Child objects can be linked to a Goal as parent items, creating the hierarchy that connects planning layers

If your organization hasn't configured a top-tier type yet, Goals will appear without typed IDs. Setting a top-tier type in Settings > Taxonomy assigns prefixed IDs (e.g. GOAL-001, OBJ-003) to Goals automatically.

---

## The Downstream View

The most useful thing Goals do is aggregate connected work. When a Goal has objects, roadmaps, releases, or strategies linked to it, an expand chevron appears on its row. Clicking the chevron opens the **downstream view**, which shows:

| Section | What it contains |
|---|---|
| Objects | Backlog items (Features, Epics, etc.) that have this Goal set as a parent |
| Roadmaps | Roadmaps that include an object with this Goal as a parent |
| Releases | Releases that include an object with this Goal as a parent |
| Strategies | Strategies that reference this Goal's objects (in bottom-up Strategy mode) |

The downstream view is read-only and refreshes each time you expand it. Each entry is a clickable link — selecting one navigates directly to that roadmap, release, strategy, or backlog item.

If a Goal has no connected work, the expand chevron does not appear.

---

## How Goals Connect to the Rest of Lodestone

Goals are a connecting layer, not a standalone planning tool. Here is how they interact with each module:

| Module | Relationship |
|---|---|
| Backlog | Objects can be linked to a Goal as a parent from the object detail page |
| Roadmaps | Objects with a Goal parent appear in the Goal's downstream Roadmaps section |
| Releases | Objects with a Goal parent appear in the Goal's downstream Releases section |
| Extracts | When adding an Extract to the Backlog, AI can suggest a Goal to link the new object to |
| Strategy | Bottom-up strategies surface Goals as grouping context when their child objects are tagged |

---

## Who Can Use Goals & Objectives

All workspace members (Admin and Builder roles) can view, create, edit, and delete Goals. There are no read-only restrictions for this module.

---

*Next: How-tos & Workflows — creating, editing, and deleting Goals, and reading the downstream view.*
