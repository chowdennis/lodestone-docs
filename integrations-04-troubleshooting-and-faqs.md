# Integrations — Troubleshooting & FAQs
*Common connection issues, sync problems, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can connect and manage integrations?

Only Admins can connect and configure integrations. Builders can view
integration status but cannot change Settings.

### Which integrations are currently live?

Live integrations include Fireflies, Gong, Fathom, Granola, tl;dv, Zendesk, Freshdesk, Salesforce, JIRA, Asana, Amplitude, PostHog, and the Lodestone API and MCP. Transcript integrations and Zendesk support configurable auto-sync. Freshdesk syncs on demand.

### Why is Usage Analytics still locked after connecting PostHog?

Usage Analytics unlocks only while the PostHog card in Settings > Integrations
shows **Connected**. If it shows **Needs attention**, select **Check
connection** to see the provider error, then **Reconnect** if the key was
revoked, its scopes changed, or the project is no longer available.

Connecting Amplitude does not unlock Usage Analytics. Only a connected PostHog
project does.

### Why can't Lodestone connect to PostHog?

Confirm that you entered a Personal API Key beginning with `phx_`, not a
project API key. The key must include the `project:read` and `insight:read`
scopes. Also confirm that you selected the correct PostHog Cloud URL:
`https://us.posthog.com` for US Cloud or `https://eu.posthog.com` for EU Cloud.

If PostHog shows **Needs attention**, select **Check connection** to see the
latest provider error. Reconnect PostHog if the Personal API Key was revoked,
its scopes changed, or the selected project is no longer available.

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

### Does Zendesk analyze every ticket on every sync?

No. Each ticket is analyzed once. Later syncs skip tickets Lodestone has already analyzed and report them as skipped. Only public support conversations are analyzed.

### Does Zendesk sync anything back to Zendesk?

No. Lodestone only reads tickets. Feature suggestions stay in Extract until you review them and add them to the Backlog.

### Does Freshdesk sync automatically?

No. Select **Sync Tickets** on the Freshdesk card in Settings > Integrations whenever you want new Extracts. Each sync checks tickets updated in the last 30 days and skips tickets that haven't changed since they were last analyzed.

### Why did a Freshdesk ticket produce no Extracts?

Lodestone only creates Extracts from actionable customer feature asks in public ticket conversations. The sync summary counts tickets like this as "without eligible feature asks". Private notes are not analyzed.

### Does Salesforce sync on a schedule?

Salesforce has no sync settings. Once connected, the Salesforce card shows **Connected** and the connection date.

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

### JIRA webhooks stopped working and JIRA shows rejected deliveries

Each organization now has its own JIRA webhook URL, and Lodestone rejects deliveries that aren't signed with your organization's webhook secret. Webhooks set up with the older shared Lodestone URL, or without a secret, no longer deliver updates. To fix this, go to Settings > Integrations, select **Disable** under the JIRA integration's **Real-time Webhooks**, then select **Enable Webhooks**. If Lodestone asks for manual setup, update the webhook in JIRA under **⚙ Settings → System → WebHooks** with the new URL and secret it shows.

### I lost the JIRA webhook secret

Lodestone shows the secret only once. Select **Disable** and then **Enable Webhooks** to get a new secret, then paste it into the webhook's **Secret** field in JIRA.

### Webhooks stopped working after a JIRA configuration change

JIRA webhooks can become inactive if the JIRA project configuration changes — for example, if the project is renamed, moved, or if webhook permissions are updated. Check your JIRA webhook settings to confirm the webhook is still active and pointing to the correct Lodestone endpoint. Reconnecting the integration from Settings > Integrations often resolves this.

### Zendesk didn't connect after I signed in

If the Zendesk card doesn't appear after you approve access, check that the subdomain, Client ID, and Client Secret match your Zendesk OAuth client, and that the client's redirect URL is registered in Zendesk. Then select **Add Integration** and connect Zendesk again.

### Freshdesk won't connect

Lodestone shows the reason under the connection form:

| Message | What to do |
|---|---|
| "Freshdesk rejected the API key." | Copy the API key again from your Freshdesk profile settings and re-enter it. |
| "Enter a Freshdesk subdomain or HTTPS Freshdesk domain without ports, paths, or credentials." | Enter just the subdomain (`company`) or the domain (`company.freshdesk.com`). |
| "The Freshdesk account does not permit this operation." | Use an API key from a Freshdesk user who can view tickets. |
| "Unable to complete the Freshdesk request. Check the domain and try again." | Check the domain for typos. |
| "Freshdesk rate limit reached. Try again later." | Wait a few minutes, then try again. |

### A Freshdesk sync stopped partway

If the sync is interrupted — for example, because you left the page — Lodestone shows "Sync stopped. N Extracts created so far. Retry Sync Tickets; unchanged tickets will be skipped." Select **Sync Tickets** again and keep the page open until it finishes. Extracts already created are kept, and unchanged tickets are skipped.

### Salesforce didn't connect after I signed in

Settings > Integrations shows "Failed to connect Salesforce:" followed by a reason. Check that the Client ID and Client Secret match the Consumer Key and Consumer Secret of your Connected App, and that the Connected App has the required OAuth scopes and callback URL. Then select **Add Integration** and connect Salesforce again. If you see "Client ID and Client Secret are required", fill in both fields before selecting **Connect**.

### Some Zendesk tickets failed during sync

Lodestone lists the failed tickets after the sync. Select **Sync** on the Zendesk card to retry them; tickets that were already analyzed are skipped.

### Status updates are appearing in Lodestone with a delay

If webhooks are configured, updates should be near-instant. A delay usually means the webhook isn't firing correctly — check JIRA's webhook delivery log for errors. If automatic sync is your only method, updates will arrive on the next polling cycle (e.g. hourly). To reduce delay, enable webhooks alongside automatic sync.

---

*This is version 1 of the Integrations documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
