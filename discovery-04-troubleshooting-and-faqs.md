# Discovery - Troubleshooting & FAQs
*Common questions about rooms, analytics, Synthesis, and backlog promotion*

---

## Why Is Usage Analytics Locked?

Usage Analytics unlocks once PostHog is connected and verified. Hover over the
locked tab to see "Connect and verify PostHog in Settings → Integrations." An
Admin can connect PostHog from Settings → Integrations. After that, open the
tab and select **Import funnels** to begin.

## Why Is a Drop-off Missing from the Review Queue?

Check that:
- You selected **Sync now** after importing the funnel or changing a threshold.
  Usage Analytics does not sync on its own.
- The drop-off reaches the funnel's **Global threshold** or the step's own
  threshold. Lower the threshold to catch smaller drop-offs.
- You have not dismissed the same transition before. Dismissed items stay
  suppressed until you select **Remove** on them in the **Dismissed** list.
- The funnel uses the Steps visualization in PostHog. Other visualizations show
  **Unsupported visualization** and cannot be imported.

If the import list says "No saved PostHog funnels were found," save at least one
funnel in your PostHog project first.

## What Happens When I Remove a Funnel?

The funnel stops syncing and moves to **Removed funnels**. Its snapshots and
review history are kept. To restore it, select **Import funnels** and select the
funnel again.

## Why Is Synthesis Locked?

Synthesis brings together data from the other Discovery rooms — Extracts,
Competitive Intel, and Usage Analytics. If it's locked, give it more to work
with: add Extracts, run a Competitive Intel report, or connect PostHog. The
Synthesis page shows which rooms are ready.

## Does Regenerating Synthesis Delete Earlier Results?

No. New opportunities appear in a new generation while previous generations remain available in collapsed groups. Features already added to the backlog are not removed.

## What Do the Duplicate Warnings Mean?

**Already in Backlog** means a current Backlog item has the same normalized
name. **Seen in earlier run** means the opportunity appeared in an older
Synthesis generation. Synthesis also suppresses highly similar opportunities
within one generation. Review the existing item before creating another
Feature.

## What Does Add to Backlog Create?

It creates a Feature. Discovery does not create Goals or Themes. A Feature promoted from an Extract trend receives the trend name as a tag.

## Why Does an Opportunity Show Multiple Source Labels?

The labels identify which Discovery rooms contributed evidence. Use the source
controls above the results to filter them. Selecting multiple sources uses
inclusive matching rather than requiring every selected source.

## Who Can Use Discovery?

Admins and Builders can view and work in Discovery. Organization access is enforced on every Discovery page and action. Settings permissions determine who can connect analytics providers.

## Why Can I Not See Discovery?

Discovery is available to all organizations, but your Lodestone administrator
can turn it off for an organization. When it is off, the **Discovery** item is
missing from the left-hand navigation, Extracts and Competitive Intel are
unavailable too, and links to any Discovery page show a "Not Found" page.
Contact your Lodestone administrator if you expect access.

## Where Did Extracts and Intel Go?

They moved into Discovery. Select **Discovery** in the left-hand navigation; the
Extracts room opens first. Use the tabs at the top to switch to Usage
Analytics, Competitive Intel, or Synthesis. Your existing Extracts and reports
are unchanged.

---

*Return to Discovery Overview & Concepts for the complete room model.*