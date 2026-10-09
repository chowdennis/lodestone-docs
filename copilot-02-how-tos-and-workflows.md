# Copilot — How-tos & Workflows
*Step-by-step guides for using Copilot effectively*

---

## Opening Copilot

1. Click **Copilot** in the left-hand navigation bar.
2. The Copilot chat panel opens over your current page.
3. Type your message and press Enter (or click the send button).

To close Copilot, click **Copilot** again in the sidebar, or use the close control inside the panel. Your current page is unaffected.

---

## Asking Questions About Lodestone

Use plain language. You don't need to use special commands.

**Examples:**
- "What is a Bento Grid?"
- "How do I set up the Gong integration?"
- "What's the difference between Actual and Forecast mode in a Release?"
- "When should I use Top-Down vs Bottom-Up Strategy?"

Copilot draws from the Lodestone knowledge base to answer accurately. If you get an incomplete answer, try rephrasing or asking a follow-up — Copilot maintains the context of your conversation within the session.

---

## Asking Questions About Product Management

Copilot also knows product management frameworks and best practices. Ask it anything you'd ask a senior PM or a PM handbook.

**Examples:**
- "Explain the RICE prioritization framework"
- "What should a good PRD include?"
- "How do I run a Buy-a-Feature workshop?"
- "What's the difference between an OKR and a strategic initiative?"

---

## Taking Actions in Your Workspace

When you want Copilot to do something for you, phrase it as an instruction.

### Creating a Feature
> "Create a feature called API Rate Limiting"

Copilot will create the feature in your backlog and confirm with a link.

### Finding Features
> "Show me all In Progress features"  
> "List features with 'auth' in the name"

### Updating a Feature
> "Set the SSO feature to Completed"  
> "Update the description of FEAT-7 to say it handles OAuth 2.0 flows"

### Adding a Feature to a Roadmap
> "Add the SSO feature to the Q3 roadmap"

If Copilot needs to find the right feature or roadmap, it will search your workspace automatically. If there's ambiguity (e.g. two features with similar names), it may ask you to clarify.

### Generating Documents for a Feature
> "Generate a PRD for the SSO feature"  
> "Create user stories for FEAT-12"  
> "Write an Opportunity Canvas for the mobile app feature"

Copilot locates the feature in your backlog and triggers document generation. The document is created and available in the feature's detail page.

### Creating Roadmaps, Releases, and Strategies
> "Create a roadmap called 2027 Vision"  
> "Create a release called v3.0"  
> "Create a strategy named Platform Expansion"

Copilot creates the object and returns a confirmation with a direct link.

### Managing Goals

> "List my goals"  
> "Create a goal called Platform Reliability"  
> "Update GOAL-3's description to say it focuses on EMEA expansion"  
> "What's connected to GOAL-1?"

Copilot can list, create, and update Goals. The downstream query ("What's connected to…") shows which objects, roadmaps, releases, and strategies are linked to a Goal — useful for quickly understanding a Goal's scope without navigating to the Goals module.

### Managing Object Hierarchy

> "Make FEAT-12 a child of GOAL-2"  
> "Add EPIC-4 as a parent of FEAT-7"  
> "Remove GOAL-1 as a parent of FEAT-5"

Copilot can add and remove parent/child relationships between objects. It accepts typed IDs (like FEAT-12 or GOAL-2) and resolves them automatically — you don't need to find canonical IDs first. It will confirm whether the relationship was added or removed and describe the resulting hierarchy.

### Archiving and Restoring Objects

> "Archive the SSO feature"  
> "Archive FEAT-33"  
> "Restore FEAT-42"

Archiving hides an object from the active Backlog without deleting it. The object is preserved and can be restored at any time. Copilot will confirm whether the operation changed the object's state.

Copilot does not permanently delete objects — if you ask it to delete something, it will ask if you meant to archive it instead.

---

## Chaining Actions in One Conversation

Because Copilot remembers the context of your conversation, you can chain actions without repeating yourself.

**Example sequence:**
1. "Create a feature called Dark Mode"
2. "Add it to the Q4 roadmap"
3. "Generate an Opportunity Canvas for it"
4. "Now set its status to In Progress"

Each follow-up builds on what was already done — you don't need to name the feature again.

---

## What Happens When Copilot Isn't Sure

If Copilot can't find the object you're referring to, it will ask for clarification rather than guessing. If it can't complete an action due to a permission issue or missing data, it will tell you what's needed.

If the response doesn't seem right, try being more specific — including a feature key (like FEAT-7) or a full name is more reliable than a partial name when multiple similar items exist.

---

*Next: Advanced Features & Customization — getting the most from Copilot, rate limits, and using Copilot alongside other modules.*
