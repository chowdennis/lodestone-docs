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

1. Go to Settings > Modules, then select the **Features** sub-tab.
2. To **rename** a stage, click its name and edit it directly.
3. To **add** a new stage, use the Add Stage option and enter a name.
4. To **delete** a stage, select the delete option next to it.

> **Important:** Deleting a stage moves all Features currently in that stage to the default stage. Review which Features are in the stage before deleting to avoid unexpected status changes.

Status stage changes apply immediately across the entire platform — the backlog, all Releases, and every view where Feature status appears.

---

## Configuring Feature Evaluation Criteria

1. Go to Settings > Modules, then select the **Features** sub-tab.
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

## Configuring Object Types (Taxonomy)

*Admin only.*

The Taxonomy tab lets you define the object types available in your workspace — such as Epics, Bugs, or Tasks — in addition to the built-in Feature type.

### Creating a new object type

1. Go to Settings > Taxonomy.
2. Click **Add Type**.
3. Enter a **Name** (e.g. "Epic") and a **Prefix** of 2–8 uppercase letters (e.g. "EPIC"). The prefix is used to generate typed IDs like EPIC-001.
4. Optionally configure **Allowed Parent Types** and **Allowed Child Types** to define valid hierarchy relationships for this type.
5. Save. The new type is immediately available for assignment in the Backlog.

> **Note:** The prefix cannot be changed after items have been assigned this type, as doing so would invalidate existing typed IDs. Choose prefixes deliberately.

### Renaming an object type

Type names can be updated at any time from Settings > Taxonomy without affecting typed IDs — the prefix and sequential counter remain stable regardless of the display name.

### Deleting an object type

Deleting a type requires reassigning all items currently using it. The delete dialog lists the number of items affected and prompts you to choose a replacement type. Items are reassigned before the type is removed.

### Setting the top-tier type

The top-tier type represents the highest level in your hierarchy. To change it:

1. Go to Settings > Taxonomy.
2. Use the **Top-Tier Type** selector to choose the type that should sit at the top of your object hierarchy.
3. Save.

---

## Managing Integrations

Integration setup and configuration is covered in detail in the Integrations module guide. To access integration settings:

1. Go to Settings > Integrations.
2. Find the integration you want to connect or configure.

Currently available: Fireflies, Gong (Admin only to connect), and JIRA.

---

## Setting Up Multi-Factor Authentication

Multi-factor authentication (MFA) is a personal account setting — it applies to your individual login, not to the organization. MFA is available to all users regardless of role.

To access MFA settings, navigate to **Account > Multi-Factor Authentication** (this is separate from org-level Settings).

### TOTP (Authenticator App)

1. Select **Authenticator App**.
2. Scan the QR code displayed on screen with your authenticator app (such as Google Authenticator, Authy, or 1Password).
3. Enter the verification code from your app to confirm setup.

Once set up, you will be prompted to enter a code from your authenticator app on each login.

### SMS

1. Select **SMS**.
2. Enter your mobile phone number.
3. Enter the verification code sent to your phone to confirm setup.

Once set up, you will receive a text message with a verification code on each login.

---

## Setting Up Passkeys

Passkeys are a personal account setting — they apply to your individual login and are available to all users regardless of role. A passkey lets you sign in using your device's biometric sensor (fingerprint, face), PIN, or a hardware security key — no password required.

To access passkey settings, navigate to **Account > Passkeys** (separate from org-level Settings).

### Registering a passkey

1. Go to **Account > Passkeys**.
2. Optionally enter a name for the passkey (e.g. "MacBook Touch ID") to identify it later.
3. Click **Add Passkey**.
4. Follow your device's prompt to complete registration using your fingerprint, face, or PIN.

Once registered, you can sign in to Lodestone using the passkey instead of your password. When you next sign in from the same device, a "Continue with Passkey" button appears on the login page.

### Setting up a passkey from the login prompt

After signing in, Lodestone may show a one-time prompt to set up a passkey. You can click **Set up passkey** to register immediately, **Maybe later** to be prompted again next time, or **Don't ask again** to permanently dismiss the prompt.

### Removing a passkey

1. Go to **Account > Passkeys**.
2. Click the delete icon next to the passkey you want to remove.

Removing a passkey does not affect your password or other sign-in methods.

---

*Next: Advanced Features & Customization — using Settings strategically, custom evaluation frameworks, and organizational configuration tips.*
