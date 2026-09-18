# Bento Grids — Overview & Concepts
*What they are, why they matter, and how they fit into Lodestone*

---

## What Is a Bento Grid?

A Bento Grid is a visual release summary — a polished, at-a-glance layout that turns release notes into something you'd actually want to share with a customer-facing team, a sales team, or leadership.

The name comes from bento boxes: every compartment serves a purpose. Each cell in the grid highlights a shipped feature, improvement, or fix in a compact, structured format. The result is something that communicates what went out without requiring anyone to parse a wall of bullet points.

---

## The Problem It Solves

Release notes are useful internally but rarely effective as communication artifacts. By the time they reach sales, CS, or leadership, they've been paraphrased into an email, stripped of context, or ignored entirely.

Bento Grids give release notes a visual form that travels well — a self-contained snapshot of what shipped, designed to be read in seconds and easy to share externally.

---

## How Bento Grids Work

A Bento Grid takes source content — either a set of Release Notes from an existing Release, or a file you upload — and uses AI to group it into sections. Each section becomes a cell in the grid. You review and approve the grouping, then export or save the result.

The process has four steps:

1. **Source** — select a Release Note from an existing Release, or upload a file with release content
2. **Configure** — choose your appearance settings (aspect ratio, theme, layout)
3. **Review** — the AI groups the content into cells; you review and can adjust before confirming
4. **Export or save** — download as PNG or PowerPoint, upload to Google Slides, or save the grid to return to later

---

## Key Concepts

### Release Note-linked Bento Grids
When you create a Bento Grid from an existing Release Note, it is linked to that note. These grids appear in the Bento Grids list alongside the name of the Release they came from. If you already have a saved grid for a given Release Note, returning to it opens the saved version.

### Standalone Bento Grids
If you upload a file (rather than selecting a Release Note), the resulting grid is standalone — it is not linked to any Release. Standalone grids still appear in the Bento Grids list but are labeled as file-sourced.

### Appearance Configuration
When you create or regenerate a Bento Grid, you choose:

| Setting | Options | Effect |
|---|---|---|
| Aspect ratio | 1:1, 4:3, 16:9 | Controls the grid's proportions — 16:9 works well for slides, 1:1 for social media |
| Output type | Single image, Presentation | Single produces one full grid; Presentation produces one slide per cell |
| Theme | Light, Dark | Controls the colour scheme of the exported grid |
| Tags | On / Off | Whether each cell includes a category tag |
| Icons | On / Off | Whether each cell includes an icon |

### AI Grouping
The AI reads the source content and groups related items into distinct cells. You review this grouping before it is finalized — you are not locked into the AI's interpretation. The grouping step is a starting point, not the final output.

---

## How Bento Grids Relate to the Rest of Lodestone

| Object | Relationship |
|---|---|
| Releases | The most common source for Bento Grids. A Release Note generated from a Release becomes the content input for the grid. |
| Release Notes | Each Bento Grid is either linked to a Release Note or standalone. The Bento Grids list shows all Release Notes for which a grid has been saved. |
| Exports | Bento Grids export as PNG, PowerPoint, or can be uploaded directly to Google Slides. |

---

## Who Can Use Bento Grids

Any workspace member — both Admins and Builders — can create and export Bento Grids. Access requires the same permission as the Releases module.

---

*Next: How-tos & Workflows — step-by-step guides for creating, configuring, and exporting Bento Grids.*
