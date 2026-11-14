# Discovery - How-tos & Workflows
*Use each room and generate cross-room opportunities*

---

## Build Customer Trends

1. Open **Discovery > Extracts**.
2. Import or upload customer conversations.
3. Generate Extracts from the source material.
4. When at least three ungrouped Extracts exist, select **Generate Trends**.
5. Review each trend and expand it to inspect its Features and quotes.

## Review Funnel Drop-offs in Usage Analytics

Usage Analytics finds the steps in your product funnels where too many users
drop off, and puts them in a review queue.

1. Connect and verify PostHog in **Settings → Integrations**. Until you do,
   **Discovery > Usage Analytics** shows **Connect PostHog** with a link to
   **Open integration settings**.
2. Open **Discovery > Usage Analytics** and select **Import funnels**.
3. Select the saved PostHog funnels you want to track, then select
   **Import selected**. Only funnels that use the Steps visualization can be
   imported; others show **Unsupported visualization**.
4. Select **Sync now** to pull the latest numbers. Each funnel card shows its
   steps, the number of users at each step, and the drop-off between steps.
5. Review the **Review queue**. Each item shows a step transition, its drop-off
   percentage, how many users dropped off, and the threshold it crossed.
6. Select **Dismiss** on items that do not need attention.

Sync is manual. Select **Sync now** whenever you want fresh data. A message
confirms how many funnels were processed and whether any new candidates
appeared.

To stop tracking a funnel, select its remove option and confirm. Its snapshots
and review history are kept, and it moves to **Removed funnels**. To restore
it, select **Import funnels** and select the funnel again.

Dismissed items move to the **Dismissed** list and do not reappear on later
syncs. Select **Remove** on a dismissed item to clear the dismissal; the
transition can then appear again after a future sync.

## Generate Competitive Intelligence

1. Open **Discovery > Competitive Intel**.
2. Add competitors manually or use AI suggestions.
3. Add a specific industry description in Settings.
4. Select **Generate Report**, or configure a Weekly or Every 2 weeks schedule
   and select **Save Settings**. Automatic reports start only after the settings
   are saved.
5. Review completed reports before using them as product evidence.

## Generate Synthesis

1. Make sure the other rooms have data to draw on: add Extracts, run a
   Competitive Intel report, or connect PostHog.
2. Open **Discovery > Synthesis**.
3. Optionally enter a topic, such as `integrations`, to focus the results.
4. Select **Generate Synthesis**.
5. Select one or more source filters. Matching is inclusive, and opportunities
   supported by more selected sources appear first.
6. Expand an opportunity to review dated evidence from each contributing room.
7. Select **Review & add**, edit the name or description if needed, and add the
   opportunity to the Backlog.

Synthesis uses current Extract trends, recent completed Competitive
Intelligence reports, and, when connected, a summary of recent product usage. Select **Export PDF** to download the currently filtered
results.

Use **View source room** beside an evidence section to inspect the underlying Discovery room. Dismiss an opportunity when it is not useful; dismissal removes it from the active Synthesis view without affecting any Feature already added to the backlog.

## Add a Trend Feature to the Backlog

1. Expand a trend in Extracts.
2. Select **Add to Backlog** on a Feature.
3. Confirm its Feature type.
4. Open the new backlog Feature.

The parent trend name appears automatically in the Feature's tags.

---

*Next: Advanced & Customization - improve signal quality and rollout Discovery safely.*