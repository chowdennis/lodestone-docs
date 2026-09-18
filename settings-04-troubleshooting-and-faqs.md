# Settings — Troubleshooting & FAQs
*Common configuration issues and answers to frequent questions*

---

## Frequently Asked Questions

### Who can access Settings?

Both Admins and Builders can access Settings, but they have different permissions. Builders cannot update the organization name, description, or logo; assign or change member roles; or connect the Gong integration. Admins can do everything.

### What's the difference between Admin and Builder?

Admins have full access to all platform features and Settings. Builders have full access to all planning modules (Features, Roadmaps, Releases, Strategy, Documents, Auctions, Extracts) but cannot change organization-level identity, manage roles, or connect Gong.

### Can I change a member's role after they've joined?

Yes. Admins can change any member's role at any time from Settings > Team. Changes take effect immediately.

### Is there always at least one Admin required?

Yes. Lodestone enforces a minimum of one Admin per workspace. You cannot remove or demote the last Admin.

### What happens when an organization is archived?

Builders immediately lose access to the workspace. Admins retain access and can unarchive at any time from Settings > Organization, which immediately restores Builder access.

### Are Settings changes global or per-user?

Global. All Settings apply across the entire workspace. There are no per-user overrides for status stages, evaluation criteria, organization description, or other configuration.

### What happens to Features when I delete a status stage?

Features currently in the deleted stage are automatically moved to the default stage. Review which Features are in the stage before deleting to avoid unexpected status changes across your backlog and Release boards.

### Can I have more than one evaluation framework active at the same time?

No. Only one evaluation framework is active at a time. Switching frameworks changes which fields are displayed — previously entered scores for the inactive framework are preserved and reappear if you switch back.

### Is the Strategy Default setting a hard constraint or just a preference?

It's a default, not a constraint. The workspace default pre-selects an approach when creating a new Strategy, but it can be overridden at the point of creation. Each Strategy keeps its own approach regardless of what the default is set to.

### Can Builders invite new team members?

Yes. Any member can invite new members. However, only Admins can assign or change roles — Builders cannot promote someone to Admin or demote an Admin to Builder.

### Who can create and delete object types in Taxonomy?

Only Admins can create, rename, or delete object types in Settings > Taxonomy. All members can assign types to items and change an item's type from the Backlog.

### Can I rename an object type prefix after items have been assigned to it?

No. Prefixes are locked once items have been assigned to the type, because changing the prefix would alter existing typed IDs (e.g. FEAT-001 → NEWFEAT-001). Typed IDs are designed to be stable references. If you need a different prefix, create a new type with the correct prefix and reassign items to it.

### What happens to items when I delete an object type?

You must reassign all items currently using the type before deletion is allowed. The delete dialog shows the count of affected items and asks you to select a replacement type. Items are moved to the replacement type, and the original type is then removed.

### Can passkeys replace my password?

Passkeys are an additional sign-in option, not a replacement. Your password remains active. You can sign in with either method — use whichever is more convenient for your device and context.

### Can I set up a passkey on multiple devices?

Yes. You can register as many passkeys as you like from Account > Passkeys — one per device is the typical pattern. Each passkey is specific to the device it was created on.

---

## Common Issues

### AI-generated Documents feel generic and off-brand

The most common cause is a missing or vague Organization Description. Go to Settings > Organization and update it with specific details about your industry, business model, customer profile, and product positioning. See the Advanced section for guidance on what to include.

### A team member can't access certain Settings options

Check their role. In Settings, Builder restrictions are visually enforced — unavailable fields and sections appear greyed out and non-interactive, and an Admin-required notice is displayed. Builders cannot change the organization name, description, or logo; assign roles; or connect Gong. The Features sub-tab under Settings > Modules is hidden entirely for Builders.

If the team member needs these capabilities, an Admin can promote them to Admin from Settings > Team.

### Features have moved to the wrong status after a Settings change

This happens when a status stage is deleted — Features in that stage are automatically moved to the default stage. If this caused unexpected changes, manually update the affected Features to the correct stage. Going forward, review which Features are in a stage before deleting it.

### The evaluation scores have disappeared from the Feature backlog

You've likely switched evaluation frameworks. Previously entered scores aren't deleted — they're preserved for the inactive framework. Switch back to the previous framework in Settings > Modules > Feature Evaluation Criteria to restore visibility of those scores.

### I can't remove the last Admin from the workspace

This is a safeguard — there must always be at least one Admin. To remove the current Admin, first promote another member to Admin, then remove or demote the original.

### A Builder is trying to create or delete an object type in Taxonomy but can't

Creating, renaming, and deleting object types in Settings > Taxonomy is restricted to Admins. Builders can assign types to items and change an item's type from the Backlog, but they cannot modify the type list itself. Have an Admin make the change from Settings > Taxonomy.

### A Builder is trying to connect the Gong integration but can't

Connecting Gong is restricted to Admins. Have an Admin connect the integration from Settings > Integrations. Once connected, Builders can use the Gong import in the Extracts module.

### The Organization has been archived and Builders have lost access

An Admin needs to log in and unarchive from Settings > Organization. Builder access is restored immediately upon unarchiving.

---

## Trial & Subscription Questions

### How long is the free trial?

Lodestone trials last 31 days from the date you sign up.

### Where can I see how many days are left in my trial?

The sidebar shows a **Trial account** card with a live countdown and a progress bar. The count is calculated from the exact moment your trial expires, not your sign-up date, so it is always accurate to the day.

### What happens when the trial expires?

If your trial expires without an active subscription, the app content blurs and a paywall appears. You can still access the upgrade flow and enter an access code from the paywall overlay. Your data is not deleted.

### Can I still access Lodestone if my trial has ended?

Only through the paywall — you can upgrade to a paid plan or apply an access code from that screen. Once payment is confirmed or a valid code is applied, full access is restored immediately.

### What does an access code do?

An access code extends your trial by a specified number of days from the time you apply it. If your trial has not yet expired, the extension starts from the current expiry date. If your trial has already expired, the extension starts from today.

---

## Common Trial Issues

### The sidebar shows the wrong number of days left

If the days-left count looks wrong, try a hard refresh (Cmd+Shift+R or Ctrl+Shift+R). The countdown is calculated server-side from your trial expiry date each time the page loads — it cannot drift or show stale data unless the page hasn't been refreshed.

### My trial should be active but the paywall appeared

Check whether your trial expiry date has passed. The paywall appears as soon as the trial expires with no active subscription. If you believe this is an error, contact support with your account email — an access code can extend your access immediately while the issue is investigated.

### I applied an access code but the paywall is still showing

After applying a code, the page redirects to your account page with a confirmation. If the paywall reappears after navigating away, try signing out and back in to refresh your session. If the issue persists, contact support — the code may not have been applied correctly.

*This is version 1 of the Settings documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
