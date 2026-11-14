# ARC — How-tos & Workflows
*Step-by-step guides for building personas, running simulations, and reading the results*

---

## Creating a Persona

1. Navigate to **ARC** from the left-hand navigation.
2. On the **Personas** tab, click **Add Persona**.
3. Under **Start from a template**, choose one of the 12 built-in templates (for example, **CFO** or **Engineering Lead**), or click **Start from scratch →**.
4. Enter a **Name** and a **Profile / Role description**. If you picked a template, both are pre-filled — edit them to match the real person or role you're modeling.
5. Click **Create Persona**.

A persona created from a template starts with that template's attribute scores. A persona created from scratch starts at 4 (the balanced midpoint) on every attribute. To adjust them, see *Tuning Attributes by Hand* in Advanced & Customization.

---

## Editing or Deleting a Persona

1. On the **Personas** tab, click **Edit** next to the persona.
2. Update the **Name** or **Profile / Role description** and click **Save**.

To delete the persona, click **Delete Persona** on the same page and confirm. Deleting a persona removes it from the Personas list and from future simulations. Past simulations that included it are not affected.

---

## Creating a Persona Group

1. On the **Personas** tab, click **Add Group** in the Groups section.
2. Enter a group name and select the personas to include.
3. Click **Create Group**.

You need at least one persona before you can create a group.

---

## Running a Simulation

1. Open the **Simulate** tab.
2. **Select an artifact.** Expand a section — **Features**, **Roadmaps**, **Releases**, **Bento Grids**, or **Strategies** — and choose the item. For a Feature, expand it and select one of its generated documents.
3. **Who's in the room.** Choose either individual **Personas** (select as many as you like) or one of your **Groups**. You can also create a new persona or group from here.
4. Click **Run Simulation**.

Each persona responds independently, so larger simulations take longer — a run with many personas may take a minute or two. When it finishes, the results page opens automatically.

---

## Reading the Results

The results page shows the artifact name and type, and a status badge:

| Status | Meaning |
|---|---|
| **Complete** | Every persona responded |
| **Partial** | At least one persona responded and at least one did not |
| **Failed** | No persona could respond |

Below that, each persona has its own card listing their reactions. Each reaction has a **Concern** — what they would push back on — and a **Suggested edit** that would address it. If a persona couldn't respond, its card shows the reason instead.

When ARC finds themes raised by more than one persona, an **Overlapping Concerns** section follows. Each theme has a short description and lists the personas who raised it. These are the issues most likely to come up regardless of who attends the review — address them first.

To run another simulation, click **New Simulation**.

### Acting on results

- Work through the overlapping concerns first, then persona-specific ones.
- Apply the suggested edits you agree with directly in the source artifact — ARC never changes it for you.
- For concerns you won't address in the artifact, prepare an answer before the meeting.
- Re-run the simulation after editing to see whether the concerns have been resolved.

---

## Revisiting Past Simulations

Open the **History** tab to see your organization's most recent simulations (up to 50), with the artifact, type, status, and date of each. Click a run to reopen its full results.

---

## Running ARC After an Export

When you export an artifact — for example, a Feature document, a roadmap or strategy presentation, a release, or a bento grid — Lodestone may show a **Run an ARC Simulation?** prompt once the export finishes.

- Click **Run Simulation** to open ARC with that artifact already selected. Choose your personas or group and run.
- Click **Maybe later** to close the prompt. Your export is unaffected.

The prompt appears at most once per export.

---

*Next: Advanced & Customization — tuning attributes, calibrating personas from real transcripts, and writing better persona profiles.*
