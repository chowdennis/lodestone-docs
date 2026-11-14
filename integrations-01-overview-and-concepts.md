# Integrations — Overview & Concepts
*What integrations do, why they exist, and how Lodestone thinks about connected systems*

---

## The Philosophy Behind Integrations

Lodestone integrations are built around a single guiding principle:

> Product planning and communication live in Lodestone. Execution and operational work live elsewhere.

Integrations exist to eliminate redundant effort — not to consolidate everything into one system. Lodestone doesn't aim to replace your delivery tools, CRM, or recording platform. It aims to work alongside them, so data flows between systems without you having to manually maintain both.

---

## What Lives Where

Understanding which system owns which data is the foundation of any integration decision:

### Lives in Lodestone
- Features, Roadmaps, Releases, Strategies, Documents, Auctions
- Product intent, planning context, and communication artifacts

### Lives in external systems
- Developer tickets and delivery tasks (JIRA)
- Call recordings and transcripts (Fireflies, Gong)
- Support tickets (Zendesk, Freshdesk)
- CRM data (Salesforce)

Lodestone integrates with these systems but doesn't absorb them. Each tool remains the source of truth for its own domain.

---

## Data Flow: In and Out

Integrations move data in two directions:

### Into Lodestone
- Meeting transcripts → Extracts module (Fireflies, Gong)
- Feature status updates from delivery tools (JIRA)
- Feature suggestions from public support conversations → Extracts module (Zendesk, Freshdesk)

### Out of Lodestone
- New Features created in Lodestone → JIRA issues
- Feature updates and status changes → JIRA
- In the future: User Stories exported to JIRA

The goal is to remove double-entry while keeping product intent and context centralized in Lodestone.

---

## Live Integrations

Lodestone currently supports these live integrations:

| Integration | Purpose | Module |
|---|---|---|
| Fireflies | Transcript ingestion with configurable auto-sync | Extracts |
| Gong | Transcript ingestion with configurable auto-sync + CRM metadata enrichment | Extracts |
| Fathom | Transcript ingestion with configurable auto-sync | Extracts |
| Granola | Meeting notes ingestion with configurable auto-sync | Extracts |
| tl;dv | Transcript ingestion with configurable auto-sync | Extracts |
| JIRA | Delivery synchronization | Features, Releases |
| Asana | Delivery synchronization | Backlog |
| Zendesk | Feature suggestions from support tickets with configurable auto-sync | Extracts |
| Freshdesk | Feature suggestions from support tickets, synced on demand | Extracts |
| Salesforce | Connects your Salesforce org to Lodestone | — |
| Amplitude | Product usage questions and Discovery evidence | Discovery |
| PostHog | Product usage questions and Discovery evidence | Discovery |
| Lodestone API & MCP | Programmatic access and AI agent connectivity | All modules |

Fireflies, Gong, Fathom, Granola, tl;dv, Zendesk, and Freshdesk are discovery integrations — they bring signal in. Salesforce is a CRM integration — it connects your Salesforce org. JIRA and Asana are delivery integrations — they keep Backlog item and status data in sync with your engineering workflow. The Lodestone API & MCP enables external tools, automation, and AI assistants (including custom Claude and ChatGPT configurations) to read and write Lodestone data.

All five transcript integrations support **automatic sync** — Lodestone can pull new transcripts and meeting notes on a configurable schedule (every 12 hours, 24 hours, or weekly) rather than requiring a manual import each time.

### Gong CRM Enrichment
In addition to transcript ingestion, the Gong integration enriches extracted features with CRM context. When a Gong call is imported, Lodestone automatically attaches metadata from the associated Gong account — such as company name and revenue data — to the extracted features as context. This surfaces customer business context alongside the product signal, helping you distinguish high-value signals from noise.

---

## Who Can Manage Integrations

Only Admins can connect, configure, and disconnect integrations. Builders can see which integrations are connected and their status, but integration settings appear greyed out with an Admin-required notice. Integration settings are found in Settings > Integrations.

---

## Planned Integrations

Lodestone is actively expanding its integration surface. Integrations in progress or planned include:

### Delivery and ticketing systems
- Azure DevOps

These will bring the same delivery synchronization currently available with JIRA and Asana to teams using other tools.

---

*Next: How-tos & Workflows — step-by-step guides for connecting transcript, support, CRM, delivery, and analytics integrations.*
