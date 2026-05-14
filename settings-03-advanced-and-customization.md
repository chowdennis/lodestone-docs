# Settings — Advanced Features & Customization
*Using Settings strategically, custom evaluation frameworks, and team configuration tips*

---

## The Organization Description: Your Most Impactful Setting

Of all the Settings available, the Organization Description has the broadest impact on day-to-day usage. It feeds into every AI-generated Document across the platform — PRDs, Opportunity Canvases, User Stories, social posts, customer emails, and more.

Teams that invest time in writing a strong Organization Description consistently get better AI output. Teams that leave it blank or write something generic consistently get output that feels off-brand and irrelevant.

### What to include
- **Industry and domain** — what space you operate in
- **Business model** — SaaS, marketplace, services, hardware, etc.
- **Customer profile** — who buys from you, at what company size, in what role
- **Product positioning** — what your product does and how it's differentiated
- **Tone and voice** — if your brand has a distinct communication style, name it

### Keeping it current
As your product, market, or positioning evolves, update the description. Stale context produces stale output. Treat it like a living brief — revisit it at least once per quarter.

---

## Designing Status Stages for Your Team

The default stages (Not Started, In Progress, Completed) work for many teams, but most benefit from customizing them to reflect their actual workflow. A few design principles:

### Name stages from the Feature's perspective, not the team's
"In Development" describes where the Feature is; "Team Working" describes what the team is doing. The former is clearer to stakeholders and easier to interpret on a Release board.

### Include stages that reflect real handoffs
If there's a meaningful moment when a Feature moves from PM to engineering, from engineering to QA, or from QA to shipped, consider a stage for each. Stages that reflect real handoffs give stakeholders more accurate visibility.

### Don't over-segment
More stages means more manual status updates. A stage is only useful if someone is responsible for moving Features into and out of it. If no one owns the transition, the stage will be stale.

### Common stage sets by team type

| Team type | Suggested stages |
|---|---|
| Small / agile | Not Started → In Progress → Done |
| Product + engineering | Discovery → Scoped → In Dev → In QA → Shipped |
| Enterprise / structured | Backlog → Prioritized → In Design → In Dev → In Review → Released |

---

## Building a Custom Evaluation Framework

The built-in frameworks (RICE, ICE, WSJF, etc.) cover most prioritization needs, but custom frameworks let you define scoring criteria that reflect your specific business context.

### When to use a custom framework
- Your team uses internal terminology that doesn't map to standard frameworks
- You need to score against factors specific to your market (e.g. regulatory compliance, partner dependency)
- You want a simpler scoring model than RICE or WSJF

### Design tips
- **Keep inputs to 3–5 fields** — more inputs don't produce better prioritization; they produce more noise
- **Use numeric scales, not free text** — scores only aggregate if they're numeric
- **Define the formula clearly** — make sure the composite score formula reflects your actual priorities (e.g. if strategic alignment matters more than effort, weight it accordingly)
- **Test with real Features** — before rolling out a custom framework, run a sample of backlog Features through it to see if the scores feel right

---

## Role Strategy: Admins vs Builders

With only two roles, role assignment is straightforward — but a few patterns are worth considering:

### Default to Builder
Unless someone specifically needs to change org-level settings or connect the Gong integration, Builder is the right default. It gives full access to all planning modules without the risk of accidental org-level changes.

### Keep Admins to a small group
Admins can change the Organization Description, reassign roles, and archive the organization. Limit Admin access to people who actively manage the workspace — typically the PM lead, product ops, or whoever owns the Lodestone setup.

### Always maintain a backup Admin
Since there must always be at least one Admin, make sure more than one person holds the Admin role. If the sole Admin leaves the company or loses access, you'll want a backup who can manage the workspace.

---

## Settings Propagation: What Changes What

A quick reference for understanding the ripple effects of Settings changes:

| Setting changed | Where it affects |
|---|---|
| Organization Description | All future AI-generated Documents |
| Organization Name / Logo | Workspace display only |
| Status Stage renamed | Feature backlog, all Releases, all Feature views |
| Status Stage deleted | Feature backlog, Releases — affected Features move to default stage |
| Evaluation Framework changed | Feature backlog display, Feature Detail pages |
| Strategy Default changed | Default selection when creating a new Strategy |
| Integration connected / disconnected | Extracts (Fireflies, Gong), Feature sync (JIRA) |

---

*Next: Troubleshooting & FAQs — common configuration issues and answers to frequent questions.*
