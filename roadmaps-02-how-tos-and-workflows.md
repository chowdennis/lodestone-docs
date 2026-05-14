# Roadmaps — How-tos & Workflows
*Step-by-step guides for the most common Roadmap workflows*

---

## Creating a Roadmap

1. Navigate to the Roadmaps module from the left-hand navigation.
2. Create a new Roadmap and give it a name. Names can be changed at any time.
3. Begin adding items using the bulleted list entry field.

As you add items, they immediately appear in the sunburst visualization on the right. There's no separate "preview" step — the sunburst is live.

---

## Adding Items to a Roadmap

The item entry field works in two ways:

- **Type a new item** — creates a new entry and simultaneously adds it to your Feature backlog
- **Select an existing Feature** — the entry field doubles as a dropdown showing Features from your backlog; selecting one links it to the Roadmap without creating a duplicate

> **Tip:** You don't need to set up your backlog before building a Roadmap. You can type new items directly into the Roadmap and they'll be added to your backlog automatically.

---

## Building Hierarchy with Drag and Drop

Hierarchy is the heart of a Lodestone Roadmap. It's created entirely through drag and drop.

1. Add your items to the list.
2. Drag an item beneath another item to make it a child.
3. Continue nesting to create as many levels as you need — there is no limit.
4. To reorder items within the same level, drag them up or down relative to their siblings.

The sunburst updates in real time as you nest and reorder, so you can see the structure forming as you work.

> **Note:** Drag-and-drop nesting is not immediately obvious the first time. If your sunburst looks flat (everything in one ring), check whether your items need to be nested beneath a parent item.

---

## Understanding Dynamic Object Behavior

When you nest an item beneath another, something important happens:

- The **parent item** disappears from the Feature backlog
- It becomes a **tag** applied to all its children
- All child Features inherit their parent (and grandparent) items as tags

This means your backlog stays focused on actionable Features, while the hierarchy context is preserved through tags. If you want a grouping label (like a Goal or Theme) that doesn't clutter your backlog, simply nest Features beneath it.

---

## Setting Colors

Each item in the Roadmap has a colored bullet. To set or change a color:

1. Click the colored bullet next to an item.
2. Choose a color from the picker.

Colors propagate from parent items to their children automatically. Setting a color on a parent applies it to the whole group in the sunburst.

---

## Activating Contextual Sizing and Coloring

To add Value or Effort context to the outermost ring of the sunburst:

1. Ensure your Features have Value and Effort scores entered in the Feature backlog — these controls are only active when scores exist.
2. Locate the **Size By** dropdown and **Color By Context** toggle above the sunburst.
3. Use **Size By** to resize Feature segments by Value/Impact or Effort.
4. Toggle **Color By Context** to color Feature segments by Value/Impact or Effort, using a customizable scale.

You can activate both at the same time — for example, sizing by Value and coloring by Effort — to show leverage (large, green = high value, low effort) at a glance.

> **Note:** Contextual sizing and coloring only affect the outermost ring. Parent and grandparent color families remain intact.

---

## Renaming a Roadmap

Roadmap names can be changed at any time. Click the Roadmap name to edit it directly.

---

## Archiving a Roadmap

When a Roadmap is no longer active:

1. Open the Roadmap settings or options menu.
2. Select Archive.

Archiving removes the Roadmap from your active list but preserves it for reference. All Features that were in the Roadmap remain in your backlog — archiving has no effect on them.

---

## Exporting a Roadmap

Roadmaps can be exported in four formats:

### PNG — single view
A static image of the full sunburst. Useful for dropping into emails, documents, or slides you're assembling manually.

### PPT — single view
A single PowerPoint slide containing the sunburst. Useful when you want to include the roadmap visualization in an existing presentation.

### PPT — full presentation
A complete PowerPoint deck that walks through the entire plan. Lodestone generates a slide for every item at every level of the hierarchy, deconstructing the sunburst step by step. Opportunity Canvases for Features in the Roadmap are collected automatically and appended as an appendix.

### Markdown (.md)
A text-based export of the full Roadmap hierarchy, formatted as a Markdown document. Useful for pasting into Notion, Confluence, GitHub, or any other tool that accepts Markdown. The export reflects the current hierarchy exactly as structured in Lodestone.

---

## Adding AI-Generated Content to Exports

When exporting as a full PPT presentation, you can optionally enable AI-generated content:

- **Text box descriptions** — a short description generated per slide, explaining what is shown
- **Speaker notes** — optional notes tuned for your chosen audience:
  - Internal general staff
  - Internal executive
  - External

To enable these, select the relevant options in the export settings before generating the PPT. All AI-generated content is clearly marked and fully editable in PowerPoint after export.

---

*Next: Advanced Features & Customization — contextual visualization, hierarchy strategy, and presentation tips.*
