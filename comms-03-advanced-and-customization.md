# Comms Packages — Advanced Features & Customization
*Snapshots, artifact ordering, cadence strategy, and designing effective packages*

---

## How Snapshots Work

When a package is sent, Lodestone captures a frozen snapshot of each included artifact at that moment. Recipients receive a link to the snapshot — not a live link to the current version of the roadmap, release, or strategy.

This has important practical implications:

- **Edits after sending don't change what recipients received.** If you update a roadmap the day after a send, the previous recipients still see the roadmap as it was when the package went out.
- **Each send creates new snapshots.** A recurring weekly package takes a fresh snapshot on each send date. Recipients always see the current state as of that week's send, not a stale version from the first time the package ran.
- **Snapshot links are permanent.** The link in a delivered email continues to work indefinitely. If a stakeholder archives the email and reopens it months later, the snapshot is still accessible.

This design is intentional. It preserves the integrity of what was communicated and creates a traceable record of what stakeholders received and when.

---

## Artifact Ordering

The order artifacts appear in the recipient's email is set during the dedicated **Order** step (step 2) of package creation. After selecting artifacts, the Order step presents them as a list with **Up** and **Down** controls. Use these to arrange the sequence before moving to recipients and scheduling.

To control the narrative flow — for example, leading with strategy before showing the roadmap, or presenting the release summary before the bento grid — reorder artifacts in the Order step to match the intended reading sequence.

---

## Choosing a Cadence

| Cadence | Best for |
|---|---|
| **Once** | One-off communications: a quarterly strategy share, a launch announcement, a post-release summary |
| **Weekly** | Fast-moving teams that update stakeholders every sprint or every week |
| **Biweekly** | Mid-tempo teams that share updates every two weeks, aligned to a sprint or planning cycle |
| **Monthly** | Executive or board-level audiences who need a less frequent, higher-level update |

For recurring packages, the cadence runs from the first scheduled send. A biweekly package scheduled for a Tuesday sends every other Tuesday from that point forward.

---

## Subject Lines and Intro Messages

The **subject line** is the email subject recipients see in their inbox. A clear, consistent subject line — for example, "Lodestone Weekly: Q4 Roadmap Update" — makes it easy for recipients to identify and archive your updates.

The **intro message** appears at the top of the email body, before the artifact links. Use it to add context that the artifacts alone don't provide: what changed since the last update, what you want recipients to focus on, or what decision or feedback you're looking for.

Both fields are optional. Packages without a subject line use a default subject; packages without an intro message go straight to the artifact list.

---

## Recipient Groups vs. Per-Package Recipients

Recipient Groups are most useful when the same audience receives multiple packages — for example, an executive distribution list that gets both the monthly strategy share and the quarterly roadmap review.

For one-off packages or audiences that vary each time, entering recipients directly without saving a group is faster and keeps your group list uncluttered.

A package's recipient list is independent of the group it was created from. If you update a Recipient Group after a package has been created, the existing package's recipient list does not change — only new packages that load the group will reflect the updated addresses.

---

## Package Naming

Package names are internal labels — they are not visible to recipients. A consistent naming convention makes the Comms Package Center list easier to scan. Examples:

- `Weekly eng-leadership update`
- `Q4 2026 strategy — exec team`
- `Post-launch bento — customer-facing`

If you leave the name blank, the package appears in the list without a label.

---

*Next: Troubleshooting & FAQs — common issues with sending, recipients, and artifact availability.*
