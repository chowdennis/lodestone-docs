# Features — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Do I need to fill in all the fields before saving a Feature?

No. The only required field is the Feature Name. You can save immediately with just a name and add description, status, evaluation scores, and documents later. Features are designed to start lightweight.

### Can a Feature belong to more than one Roadmap or Release?

Yes. There are no limits on how many Roadmaps or Releases a Feature can belong to. A single Feature might appear on a quarterly release board, a yearly roadmap, and a strategic plan simultaneously — it's the same object in each place.

### I updated a Feature's status in a Release. Will it update in the backlog too?

Yes. Status is a single value on the Feature itself. When you move a Feature card to a new column in a Release, that status change applies to the Feature everywhere — backlog, other Releases, and any other view it appears in.

### What's the difference between a Feature in Lodestone and a ticket in JIRA?

Features represent product intent — the idea, the context, and the narrative around something your team might build. JIRA tickets represent delivery tasks — the implementation work that developers pick up and execute.

The two can be synced via the JIRA integration, so a Feature in Lodestone maps to an Epic, Story, or Task in JIRA. But they serve different purposes. Lodestone is for planning and communication; JIRA is for execution.

### Why did my Feature disappear from the backlog after I added it to a Roadmap?

If a Feature becomes a parent item in a Roadmap (i.e. you nested other items beneath it), it transforms into a grouping label and is removed from the backlog. This is intentional — parent items are structural containers, not actionable Features. Their child Features remain in the backlog and inherit the parent as a tag.

If you didn't intend this, check whether anything was accidentally nested beneath the Feature in the Roadmap view.

### My AI-generated documents don't seem relevant to our product. What's wrong?

The most common cause is a thin Feature Description. The AI uses the Feature Name, Description, and your Organization Description to generate content. If your description is minimal (or missing), the output will be generic.

Two things to try:

- Add more context to the Feature Description — what problem does this solve? Who is it for? What does success look like?
- Update your Organization Description in Settings — this adds industry and business context to every document generation.

### Can I delete a Feature?

Yes. Deleting a Feature is permanent — it is removed from any Roadmaps, Releases, or Strategies it belonged to, and its associated Documents are deleted as well. There is no undo, so use with care.

Yes. Lodestone supports custom evaluation criteria. You can define your own input fields, data types, and calculation formula in Settings > Modules > Feature Evaluation Criteria. Your custom score then appears in the backlog alongside or instead of the built-in frameworks.

### Can I change the status stage names?

Yes. Go to Settings > Modules > Feature Status Stages. You can rename existing stages and add new ones. Changes are global and take effect immediately across all Features, Releases, and any other view that shows status.

### Are evaluation scores used automatically anywhere, or are they just for reference?

Scores are primarily a reference and discussion tool — they don't automatically move Features up or down a priority list or change any other system behavior on their own. However, they do feed into two specific places:

- **Roadmap contextual visualization** — Features can be sized and colored by Value or Effort in the sunburst chart.
- **Bottom-up Strategy** — evaluation scores can be aggregated as part of a bottom-up strategy table.

Outside those contexts, scores are visible in the backlog for sorting and comparison, but they don't drive automated decisions.

---

## Common Issues

### I can't find a Feature I just created

A few things to check:

- Make sure you're in the Features module (not a specific Roadmap or Release view).
- Check if a filter is active on the backlog — an active status or tag filter might be hiding the Feature.
- If you created the Feature from a Roadmap and it's already been made a parent item, it won't appear in the backlog. Check the Roadmap to find it.

### A Feature's status isn't updating when I change it in a Release

This should not happen — status is a single value on the Feature and updates everywhere simultaneously. If you change a Feature's status in a Release, it updates in the backlog instantly, and vice versa. If you are seeing a discrepancy, try refreshing the page. If the issue persists, check whether a JIRA sync conflict is causing an override — review your status mapping in Settings > Integrations > JIRA.

### I'm seeing stale or incorrect evaluation scores

If you recently switched evaluation frameworks in Settings, the fields shown will have changed. Previously entered scores for a different framework are preserved but hidden — they are not deleted. If you switch back to the previous framework, those scores will reappear. The active view only shows the inputs for the currently selected framework.

### Documents I generated for a Feature look generic

See the FAQ above on AI-generated documents. The most effective fix is improving the Feature Description and the Organization Description in Settings. If the output is still off after doing both, consider whether the document type is the right one for your needs — for example, an Opportunity Canvas may be more useful than a PRD at early stages.

### I accidentally dismissed an Extract — can I recover it?

No. Dismissing an Extract permanently deletes it — there is no undo or recovery path. If the idea was important, you'll need to create it manually as a Feature in the backlog.

---

*This is version 1 of the Features documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
