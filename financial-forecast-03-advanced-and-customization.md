# Financial Forecast — Advanced Features & Customization
*Scenarios, evidence, org-level settings, and interpreting metrics*

---

## Configuring Org-Level Defaults

Financial Forecast has a settings page at the organization level that sets defaults applied to all new models. Access it from the Compare view or via the Settings link in any model view.

| Setting | What it controls |
|---|---|
| Discount Rate | Default rate used for NPV calculations in new models (default: 12%) |
| Labor Rate | Default monthly cost per engineer, used for effort-based cost assumptions |
| Fiscal Year Start | Which month your fiscal year begins (affects how metrics are reported) |
| Launch Month / Year | Default launch date assumed when no per-assumption start month is specified |

Changing org-level defaults does not retroactively update existing models — they apply only to new models created after the change. Individual models can always override the org defaults.

---

## Using Bull / Bear Scenarios Effectively

Scenarios are the most powerful feature of Financial Forecast for stakeholder communication. When you enter Bull and Bear values for your assumptions, Lodestone calculates three complete sets of metrics — one for each scenario.

### When to use scenarios

- When a key assumption has meaningful uncertainty (e.g. a pricing change where you're unsure about churn impact)
- When you're presenting to an audience that will want to understand the range of outcomes
- When you need to show that the Feature is financially justified even in the pessimistic case

### How to use them well

- **Base case** = your best estimate, not an average of Bull and Bear. It should be your most likely outcome.
- **Bull case** = what happens if key assumptions outperform. Typically 20–40% above base.
- **Bear case** = what happens if key assumptions underperform. Typically 20–40% below base.

The most compelling financial case for a Feature is one where the Bear NPV is still positive — the Feature pays back even if things go worse than expected.

---

## Linking Evidence to Assumptions

Evidence linking is the practice of attaching customer quotes to specific financial assumptions. This is particularly useful when:

- Presenting to finance or executives who will ask "where does this number come from?"
- Building a business case that needs to survive scrutiny
- Tracking which customers or segments drove a revenue assumption

Evidence is drawn from the Feature's quote library — quotes already associated with the Feature in Lodestone. You cannot link quotes from other Features or from the general extract queue.

> **Tip:** Build your quote library before building your financial model. Accepting extracts that reference pricing, willingness to pay, or competitive comparisons enriches the evidence available for your assumptions.

---

## Interpreting the Key Metrics

### NPV (Net Present Value)
NPV is the present-day value of all future cash flows from the Feature, discounted by your rate. A positive NPV means the Feature is expected to generate more value than it costs (in today's dollars). A negative NPV means it costs more than it returns, at least over the modeled period.

NPV is most useful for comparing Features against each other — the Compare view ranks by NPV by default.

### ROI (Return on Investment)
ROI is the total return as a percentage of total cost over the forecast period. It does not account for the time value of money (unlike NPV), but it is intuitive and easy to communicate.

### IRR (Internal Rate of Return)
IRR is the discount rate at which the NPV equals zero — in other words, the implied return rate of the investment. If your IRR is higher than your cost of capital (discount rate), the Feature is a financially sound investment.

### Payback Period
Payback is the number of months until cumulative returns exceed cumulative costs. Shorter payback periods are generally better, especially in high-uncertainty environments where you want to see returns quickly.

### When metrics are incomplete
If assumptions are missing, incomplete, or have zero values, metrics may not calculate correctly. The Compare view shows a **completeness** score for each Feature's model — models with low completeness should be reviewed before using their metrics for decision-making.

---

## The Compare View

The organization-level Compare view is designed for portfolio-level financial review — not just "should we build this Feature" but "given all the Features we're considering, which ones have the strongest financial cases?"

**How to use the Compare view:**

- Sort by NPV to see the highest-value Features first
- Sort by Payback to identify Features with quick returns
- Look at ROI alongside NPV — a Feature with moderate NPV but very high ROI may be a better bet than one with high NPV but massive cost
- Use the completeness score to identify models that need more work before their metrics should be trusted

Features without any financial model appear in the table with blank metrics. This is intentional — it makes the gap between modeled and unmodeled Features visible.

---

## Multiple Models per Feature

A Feature can have multiple models. This is useful for:

- **Conservative vs optimistic planning** — one model for your realistic case, one for an upside scenario
- **Scenario comparison** — two different approaches to building the Feature with different cost and revenue structures
- **Before/after updates** — keeping the original model when assumptions change significantly, so you can see how your thinking evolved

Models are listed in the model selector dropdown on the Financial Forecast tab. The most recently created model is shown by default.

> **Note:** The Compare view always uses the most recently created model for each Feature.

---

## Ramp Types Explained

The ramp type controls how an assumption's impact builds over time after the start month.

| Ramp Type | Shape | Use when |
|---|---|---|
| Immediate | Full impact from month 1 | Cost savings that take effect instantly, one-time costs |
| Linear | Impact grows at a constant rate | Gradual adoption, sales ramp, incremental cost increase |
| Exponential | Impact accelerates over time | Viral growth, compounding retention, platform network effects |

Choosing the wrong ramp type can significantly distort NPV and payback calculations. When uncertain, Linear is the most defensible default.

---

*Next: Troubleshooting & FAQs — common issues with calculations, model setup, and exporting.*
