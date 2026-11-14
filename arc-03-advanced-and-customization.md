# ARC — Advanced & Customization
*Tuning personas by hand, calibrating them from real meetings, and getting sharper simulations*

---

## Tuning Attributes by Hand

Every persona's eight attributes can be adjusted directly.

1. Open the **Attributes** tab.
2. Select a persona from the list on the left.
3. Drag the sliders. Each slider is labeled at 1, 4, and 7 so you can see what each score means — for example, Risk Aversion runs from "Comfortable with high uncertainty" to "Will block over unresolved downside exposure".
4. Click **Save Changes**.

If you try to switch personas or leave with unsaved changes, ARC asks whether to save or discard them first.

New attribute scores apply to future simulations only. Past simulation results don't change.

### Choosing scores

| If the real stakeholder… | Adjust |
|---|---|
| Asks for evidence behind every claim | Raise **Skepticism**, lower **Trust Baseline** |
| Reads the appendix before the summary | Raise **Detail Orientation** |
| Blocks anything with an open risk | Raise **Risk Aversion** |
| Prefers proven approaches | Lower **Openness to Change** |
| Only cares about this quarter | Lower **Time Horizon** |
| Keeps pressing until a concern is resolved | Raise **Assertiveness** |
| Says exactly what they think | Raise **Directness** |

Change one or two attributes at a time and re-run a simulation to see the effect.

---

## Calibrating Personas from a Transcript

Calibration uses a real meeting transcript to tune personas toward how the actual people behave. One transcript can calibrate several personas at once — one for each speaker you map.

### Uploading a transcript

1. On the **Personas** tab, click **Upload Transcript**.
2. **Step 1 of 5 — Choose how to provide the transcript.** Choose **Paste text** or **Upload file** (.txt or .docx).
3. **Step 2 of 5 — Paste your transcript** (or **Upload your transcript file**). Paste or upload it, then click **Continue**. Each speaker turn should start with the speaker's name followed by a colon, for example `Dana Lee: I'm not convinced the numbers hold up.`
4. **Step 3 of 5 — Review and tag source.** Check the preview and pick the **Source system**: Manual / Paste, Zoom, Microsoft Teams, Fireflies, Otter.ai, or Other. Click **Detect Speakers**.
5. **Step 4 of 5 — Map speakers to personas.** For each detected speaker, choose the persona they represent, or **— skip this speaker —**.
6. **Step 5 of 5 — Confirm and calibrate.** Review the personas that will be calibrated and click **Run Calibration**.

Calibration takes a moment per persona. When it finishes, ARC opens the **Attributes** tab, and each calibrated persona shows a **Review** badge in the Personas list.

### Reviewing calibration proposals

1. On the **Attributes** tab, select a persona with pending calibration. The heading reads **Calibration review**.
2. For each attribute ARC proposes changing, the slider is preset to the proposed score, with a marker at the current score and a short justification drawn from the transcript beneath it.
3. Keep the proposed score, move the slider back toward the current score, or set any value in between.
4. Click **Save Calibration** to apply the scores.

Calibration results are held only on the page until you save. If you leave ARC before clicking **Save Calibration**, the results are lost and you'll need to run calibration again.

### Getting good calibration results

- **Use meetings where the person speaks substantively.** A transcript where they say two sentences gives ARC little to work with.
- **Use representative meetings.** A product review or planning session reflects how someone evaluates proposals better than a social check-in.
- **Calibrate over time.** Run calibration again as new transcripts become available, rather than relying on one meeting.
- **Review, don't rubber-stamp.** You know the stakeholder; if a proposed change doesn't match your experience, move the slider back.

---

## Writing Effective Persona Profiles

The **Profile / Role description** gives a persona context the numeric attributes can't capture: what they own, what they're measured on, and what they've pushed back on before.

| Weaker | Stronger |
|---|---|
| "CFO" | "CFO of a 200-person SaaS company. Accountable for hitting the 2027 profitability target. Pushes back on any initiative without a payback period under 12 months." |
| "Sales leader" | "VP Sales. Quota-carrying team of 30. Cares about what can be sold this quarter and what competitors already ship." |

Good profiles:

- Name the person's goals and how they're measured
- Mention recurring objections or priorities you've seen from them
- Note relevant context, such as a recent incident or a budget freeze
- Stay specific to one role rather than blending several

---

## Designing Persona Groups

Build groups around the reviews you actually run:

| Group | Typical members |
|---|---|
| Exec review | CEO, CFO, CTO, COO |
| Go-to-market | VP Sales, VP Marketing, VP Customer Success |
| Delivery | CTO, Engineering Lead |
| Launch readiness | Sales Manager, Marketing Manager, CS Manager |

Simulating with the group that will actually sit in the meeting gives the most useful Overlapping Concerns.

---

*Next: Troubleshooting & FAQs — common issues with transcripts, simulations, and personas.*
