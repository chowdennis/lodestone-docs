# Extracts — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### What file format does my transcript need to be in?

Transcripts must be uploaded as files — there is no paste field. Audio and video files are not supported; these need to be transcribed first by a recording platform (such as Fireflies or Gong) before being brought into Lodestone. Competitive Intelligence reports can also be sent to Extracts using the Extract Features from Report action in Competitive Intel — no file upload required for those.

### How long does analysis take after I upload a transcript?

Processing time varies depending on the length of the transcript. A processing indicator is shown while analysis is in progress. There is no notification when Extracts are ready — you'll need to return to **Discovery > Extracts** and check manually.

### Can I edit an Extract before promoting it to my backlog?

No. Extracts are not editable before promotion. The AI-generated Feature Name and Description carry over as-is when you add an Extract to the backlog. If you want to refine them, add the Extract to the backlog first and then edit the Feature from the Feature Detail page.

### Can I recover a dismissed Extract?

No. Dismissing an Extract permanently deletes it — there is no undo, no recycle bin, and no recovery path. If the idea matters, you'll need to create it manually as a Feature in the backlog.

### Do Extracts automatically get added to my backlog?

No. Every Extract requires an explicit decision. Nothing moves to your backlog without you actively choosing to add it. This is intentional — it keeps your backlog clean and ensures every Feature in it has been consciously reviewed.

### What happens to the transcript after Extracts are generated?

The original transcript is not stored in Lodestone. Only the generated Extracts are retained. If you need to refer back to the source transcript, you'll find it in the platform you uploaded or imported it from (e.g. Fireflies or Gong).

### Can multiple team members review the same set of Extracts?

Yes. Extracts are visible to all workspace members, not just the user who uploaded the transcript. Any member can add an Extract to the backlog or dismiss it.

### The AI surfaced a lot of irrelevant Extracts. Is something wrong?

No. The AI is designed to surface everything that might represent an opportunity — noise is expected and intentional. Its job is comprehensive signal capture, not pre-filtering. Your job is to review and decide what matters. Dismiss the irrelevant ones and keep what's useful.

---

## Common Issues

### I uploaded a transcript but no Extracts appeared

A few things to check:

- Make sure the transcript is in a supported file format
- Check that the transcript contains substantive content — very short or sparse transcripts may not produce Extracts
- Check the processing indicator — if it's still showing, analysis is still in progress. Refresh the page once it has completed.
- Check the **Keyword Filter** on the **All Extracts** tab. When keywords are set, the AI only extracts features that mention those terms. Remove keywords that are too narrow and try again.
- If you saw an **Analysis failed** or **Analysis partly complete** message, see the next section.

### What do the analysis messages mean?

When analysis finishes, Lodestone shows one of these messages:

| Message | What it means |
|---|---|
| **Analysis complete!** | Analysis finished and lists how many features it found. |
| **No features found** | The AI read the transcript but found no product ideas. Try a different file or check the content. If you use the Keyword Filter, check that your keywords are not too narrow. |
| **Analysis partly complete** | Long transcripts are analyzed in sections. Some sections could not be analyzed, but the features found in the others are kept. The message says how many sections failed and why. |
| **Analysis failed** | No section could be analyzed. The message gives the reason (see below). |

Common reasons shown with **Analysis partly complete** or **Analysis failed**:

| Reason | What to do |
|---|---|
| "The AI service is busy. Please wait a minute and try again." | Wait a minute, then upload the transcript again. |
| "The AI's answer was too long and got cut off. Please try again." | Try again. If it keeps happening, split the transcript into smaller files. |
| "The AI's reply couldn't be read as feature suggestions." | Try again. This is usually temporary. |
| "This part of the transcript is too long for the AI to read. Try a shorter file." | Split the transcript into smaller files. |
| "Content too long. Maximum 500,000 characters allowed." | The transcript exceeds the size limit. Split it into smaller files. |
| "The AI service has reached its usage limit. Please contact support." | Contact Lodestone support. Retrying does not help. |
| "The AI model used for extraction is unavailable. Please contact support." | Contact Lodestone support. |
| "The AI service rejected our credentials. Please contact support." | Contact Lodestone support. |
| "Something went wrong while analyzing the transcript." or "The AI service returned an error. Please try again." | Try again. If it persists, contact support. |

Lodestone retries temporary problems automatically before showing a message. Problems that retrying cannot fix, like a usage limit, stop the analysis straight away.

### My Extracts don't reflect what was actually discussed in the meeting

This usually comes down to transcript quality. If the transcription itself contains errors, missing segments, or unclear speaker attribution, the Extracts will reflect those gaps. Try using a higher-quality transcript source if available.

It's also worth remembering that the AI surfaces ideas based on what appears in the text — if something important was said but didn't make it into the transcript clearly, it won't appear as an Extract.

### I accidentally dismissed an Extract I wanted to keep

There is no recovery path. Dismissed Extracts are permanently deleted. You'll need to create the Feature manually from the backlog. Going forward, take a moment to read each Extract carefully before dismissing — the action is irreversible.

### I can't see Extracts in the navigation

Extracts now lives inside **Discovery**. Select **Discovery** in the left-hand navigation; the Extracts room opens first. There is no longer a separate Extracts item in the navigation.

If **Discovery** is missing from your navigation, Discovery is not enabled for your organization. Extracts, Competitive Intel, Usage Analytics, and Synthesis are all unavailable, and links to them show a "Not Found" page. Contact your Lodestone administrator if you expect access.

### Fireflies or Gong transcripts aren't appearing in the import list

If you can't see meetings when trying to import from Fireflies or Gong:

**Fireflies:**
- Confirm the Fireflies integration is connected in Settings > Integrations
- Check that the meeting exists in your Fireflies account and the transcript has been generated there first
- Try disconnecting and reconnecting the integration if the issue persists

**Gong:**
- Confirm the Gong integration is connected in Settings > Integrations
- Check that the accounts you selected during initial setup include the user whose calls you're looking for — if a colleague's calls aren't visible, their account may not have been selected during setup
- To change which accounts are included, revisit the Gong integration settings

---

*This is version 1 of the Extracts documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
