# Bento Grids — How-tos & Workflows
*Step-by-step guides for the most common Bento Grid workflows*

---

## Creating a Bento Grid from a Release Note

This is the most common workflow. If you have an existing Release with Release Notes, this takes about two minutes.

1. Navigate to **Bento Grids** in the left-hand navigation.
2. Click **New Bento Grid**.
3. From the dropdown, select the Release Note you want to use as the source. The dropdown shows Release Notes grouped by their Release.
4. A configuration dialog appears. Choose:
   - **Aspect ratio** — 16:9 for slides, 4:3 for documents, 1:1 for social sharing
   - **Output type** — Single image (one full grid) or Presentation (one slide per cell)
   - **Theme** — Light or Dark
   - **Tags** — Whether to show category labels on each cell
   - **Icons** — Whether to show icons on each cell
5. Confirm. The AI processes the Release Notes content and groups it into cells.
6. Review the proposed grouping. Each cell shows a title and description. If a grouping doesn't make sense, you can adjust it before confirming.
7. Confirm the layout. The grid renders.
8. Export or save (see below).

---

## Creating a Bento Grid from a File Upload

Use this when your release content lives outside of Lodestone — in a document, a Notion page, or a markdown file.

1. Navigate to **Bento Grids** and click **New Bento Grid**.
2. Choose the upload option instead of selecting a Release Note.
3. Upload your file. Markdown format is recommended; plain text also works.
4. Configure the appearance settings (same as above).
5. Review and confirm the AI grouping.
6. Export or save.

Grids created from file uploads are stored as standalone grids and are not linked to any Release.

---

## Exporting a Bento Grid

### PNG (Single Image)
Exports the entire grid as one image. Best for sharing in emails, Slack, or dropping into a document.

### PowerPoint (.pptx)
Exports the grid as a PowerPoint file. In Single Image mode, this produces one slide. In Presentation mode, it produces one slide per cell, which is useful for narrating the release in a meeting.

### Google Slides
Uploads the grid directly to your connected Google account and opens it as a Google Slides presentation. This requires a Google account to be connected via the integration settings.

### HTML (shareable link)
Generates a responsive, server-rendered HTML snapshot of the Bento Grid and returns a shareable link. Like the Roadmap and Release HTML exports, this produces a `/share/...` URL rather than downloading a file — anyone with the link can view the grid in a browser without logging in to Lodestone.

Click the **Export as HTML** option in the grid toolbar to generate. Each generation produces a new URL; previous links remain valid.

---

## Saving a Bento Grid

Once you're satisfied with a grid, click **Save**. Saved grids:

- Appear in the Bento Grids list under their Release Note name (or as a standalone grid if file-sourced)
- Can be reopened and re-exported at any time
- Show the date they were last updated and the name of the person who created them

Saving does not lock the grid. You can regenerate it from the same source at any time — for example, after updating the Release Notes.

---

## Viewing and Managing Existing Bento Grids

The Bento Grids index shows two groups:

- **Release Note-linked grids** — listed by Release Note name, with the Release name shown below. A "Saved" indicator appears if a grid has been generated and saved. If no grid exists yet for a given Release Note, clicking through starts the creation flow for that note.
- **Standalone grids** — listed as file-sourced with the grid name.

Click **View Grid** on any entry to open it and access export options.

---

## Regenerating a Bento Grid

If your Release Notes change after you've saved a grid, you can regenerate it. Open the saved grid and choose to regenerate from the source. This runs the AI grouping again on the updated content and takes you back through the review step.

> **Note:** Regenerating replaces the previous layout. If you want to preserve the old version, export it before regenerating.

---

*Next: Advanced Features & Customization — getting the most from configuration, output types, and export strategies.*
