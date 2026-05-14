# Extracts — Overview & Concepts
*What they are, why they matter, and how they fit into Lodestone*

---

## What Is an Extract?

An Extract is a candidate product idea surfaced by AI through the analysis of a meeting transcript. Extracts are intentionally provisional — they are not Features, and they don't create work automatically. They exist in a holding state until you decide whether the idea is worth pursuing.

The name reflects what they are: ideas pulled directly from real conversations, unfiltered and uninterpreted, waiting for a human judgment call.

---

## Why Extracts Exist

Valuable product insights are routinely lost between the moment a customer says something important and the moment a PM writes it down. Notes taken during meetings are partial, filtered by what could be captured in real time, and colored by the note-taker's interpretation. Even with full transcripts, reviewing them to extract ideas is time-consuming work.

Extracts remove that final bottleneck. Instead of reviewing transcripts yourself, you upload them and let AI surface the ideas. You stay focused on the conversation while it's happening, then review the output afterward.

The result is a higher-fidelity signal — ideas captured directly from the source rather than passed through a layer of human interpretation.

---

## Key Concepts

### Extracts Are Not Features

This is the most important thing to understand about Extracts. They are candidate ideas, not commitments. An Extract only becomes a Feature when you explicitly decide to add it to your backlog. Until then, it sits in a provisional state with no impact on your planning.

This separation is intentional — it keeps your backlog clean and ensures that only ideas you've actively reviewed and chosen make it into your planning workflow.

### The Binary Decision

Every Extract requires one of two actions:

- **Add to Backlog** — promotes the Extract to a Feature, carrying over the Feature Name and Description
- **Dismiss** — permanently deletes the Extract

There is no intermediate state, no "maybe later" pile, and no way to recover a dismissed Extract. The module is designed to be decisive.

### Noise Is Expected

The AI surfaces everything that might represent an opportunity — feature ideas, problems, requests, and sentiment signals. It is deliberately non-judgmental. Not every Extract will be worth acting on, and that's fine. Noise is a natural byproduct of comprehensive signal capture, not a sign that something is wrong. The judgment about what matters belongs to you.

---

## What the AI Analyzes For

When you upload a transcript, the AI scans it for:

- **Feature ideas** — explicit or implied suggestions for new functionality
- **Problems** — pain points or frustrations mentioned by participants
- **Requests** — direct asks from customers or stakeholders
- **Sentiment** — emotional signals around existing features or experiences

Each surfaced idea becomes an Extract with a generated Feature Name and Description, ready for your review.

---

## How Extracts Relate to the Rest of Lodestone

Extracts sit at the very beginning of the Lodestone planning stack. Their relationship to other objects is intentionally simple:

| Object | Relationship |
|---|---|
| Features | An accepted Extract immediately becomes a Feature. All data carries over. From that point it behaves like any other Feature. |
| Documents, Roadmaps, Releases, Strategy | Extracts do not interact with these directly. Only accepted Extracts — now Features — participate downstream. |

This separation keeps discovery clean and distinct from planning.

---

## Source Badges

Each Extract displays a **source badge** indicating where it came from. This makes it easy to see at a glance whether an idea was surfaced from a customer call, a sales conversation, or a competitive analysis:

| Badge | Source |
|---|---|
| Gong | Transcript imported from a Gong call |
| Fireflies | Transcript imported from a Fireflies meeting |
| Manual | Transcript uploaded directly by a team member |
| Intel Report | Extracted from a Competitive Intelligence report |

Source context is preserved when an Extract is promoted to a Feature — the source information carries over into the Feature's quote library.

---

## Supported Inputs

Extracts works with **meeting transcripts in text format** and **Competitive Intelligence reports**. Audio and video files are out of scope — these are handled upstream by recording platforms like Fireflies or Gong, which produce transcripts that are then brought into Lodestone.

Transcripts can be uploaded manually, imported directly via the Fireflies or Gong integrations, or fed from a completed Competitive Intelligence report via the Extract Features from Report action in the Intel module.

---

*Next: How-tos & Workflows — step-by-step guides for uploading transcripts, reviewing Extracts, and promoting ideas to your backlog.*
