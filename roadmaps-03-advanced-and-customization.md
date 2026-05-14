# Roadmaps — Advanced Features & Customization
*Contextual visualization, hierarchy design, and getting the most from Roadmap exports*

---

## Designing Your Hierarchy

The sunburst has no enforced structure — you define what each ring means. This flexibility is powerful but can feel overwhelming at first. Here are the most common patterns to draw from:

| Pattern | Ring 1 (center) | Ring 2 | Ring 3 (outer) |
|---|---|---|---|
| Strategic | Goals | Themes | Features |
| Lifecycle | Lifecycle Stage | Objective | Feature |
| Customer-centric | Persona | Job to be Done | Feature |
| Simple | Theme | Feature | — |

There is no "right" answer. The best hierarchy is the one that makes your plan immediately legible to your specific audience. For a board presentation, a two-level Goals → Features structure may be all you need. For an engineering alignment session, a three-level breakdown may be more useful.

### Practical guidance
- **Start with your audience** — what story are you trying to tell, and what groupings will make sense to them?
- **Fewer levels is usually better** — three levels is a common sweet spot; more than four can make the sunburst hard to read
- **Be consistent** — if Ring 2 means "Theme" in one section of the roadmap, it should mean "Theme" everywhere

---

## Using Multiple Roadmaps

Because a workspace can have multiple Roadmaps, and the same Feature can appear in more than one, you can maintain different Roadmap views for different audiences or time horizons simultaneously.

Common patterns:
- **Annual + Quarterly** — a high-level annual roadmap showing strategic direction, and a quarterly roadmap with more tactical detail
- **By audience** — one roadmap structured for executive alignment (Goals → Features), another for engineering (Themes → Epics → Features)
- **By product area** — separate roadmaps for different product lines or teams

Because Features are shared objects, updates to a Feature (name, status, description) are reflected in every Roadmap it appears in — there's no duplication to maintain.

---

## Contextual Visualization in Depth

Contextual sizing and coloring add an analytical layer on top of the structural hierarchy. Used well, they can turn a roadmap into a prioritization argument — not just a list of what you're building, but a visual case for why these things and not others.

### Sizing by Value vs Effort
- **Size by Value** — larger segments represent higher-value Features. This draws the eye to your most impactful work and makes it visually obvious where the biggest bets are.
- **Size by Effort** — larger segments represent higher-effort Features. This is useful for surfacing where resources are concentrated and whether the effort allocation matches the value.

### Coloring by Value vs Effort
The default color scale runs green (Extra Small) → red (Extra Large), but every level is customizable. Consider:
- **Green = high, red = low** for value — reinforces positive framing of high-value work
- **Green = low, red = high** for effort — flags where the heavy lifts are

### Combining both
The most expressive configuration uses both simultaneously:
- **Size by Value, Color by Effort** — large green segments are high value, low effort (the sweet spots); small red segments are low value, high effort (the ones to question)

This combination lets you make a prioritization argument visually without saying a word.

> **Reminder:** Contextual visualization only affects the outermost ring. Hierarchy color families on parent and grandparent items remain unchanged.

---

## Telling the Story of Deprioritization

One of the most underused Roadmap practices is keeping deprioritized items visible. Rather than deleting Features that didn't make the cut, move them into a clearly labelled "Not Now" or "Deprioritized" section at the bottom of the Roadmap.

This does several things:
- Shows stakeholders that their ideas were considered, not ignored
- Makes the tradeoff explicit — here's what we chose, and here's what we didn't
- Gives you a ready-made list to revisit in the next planning cycle

A roadmap that only shows what you're building is half a story. A roadmap that also shows what you're not building — and implicitly why — is a full one.

---

## Getting the Most from the Full PPT Export

The full PPT presentation export is Lodestone's most powerful communication artifact. A few tips for getting the best output:

### Build your hierarchy with the export in mind
Because every item at every level gets its own slide, the names you give to your items become slide titles. Treat them as headlines — specific enough to be meaningful, concise enough to read at a glance.

### Generate Opportunity Canvases before exporting
Opportunity Canvases for Features in the Roadmap are automatically appended as an appendix in the PPT export. If you want a richer appendix, generate canvases for your key Features before running the export.

### Use AI speaker notes as a starting point
The AI-generated speaker notes give you a draft narrative for each slide, tuned to your chosen audience. They're designed as inspiration, not a script — edit them to reflect your specific context, priorities, and communication style.

### Tune audience settings to the room
The three audience options (Internal general, Internal executive, External) meaningfully change the tone and framing of the AI-generated content. Choosing the right one saves editing time.

---

## Roadmap vs Release: When to Use Each

A question that comes up often: should I use a Roadmap or a Release to communicate with stakeholders?

| Use a Roadmap when... | Use a Release when... |
|---|---|
| You're explaining priorities and strategic direction | You're reporting on progress and delivery status |
| The audience needs to understand WHAT and WHY | The audience needs to understand WHEN and HOW IT'S GOING |
| You're presenting to leadership, sales, or customers | You're updating the team, CS, or ops on delivery |
| The plan is forward-looking | The view is current-state |

In practice, most PMs use both — a Roadmap sets the narrative, and a Release updates it over time.

---

*Next: Troubleshooting & FAQs — common issues, drag-and-drop tips, and export troubleshooting.*
