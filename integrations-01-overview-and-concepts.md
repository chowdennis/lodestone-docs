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
- CRM activity, support tickets, and customer data (Salesforce, Zendesk, etc.)

Lodestone integrates with these systems but doesn't absorb them. Each tool remains the source of truth for its own domain.

---

## Data Flow: In and Out

Integrations move data in two directions:

### Into Lodestone
- Meeting transcripts → Extracts module (Fireflies, Gong)
- Feature status updates from delivery tools (JIRA)
- In the future: customer quotes, problems and opportunities from CRM and support systems

### Out of Lodestone
- New Features created in Lodestone → JIRA issues
- Feature updates and status changes → JIRA
- In the future: User Stories exported to JIRA

The goal is to remove double-entry while keeping product intent and context centralized in Lodestone.

---

## Live Integrations

Lodestone currently has three live integrations:

| Integration | Purpose | Module |
|---|---|---|
| Fireflies | Transcript ingestion | Extracts |
| Gong | Transcript ingestion | Extracts |
| JIRA | Delivery synchronization | Features, Releases |

Each serves a distinct purpose. Fireflies and Gong are discovery integrations — they bring signal in. JIRA is a delivery integration — it keeps Feature and status data in sync with your engineering workflow.

---

## Who Can Manage Integrations

Any workspace member can connect and configure integrations — it is not restricted to admins. Integration settings are found in Settings > Integrations.

---

## Planned Integrations

Lodestone is actively expanding its integration surface. Integrations in progress or planned include:

### CRM and support systems
- Salesforce
- Zendesk
- Freshdesk

These will expand transcript ingestion and customer signal into Extracts, with the ability to attach customer metadata (company name, contact, ARR/MRR) to ideas surfaced from conversations.

### Delivery and ticketing systems
- Asana
- Azure DevOps

These will bring the same delivery synchronization currently available with JIRA to teams using other tools.

---

*Next: How-tos & Workflows — step-by-step guides for connecting Fireflies, Gong, and JIRA.*
