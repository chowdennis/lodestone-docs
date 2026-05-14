# Roadmaps — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can create a Roadmap?

Any workspace member can create a Roadmap — it's not restricted to admins.

### Can I have more than one Roadmap?

Yes. A workspace can have as many Roadmaps as you need. Common uses include separate roadmaps for different time horizons (annual vs quarterly), different audiences, or different product areas.

### Can the same Feature appear in multiple Roadmaps?

Yes. A Feature is a shared object — it can be added to as many Roadmaps as needed. Updates to the Feature (name, description, status) are reflected everywhere it appears.

### Is there a limit to how many levels I can nest in the sunburst?

No. You can nest as deeply as you need — the sunburst adds rings as you go. In practice, three levels is the most common structure; more than four can make the chart harder to read.

### Can I reorder items within the same hierarchy level?

Yes. Drag items up or down within their level to reorder them. The sunburst updates in real time as you do.

### What happens to my Features if I archive a Roadmap?

Nothing — Features are unaffected by archiving. They remain in your Feature backlog exactly as before. Archiving only removes the Roadmap from your active list; it doesn't touch the Features within it.

### Can I rename a Roadmap after creating it?

Yes. Roadmap names can be edited at any time.

### What's the difference between the three export formats?

- **PNG single view** — a static image of the sunburst, for embedding in emails or documents
- **PPT single view** — a single PowerPoint slide with the sunburst, for adding to an existing deck
- **PPT full presentation** — a complete deck with a slide for every item at every level, plus an Opportunity Canvas appendix

### Does the full PPT export include every level of the hierarchy?

Yes. Every item at every level gets its own slide. The presentation walks through the sunburst step by step, deconstructing the plan from the center outward.

### Can I add AI-generated content to my export?

Yes. When exporting as a full PPT presentation, you can optionally enable AI-generated text descriptions per slide and AI-generated speaker notes tuned for internal general, internal executive, or external audiences. All generated content is fully editable in PowerPoint after export.

### Why aren't the contextual sizing and coloring controls active?

These controls only activate when Features in the Roadmap have Value and Effort scores entered in the Feature backlog. If the controls are greyed out, check that your Features have evaluation scores populated.

---

## Common Issues

### My sunburst looks flat — everything is in one ring

This means your items haven't been nested yet. Every item starts as a top-level entry until you drag it beneath a parent. To create hierarchy:

1. Add your grouping items (Goals, Themes, etc.) first
2. Drag Feature items beneath them
3. The sunburst will add rings as you nest

If drag-and-drop isn't working as expected, try dragging slowly and watching for the indent indicator before releasing.

### I dragged an item to nest it but it moved to the wrong place

Drag-and-drop nesting can take a moment to get used to. A few tips:
- Drag slowly — the target position highlights before you release
- Watch for the indent indicator that shows where the item will land
- If it goes to the wrong level, simply drag it again to reposition
- Items can be reordered and renested as many times as needed

### A parent item disappeared from my Feature backlog

This is expected behavior, not a bug. When an item has something nested beneath it, it becomes a grouping label and is removed from the backlog. It's now a tag on its children. If you want it back in the backlog, unnest all items beneath it.

### The Opportunity Canvas appendix is missing from my PPT export

Opportunity Canvases only appear in the appendix if they've been generated for Features that are in the Roadmap. Check that:
- The Feature is included in the Roadmap
- An Opportunity Canvas has been generated for that Feature on its Feature Detail page

If both are true, try re-running the export.

### The contextual colors aren't showing on parent items — only on the outer ring

This is correct behavior. Contextual coloring only applies to the outermost ring (Features). Parent and grandparent items retain their hierarchy color families. This is intentional — mixing contextual colors into the hierarchy would make the chart harder to read.

### My AI-generated speaker notes don't match the audience I selected

Double-check the audience setting in the export options before generating. If the notes were generated with the wrong audience, re-export with the correct setting selected. All content is editable in PowerPoint, so you can also adjust the tone manually after export.

---

*This is version 1 of the Roadmaps documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
