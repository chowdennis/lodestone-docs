# Feature Auctions — Advanced Features & Customization
*Wallet strategy, pricing design, and getting the most from your auctions*

---

## Designing Wallets Strategically

One of the most underused aspects of Feature Auctions is the ability to assign different wallet amounts to different buyers. Because this is fictitious currency, you have complete freedom to use wallet sizes as a design choice.

### Weighting by stakeholder influence
If you want certain stakeholders' input to carry more weight in the results, give them a larger wallet. An executive sponsor or a large enterprise customer could receive 2x or 3x the budget of other participants — their spend will naturally dominate the aggregate results.

### Equal wallets for democratic signal
If your goal is to understand what the broadest set of stakeholders values equally, give everyone the same wallet amount. This produces a more democratic signal where each buyer's choices have equivalent weight.

### Weighting by customer ARR
For auctions that include customers, some PMs weight wallets by ARR — larger customers receive proportionally more budget. This surfaces what your highest-value customers prioritize, which may differ significantly from what your average user wants.

> **Tip:** Whatever wallet strategy you use, be consistent within the same buyer category. Giving some sales reps a large wallet and others a small one without a clear rationale will produce confusing results.

---

## Designing Feature Pricing

Feature pricing is the other major design lever in an auction. Prices affect how buyers allocate their budget and what tradeoffs feel hardest.

### Flat pricing
Setting all Features at the same price treats the auction as a pure vote — every Feature costs the same, and buyers simply allocate to their top preferences. This is the simplest approach and works well when you want a straightforward popularity ranking.

### Weighted pricing
Pricing Features differently based on perceived complexity, effort, or strategic weight makes the auction feel more like real prioritization. A large platform investment costs more than a quick enhancement — buyers have to choose between a few big bets or many smaller wins.

### Proportional pricing
Some auctioneers price Features in proportion to their Value/Effort scores or development estimates. This grounds the fictitious currency in something meaningful and makes the tradeoffs feel more realistic to buyers.

---

## Using Opportunity Canvases to Improve Buyer Decisions

When a buyer clicks on a Feature during an auction, they see a modal with the Feature name and description. If an Opportunity Canvas has been generated for that Feature in Lodestone, it is displayed here as well.

This is a significant advantage: buyers who understand what they're spending on make more meaningful choices. Before running an important auction, consider generating Opportunity Canvases for all included Features. The additional context leads to richer signal and more informed stakeholder conversations afterward.

---

## Running Auctions with External Participants

Because buyers don't need Lodestone accounts, Feature Auctions can include customers and partners without any onboarding friction. A few things to consider when running external auctions:

- **Auction description matters more** — external buyers have no context about your planning process. Use the Auction Description field to explain what the exercise is, how results will be used, and why their input matters.
- **Feature names and descriptions need to be self-explanatory** — internal shorthand won't mean anything to a customer. Write Feature names and descriptions for a non-technical, non-product audience.
- **Opportunity Canvases are especially valuable** — for external buyers, the canvas can serve as a lightweight brief that gives them enough context to make a genuine choice.
- **Results sharing is manual** — if you plan to share results with external participants after the auction, you'll need to export the CSV and send it yourself. There is no in-app sharing mechanism.

---

## Interpreting Results: Total Spend vs. Quantity Purchased

The dashboard offers two lenses for reading results:

| Metric | What it tells you |
|---|---|
| Total dollars spent | Which Features attracted the most budget overall — reflects intensity of preference, especially when wallet sizes differ |
| Quantity purchased | Which Features were chosen by the most buyers — reflects breadth of interest across participants |

These two views can tell very different stories. A Feature with high total spend but low quantity might mean one or two high-wallet buyers felt strongly about it. A Feature with low spend but high quantity might be a broad-based preference that no single buyer prioritized heavily.

Reading both together gives you a more complete picture of stakeholder sentiment than either metric alone.

---

## What To Do When Results Surprise You

Sometimes auction results will surface something unexpected — a Feature ranked much higher or lower than you anticipated. This is one of the most valuable outcomes an auction can produce.

Before assuming the results are noise, consider:

- **Is there a stakeholder segment you underweight?** If a particular buyer type (e.g. enterprise customers, sales) drove a surprising result, that's a signal worth investigating.
- **Does the result reveal a communication gap?** If stakeholders are heavily prioritizing something you've already deprioritized, they may not understand why. Use the result as a conversation opener.
- **Does it challenge an assumption?** Sometimes the PM's mental model of what stakeholders want is simply wrong. The auction is a safe space to discover that.

Surprising results don't mean the roadmap is wrong — but they're worth understanding.

---

*Next: Troubleshooting & FAQs — common issues, edge cases, and answers to frequent questions.*
