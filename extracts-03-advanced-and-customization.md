# Extracts — Advanced Features & Customization
*Integrations, transcript strategy, and getting the most from the AI*

---

## The Fireflies and Gong Integrations

Fireflies and Gong are both live integrations for the Extracts module. Rather than manually downloading transcripts and uploading them to Lodestone, both integrations let you pull meeting transcripts directly into the Extracts module in a few clicks.

### How Lodestone and these tools divide responsibilities

Fireflies and Gong are the sources of truth for transcripts — they handle recording, transcription, and storage. Lodestone is the analysis and planning layer — it reads the transcript, surfaces ideas, and connects them to your planning workflow. Neither tool is replaced by the other.

### Fireflies access scope
When importing from Fireflies, any meeting in your connected Fireflies instance is accessible for import.

### Gong access scope
When you first connect the Gong integration, you're prompted to select which Gong accounts to pull transcripts from. This allows you to scope the integration to your front-line customer-facing colleagues — such as AEs, CSMs, or SDRs — rather than ingesting every call across the organization.

See the Integrations module guide for full setup instructions for both integrations.

---

## Zendesk Support Tickets

Zendesk is a live source for Extracts. Instead of meeting transcripts, it brings in your customers' support tickets, so recurring requests and frustrations from support become candidate product ideas.

Once Zendesk is connected in Settings > Integrations, a **Zendesk** card appears in the Extracts room: "Sync and analyze public support tickets for feature suggestions."

1. Open **Discovery > Extracts** and select the **All Extracts** tab.
2. On the **Zendesk** card, click **Sync**.
3. Lodestone shows "Analyzing tickets. Suggestions will appear below when sync completes."
4. Review the new Extracts as you would any other. They carry a **Zendesk** source badge.

Only public ticket conversations are analyzed — internal notes are never included. Each ticket is analyzed once, so syncing again picks up new tickets rather than duplicating earlier ones.

When an Admin turns on auto-sync in Settings > Integrations, tickets also sync automatically on the chosen schedule (every 1, 4, 8, 12, or 24 hours, or every 7 days).

See the Integrations module guide for Zendesk setup instructions.

---

## Freshdesk Support Tickets

Freshdesk is a live source for Extracts. Like Zendesk, it brings in your customers' support tickets, so recurring requests from support become candidate product ideas.

Freshdesk tickets sync on demand from Settings > Integrations:

1. Go to Settings > Integrations and find the **Freshdesk** card.
2. Select **Sync Tickets**. Lodestone checks tickets updated in the last 30 days. Keep the page open until the sync finishes.
3. Lodestone reports how many Extracts it created, how many tickets were unchanged, how many had no eligible feature asks, and how many failed.
4. Select **View Extracts** to review the new Extracts as you would any other. They carry a **Freshdesk** source badge.

Only public ticket conversations are analyzed; private notes are left out. A ticket is analyzed again only if its content has changed since the last sync, so syncing again doesn't duplicate earlier Extracts.

See the Integrations module guide for Freshdesk setup instructions.

---

## Getting Better Extracts from Your Transcripts

The quality of Extracts depends heavily on the quality of the transcript. A few things that improve output:

One of the most powerful ways to use Extracts is to look for patterns across multiple transcripts rather than acting on each Extract in isolation.

If the same problem or request surfaces in three different customer conversations, that's a signal worth paying attention to — even if no single Extract seemed urgent on its own. Strong PMs review Extracts in batches and use them to spot themes before deciding what to promote.

This approach works especially well when you're running a discovery sprint or synthesizing input from a round of customer interviews.

---

*Next: Troubleshooting & FAQs — common issues with transcript uploads, unexpected Extract output, and frequent questions.*
