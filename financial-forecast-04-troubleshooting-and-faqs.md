# Financial Forecast — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can create and edit financial models?

Any workspace member can create and edit financial models. There are no admin-only restrictions.

### Can a Feature have more than one financial model?

Yes. A Feature can have multiple models — useful for comparing a conservative and optimistic scenario, or modeling different approaches to building the Feature. Use the model selector dropdown on the Financial Forecast tab to switch between models.

### Can I rename a model?

Yes. Model names are editable from the Settings panel within the model view. The default name is `[Feature Name] Financial Forecast`.

### Can I delete a model?

Yes. Open the model Settings panel and select Delete Model. Deletion is permanent — all assumptions and calculated metrics for that model are removed. This cannot be undone.

### What is the discount rate and what should I set it to?

The discount rate is used to calculate NPV. It represents your organization's cost of capital or the minimum acceptable return on investment. The default is 12%. Common choices:

- **8–10%** — lower-risk organizations, stable markets
- **12–15%** — typical for growth-stage SaaS companies
- **20%+** — high-uncertainty environments, early-stage companies

If you're unsure, check with your finance team. Using a consistent rate across all models is more important than the specific value you choose.

### Does changing the org-level default discount rate update existing models?

No. Changes to org-level defaults apply only to new models created after the change. Existing models retain their individually set discount rates.

### Can I link quotes from other Features to my model?

No. Evidence linking is limited to quotes already associated with the Feature the model belongs to. To link a quote from another Feature, you would need to first associate that quote with the current Feature.

### What does the completeness score in the Compare view mean?

Completeness reflects how fully the model's assumptions have been filled in. A model with many empty or zero-value fields will have a low completeness score. Incompletely filled models may have unreliable metrics — review them before using their output for decisions.

### Can the Excel export be imported back into Lodestone?

No. The Excel export is a read-only output for sharing and archiving purposes. It cannot be used to import data back into Lodestone.

### Does Financial Forecast affect RICE scores or other Feature evaluation fields?

No. Financial Forecast is a separate module and its calculated metrics (NPV, ROI, IRR, payback) do not feed into RICE scores or any other evaluation field. They are displayed in the Financial Forecast tab and the Compare view only.

---

## Common Issues

### Metrics show as 0 or blank after adding assumptions

Check the following:

- Make sure the assumption's **Baseline** and **Delta** fields have non-zero values
- Verify the **Category** is set correctly (Revenue Up, Revenue Down, Cost Up, Cost Down)
- Confirm the **Start Month** is set to 1 or later (not 0)

Metrics recalculate automatically when any assumption is saved — if something still looks wrong after checking these fields, try refreshing the page.

### NPV is negative even though revenue assumptions are positive

A negative NPV can occur when:
- Cost assumptions outweigh revenue assumptions over the modeled period
- The discount rate is high relative to the returns being modeled
- The payback period extends beyond the modeled horizon (meaning costs are paid upfront but revenue ramps slowly)

Review the assumption breakdown to identify which assumptions are contributing most to costs. If NPV is negative only in the base case but positive in the Bull case, that's a legitimate range to document and present.

### Bull/Bear metrics aren't showing

Bull and Bear metrics only appear when at least one assumption has both a Bull value and a Bear value entered. If the scenario columns are missing or blank, check that you've filled in both fields (not just one) for your key assumptions.

### The Compare view isn't showing my Feature

The Compare view only shows Features that have at least one financial model. Features without any model will appear with blank metric fields. If a Feature is missing entirely, open it from the backlog and create a model on the Financial Forecast tab.

### The Export button isn't downloading anything

Try refreshing the page and attempting the export again. If the problem persists, check that your browser isn't blocking downloads from this site.

### I can't find the Financial Forecast tab on a Feature

The Financial Forecast tab is the second tab on the Feature Detail page. If you don't see it, confirm you're on the Feature Detail page (accessed by clicking the Feature name) rather than a Roadmap or Release view.

---

*This is version 1 of the Financial Forecast documentation, documenting confirmed platform behavior.*
