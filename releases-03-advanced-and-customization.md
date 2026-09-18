# Releases — Advanced Features & Customization
*Forecast mode strategy, Release Notes best practices, and integration behavior*

---

## Getting the Most from Forecast Mode

Forecast mode is one of the most underused features in the Releases module. Used well, it lets you be a proactive communicator rather than a reactive one — showing stakeholders where things are headed, not just where they are today.

### When to use Forecast
- Before a stakeholder update or leadership check-in, to show anticipated progress at a future date
- When a delivery date is at risk and you need to communicate a revised expectation without misrepresenting current reality
- For "what if" planning — exploring what the board looks like if certain Features slip or accelerate

### How Forecast and Actual coexist
Forecast positions are saved separately from actual status and persist until manually cleared. This means:
- You can freely move cards in Forecast without worrying about corrupting real data
- Your forecast positions are remembered between sessions — you don't need to rebuild them each time
- Toggling to Actual always shows the true state; toggling back to Forecast restores your last forecast positions

### Exporting Forecast views
Both Actual and Forecast views can be exported as PNG or PPT. A common pattern is to export both and share them side by side — "here's where we are today, and here's where we expect to be by [date]."

---

## Writing Effective Release Notes

Release Notes are one of the few places in Lodestone where AI generates content not tied to a single Feature. Because they aggregate multiple Features for a specific audience, a few practices make a significant difference in output quality.

### Be selective about which Features to include
Not every Feature in a Release needs to appear in Release Notes. Focus on Features that are completed or nearly completed, and that are meaningful to the target audience. Including in-progress or low-visibility Features adds noise.

### Match the audience setting to the reader
- **Internal** notes use product and team language — appropriate for CS, sales, marketing, and leadership
- **External** notes use customer-facing language — suitable for changelogs, customer emails, or partner updates

Choosing the wrong audience setting produces notes that need significant editing. Get this right upfront.

### Regenerate deliberately
Regenerating Release Notes overwrites the previous version. If you've edited the AI output and want to keep those edits, copy or export the notes before regenerating. Treat regeneration as a fresh start, not a refinement.

### Use Release Notes as a source for other communications
Release Notes output is designed to be reused. Common downstream uses:
- Paste into a customer email
- Use as the basis for a changelog entry
- Include in an internal sprint review or stakeholder update
- Feed into a company blog post or social post (via the Documents module for the individual Features)

---

## Using Multiple Releases for the Same Work

Because Features can belong to multiple Releases simultaneously, you can maintain different Release views without duplicating data. Common patterns:

### Milestone + ongoing
One Release tracks a specific milestone or launch date; a second tracks the ongoing backlog. The same Features can appear in both.

### By audience
One Release view structured for engineering status updates; another structured for executive or customer-facing communication. The same Features appear in both, but you share different exports with different audiences.

### Overlapping timelines
For Features that span multiple quarters, they can appear in multiple quarterly Releases simultaneously, with their status updating consistently across all of them.

---

## Releases and JIRA Integration

If your team has the JIRA integration active, delivery status flows into Releases automatically. A few things to understand about how this works:

- Status changes in JIRA update Feature status in Lodestone, which updates the Feature card on the Release board
- The mapping between JIRA statuses and Lodestone status stages is configured in Settings > Integrations — if a Feature's status isn't updating as expected, check the status mapping first
- Lodestone is the communication layer; JIRA is the execution layer. The integration keeps them in sync so you don't have to update both manually

For teams using JIRA, the Release board effectively becomes a live view of delivery progress without any manual status updates on the Lodestone side.

---

## Releases vs Roadmaps: A Quick Reference

| | Roadmap | Release |
|---|---|---|
| Primary question | WHAT and WHY | WHEN and HOW IS IT GOING |
| Time orientation | Forward-looking | Current state + near-term |
| Visual format | Sunburst chart | Kanban board |
| AI content in export | Yes (PPT) | No |
| HTML shareable export | Yes | Yes |
| Typical audience | Leadership, sales, customers | CS, ops, team, stakeholders |
| Updated cadence | When priorities shift | Regularly as work progresses |

---

*Next: Troubleshooting & FAQs — common issues with status sync, Forecast mode, and Release Notes.*
