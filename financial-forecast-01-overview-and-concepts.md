# Financial Forecast — Overview & Concepts
*What it is, why it matters, and how it fits into Lodestone*

---

## What Is Financial Forecast?

Financial Forecast is a module within Lodestone that lets product managers model the financial impact of building a Feature — before the Feature is built. It produces standard financial metrics (NPV, ROI, IRR, payback period) from structured assumptions about what the Feature will cost and what it will generate.

It lives on the **Feature Detail page**, under a dedicated Financial Forecast tab. Every Feature can have one or more financial models. A model is built from a set of **assumptions** — individual estimates about revenue, costs, and their timing — that Lodestone aggregates into a complete financial picture.

---

## Why Financial Forecast Exists

Product decisions are typically framed in terms of customer value, strategic fit, and engineering effort. Financial impact — the actual expected return on a feature investment — is often missing from the conversation, or present only as rough intuition.

Financial Forecast changes this. It gives PMs a structured way to say: "Based on what we believe about this Feature, here is what it is likely to cost and return over time, and here is what we're uncertain about." That kind of analysis changes how prioritization conversations happen — especially with finance, executive, and board audiences.

The module is designed to be useful without requiring a finance background. You don't need a spreadsheet or a financial model template — you work directly in Lodestone, using the same Feature context you've already built.

---

## Key Concepts

### Financial Model
A financial model is the container for a Feature's forecast. It has a name, a discount rate (for NPV calculation), optional context notes, and a collection of assumptions. A Feature can have multiple models — for example, a conservative model and an optimistic model.

By convention, models are named `[Feature Name] Financial Forecast` by default, though they can be renamed.

### Assumptions
Assumptions are the individual estimates that make up a model. Each assumption represents one driver of financial impact — a revenue increase, a cost reduction, a new expense, or a cost savings. Assumptions have:

| Field | What it captures |
|---|---|
| Name | What this assumption represents (e.g. "New subscription revenue") |
| Category | The type of impact: Revenue Up, Revenue Down, Cost Up, or Cost Down |
| Baseline | The current state before this Feature ships (in the relevant unit) |
| Delta | The change this Feature is expected to produce (as a number or percentage) |
| Start Month | Which month the impact begins (month 1 = launch) |
| Ramp Type | How the impact builds over time: Immediate, Linear, or Exponential |
| Confidence | The reliability of this estimate: High, Medium, or Low |

### Scenarios
Each assumption can have **Bull** and **Bear** scenario values — alternative estimates for optimistic and pessimistic cases. When scenarios are defined, Lodestone can calculate metrics across all three scenarios (Base, Bull, Bear) simultaneously.

### Financial Metrics
Lodestone calculates the following metrics from the model's assumptions:

| Metric | What it measures |
|---|---|
| NPV | Net Present Value — the present-day value of all future cash flows, discounted by your rate |
| ROI | Return on investment over the forecast period |
| IRR | Internal rate of return |
| Payback Period | How many months until cumulative returns exceed cumulative costs |

Metrics are recalculated automatically whenever assumptions are added or changed.

### Discount Rate
The discount rate is used to calculate NPV. It represents the minimum acceptable return on investment (or cost of capital). The default rate is 12%. It can be set per-model or configured as an org-wide default in Financial Forecast settings.

---

## The Compare View

Beyond individual Feature models, Lodestone provides an **organization-level Compare view** accessible from Financial Forecast. This view shows all Features that have financial models in a single ranked table, sorted by NPV by default. It lets you compare the financial cases for multiple Features side-by-side to inform prioritization decisions.

---

## Evidence Linking

Assumptions can be linked to customer quotes already associated with a Feature. This allows you to ground financial estimates in real customer signal — for example, linking a revenue assumption to a quote from a customer who described their willingness to pay. Evidence links appear in the model and serve as an audit trail for how assumptions were justified.

---

## Guided Intake

When creating a new model, Lodestone offers a **Guided Intake** flow — a conversational step-by-step assistant that asks questions to help you populate assumptions. This is the recommended starting point for users who are new to financial modeling or building a model for the first time.

Guided Intake produces a pre-populated model that you can refine, rather than starting from a blank slate.

---

## Export

Models can be exported as an **Excel (.xlsx) file**, which includes the full assumption set, scenario values, and calculated metrics. This is useful for sharing with finance teams, including in business cases, or maintaining records outside Lodestone.

---

## How Financial Forecast Relates to the Rest of Lodestone

| Object | Relationship |
|---|---|
| Features | Each model belongs to one Feature. The Feature's name, description, and quotes are all accessible within the forecast context. |
| Extracts / Quotes | Customer quotes linked to a Feature can be attached to individual assumptions as evidence. |
| Settings | Org-level defaults for discount rate, labor rate, fiscal year start, and launch date are configured in Financial Forecast settings. |

---

*Next: How-tos & Workflows — step-by-step guides for creating models, entering assumptions, and exporting forecasts.*
