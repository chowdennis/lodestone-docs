# Features — Advanced Features & Customization
*Custom evaluation frameworks, tags, hierarchy, and advanced configuration*

---

## Custom Evaluation Criteria

Beyond the built-in frameworks (RICE, ICE, WSJF, etc.), Lodestone allows you to define your own scoring model from scratch. This is useful when your team has a unique set of factors that don't map cleanly to a standard framework.

### Creating a custom framework

1. Go to Settings > Modules > Feature Evaluation Criteria.
2. Choose the option to create a custom framework.
3. Define the individual input fields (e.g. "Strategic Alignment", "Customer Impact", "Tech Risk").
4. Set the data type for each field (numeric, scale, boolean, etc.).
5. Define the calculation formula that produces the composite score.
6. Save. The custom fields and score will now appear in the Feature Backlog and on Feature Detail pages.

> **Design intent:** Custom evaluation criteria exist because no single framework fits every team. The goal is to give you something concrete and discussable — not to automate prioritization decisions.

### Switching frameworks

You can switch evaluation frameworks at any time from Settings. Switching changes which fields are displayed — it does not delete previously entered data or change how Features are fundamentally described.

Only one evaluation framework can be active at a time. If you switch frameworks, the new framework's fields replace the old ones in the backlog and Feature Detail views. Your previously entered scores are preserved and will reappear if you switch back to that framework.

---

## Custom Status Stages

The default status stages (Not Started, In Progress, Completed) are a starting point. Most teams customize these to reflect their actual workflow.

### Configuring status stages

1. Go to Settings > Modules > Feature Status Stages.
2. Rename existing stages or add new ones (e.g. "In Discovery", "In Review", "Blocked", "Shipped").
3. Save. Changes apply immediately across the entire platform.

Status stages are global — they apply to all Features across all Roadmaps and Releases. There is currently no per-roadmap or per-release stage configuration.

> **Propagation reminder:** Status changes update everywhere the Feature appears — backlog, releases, any view. Custom stages behave the same way as the defaults. Only admins can add or rename status stages.

---

## Feature Tags and Taxonomy

Tags in Lodestone serve a specific structural role beyond simple labeling — they are the mechanism that connects Features to bottom-up Strategy.

### How tags work in bottom-up Strategy

When you configure a bottom-up Strategy, each strategic axis is mapped to a set of Feature tags. Features tagged with those values are then aggregated into the Strategy table.

### How tags are created and applied

Tags in Lodestone are free-text — you type them directly on a Feature, with no predefined list to choose from. There is no controlled vocabulary or tag management screen. Tags are also generated automatically when Roadmap parent items are created: when a Feature becomes a parent in a Roadmap hierarchy, its name becomes a tag applied to all its child Features.

Because tags are free-form, consistent naming across your team matters. A Feature tagged "enterprise" and one tagged "Enterprise" are treated as different tags, so agreeing on conventions upfront will lead to cleaner bottom-up Strategy aggregation.

---

## Features in Roadmap Hierarchy

Roadmaps give Features structural context through parent-child nesting. Understanding how this works helps you build cleaner roadmaps and keep your backlog organized.

### Dynamic object behavior

When you add items to a Roadmap, all new items start life as Features. But when an item becomes a parent (i.e. something is nested beneath it), it transforms into a grouping label:

- It disappears from the Feature backlog
- It becomes a tag applied to all its child Features
- Child Features inherit their parent and grandparent items as tags

This keeps your backlog focused on actionable Features while preserving the full hierarchy context through tags.

> **Example:** If you have a Roadmap with a Goal called "Accelerate Enterprise Growth" and nest three Features beneath it, those Features inherit "Accelerate Enterprise Growth" as a tag. The Goal itself disappears from the backlog — it's now a structural label, not an actionable item.

### Using features across multiple roadmaps

The same Feature can appear in multiple Roadmaps simultaneously — for example, on both a quarterly execution roadmap and a yearly strategic roadmap. The Feature is the same object in both places; changes to its name, description, or status are reflected everywhere.

---

## Features and the Organization Description

The Organization Description set in Settings > Organization is used as context for AI document generation. When Lodestone generates a PRD or Opportunity Canvas for a Feature, it incorporates this description to make the output more relevant to your industry, business model, and audience.

If AI-generated documents feel too generic, improving the Organization Description is often the fastest fix. A description that captures your industry, customer type, and key business context produces significantly better output.

---

## Visibility and Sharing

Features are internal by default. They are never exposed to external stakeholders on their own. Features only become visible externally when they are included in an exported Roadmap, Release, or Strategy.

This is by design: Features without narrative context can be confusing or misleading to non-product audiences. The export layer (Roadmaps, Releases) provides the context that makes Features legible externally.

---

## Roles and Permissions

Lodestone has role-based access control. Admins can manage team membership, configure Settings, and access all modules. Non-admin members can create and edit Features, Documents, Roadmaps, Releases, Strategies, and Auctions, but cannot modify organization-level Settings or manage team access.

Roles are assigned when inviting team members and can be updated from Settings > Team.

---

*Next: Troubleshooting & FAQs — common issues, edge cases, and answers to frequent questions.*
