# Competitive Intelligence — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can use Competitive Intelligence?

Any workspace member can view reports, add and remove competitors, generate reports on demand, and configure settings. There are no admin-only restrictions in this module.

### How long does report generation take?

Typically a few minutes. A loading indicator is shown while a report is generating. You can navigate away and return — the report status will update to Completed when it is ready.

### Can I generate more than one report at a time?

You can trigger a new generation at any time, but multiple simultaneous generations are not recommended — wait for one to complete before generating another.

### Does removing a competitor affect previous reports?

No. Removing a competitor removes them from future report generation but does not alter any existing reports. All previously generated reports remain accessible exactly as they were.

### Can I edit the content of a generated report?

No. Report content is read-only. If a report doesn't reflect what you were looking for, improve the industry description and generate a fresh report.

### What happens when I click "Extract Features from Report"?

You are redirected to the Extracts module. The report content is analyzed by AI, and any feature ideas, problems, or opportunities found in the analysis appear as extract cards in your review queue. These extracts carry an **Intel Report** source badge. From there you review and decide which ideas to add to your backlog.

### Can I schedule reports less frequently than biweekly?

Not currently. The available scheduling options are Weekly and Biweekly. For less frequent monitoring, you can turn off automatic scheduling and generate reports manually as needed.

### Is the industry description the same as the Organization Description in Settings?

No. These are separate inputs. The Organization Description (in Settings > Organization) is used by the Documents module for AI-generated artifacts like PRDs and Opportunity Canvases. The Industry Description in Competitive Intelligence is used only for competitor analysis reports.

### Can reports be shared with people outside Lodestone?

Reports can be downloaded as PDFs, which can then be shared by any means (email, Slack, etc.). There is no shareable link or in-app sharing option.

---

## Common Issues

### The Generate Report button is disabled

This means your competitor list is empty. Add at least one competitor before attempting to generate a report.

### A report shows "Failed" status

Generation failure can happen if the AI encountered an error during analysis. Click into the failed report to see any error details. The recommended resolution is to go back to the reports list and generate a new report. If the issue persists, check that your industry description is filled in and that your competitor list is not empty.

### AI competitor suggestions feel irrelevant

This is almost always caused by a vague or generic industry description. Update your industry description in the Competitive Intelligence settings to be more specific about your market category, customer type, and competitive context. Run the suggestion feature again after saving the updated description.

### No features are appearing after "Extract Features from Report"

A few things to check:

- Confirm the report has a **Completed** status before extracting — only completed reports can be analyzed
- If extraction ran but produced no extracts, the report content may not contain enough clear product signals. This can happen with reports covering markets with limited public competitor activity.
- If you were redirected to Extracts but the queue appears empty, allow a moment for AI processing to complete and refresh the page

### Automatic reports aren't being generated

Check that:
- A report schedule has been configured in the Competitive Intelligence settings (frequency and day are set)
- Your competitor list is not empty
- The report day you selected has actually passed since the schedule was set — if you set a Wednesday schedule on a Thursday, the first automatic report won't generate until next Wednesday

---

*This is version 1 of the Competitive Intelligence documentation, documenting confirmed platform behavior.*
