# Goals & Objectives — Troubleshooting & FAQs

---

## The expand chevron is not showing on a Goal

The chevron only appears when a Goal has at least one downstream connection — an object with this Goal as a parent, or a roadmap, release, or strategy that contains such an object.

If a Goal is new and has no linked objects yet, the chevron will not appear. Once you link an object to the Goal from that object's detail page (via the Parents field), the chevron will appear the next time the Goals list loads.

---

## I created a Goal but it doesn't show a typed ID

Typed IDs require your organization to have a top-tier type configured with a prefix in Settings > Taxonomy. If no top-tier type has been set, Goals are created without IDs.

To fix this: go to Settings > Taxonomy, create or designate a top-tier type, and give it a prefix (e.g. GOAL, OBJ). Existing Goals will receive typed IDs automatically once the prefix is configured.

---

## I deleted a Goal — what happened to the objects that were linked to it?

Deleted Goal objects are orphaned, not deleted. They remain in the Backlog as top-level items with all their data intact (name, description, status, documents, quotes). The only thing that changes is the parent connection to the deleted Goal is removed.

If the objects were also linked to other parents or appeared in Roadmaps or Releases, those connections are unaffected.

---

## I don't see Goals & Objectives in my navigation

Goals & Objectives is available to all workspace members. If it doesn't appear in your left-hand navigation, check with an Admin — navigation visibility can be affected by workspace configuration.

---

## Can I have an object linked to more than one Goal?

Yes. An object can have multiple parents, including multiple Goals. This is useful for cross-cutting work that contributes to more than one objective. Link additional Goals from the Parents field on the object detail page.

---

## The downstream view shows a Roadmap I wasn't expecting

The downstream view includes any Roadmap that contains an object linked to this Goal — even if the connection was made indirectly. If an object was recently linked to this Goal and it's already on a Roadmap, the Roadmap will appear in the downstream view.

If you see a connection you don't expect, check the Parents field on the relevant object in the Backlog to see how it got linked.

---

## Can I reorder Goals?

Goals are displayed in reverse creation order (most recently created first). There is no drag-to-reorder or manual sorting in the Goals & Objectives module.
