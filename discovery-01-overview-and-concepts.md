# Discovery - Overview & Concepts
*Turn customer, product usage, and market signals into backlog opportunities*

---

## What Is Discovery?

Discovery is the workspace for gathering and combining evidence before deciding what to build. Select **Discovery** in the left-hand navigation to open it. Extracts and Competitive Intel, which used to have their own navigation items, now live here as rooms. Discovery contains four connected rooms, shown as tabs:

| Room | Signal |
|---|---|
| **Extracts** | Ideas and quotes from customer conversations and reports |
| **Usage Analytics** | Funnel drop-offs from saved funnels in your connected PostHog project |
| **Competitive Intel** | Competitor activity and market reports |
| **Synthesis** | AI-generated opportunities supported by multiple rooms |

Usage Analytics unlocks once PostHog is connected and verified in Settings →
Integrations. Until then, its tab shows a lock. Synthesis brings together data
from the other Discovery rooms, so add Extracts, run a Competitive Intel report,
or connect PostHog before you generate it.

## Discovery Creates Features

Discovery does not create new Goals or Themes. Selecting **Add to Backlog** creates a Feature that you can evaluate and organize through the normal backlog workflow.

When an Extract belongs to a trend, adding it to the backlog automatically applies the trend name as a Feature tag. This preserves the context that led to the Feature.

## Evidence and Confidence

Synthesis labels each opportunity with the rooms that contributed evidence. Opportunities supported by more than one room receive a confidence label. Expand an opportunity to inspect the evidence and its source dates before
adding it to the backlog. Source filters use inclusive matching, so selecting
Extracts shows every opportunity supported by Extracts, including
opportunities that also use other sources. Results with more selected sources
appear first.

Generating Synthesis again does not remove earlier opportunities. Results are grouped by generation, with the latest run expanded and older runs available as collapsible history. Backlog links remain intact.

Synthesis flags opportunities whose names already match a Backlog item or an opportunity from an earlier run. These warnings help you avoid creating duplicate work.

## Roles

Admins and Builders can use every Discovery room, including importing funnels,
syncing, and reviewing drop-offs in Usage Analytics. Connecting PostHog happens
in Settings → Integrations, where Settings permissions apply: Builders cannot
change integration settings.

---

*Next: How-tos & Workflows - move from raw signals to backlog Features.*