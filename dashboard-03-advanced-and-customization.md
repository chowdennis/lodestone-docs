# Dashboard — Advanced & Customization
*Understanding each column in depth and using the Dashboard as a daily workflow tool*

---

## What Each Column Contains

### Collecting Data
Shows the 8 most recently created Extracts and the 4 most recently updated Competitive Intelligence reports. This column fills when:
- Transcripts are imported (manually or via Fireflies, Gong, or another integration) and features are extracted
- Competitive Intelligence reports are generated

A full Collecting Data column means there's signal coming in. An empty one means transcripts haven't been processed recently.

### Processing Data
Shows the 20 most recently created or updated documents attached to backlog items — PRDs, Opportunity Canvases, User Stories, UAT Test Plans, User Guides, prototypes, and announcement content. This column fills when your team is actively writing and generating documents for features.

Items in this column also show a document violation flag if the feature's document rules are not satisfied. This is visible as a distinct color on the type badge.

### Making Plans
Shows up to 6 recently updated Roadmaps, 6 Strategies, and 6 Feature Auctions. This column reflects active planning activity. A roadmap that hasn't been touched recently drops out of the dashboard view; one that's actively being edited or restructured stays visible.

### Aligning Plans
Shows the 10 most recent export and sharing events — every time a Roadmap, Strategy, Competitive Intelligence report, or Financial Forecast was exported or shared. This is the column that tracks what has left Lodestone and gone to stakeholders.

Each row shows:
- What was exported (Roadmap, Strategy, etc.)
- The format it was exported as (PNG, PPT, MD)
- Who it was shared with, if applicable
- A "Newer version available" warning if the source has been updated since the export

Use this column to maintain the discipline of always sharing current artifacts. If something here shows a warning, your stakeholders may be looking at old information.

### Executing Plans
Shows active features (those in "In Progress" or "Completed" status, up to 10), up to 5 active releases, 4 recently updated Release Notes, and 6 recently updated Bento Grids. This is the execution pulse of your workspace — what's actively in flight and what has recently shipped.

---

## Using the Dashboard as a Daily Check-In

A simple daily workflow:

1. **Open the Dashboard** — check the new-item count to see what changed since yesterday
2. **Scan Collecting Data** — new extracts mean there are unreviewed product signals; go to Extracts if the count is high
3. **Check Aligning Plans** — look for "Newer version available" warnings before any scheduled stakeholder meetings
4. **Review Executing Plans** — spot features that are stuck (haven't moved to Completed despite being In Progress for a while)

The Dashboard is most useful as a 60-second orientation tool. It doesn't replace going into individual modules for detailed work — it tells you where to go first.

---

## What the Dashboard Does Not Show

The Dashboard is a recent-activity view, not a complete inventory. It shows a limited number of items per column, sorted by recency. Objects that haven't been updated recently don't appear, even if they exist. For a complete list of any object type, navigate to its module directly.

The Dashboard also does not show:
- Customer quotes
- Individual evaluation scores or RICE rankings
- Financial Forecast models
- MFA or security settings

---

*Next: Troubleshooting & FAQs — common questions about what appears in the Dashboard and why.*
