# Strategy — Advanced Features & Customization
*Top-down vs bottom-up in depth, axis design, and presentation strategy*

---

## Choosing the Right Approach

The choice between top-down and bottom-up isn't just a technical one — it reflects how you think about strategy and who you're building it for.

### Top-Down: Direction first
Top-down strategy starts with intent and works outward. You decide how you want to allocate emphasis across your three dimensions over time, then enter numbers to represent those decisions. The numbers are directional — they tell a story of where you're investing more and less, and how that shifts over time.

Top-down is the right choice when:
- You're a product leader trying to align teams on direction
- The audience needs to understand tradeoffs, not execution detail
- You're early in planning and want to establish a position before connecting it to specific work

### Bottom-Up: Grounded in the work
Bottom-up strategy starts with your actual Feature backlog and works upward. By tagging Features and mapping those tags to strategy dimensions, you build a strategy that reflects real planned work rather than abstract numbers.

Bottom-up is the right choice when:
- You're an IC PM who wants to show how your backlog maps to strategic priorities
- You need to demonstrate to leadership that strategy is grounded in real commitments
- You want to toggle between value and effort to tell different stories to different audiences

### Using both
A workspace can have multiple Strategies simultaneously. Some teams maintain both a top-down strategy (for executive alignment) and a bottom-up strategy (for planning grounding), using them in different contexts for different audiences.

---

## Designing Your Three Dimensions

The three dimensions are the most important design decision in any Strategy. A few principles:

### Make them mutually exclusive
If Features could plausibly belong to two dimensions, the dimensions aren't distinct enough. "Growth" and "Acquisition" overlap; "New Markets" and "Retention" don't.

### Make them collectively exhaustive
Ideally, every Feature in your backlog should be classifiable under one of the three dimensions. If large chunks of your backlog don't fit, the dimensions may not reflect your actual work.

### Make them meaningful to your audience
Dimensions like "Products and Services / Customer Segmentation / Geographic Expansion" resonate with executives thinking about portfolio allocation. Dimensions like "Core / Integrations / Self-Service" may resonate better with a product or engineering audience.

### Common dimension sets by context

| Context | Dimension 1 | Dimension 2 | Dimension 3 |
|---|---|---|---|
| SaaS growth stage | New Business | Retention & Expansion | Platform |
| Enterprise product | Core Product | Integrations | Enterprise Features |
| Multi-market | Home Market | New Markets | Geographic Expansion |
| Platform company | Developer Tools | Consumer | Enterprise |

---

## Using the Value / Effort Toggle in Bottom-Up Strategy

One of the most powerful features of bottom-up strategy is the ability to toggle between value and effort views. Because the same Features are being aggregated either way, toggling lets you tell the same strategic story through two different lenses:

- **Value view** — shows where you're investing in high-impact work. Use this with executives or customers to demonstrate strategic ambition.
- **Effort view** — shows where your team's capacity is actually going. Use this with engineering or operations to demonstrate resource realism.

Presenting both views side by side can be a powerful way to show that your strategic ambition and your execution capacity are aligned — or to open an honest conversation if they're not.

---

## Writing Strong Interval Comments

The Comment field for each time interval is one of the most underused features in the Strategy module. In the PPT export, comments appear as slide text alongside the growth cube snapshot — they're the narrative layer that makes the visual meaningful.

A strong interval comment answers three questions:
1. What is the strategic focus during this interval?
2. What is shifting compared to the previous interval, and why?
3. What does success look like at the end of this interval?

Example for a Q1 interval in a SaaS growth strategy:
> "Q1 focuses heavily on core product stability and enterprise readiness ahead of the spring selling season. Integration investment is deliberately held back until Q2, when the sales pipeline is better understood."

That's a sentence that an executive can react to, question, or affirm — which is exactly the point.

---

## Presenting the Growth Cube

The growth cube is designed to be presented, not just viewed. A few tips for live presentations:

- **Step through manually** rather than auto-playing — it lets you narrate each interval before advancing
- **Pause at inflection points** — intervals where the allocation shifts significantly are the most interesting moments to discuss
- **Use the before/after contrast** — showing where you start and where you end tells the strategic arc more powerfully than any individual frame

The PPT export captures each interval as a static slide, which works well for async sharing. For live presentations, consider using the in-app view directly.

---

## Strategy vs Roadmap: When to Use Each

A question that comes up often — especially since both can be exported as presentations and shared with leadership.

| Use Strategy when... | Use Roadmap when... |
|---|---|
| The conversation is about multi-year investment allocation | The conversation is about near-term priorities and specific initiatives |
| The audience is executives, boards, or investors | The audience is sales, marketing, CS, or cross-functional teams |
| You want to show tradeoffs across dimensions over time | You want to show what you're building and why |
| The time horizon is years | The time horizon is months |

In practice, a strong narrative uses both — the Strategy establishes the long-term direction and tradeoffs, and the Roadmap shows how current work advances that direction.

---

*Next: Troubleshooting & FAQs — common issues, misconceptions, and answers to frequent questions.*
