# Settings — How-tos & Workflows
*Step-by-step guides for configuring your Lodestone workspace*

---

## Updating Organization Details

*Admin only.*

1. Go to Settings > Organization.
2. Update the **Organization Name**, **Description**, or **Logo** as needed.
3. Save changes.

### Writing a strong Organization Description
The Organization Description is used as context for all AI-generated Documents across the platform. The more specific and accurate it is, the more relevant the AI output will be.

A strong description covers:
- What your company does
- Your industry and business model
- Who your customers are
- Any domain-specific context that would help an AI write on your behalf

> **Example:** "We build project management software for mid-market construction firms. Our customers are project managers and site supervisors who need to coordinate complex multi-site builds. We sell primarily through a direct sales motion into companies with 100–500 employees."

That level of specificity produces meaningfully better Document output than "We build software for businesses."

---

## Archiving and Unarchiving Your Organization

*Admin only.*

Archiving an organization removes access for all Builder members. Admins retain access and can unarchive at any time.

### To archive
1. Go to Settings > Organization.
2. Select the Archive option.
3. Confirm. Builders immediately lose access to the workspace.

### To unarchive
1. Log in as an Admin.
2. Go to Settings > Organization.
3. Select Unarchive. Builder access is restored immediately.

> **Use case:** Archiving is useful when a workspace needs to be temporarily suspended — for example, during a team restructure or when transitioning between product phases.

---

## Inviting Team Members

*Any member can invite; role assignment requires Admin.*

1. Go to Settings > Team.
2. Enter the new member's email address.
3. Assign their role — **Admin** or **Builder**.
4. Send the invitation.

The invited member receives an email with a link to join the workspace. Once they accept, they have immediate access based on their assigned role.

---

## Changing a Member's Role

*Admin only.*

1. Go to Settings > Team.
2. Find the member whose role you want to change.
3. Update their role to Admin or Builder.

Role changes take effect immediately. Note that there must always be at least one Admin — you cannot demote the last Admin in a workspace.

---

## Removing a Team Member

1. Go to Settings > Team.
2. Find the member you want to remove.
3. Select Remove.

Removed members immediately lose access to the workspace. Their previously created content (Features, Documents, Roadmaps, etc.) remains in the workspace.

---

## Configuring Feature Status Stages

1. Go to Settings > Modules > Feature Status Stages.
2. To **rename** a stage, click its name and edit it directly.
3. To **add** a new stage, use the Add Stage option and enter a name.
4. To **delete** a stage, select the delete option next to it.

> **Important:** Deleting a stage moves all Features currently in that stage to the default stage. Review which Features are in the stage before deleting to avoid unexpected status changes.

Status stage changes apply immediately across the entire platform — the backlog, all Releases, and every view where Feature status appears.

---

## Configuring Feature Evaluation Criteria

1. Go to Settings > Modules > Feature Evaluation Criteria.
2. Select a built-in framework (Value/Effort, RICE, ICE, WSJF, etc.), or choose to create a custom framework.
3. If creating a custom framework:
   - Define each input field and its data type
   - Define the calculation formula
4. Save. The new framework's fields appear in the Feature backlog and on Feature Detail pages.

Only one evaluation framework is active at a time. Previously entered scores for an inactive framework are preserved and reappear if you switch back.

---

## Setting the Strategy Default

1. Go to Settings > Modules > Strategy Configuration.
2. Choose **Top-Down** or **Bottom-Up** as the workspace default.
3. Save.

This sets the default approach when creating a new Strategy. It can be overridden at the point of creating any individual Strategy — the workspace default is a starting point, not a constraint.

---

## Managing Integrations

Integration setup and configuration is covered in detail in the Integrations module guide. To access integration settings:

1. Go to Settings > Integrations.
2. Find the integration you want to connect or configure.

Currently available: Fireflies, Gong (Admin only to connect), and JIRA.

---

*Next: Advanced Features & Customization — using Settings strategically, custom evaluation frameworks, and organizational configuration tips.*
