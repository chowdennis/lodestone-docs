# Settings — Overview & Concepts
*What Settings controls, why it matters, and how changes affect the platform*

---

## What Is the Settings Module?

Settings is where you configure organization-level behavior in Lodestone. It controls how the platform is identified, who has access, how planning objects behave, and which external systems are connected.

Every change made in Settings applies globally across the workspace — there are no per-user or per-project overrides for most configuration. This means Settings is one of the highest-leverage areas of the platform: a well-configured workspace produces better AI output, cleaner backlogs, and more consistent planning across the team.

---

## The Four Settings Sections

Settings is organized into four sections:

| Section | What it controls |
|---|---|
| Organization | Workspace identity, description, logo, and archival |
| Team | Member invitations, role assignments, and access management |
| Modules | Feature status stages, evaluation frameworks, and strategy defaults |
| Integrations | Connections to Fireflies, Gong, and JIRA |

---

## Roles and Permissions

Lodestone has two roles: **Admin** and **Builder**. Admins can do everything in the platform. Builders have access to all planning modules but have specific restrictions in Settings:

| Action | Admin | Builder |
|---|---|---|
| Update organization name, description, and logo | ✓ | ✗ |
| Assign or change member roles | ✓ | ✗ |
| Connect the Gong integration | ✓ | ✗ |
| Configure status stages, evaluation criteria, strategy defaults | ✓ | ✓ |
| Connect Fireflies and JIRA integrations | ✓ | ✓ |
| Invite and remove team members | ✓ | ✓ |

There must always be at least one Admin in a workspace — the last Admin cannot be removed or demoted.

---

## Why Settings Matters

Settings is easy to overlook, but it has a direct impact on planning quality and AI output across the platform:

- **Organization Description** — used as context for every AI-generated Document. A rich, accurate description produces more relevant output; a vague one produces generic drafts.
- **Status Stages** — define the vocabulary of progress across Features, Releases, and the backlog. Poorly named or incomplete stages create confusion when communicating status to stakeholders.
- **Evaluation Criteria** — shape how Features are compared and prioritized. The framework you choose surfaces different signals and drives different conversations.
- **Strategy Default** — sets the expected approach for new Strategies, ensuring consistency across the team.

---

## Settings Are Global

All Settings apply across the entire workspace — they are not per-user, per-roadmap, or per-release. When you change a status stage name, it changes everywhere. When you update the Organization Description, it affects every future document generation. This global scope is intentional: consistency across the team depends on a shared configuration.

---

*Next: How-tos & Workflows — step-by-step guides for configuring each section of Settings.*
