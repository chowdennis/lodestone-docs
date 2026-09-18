# Backlog — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Do I need to fill in all the fields before saving a Feature?

No. The only required field is the Feature Name. You can save immediately with just a name and add description, status, evaluation scores, and documents later. Features are designed to start lightweight.

### Can a Feature belong to more than one Roadmap or Release?

Yes. There are no limits on how many Roadmaps or Releases a Feature can belong to. A single Feature might appear on a quarterly release board, a yearly roadmap, and a strategic plan simultaneously — it's the same object in each place.

### I updated a Feature's status in a Release. Will it update in the Backlog too?

Yes. Status is a single value on the Feature itself. When you move a Feature card to a new column in a Release, that status change applies to the Feature everywhere — Backlog, other Releases, and any other view it appears in.

### What's the difference between a Feature in Lodestone and a ticket in JIRA?

Features represent product intent — the idea, the context, and the narrative around something your team might build. JIRA tickets represent delivery tasks — the implementation work that developers pick up and execute.

The two can be synced via the JIRA integration, so a Feature in Lodestone maps to an Epic, Story, or Task in JIRA. But they serve different purposes. Lodestone is for planning and communication; JIRA is for execution.

### Why did my Feature disappear from the Backlog after I added it to a Roadmap?

If a Feature becomes a parent item in a Roadmap (i.e. you nested other items beneath it), it transforms into a grouping label and is removed from the Backlog. This is intentional — parent items are structural containers, not actionable Features. Their child Features remain in the Backlog and inherit the parent as a tag.

If you didn't intend this, check whether anything was accidentally nested beneath the Feature in the Roadmap view.

### My AI-generated documents don't seem relevant to our product. What's wrong?

The most common cause is a thin Feature Description. The AI uses the Feature Name, Description, and your Organization Description to generate content. If your description is minimal (or missing), the output will be generic.

Two things to try:

- Add more context to the Feature Description — what problem does this solve? Who is it for? What does success look like?
- Update your Organization Description in Settings — this adds industry and business context to every document generation.

### Can I delete a Feature?

Yes. Deleting a Feature is permanent — it is removed from any Roadmaps, Releases, or Strategies it belonged to, and its associated Documents are deleted as well. There is no undo, so use with care.

### Can I create a custom evaluation framework?

Yes. Lodestone supports custom evaluation criteria. You can define your own input fields, data types, and calculation formula in Settings > Modules under the **Features** sub-tab. Your custom score then appears in the Backlog alongside or instead of the built-in frameworks.

### Can I change the status stage names?

Yes. Go to Settings > Modules, then select the **Features** sub-tab. You can rename existing stages and add new ones. Changes are global and take effect immediately across all Features, Releases, and any other view that shows status.

### Are evaluation scores used automatically anywhere, or are they just for reference?

Scores are primarily a reference and discussion tool — they don't automatically move Features up or down a priority list or change any other system behavior on their own. However, they do feed into two specific places:

- **Roadmap contextual visualization** — Features can be sized and colored by Value or Effort in the sunburst chart.
- **Bottom-up Strategy** — evaluation scores can be aggregated as part of a bottom-up strategy table.

Outside those contexts, scores are visible in the Backlog for sorting and comparison, but they don't drive automated decisions.

### What is an object type, and what is the Type column in the Backlog?

Every item in the Backlog has an object type. The default type is **Feature**. If your team has defined additional types (Epics, Bugs, Tasks, etc.) in Settings > Taxonomy, items can be assigned those types. The Type column in the Backlog table shows each item's current type. Clicking the type name opens a dialog to reassign it.

### What does "Untyped" mean next to an item?

"Untyped" appears when an item does not yet have an object type assigned. This happens for items created before your organization configured custom types in Settings > Taxonomy. You can assign a type to any Untyped item by clicking the type badge in the item detail header or the type cell in the Backlog table.

### What is a typed ID (e.g. FEAT-001)?

When an object type is assigned to an item, Lodestone generates a stable typed ID using the type's prefix and a sequential counter. For example, the first Feature assigned the FEAT prefix becomes FEAT-001. This ID appears in the item detail header and remains fixed even if the type is later renamed.

### Can I change an item's type after it's been assigned?

Yes. Type changes are available from the Backlog table and from the item detail header. If your organization has defined parent/child type constraints, the dialog will warn you if the change would violate a hierarchy relationship — in that case, reparent or reassign the conflicting items in the Roadmap module first.

---

## Common Issues

### I can't find a Feature I just created

A few things to check:

- Make sure you're in the Backlog (not a specific Roadmap or Release view).
- Check if a filter is active — an active status, tag, or type filter might be hiding the Feature.
- If you created the Feature from a Roadmap and it's already been made a parent item, it won't appear in the Backlog. Check the Roadmap to find it.

### A Feature's status isn't updating when I change it in a Release

This should not happen — status is a single value on the Feature and updates everywhere simultaneously. If you change a Feature's status in a Release, it updates in the Backlog instantly, and vice versa. If you are seeing a discrepancy, try refreshing the page. If the issue persists, check whether a JIRA sync conflict is causing an override — review your status mapping in Settings > Integrations > JIRA.

### I'm seeing stale or incorrect evaluation scores

If you recently switched evaluation frameworks in Settings, the fields shown will have changed. Previously entered scores for a different framework are preserved but hidden — they are not deleted. If you switch back to the previous framework, those scores will reappear. The active view only shows the inputs for the currently selected framework.

### Documents I generated for a Feature look generic

See the FAQ above on AI-generated documents. The most effective fix is improving the Feature Description and the Organization Description in Settings. If the output is still off after doing both, consider whether the document type is the right one for your needs — for example, an Opportunity Canvas may be more useful than a PRD at early stages.

### I accidentally dismissed an Extract — can I recover it?

No. Dismissing an Extract permanently deletes it — there is no undo or recovery path. If the idea was important, you'll need to create it manually as a Feature in the Backlog.

### The Type column isn't showing in my Backlog

If the Type column is not visible, check that your organization has completed Taxonomy setup in Settings > Taxonomy. The column appears once at least one type has been configured. If types are configured but the column is still missing, try a hard refresh (Cmd+Shift+R or Ctrl+Shift+R).

---

*This documentation reflects the Lodestone platform as of July 2026, including the Backlog rename, Object Type system, and HTML export.*
