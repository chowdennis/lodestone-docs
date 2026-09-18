# Strategy — How-tos & Workflows
*Step-by-step guides for the most common Strategy workflows*

---

## Creating a Strategy

1. Navigate to the Strategy module from the left-hand navigation.
2. Create a new Strategy and give it a name. Names can be changed at any time.
3. Choose your approach — **Top-Down** or **Bottom-Up**. This cannot be changed after creation, so choose deliberately.
4. Define your three strategic dimensions. The defaults are Products and Services, Customer Segmentation, and Geographic Expansion — rename them to match your organization's priorities.
5. Set the time horizon and interval (e.g. 3 years, quarterly).
6. Lodestone generates the table with your dimensions as columns and your intervals as rows.

---

## Building a Top-Down Strategy

In a top-down strategy, you fill in the table manually with plain numbers representing relative investment emphasis.

1. Click into any cell in the strategy table.
2. Enter a number representing your relative investment in that dimension during that interval. Numbers are unitless — they represent emphasis, not headcount or budget.
3. Repeat for each cell across all intervals.

As you fill in values, the growth cube updates to reflect the allocation across your three dimensions at each point in time.

> **Tip:** Consistency matters more than precision. If you use a scale of 1–10, stick to it throughout. The numbers only mean something relative to each other — a 7 next to a 3 tells a story; a 7 in isolation doesn't.

---

## Building a Bottom-Up Strategy

In a bottom-up strategy, each cell is populated by selecting Features from your backlog that match the dimension's tag.

1. Each strategic dimension maps to a Feature tag — ensure your Features are tagged appropriately in the backlog before building your strategy.
2. Click into a cell in the strategy table.
3. Select Features from the backlog that belong to this dimension in this time interval.
4. Lodestone aggregates the selected Features' evaluation scores into a cell value.
5. Toggle between **Value** and **Effort** to see the same strategy through two different lenses.

> **Tip:** The quality of a bottom-up strategy depends directly on the consistency of your Feature tagging. If Features aren't tagged, they won't surface when you're building your strategy table.

---

## Adding a Comment to a Time Interval

Each time interval has an optional Comment field. Comments appear as text on the corresponding slide when the Strategy is exported as a PPT.

1. Click the Comment field for a time interval.
2. Enter a short note capturing the narrative context for that interval — what is the strategic focus, what is shifting, and why.

Comments are particularly valuable in exported presentations, where they give each slide a narrative anchor beyond the growth cube visual.

---

## Editing Axis Names

Strategic dimension names can be changed at any time, even after the strategy table has been populated.

1. Click the axis name at the top of the relevant column.
2. Edit the name directly.

Renaming an axis does not affect any values in the table — it only changes the label.

---

## Adding or Removing Time Intervals

Time intervals (rows) can be added or removed after a strategy has been created.

- To **add** an interval, use the option to append a row to the table.
- To **remove** an interval, delete the relevant row.

> **Note:** Removing an interval permanently deletes any values or Feature selections in that row. There is no undo.

---

## Viewing the Growth Cube

The growth cube visualization is available alongside the strategy table.

- Use the **play** button to animate through intervals automatically
- Use the **manual step** controls to move through intervals one at a time

Stepping through manually is useful when presenting — it lets you pause at each interval and narrate the strategic shift before moving on.

---

## Renaming a Strategy

Strategy names can be edited at any time. Click the Strategy name to edit it directly.

---

## Archiving a Strategy

When a Strategy is no longer active:

1. Open the Strategy settings or options menu.
2. Select Archive.

Archiving removes the Strategy from your active list but preserves it for reference. Features associated with the Strategy remain in your backlog unaffected.

---

## Exporting a Strategy

Strategies can be exported as a PPT slide deck or as Markdown.

### PPT export

1. Open the Strategy you want to export.
2. Select the export option.
3. Choose your audience setting:
   - Internal general
   - Internal executive
   - External
4. Optionally enable AI-generated text descriptions and speaker notes.
5. Generate the export.

The resulting PPT includes one slide per interval. Bottom-up strategies also include a list of the Features selected for each interval per dimension.

### Markdown (.md) export

Click the Markdown export button (`.md`) in the export toolbar to download the Strategy as a structured Markdown document. Each time interval and its values are represented as text, suitable for pasting into Notion, Confluence, GitHub, or any Markdown-friendly tool.

### HTML (shareable link)

Click **Export as HTML** in the export toolbar to generate a responsive, server-rendered HTML snapshot of your Strategy and receive a shareable `/share/...` URL. Anyone with the link can view the Strategy in a browser without logging in to Lodestone. Each generation produces a new URL.

---

*Next: Advanced Features & Customization — top-down vs bottom-up in depth, axis design, and getting the most from exports.*
