# Strategy — Troubleshooting & FAQs
*Common issues, misconceptions, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can create a Strategy?

Any workspace member can create a Strategy — it's not restricted to admins.

### Can a workspace have more than one Strategy?

Yes. There is no limit on the number of Strategies in a workspace. A common pattern is to maintain both a top-down strategy for executive alignment and a bottom-up strategy grounded in the Feature backlog.

### Can I change from top-down to bottom-up (or vice versa) after creating a Strategy?

No. The approach is chosen at creation and cannot be changed afterward. If you need to switch approaches, create a new Strategy with the desired type.

### Can I rename a Strategy after creating it?

Yes. Strategy names can be edited at any time.

### Can I rename the three strategic dimensions after the Strategy has been created?

Yes. Axis names can be edited at any time, even after the table has been populated. Renaming an axis does not affect the values in the table.

### Can I add or remove time intervals after the Strategy has been created?

Yes. Rows can be added or removed at any time. Note that removing a row permanently deletes all values and Feature selections in that interval — there is no undo.

### What format do the values take in a top-down strategy?

Values are plain numbers with no unit. They represent relative emphasis across dimensions within and across intervals — a higher number means more investment in that dimension during that interval. The numbers only mean something relative to each other, so consistency of scale within a strategy matters more than the absolute values.

### Can I toggle between value and effort in a top-down strategy?

No. The value/effort toggle is only available in bottom-up strategies, where cell values are derived from Feature evaluation scores. In top-down strategies, values are manually entered and don't have a value/effort distinction.

### What export formats are available for Strategy?

Strategy exports as PPT only. Each slide represents one time interval with a snapshot of the growth cube. Bottom-up strategies also include a Feature list per interval per dimension in the export.

### What happens to Features if I archive a Strategy?

Nothing. Features are unaffected by archiving a Strategy. They remain in the Feature backlog as normal. Archiving only removes the Strategy from your active list.

### Does the growth cube animate automatically?

Both options are available. You can let it play through automatically or step through intervals manually. Stepping manually is useful when presenting live — it lets you pause and narrate each interval before advancing.

---

## Common Issues

### The Strategy module feels unfamiliar compared to other strategy tools

This is the most common reaction to the Strategy module — it's intentionally different from conventional strategy artifacts like OKR spreadsheets or strategy decks. The growth cube and the three-dimension constraint are designed to force tradeoffs, not to replicate familiar formats.

If it feels uncomfortable, that discomfort is often a signal that real tradeoffs are being surfaced. The question to sit with is: if you had to pick only three dimensions, what would they be — and what would you be leaving out?

### My bottom-up strategy cells are empty even though I have Features

The most likely cause is that your Features aren't tagged, or the tags don't match the dimension mapping. Check that:
- Features in your backlog have tags applied
- The tags match what you've mapped to each strategic dimension
- You're selecting the right tag for each dimension in the strategy setup

### The growth cube looks the same across all intervals

This usually means the values across your intervals are similar or identical. Strategy becomes most interesting when the allocation *shifts* over time — if your cube isn't changing, consider whether your strategy is actually articulating a route or just a steady state.

### I can't find a Strategy I previously created

Check whether the Strategy has been archived. Archived Strategies are removed from the active list but are preserved and can be viewed from the archived section.

### The PPT export slides don't have narrative text

Narrative text on slides comes from two sources:
- **Comment fields** — these must be filled in manually for each time interval before exporting
- **AI-generated descriptions** — these must be enabled in the export settings before generating

If both are empty, the slides will show the growth cube visual only. Add interval comments and/or enable AI generation in the export options to populate the narrative layer.

### My bottom-up strategy shows very different numbers when I toggle between value and effort

This is expected — and informative. A large gap between value and effort for the same dimension in the same interval means you're planning to get a lot of value from relatively little effort (or vice versa). These gaps are worth examining: are they realistic? Are they the result of missing evaluation scores on some Features?

---

*This is version 1 of the Strategy documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
