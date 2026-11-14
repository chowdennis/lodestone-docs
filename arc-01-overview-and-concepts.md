# ARC — Overview & Concepts
*Rehearse the stakeholder review before you walk into the room*

---

## What Is ARC?

ARC (Anticipated Reactions Coach) simulates how the key people in your organization are likely to react to something you've built — a feature document, a roadmap, a release, a bento grid, or a strategy — before you present it.

You describe each stakeholder as a **persona**. When you run a simulation, every persona reads the artifact and responds in character with the concerns they would most likely raise, each paired with a suggested edit. Where several personas raise the same issue, ARC groups it as an **overlapping concern** so you can see what is likely to come up no matter who is in the room.

ARC is in the left-hand navigation as **ARC**.

---

## Why It Exists

Most stakeholder reviews surface the same objections — the CFO asks about cost, the CTO asks about risk, Sales asks when they can sell it. Those objections usually arrive after you've already committed to a direction, in the meeting where you hoped to get a decision.

ARC moves that feedback earlier. A simulation takes a minute or two and gives you a list of likely objections and concrete edits, so you can tighten the artifact, prepare answers, or bring the right data before the real conversation happens.

---

## Key Concepts

### Personas

A persona is a model of one stakeholder or stakeholder type. Each persona has:

- **Name** — for example, "CFO" or "Head of Platform Engineering"
- **Profile / Role description** — a free-text description of who they are and what they care about, for example "Skeptical financial operator focused on ROI and cost containment"
- **Eight attributes** that shape how they read and respond (see below)

Each persona also gets an ID (for example, `PERS-004`) that appears next to its name throughout ARC.

### Persona Attributes

Every persona is scored from 1 to 7 on eight attributes, grouped into three clusters:

| Cluster | Attribute | 1 means… | 7 means… |
|---|---|---|---|
| Information Processing | Skepticism | Takes claims at face value | Assumes claims are unproven until verified |
| Information Processing | Trust Baseline | Starts from a position of doubt | Starts from full trust |
| Information Processing | Detail Orientation | Engages only with the top-line summary | Scrutinizes granular details exhaustively |
| Evaluation Lens | Risk Aversion | Comfortable with high uncertainty | Will block over unresolved downside exposure |
| Evaluation Lens | Openness to Change | Defends the current approach | Actively seeks and champions new approaches |
| Evaluation Lens | Time Horizon | Focused entirely on the immediate problem | Evaluates almost exclusively through a long-term lens |
| Delivery Style | Assertiveness | Raises concerns tentatively | Will not let a concern go unaddressed |
| Delivery Style | Directness | Softens language considerably | Blunt and unfiltered |

A score of 4 is the balanced midpoint for every attribute. The Information Processing and Evaluation Lens attributes shape *what* a persona objects to; the Delivery Style attributes shape *how* they say it.

### Persona Templates

ARC includes 12 built-in templates you can start a persona from: CEO, CFO, COO, CTO, General Counsel, VP Sales, VP Marketing, VP Customer Success, Engineering Lead, Sales Manager, Marketing Manager, and CS Manager. Each template comes with a role description and attribute scores you can adjust afterwards.

### Persona Groups

A group is a named set of personas you often simulate together — for example, "Exec team" or "Go-to-market leads". Selecting a group in a simulation runs every persona in it.

### Simulations

A simulation (also called a run) is one artifact reviewed by one or more personas. For each persona, ARC returns a list of reactions. Each reaction has two parts:

- **Concern** — what the persona would push back on
- **Suggested edit** — a change to the artifact that would address it

When more than one persona responds, ARC also produces **Overlapping Concerns**: themes raised by several personas, with the personas who raised each one.

### Calibration

Calibration tunes a persona's attributes from a real meeting transcript. ARC reads what that person actually said, identifies behavioral signals, and proposes attribute changes with a justification for each. You decide which changes to accept. See *Advanced & Customization* for the full workflow.

---

## The ARC Tabs

| Tab | What you do there |
|---|---|
| **Personas** | Add, edit, and delete personas; create groups; upload transcripts for calibration |
| **Attributes** | Adjust a persona's eight attribute sliders and review calibration proposals |
| **Simulate** | Pick an artifact and the personas or group to run against it |
| **History** | Reopen past simulations |

---

## What You Can Simulate

| Artifact | What ARC reads |
|---|---|
| Feature | The Feature and its generated documents: Opportunity Canvas, Product Requirements Document, User Stories, User Acceptance Tests, User Guide Documentation, and Blog, Email, Twitter, Instagram, and LinkedIn announcements |
| Roadmap | The roadmap and its items |
| Release | The release and its items |
| Bento Grid | The grid's content |
| Strategy | The strategy and its items |

A Feature only appears in ARC once at least one document has been generated for it. ARC reads the artifact as it is; running a simulation never changes it.

---

## How ARC Relates to the Rest of Lodestone

| Module | Role in ARC |
|---|---|
| Documents | Generated Feature documents are the most common simulation target |
| Roadmaps, Releases, Strategy, Bento Grids | Each can be simulated directly |
| Exports | After you export an artifact, Lodestone offers to run an ARC simulation on it |

---

## Who Can Use ARC

All workspace members (Admin and Builder roles) can create and edit personas and groups, run calibration, and run simulations. There are no role restrictions in this module. Personas, groups, and simulation history are shared across the organization.

---

*Next: How-tos & Workflows — creating personas and groups, running a simulation, reading results, and revisiting past runs.*
