# Integrations — Troubleshooting & FAQs
*Common connection issues, sync problems, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can connect and manage integrations?

Any workspace member can connect and configure integrations — it is not restricted to admins.

### Which integrations are currently live?

Three integrations are live: Fireflies, Gong, and JIRA.

### Does the JIRA integration support JIRA Server?

No. The JIRA integration currently supports JIRA Cloud only. JIRA Server is not supported.

### Can I connect multiple JIRA projects?

Yes. A workspace can connect to multiple JIRA projects, each with its own sync configuration and status mapping.

### Do Fireflies and Gong sync any data back to those platforms?

No. Both are discovery-only integrations — they bring transcripts into Lodestone's Extracts module. Nothing flows back to Fireflies or Gong from Lodestone.

### Can I manually link an existing JIRA issue to a Lodestone Feature?

Yes. From the Feature Detail page, you can link any existing JIRA issue to the Feature. Once linked, it syncs according to your configured sync behavior.

### Can I unlink a Feature from a JIRA issue?

Yes. Unlinking from the Feature Detail page stops future sync between the two objects but does not delete either. Both remain in their respective systems.

### What happens to my data if I disconnect an integration?

Disconnecting stops future syncing but preserves all existing data in Lodestone. Features, status history, and any previously imported transcripts are not removed.

### Should I use Automatic Sync, Webhooks, or both for JIRA?

Most teams should use both. Webhooks provide real-time sync; Automatic Sync acts as a safety net for any webhook events that are missed. Running both gives you real-time accuracy with built-in redundancy.

### What JIRA object level should I map Lodestone Features to?

It depends on how your team structures JIRA. Epic and Story are the most common choices. Use Epic if each Feature represents a large initiative with multiple delivery tasks beneath it; use Story if Features map more directly to individual user-facing capabilities.

### Will changing the status mapping affect existing Features?

Status mapping changes apply to future sync events — they don't retroactively update Features that have already been synced. If a Feature is stuck at an incorrect status due to a previous mapping error, update it manually after correcting the mapping.

---

## Common Issues

### JIRA features aren't syncing to Lodestone

Check the following in order:

1. Confirm the JIRA integration is connected in Settings > Integrations
2. Check that Automatic Sync is enabled, or trigger a manual sync
3. Review the status mapping — if the JIRA status isn't mapped to a Lodestone stage, the update won't come through
4. If webhooks are configured, verify they're still active in your JIRA webhook settings
5. Confirm the Feature is linked to a JIRA issue — unlinked Features don't receive sync updates

### A Feature's status isn't updating even though JIRA shows it as done

This is almost always a status mapping issue. Check Settings > Integrations > JIRA and confirm that the "Done" status (or whatever your JIRA workflow uses) is mapped to the Lodestone "Completed" stage. If your JIRA project uses a custom status name like "Released" or "Closed", it needs to be explicitly mapped.

### I'm seeing duplicate Features after connecting JIRA

This can happen if automatic sync creates new Lodestone Features from JIRA issues that already exist as Features in Lodestone. To fix this, manually link the existing Lodestone Features to their corresponding JIRA issues and remove the duplicates. Going forward, use the manual link option for existing issues rather than relying on auto-creation.

### Fireflies or Gong meetings aren't appearing in the Extracts import list

For Fireflies:
- Confirm the Fireflies integration is connected in Settings > Integrations
- Check that the transcript has been generated in Fireflies — meetings without completed transcripts won't appear
- Try disconnecting and reconnecting if the list appears stale

For Gong:
- Confirm the Gong integration is connected in Settings > Integrations
- Check that the accounts you selected during setup include the user whose calls you're looking for
- To change which accounts are included, update the Gong configuration in Settings > Integrations

### Webhooks stopped working after a JIRA configuration change

JIRA webhooks can become inactive if the JIRA project configuration changes — for example, if the project is renamed, moved, or if webhook permissions are updated. Check your JIRA webhook settings to confirm the webhook is still active and pointing to the correct Lodestone endpoint. Reconnecting the integration from Settings > Integrations often resolves this.

### Status updates are appearing in Lodestone with a delay

If webhooks are configured, updates should be near-instant. A delay usually means the webhook isn't firing correctly — check JIRA's webhook delivery log for errors. If automatic sync is your only method, updates will arrive on the next polling cycle (e.g. hourly). To reduce delay, enable webhooks alongside automatic sync.

---

*This is version 1 of the Integrations documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
