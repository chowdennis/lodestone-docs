# ARC — Troubleshooting & FAQs

---

## Common Issues

### "No speakers detected" when uploading a transcript

ARC finds speakers by looking for a name followed by a colon at the start of each turn. Check that your transcript follows this format:

```
Dana Lee: I'm not convinced the numbers hold up.
Sam Patel: Fair — the model assumes 20% adoption in the first quarter.
```

Some meeting tools export timestamps or speaker labels on a separate line. Edit the transcript so each turn starts with `Name:`, then go **Back** and try **Detect Speakers** again.

### "Select at least one persona or group."

The simulation needs at least one persona or a group. In the **Who's in the room** step of the **Simulate** tab, select one or more personas, or choose a group. If you have no personas yet, click **Create new persona**.

### The artifact I want isn't in "Select an artifact"

- **Features** only appear once at least one document (for example, a PRD or Opportunity Canvas) has been generated for them. Generate a document first, then return to ARC.
- **Deleted** Features don't appear.
- If a section shows **None found.**, nothing of that type exists in your organization yet.

### A simulation shows "Partial" or "Failed"

**Partial** means some personas responded and others didn't; the cards for personas that didn't respond show the reason. **Failed** means no persona could respond, usually because of a temporary problem generating responses.

Wait a moment and run the simulation again. If one persona keeps failing, try running it on its own.

### Overlapping Concerns is missing from the results

Overlapping Concerns only appear when ARC finds a theme raised by more than one persona. A single-persona run, or a run where personas raised entirely different concerns, has no overlapping section.

### My calibration results disappeared

Calibration proposals are held on the page until you click **Save Calibration**. If you navigate away first, they're lost. Upload the transcript again, run calibration, and save before leaving the **Attributes** tab.

### A persona I mapped wasn't calibrated

If ARC couldn't process a speaker's portion of the transcript, that persona won't show a **Review** badge. This usually happens when the speaker said very little. Try a transcript where they speak more, or skip that speaker.

### Simulations take a long time

Each persona's response is generated separately, so time grows with the number of personas. Runs with many personas may take a minute or two. Keep the page open until the results load.

---

## FAQs

### Does ARC change my document or roadmap?

No. ARC only reads the artifact. Suggested edits are recommendations; apply the ones you agree with in the source module yourself.

### If I edit a persona, do past simulations change?

No. Each simulation keeps the results it produced. Changes to a persona's attributes or profile apply to future runs only.

### What happens to past simulations if I delete a persona?

They're unaffected. The persona no longer appears in the Personas list or in future simulations.

### Can I edit a persona created from a template?

Yes. A template is only a starting point. Once created, the persona's name, profile, and attributes are fully editable.

### Who can see my personas and simulations?

Everyone in your organization. Personas, groups, and simulation history are shared across the workspace.

### What's the difference between Admin and Builder in ARC?

There is none. Admins and Builders can both create, edit, and delete personas and groups, run calibration, and run simulations.

### How many past simulations can I see?

The **History** tab shows your organization's 50 most recent simulations.

### Why do I see a "Run an ARC Simulation?" prompt after exporting?

Lodestone offers a simulation after you export an artifact, since that's often when you're about to present it. Click **Maybe later** to dismiss it; it won't appear again for that export.

### Are simulation results exactly what my stakeholders will say?

No. ARC anticipates likely reactions based on the persona you've described. Treat the results as preparation, not prediction. Calibrating personas from real transcripts makes them more representative over time.
