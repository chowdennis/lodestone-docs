# Integrations — How-tos & Workflows
*Step-by-step guides for connecting and configuring Fireflies, Gong, and JIRA*

---

## Connecting Fireflies

The Fireflies integration allows meeting transcripts to be imported directly into the Extracts module, without manual file upload.

1. Go to Settings > Integrations.
2. Find the Fireflies integration and select Connect.
3. Authenticate with your Fireflies account.
4. Once connected, the Fireflies import option becomes available in the Extracts module.

Once connected, any meeting in your Fireflies instance is available for import into Extracts. See the Extracts module guide for how to use this in practice.

### Configuring Fireflies auto-sync

After connecting, you can configure Lodestone to pull new Fireflies transcripts automatically:

1. In the Fireflies integration settings, enable **Automatic Sync**.
2. Choose a **Sync Interval**: every 12 hours, 24 hours, or weekly.
3. Set a **Lookback Window** — how many days back Lodestone should look for new transcripts on each sync cycle (1–90 days).
4. Save. Lodestone will now pull new transcripts from Fireflies on your chosen schedule and queue them for analysis in Extracts automatically.

> **Tip:** A 24-hour interval with a 7-day lookback is a good default for most teams — you get daily updates without capturing stale meetings.

---

## Connecting Gong

The Gong integration works similarly to Fireflies — it brings call transcripts into the Extracts module for AI analysis.

1. Go to Settings > Integrations.
2. Find the Gong integration and select Connect.
3. Authenticate with your Gong account.
4. During setup, you'll be prompted to select which Gong accounts to pull transcripts from. Select the front-line customer-facing colleagues whose calls you want to analyze — typically AEs, CSMs, and SDRs.
5. Once connected, the Gong import option becomes available in the Extracts module.

> **Tip:** Be deliberate about which accounts you select during setup. Selecting too broadly brings in calls with low product signal. Focusing on customer-facing roles produces the most actionable Extracts.

To change which accounts are included after initial setup, return to Settings > Integrations and update the Gong configuration.

### Configuring Gong auto-sync

After connecting, you can configure Lodestone to pull new Gong transcripts automatically:

1. In the Gong integration settings, enable **Automatic Sync**.
2. Choose a **Sync Interval**: every 12 hours, 24 hours, or weekly.
3. Set a **Lookback Window** — how many days back Lodestone should look for new calls on each sync cycle (1–90 days).
4. Save. Lodestone will now pull new Gong transcripts on your chosen schedule and queue them for analysis in Extracts automatically.

---

## Connecting JIRA

The JIRA integration keeps Features and delivery status in sync between Lodestone and JIRA Cloud. It operates at the Feature level — Lodestone Features map to JIRA issues at a level you define (Epic, Story, Task, or Subtask).

### Step 1: Activate the integration

1. Go to Settings > Integrations.
2. Find the JIRA integration and select Connect.
3. Paste your JIRA API key to authenticate.
4. Select which JIRA object level Lodestone Features should map to (Epic, Story, Task, or Subtask).

> **Note:** The JIRA integration supports JIRA Cloud only. JIRA Server is not currently supported.

### Step 2: Configure sync behavior

After activating, configure how data flows between systems using three controls:

**Automatic Sync**
Enables interval-based polling. Lodestone checks JIRA for updates at a frequency you define (e.g. every hour). Recommended as a baseline for all teams.

**Webhooks**
Enables real-time bidirectional updates. Changes in Lodestone immediately update JIRA, and changes in JIRA immediately update Lodestone — no polling delay. Recommended for teams that need immediate status accuracy.

**Status Mapping**
Defines how JIRA issue statuses correspond to Lodestone Feature status stages. Because JIRA and Lodestone may use different terminology, you must map them manually. Example:

| JIRA status | Lodestone status stage |
|---|---|
| To Do, Backlog | Not Started |
| In Progress, In Review | In Progress |
| Done, Closed | Completed |

Status mappings can be edited at any time. Getting this right is critical — incorrect mapping means Release boards and Roadmaps will reflect inaccurate delivery progress.

### Step 3: Connect multiple JIRA projects (if needed)

A single workspace can connect to multiple JIRA projects. Repeat the connection process for each project, configuring sync behavior and status mapping per project as needed.

---

## Manually Linking a Feature to an Existing JIRA Issue

If you have existing JIRA issues that predate the integration, you can manually link them to Lodestone Features rather than creating new ones.

1. Open the Feature Detail page for the Feature you want to link.
2. Find the JIRA link option.
3. Enter or search for the JIRA issue to link.
4. Once linked, the Feature and JIRA issue sync according to your configured sync behavior.

---

## Unlinking a Feature from a JIRA Issue

If you need to break the connection between a Feature and a JIRA issue:

1. Open the Feature Detail page.
2. Find the linked JIRA issue.
3. Select the unlink option.

Unlinking stops future sync between the two objects but does not delete either. The Feature remains in Lodestone; the JIRA issue remains in JIRA.

---

## Triggering a Manual Sync

If automatic sync or webhooks aren't configured, or you want to force an immediate update:

1. Go to Settings > Integrations.
2. Find the JIRA integration.
3. Trigger a manual sync.

---

## Disconnecting an Integration

To disconnect any integration:

1. Go to Settings > Integrations.
2. Find the integration and select Disconnect.

Disconnecting stops all future syncing but preserves existing data in Lodestone. Features, status updates, and any other data already in Lodestone are not removed.

---

*Next: Advanced Features & Customization — sync strategy, status mapping best practices, and managing multiple JIRA projects.*
