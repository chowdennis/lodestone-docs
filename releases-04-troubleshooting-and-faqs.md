# Releases — Troubleshooting & FAQs
*Common issues, edge cases, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can create a Release?

Any workspace member can create a Release — it is not restricted to admins.

### Can a workspace have multiple Releases?

Yes. There is no limit on simultaneous Releases. A workspace commonly has several active at once — for example, a quarterly release, an ongoing backlog view, and a milestone-specific release.

### Can the same Feature appear in more than one Release?

Yes. Features can belong to multiple Releases simultaneously, and their status is consistent across all of them. A status update in one Release updates the Feature everywhere.

### Can I remove a Feature from a Release without deleting it?

Yes. Removing a Feature from a Release only removes it from that Release board — the Feature remains in the backlog and any other Releases it belongs to.

### Can I rename a Release after creating it?

Yes. Release names can be edited at any time.

### Does Forecast mode affect real Feature status?

No. Forecast mode is completely separate from actual status. Moving a Feature card in Forecast mode does not update the Feature's real status anywhere. Forecast positions are saved separately and persist until manually cleared.

### Are Forecast changes saved when I toggle back to Actual?

Yes. Forecast positions are saved separately and persist between sessions. When you toggle back to Forecast, your last forecast positions are restored — you don't need to rebuild them each time.

### Can both Actual and Forecast views be exported?

Yes. Export whichever view is currently active — make sure you're in the correct mode before exporting. A common practice is to export both and share them side by side to show current state and projected state.

### Do Release PPT exports include AI-generated content?

No. Release exports — PNG, PPT, and HTML — are clean visuals of the board with no AI-generated text or speaker notes. What you see on the board is what you get in the export.

### Can Release Notes be exported?

Yes. Release Notes can be exported as a PDF, in addition to being copied as plain text.

### Can I generate Release Notes more than once?

Yes. Release Notes can be regenerated at any time. However, regenerating overwrites the previous version — there is no version history. If you've edited the AI output and want to preserve those edits, copy or export the notes before regenerating.

### Can a single Release have Release Notes for different audiences?

Yes. Generate internal notes, export or copy them, then generate again with the External audience setting. Each generation overwrites the last, so complete and save one version before switching audiences.

### What happens to Features when I archive a Release?

Nothing. Features are unaffected by archiving — they remain in the backlog and any other Releases they belong to. Archiving only removes the Release from your active list.

---

## Common Issues

### A Feature's status updated in the Release but didn't update in the backlog

This shouldn't happen — status is a single source of truth and updates everywhere simultaneously. If you're seeing a discrepancy, try refreshing the page. If the issue persists, check whether the JIRA integration is creating a conflict with the status mapping.

### A Feature's status updated in JIRA but isn't showing on the Release board

This is usually a status mapping issue. Check Settings > Integrations > JIRA and review the status mapping configuration — the JIRA status may not be mapped to a Lodestone status stage. Also check whether automatic sync or webhooks are enabled; if only manual sync is configured, you may need to trigger a sync manually.

### My Forecast positions disappeared

Forecast positions persist between sessions but can be manually cleared. Check whether someone on your team cleared the forecast. If positions are missing after a session, also check whether you were in Actual mode when you last left the page — the positions are still there, just hidden until you toggle back to Forecast.

### The Release Notes don't reflect the audience I selected

Regenerating with the correct audience setting selected should fix this. Double-check the audience toggle before generating — Internal and External produce meaningfully different language and framing.

### I can't find a Release I previously created

Check whether the Release has been archived. Archived Releases are removed from the active list but are preserved and accessible from the archived section.

### The Release board is showing outdated status for Features synced from JIRA

Check your JIRA sync configuration in Settings > Integrations. If automatic sync is enabled, confirm the polling interval and wait for the next sync cycle. If webhooks are configured, check that they're still active. As a quick fix, trigger a manual sync from the integration settings.

---

*This is version 1 of the Releases documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
