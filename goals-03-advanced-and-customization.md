# Goals & Objectives — Advanced & Customization
*How the top-tier type powers Goals, downstream connection mechanics, and deletion behavior*

---

## Goals and the Top-Tier Type

Goals are not a separate data model — they are your organization's **top-tier object type**, surfaced through a dedicated module. The top-tier type is designated in Settings > Taxonomy and represents the highest level of your object hierarchy.

This design means:

- The same object that appears in Goals & Objectives is the one you can set as a parent on Backlog items
- Goals inherit whatever prefix you've configured for your top-tier type (e.g. GOAL-001, OBJ-003)
- Renaming your top-tier type in Taxonomy renames how Goals appear across the platform

If your organization has not yet designated a top-tier type, Goals will be created without typed IDs. You can configure this at any time in Settings > Taxonomy — existing Goals will receive typed IDs automatically once a top-tier type is set.

> **Note:** The Goals & Objectives module shows only objects of the top-tier type. Other object types (Features, Epics, etc.) do not appear here, even if they have been given the same name as your goal.

---

## How Downstream Connections Form

The downstream view on a Goal is derived automatically from relationships in other modules — there is no manual "connect to goal" action in Roadmaps or Releases.

| Connection type | How it forms |
|---|---|
| **Objects** | You add the Goal as a parent of a Backlog object from that object's detail page |
| **Roadmaps** | A Roadmap contains an object that has the Goal as a parent |
| **Releases** | A Release contains an object that has the Goal as a parent |
| **Strategies** | A bottom-up Strategy includes objects tagged in a way that maps to the Goal's child objects |

Connections update in real time. If you remove a Goal as a parent from an object, the Roadmap and Release connections that relied on that relationship disappear from the downstream view as well.

---

## Goals as Organizing Anchors, Not Containers

Goals in Lodestone are reference points, not containers that own their children exclusively. An object can have multiple parents — including both a Goal and another object — without conflict. Similarly, the same object can contribute to multiple Goals if it is linked to more than one Goal as a parent.

This is useful when a Feature or Epic genuinely supports multiple strategic objectives. Rather than duplicating the object or choosing one Goal, you can link it to both.

---

## Deletion and Orphan Behavior

When you delete a Goal, child objects are orphaned rather than deleted. Orphaned objects:

- Remain in the Backlog as top-level items
- Lose their parent connection to the deleted Goal
- Retain all other data (name, description, status, documents, quotes)
- Retain any other parent connections they had to non-Goal objects

The delete confirmation dialog shows you how many objects will be orphaned, grouped by type (e.g. "3 Features, 1 Epic"), so you can decide whether to reassign them before deleting.

There is no undo for Goal deletion.

---

## Using Goals with the Extracts AI Suggestion

When adding Extracts to the Backlog, Lodestone's AI can suggest a Goal to link the new object to. This happens automatically when the AI detects that the Extract's content semantically matches an existing Goal. The suggestion appears in the Add to Backlog dialog as "✦ AI matched parent goal: [Goal name]" and is pre-populated in the Goal selector.

You can accept the suggestion, choose a different Goal, or leave the Goal field empty. This is not a required step.

See the Extracts how-tos guide for more detail on the Add to Backlog flow.

---

*Next: Troubleshooting & FAQs — common questions about the Goals module.*
