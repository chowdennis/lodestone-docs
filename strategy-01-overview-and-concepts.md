# Strategy — Overview & Concepts
*What it is, why it matters, and how it fits into Lodestone*

---

## What Is a Strategy?

In Lodestone, a Strategy is a long-term plan that explicitly defines where your organization is headed, how it intends to get there, and what tradeoffs it is willing to make over time.

Lodestone treats Strategy as a **route**, not a wish. The distinction matters:

| | Example |
|---|---|
| Vision | I'd like to visit Paris someday |
| Mission | I will visit Paris this fall |
| Objective | Be in Paris in early October |
| **Strategy** | Fly from Toronto, stop in London, then continue to Paris |
| Tactics | Book flights, hotels, transportation |

Lodestone's Strategy module lives in the route-definition layer. It's not about aspirations — it's about the explicit path and tradeoffs required to get somewhere.

---

## Why Strategy Exists in Lodestone

Strategy is one of the hardest things for product teams to articulate clearly. Most attempts produce either vague mission statements ("delight customers") or lists of goals that don't actually force any choices.

Lodestone's Strategy module exists to fix this by:
- Making it easy to spin up a first strategic position quickly
- Forcing explicit tradeoffs through constrained structure
- Encouraging sharing and iteration early, rather than waiting for perfection

Strategy in Lodestone is a starting point for discussion, not a final decree handed down from above.

---

## The Planning Stack Cadence

Strategy sits at the longest time horizon in Lodestone's planning stack:

| Module | Thinks in... |
|---|---|
| Releases | Weeks |
| Roadmaps | Months |
| **Strategy** | **Years** |

A Strategy typically spans multiple years. Users define both the total length and the time interval — monthly, quarterly, or annually. A three-year strategy with quarterly intervals produces 12 intervals.

---

## The Growth Cube

Strategies are visualized using a **growth cube** — an animated 3D representation that shows how investment allocation shifts across your three strategic dimensions over time.

Each frame of the animation represents one time interval. The cube can play through automatically or be stepped through manually, making it easy to walk an audience through the strategic arc of your plan — how you're investing early, where you shift emphasis over time, and what tradeoffs you're making at each stage.

---

## Strategy as a Table

Under the hood, every Strategy is a table with:
- Exactly **3 columns** — one for each strategic investment dimension
- A user-defined number of **rows** — one for each time interval

The table drives the growth cube visualization. As you fill in values, the cube updates to reflect your investment allocation across dimensions and over time.

---

## The Three Dimensions

The three columns represent your strategic investment dimensions — the areas where you're making deliberate allocation decisions. The default dimensions are:

- Products and Services
- Customer Segmentation
- Geographic Expansion

These can be renamed to anything that fits your organization. Common alternatives include:
- Integrations / Self-Service / Enterprise
- New Markets / Retention / Platform
- Core Product / Ecosystem / Infrastructure

The **constraint of exactly three dimensions is intentional**. It forces meaningful tradeoffs. With unlimited dimensions, everything can be a priority — and when everything is a priority, nothing is.

---

## Two Approaches: Top-Down and Bottom-Up

Lodestone supports two fundamentally different ways of building a Strategy. The approach is chosen at creation and cannot be changed afterward.

### Top-Down
Values are entered manually as plain numbers representing relative emphasis. No unit is enforced — the numbers are directional signals, not precise resource allocations. Top-down is favored when the goal is alignment on direction rather than grounding in execution detail.

### Bottom-Up
Strategy dimensions are mapped to Feature tags. Each table cell is populated by selecting Features that match that tag, and their evaluation scores (value or effort) roll up into the cell value. Bottom-up is favored when you want to ground strategy in the actual work your team is planning.

Both types can coexist — a workspace can have multiple Strategies simultaneously, and you can create one of each type.

---

## What Strategy Is Not

- **Not a goals list.** A list of things you want to achieve is not a strategy. Strategy is about the route and the tradeoffs — what you're choosing to do and what you're consciously choosing not to do.
- **Not a roadmap.** Roadmaps answer WHAT and WHY for near-to-medium term plans. Strategy answers WHERE and HOW MUCH across years.
- **Not a final document.** Lodestone actively encourages sharing early drafts and iterating. An imperfect strategy that's discussed is more valuable than a perfect one that never gets shared.

---

## Who Can Create Strategies

Any workspace member can create a Strategy — it is not restricted to admins. A workspace can have multiple Strategies simultaneously.

---

*Next: How-tos & Workflows — step-by-step guides for creating, editing, and exporting Strategies.*
