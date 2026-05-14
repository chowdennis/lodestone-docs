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

---

## Common Issues

### AI-generated Documents feel generic and off-brand

The most common cause is a missing or vague Organization Description. Go to Settings > Organization and update it with specific details about your industry, business model, customer profile, and product positioning. See the Advanced section for guidance on what to include.

### A team member can't access certain Settings options

Check their role. Builders cannot update the organization name, description, or logo; assign roles; or connect Gong. If they need these capabilities, an Admin can promote them to Admin from Settings > Team.

### Features have moved to the wrong status after a Settings change

This happens when a status stage is deleted — Features in that stage are automatically moved to the default stage. If this caused unexpected changes, manually update the affected Features to the correct stage. Going forward, review which Features are in a stage before deleting it.

### The evaluation scores have disappeared from the Feature backlog

You've likely switched evaluation frameworks. Previously entered scores aren't deleted — they're preserved for the inactive framework. Switch back to the previous framework in Settings > Modules > Feature Evaluation Criteria to restore visibility of those scores.

### I can't remove the last Admin from the workspace

This is a safeguard — there must always be at least one Admin. To remove the current Admin, first promote another member to Admin, then remove or demote the original.

### A Builder is trying to connect the Gong integration but can't

Connecting Gong is restricted to Admins. Have an Admin connect the integration from Settings > Integrations. Once connected, Builders can use the Gong import in the Extracts module.

### The Organization has been archived and Builders have lost access

An Admin needs to log in and unarchive from Settings > Organization. Builder access is restored immediately upon unarchiving.

---

*This is version 1 of the Settings documentation, based on the Lodestone knowledge base from early 2025, updated with confirmed platform behavior.*
