# Integrations — Advanced Features & Customization
*Sync strategy, status mapping, managing multiple projects, and getting the most from each integration*

---

## Choosing the Right JIRA Sync Configuration

The three JIRA sync options — Manual, Automatic, and Webhooks — are not mutually exclusive. Most teams should run both Automatic Sync and Webhooks simultaneously for maximum reliability.

| Configuration | Best for |
|---|---|
| Manual only | Teams that want explicit control and rarely need real-time accuracy |
| Automatic Sync only | Teams that can tolerate a short lag (e.g. hourly) before updates appear |
| Webhooks only | Teams that need instant sync but want a simple setup |
| Automatic + Webhooks | Most teams — webhooks provide real-time sync, automatic polling acts as a safety net if a webhook event is missed |

### Why run both Automatic and Webhooks?
Webhooks can occasionally miss events — network issues, JIRA downtime, or configuration gaps can cause a change to not propagate. Automatic Sync catches anything the webhook missed on the next polling cycle. Running both gives you real-time accuracy with built-in redundancy.

---

## Status Mapping Best Practices

Status mapping is the most important configuration step in the JIRA integration, and the most commonly misconfigured one. A few things that matter:

### Map all JIRA statuses
JIRA workflows often have more statuses than you'd expect — In Review, UAT, Blocked, Waiting, Ready for Dev, and so on. Any JIRA status that isn't mapped will not update Feature status in Lodestone. Check your JIRA workflow for every possible status and map each one.

### Update mappings when JIRA workflows change
If your engineering team changes their JIRA workflow — adding new statuses, renaming existing ones, or changing their board configuration — your status mapping may become stale. An unmapped status means Lodestone stops receiving updates for Features in that state.

### Use the most semantically accurate match
When a JIRA status doesn't map cleanly to a Lodestone stage, choose the closest match. For example, a "Ready for QA" status in JIRA is closer to "In Progress" than "Completed" — keep it in progress until it's actually done.

---

## Managing Multiple JIRA Projects

A workspace can connect to multiple JIRA projects, each with its own sync configuration and status mapping. This is useful for organizations with separate JIRA projects per team, product line, or region.

A few things to consider:

- Each project has its own status mapping — if your JIRA projects use different workflows, configure each mapping independently
- Features created in Lodestone are assigned to a specific JIRA project at the point of sync — make sure the correct project is selected when linking or auto-syncing a Feature
- If projects share the same JIRA statuses, you can apply a consistent mapping across them; if they diverge, map each separately

---

## Choosing the Right JIRA Object Level

When connecting JIRA, you choose which object level Lodestone Features map to: Epic, Story, Task, or Subtask. This is an important architectural decision.

| JIRA level | When to use |
|---|---|
| Epic | Features represent large initiatives; each Feature maps to a JIRA Epic containing multiple stories |
| Story | Features represent user-facing capabilities; maps directly to JIRA Stories |
| Task | Features represent work items of any type; Task is the most flexible mapping |
| Subtask | Features represent granular work; less common, used in highly structured workflows |

Most teams use Epic or Story. Choosing the right level depends on how granularly your team tracks work in JIRA relative to how you define Features in Lodestone.

---

## Discovery Integrations: Fireflies vs Gong

Both Fireflies and Gong serve the same purpose in Lodestone — bringing call transcripts into the Extracts module for AI analysis. The choice between them depends on what your team already uses.

| | Fireflies | Gong |
|---|---|---|
| Primary use case | General meeting transcription | Revenue-focused call intelligence |
| Best for | Broad meeting coverage (internal + external) | Customer-facing sales and CS calls |
| Access scope | Any meeting in your Fireflies instance | Accounts you select during setup |
| Setup complexity | Connect with a single login step | Requires account selection during setup |

Both integrations are discovery-only — they bring transcripts in, they do not sync delivery status or any other data back to the source system.

---

## How Integrations Affect the Rest of Lodestone

Integrations expand what Lodestone can see, but they don't change how Lodestone works. A few things to keep in mind:

- **Releases** benefit most from JIRA sync — Feature status updates flow into Release boards automatically, making them live views of delivery progress without manual updates
- **Extracts** benefit most from Fireflies and Gong — transcripts flow in without manual upload, and the AI surfaces ideas directly from customer conversations
- **Features** are the integration anchor point for JIRA — every sync, link, and status update operates at the Feature level
- **Documents, Roadmaps, Strategies, and Auctions** are not synced with any external system — they remain Lodestone-native artifacts

---

## What Happens When You Disconnect an Integration

Disconnecting any integration stops all future syncing but preserves existing data in Lodestone:

- **JIRA disconnect** — Features and their status history remain in Lodestone; future JIRA changes no longer flow through; existing JIRA links are preserved but inactive
- **Fireflies/Gong disconnect** — previously imported transcripts and their generated Extracts (if still in the queue) are unaffected; future imports are no longer available until reconnected

Reconnecting an integration restores sync behavior. You may need to reconfigure status mapping if it was reset during disconnection.

---

*Next: Troubleshooting & FAQs — common connection issues, sync problems, and status mapping errors.*
