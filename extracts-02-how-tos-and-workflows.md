# Extracts — How-tos & Workflows
*Step-by-step guides for the most common Extracts workflows*

---

## Uploading a Transcript Manually

The simplest way to get a transcript into Lodestone is to upload it directly.

1. Navigate to the Extracts module from the left-hand navigation.
2. Select the option to upload a transcript.
3. Upload your transcript file.
4. Submit. Lodestone's AI will analyze the transcript and generate Extracts.

A processing indicator is shown while analysis is in progress. Processing time varies depending on the length of the transcript. There is no notification when Extracts are ready — you'll need to return to the Extracts module and check manually.

> **Tip:** For long transcripts, upload and come back a few minutes later rather than waiting on the page.

---

## Importing a Transcript via Fireflies or Gong

If your team uses Fireflies or Gong, you can import transcripts directly into the Extracts module without manual upload.

### Importing from Fireflies

1. Ensure the Fireflies integration is connected in Settings > Integrations.
2. Navigate to the Extracts module.
3. Select the option to import from Fireflies.
4. Choose the meeting you want to analyze from your Fireflies library — any meeting in your Fireflies instance is accessible.
5. Confirm the import. Lodestone will pull the transcript and begin analysis.

### Importing from Gong

1. Ensure the Gong integration is connected in Settings > Integrations. During initial setup, you'll be prompted to select which Gong accounts to pull transcripts from — typically your front-line customer-facing colleagues such as AEs, CSMs, and SDRs.
2. Navigate to the Extracts module.
3. Select the option to import from Gong.
4. Choose the call you want to analyze from the available meetings.
5. Confirm the import. Lodestone will pull the transcript and begin analysis.

> **Tip:** When setting up the Gong integration, be deliberate about which accounts you select. Including too many accounts can surface a large volume of transcripts; focusing on your highest-signal roles (e.g. AEs running discovery calls) gives you more actionable Extracts.

See the Integrations module guide for full setup instructions for both integrations.

---

## Filtering and Searching Extracts

The Extracts module has a **keyword filter** and a **live search** bar to help you focus on what matters.

### Keyword filter
You can define a set of keywords that the AI uses as semantic emphasis during analysis — topics you care about most, like "pricing", "enterprise", or "onboarding". Keywords are saved to your browser and persist across sessions. Add keywords before uploading a transcript to guide extraction, or use them to filter the results in your review queue.

To add a keyword: type it into the keyword input field and press Enter.
To remove a keyword: click the × on any keyword chip.

### Live search
The search bar filters your current Extract list in real time by Feature name, description, or quote text. Use it to find a specific idea or narrow a large batch of Extracts without scrolling through all of them.

---

## Reviewing Extracts

Once a transcript has been analyzed, the generated Extracts appear in your review queue. Each Extract shows a suggested Feature Name, Description, and any associated quotes pulled from the conversation. A **source badge** indicates where the Extract came from (Gong, Fireflies, Manual, or Intel Report).

Quotes may also display **company name**, **speaker name**, and **revenue information** when that data is available from the source. To remove an individual quote from an Extract, click the delete icon on the quote — deletion is permanent.

For each Extract, you have two options:

### Add to Backlog
Promotes the Extract to a Feature. The Feature Name and Description carry over automatically. The Extract is removed from the queue and replaced by a full Feature in your backlog.

### Dismiss
Permanently deletes the Extract. There is no undo — once dismissed, the Extract cannot be recovered. If an idea turns out to be important later, you'll need to create it manually as a Feature.

> **Tip:** It's fine to work through Extracts in batches rather than reviewing them immediately after each upload. Strong PMs often look for patterns across a set of Extracts from multiple sessions before deciding what to act on.

---

## Merging Duplicates

The Extracts module automatically detects when two or more Extracts describe the same idea. When duplicates are found, a banner appears at the top of the extract list indicating how many duplicate groups were detected.

To resolve duplicates:

1. Click the duplicate notification banner to open the merge dialog.
2. Review the group of similar Extracts.
3. Select a primary Extract (the one whose name and description you want to keep) or choose to enter custom values.
4. Click **Merge**. The selected Extracts are combined into one, and their associated quotes are consolidated.
5. If multiple duplicate groups exist, step through each one before closing the dialog.

Merging is irreversible — the non-primary duplicates are removed after merging. Review each group carefully before confirming.

---

## Moving a Quote to an Existing Backlog Feature

Sometimes a quote surfaced in an Extract belongs to a Feature that already exists in your backlog, rather than representing a new idea. You can move a quote directly to an existing Feature without promoting the whole Extract.

1. On an Extract card, find the quote you want to move.
2. Click the move icon on the quote.
3. Search for and select the existing backlog Feature you want to link the quote to.
4. Confirm. The quote is attached to the selected Feature's quote library.

This is useful when a customer conversation reinforces evidence for something already on your roadmap rather than surfacing a net new idea.

---

## Editing an Extract Before Promoting It

Extracts are not editable before promotion. The Feature Name and Description are generated by AI and carry over as-is when you add an Extract to the backlog. If you want to adjust the name or description, you can choose custom values when promoting — the promotion dialog allows you to override the suggested name and description before the Feature is created.

---

## Reviewing Extracts in Bulk

Bulk actions are available when reviewing Extracts. You can select multiple Extracts at once and either add them all to the backlog or dismiss them all in one action. This is useful when reviewing a large batch of Extracts from a long transcript and want to quickly clear obvious noise or promote a cluster of related ideas.

---

## Finding the Right Transcripts to Upload

Extracts are most valuable when the source material is rich with customer signal. The best transcripts to run through the Extracts module are:

- **Customer interviews** — direct feedback on problems, needs, and priorities
- **Sales calls** — prospect objections, feature requests, competitive mentions
- **Support reviews** — recurring issues, frustrations, and workarounds
- **Stakeholder meetings** — internal priorities, strategic input, and alignment discussions

Internal planning meetings with no customer signal will produce fewer useful Extracts and more noise.

---

*Next: Advanced Features & Customization — working with integrations, managing transcript sources, and getting the most from the AI.*
