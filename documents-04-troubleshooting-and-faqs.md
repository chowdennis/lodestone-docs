# Documents — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Do I need to use AI to generate Documents, or can I write them manually?

Both options are available. You can generate a Document with AI and then edit it, or you can write from scratch using the manual option. Once a Document exists, there's no difference between the two — all Documents are fully editable regardless of how they were created.

### Can a Feature have multiple Documents of the same type?

No. Each Feature supports one Document per type — one PRD, one Opportunity Canvas, one Customer Email, and so on. If you need variations, edit and iterate within the single document rather than trying to create a second copy of the same type.

### What happens to Documents if I delete the Feature they belong to?

Documents cannot exist without a Feature. If you delete a Feature, all of its associated Documents are permanently deleted as well. There is no way to recover them.

### Can I move a Document from one Feature to another?

No. Documents are attached to the Feature they were created for and cannot be reassigned. If you need a similar document for a different Feature, you'll need to generate or write a new one.

### Who can see Documents?

Documents are internal by default. They are only visible to members of your Lodestone workspace. They become shareable externally when exported as PDFs, PPTs, or HTML links, but they are never published or exposed automatically.

### Can I export Documents in formats other than PDF?

Yes. All Documents can be exported as PDF, Markdown (.md), or HTML (a shareable link). The Opportunity Canvas also supports export as a single PowerPoint slide.

### Will regenerating a Document overwrite my edits?

Regenerating the whole Document does — immediately and without a warning prompt. It replaces the entire existing Document with a new AI-generated version, and there is no version history and no way to recover the previous content. If you've made edits you want to keep, copy them somewhere safe before regenerating.

**Regenerate Selection** doesn't. It rewrites only the text you select and leaves the rest of the Document, including your edits, untouched.

### Can I regenerate just one paragraph or section?

Yes. Select the text in the editor and click **Regenerate Selection** in the action bar at the bottom. Lodestone rewrites only that passage, matches it to the surrounding text, keeps its formatting, and saves the Document. The button is available only while text is selected, and works on every Document type except Release Notes.

If you see "Could not regenerate the selected text. Please try again.", nothing in your Document has changed. Try again, or select a slightly different passage.

### Can I share a Document directly from Lodestone without exporting it?

Yes, with the HTML export. Click **Export**, then **Export as HTML**, and use **Copy last link** to copy a `/share/...` link. Anyone with the link can view the Document in a browser without logging in. The link shows a snapshot of the Document at the time you exported it; it does not update as you edit. You can also share a Document as a PDF or Markdown file, and the Opportunity Canvas as a PowerPoint slide.

---

## Common Issues

### My AI-generated Document is generic and doesn't reflect our product

This almost always comes down to one of two things:

- **Thin Feature Description** — the AI has little to work with. Add more context: what problem does this solve, who is it for, what does success look like?
- **Missing or vague Organization Description** — go to Settings > Organization and update it to accurately describe your company, industry, and customer base. This context is applied to every document generation.

If both inputs are strong and output is still off, try a different document type — an Opportunity Canvas often produces more useful output at early stages than a PRD.

### The Generate button isn't producing output

The most common cause is a missing Feature Description. Lodestone requires both a Feature Name and a Feature Description to generate a Document. If the Description field is empty, fill it in before trying again.

Also make sure you don't navigate away while generation is in progress — if you leave the page before generation completes, you'll return to a blank document.

If generation starts but then stops partway, Lodestone shows **Generation Error: The server stopped responding before the draft finished. Please try again.** This appears when no new text has arrived for 30 seconds. Click **Reset Generator** to clear the error, then generate again. The same applies to announcements.

### My Opportunity Canvas isn't appearing in the Roadmap PPT export appendix

Opportunity Canvases only appear in the Roadmap PPT export if they have been generated for Features that are included in that Roadmap. Check that:

- The Feature is included in the Roadmap you're exporting
- An Opportunity Canvas has been generated for that Feature (not just other document types)

If both are true and it's still not appearing, try regenerating the export.

### I can't find a Document I previously created

Documents live on the Feature Detail page of the Feature they belong to. If you can't find a Document:

- Navigate to the Feature backlog and open the Feature by clicking its name
- Scroll to the Documents section on the Feature Detail page

If the Feature itself has been deleted, its Documents will have been permanently deleted along with it.

### The exported PDF doesn't look right

PDF exports paginate correctly and preserve formatting. If something looks off, try regenerating the export. If the issue persists, check whether the Document content contains any unusual formatting that may not translate cleanly to PDF.

---

*This is version 1 of the Documents documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
