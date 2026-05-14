# Financial Forecast — How-tos & Workflows
*Step-by-step guides for the most common Financial Forecast workflows*

---

## Accessing Financial Forecast for a Feature

1. Open the Feature Detail page by clicking a Feature name in the backlog.
2. Click the **Financial Forecast** tab (the second tab on the Feature Detail page).
3. If no model exists yet, you will see an empty state with options to create one.

---

## Creating a Model: Guided Intake (Recommended)

Guided Intake is the recommended starting point for new models. It walks you through a conversational flow that produces a pre-populated set of assumptions.

1. From the Financial Forecast tab, click **Guided Intake** (or the equivalent "Let's get started" entry point).
2. Answer the questions as prompted — the assistant asks about expected costs, revenue impact, timing, and confidence.
3. When the intake is complete, Lodestone creates a model with assumptions pre-filled from your answers.
4. Review and refine the generated assumptions as needed.

> **Tip:** Guided Intake is designed to lower the barrier to getting started. You don't need precise numbers — provide your best estimates and adjust them later as you learn more.

---

## Creating a Model: Blank

If you prefer to build from scratch:

1. From the Financial Forecast tab, click **Create Model**.
2. A new model is created with your org-level default discount rate. You will land on the model view with an empty assumption list.
3. Add assumptions one by one using the **Add Assumption** button.

---

## Adding an Assumption

1. From the model view, click **Add Assumption** (or the `+` button).
2. Fill in the assumption fields:
   - **Name** — a short description of what this assumption represents
   - **Category** — choose from: Revenue Up, Revenue Down, Cost Up, or Cost Down
   - **Baseline** — the current value before the Feature ships (enter 0 if there is no baseline)
   - **Delta** — the change the Feature is expected to produce (a number or percentage)
   - **Start Month** — which month after launch this impact begins
   - **Ramp Type** — Immediate (full impact from day one), Linear (builds gradually), or Exponential (accelerates over time)
   - **Confidence** — High, Medium, or Low
3. Optionally add Bull and Bear scenario values (see Scenarios below).
4. Save. Metrics are recalculated automatically.

---

## Editing an Assumption

Click into any cell in the assumption table to edit it inline. Changes are saved automatically and metrics recalculate immediately.

---

## Deleting an Assumption

Click the delete icon on the assumption row. The assumption is permanently removed and metrics are recalculated.

---

## Setting Bull and Bear Scenarios

For any assumption, you can add optimistic (Bull) and pessimistic (Bear) alternative values.

1. Open or expand the assumption.
2. Enter a value in the **Bull** field (the optimistic estimate) and the **Bear** field (the pessimistic estimate).
3. Save. The model will now show metrics for all three scenarios: Base, Bull, and Bear.

This is particularly useful when you're uncertain about a key assumption and want to show a range of outcomes to stakeholders.

---

## Adjusting the Discount Rate

The discount rate affects NPV calculations. It is set per-model and defaults to your org-level setting.

1. In the model view, open the **Settings** panel (gear icon or settings link).
2. Update the **Discount Rate** field.
3. Save. NPV recalculates immediately.

---

## Linking Evidence to an Assumption

You can attach customer quotes from the Feature's quote library to an individual assumption as supporting evidence.

1. Open or expand the assumption.
2. Click the evidence/link icon.
3. Select from the quotes associated with this Feature.
4. Save. The linked quotes appear as evidence for that assumption.

Evidence linking creates an audit trail — it shows which customer signal backs a specific financial estimate.

---

## Switching Between Models

A Feature can have multiple models. To switch between them:

1. From the Financial Forecast tab, use the **Model Selector** dropdown (top of the page).
2. Select the model you want to view.

---

## Updating Model Notes

Each model has an optional context notes field. Use it to document the reasoning, caveats, or scenario descriptions for the model.

1. In the model view, find the notes/context area.
2. Click to edit and type your notes.
3. Changes are saved automatically.

---

## Exporting a Model as Excel

1. From the Financial Forecast tab, click **Export** or the download icon.
2. An Excel (.xlsx) file downloads containing the full assumption table, scenario values, and calculated metrics.

---

## Deleting a Model

1. In the model view, open the Settings panel.
2. Select **Delete Model**.
3. Confirm. The model and all its assumptions are permanently deleted. This cannot be undone.

---

## Comparing Financial Forecasts Across Features

To see all Features with financial models ranked by NPV in a single view:

1. Navigate to the **Financial Forecast** section at the organization level (accessible from the navigation or a link within the Financial Forecast tab).
2. The Compare view shows a table of all Features with models, their key metrics, and model completeness.
3. Sort the table by any column to change the ranking.

---

*Next: Advanced Features & Customization — scenarios, evidence, org-level settings, and interpreting metrics.*
