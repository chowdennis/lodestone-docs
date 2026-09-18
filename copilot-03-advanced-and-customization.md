# Copilot — Advanced & Customization
*Getting the most from Copilot, rate limits, and workflow integration*

---

## How Intent Classification Works

Copilot automatically decides whether to treat your message as a question (Chatbot mode) or an action request (Agentic mode). You never need to switch modes manually.

The classification is based on the language of your message and the context of your recent conversation. Messages that describe actions — "create", "add", "update", "list", "generate" — route to Agentic mode. Messages that ask questions or seek explanations — "what", "how", "why", "explain" — route to Chatbot mode.

If a message is ambiguous, Copilot defaults to Chatbot mode and responds conversationally. You can always rephrase as an instruction if you wanted an action.

---

## Using Context Within a Conversation

Copilot maintains the context of your current conversation — up to the last several exchanges. This makes follow-up instructions natural:

- After searching for features, you can say "update the first one to In Progress" without re-specifying which feature
- After creating a feature, you can say "now add it to my Q3 roadmap" and Copilot knows what "it" refers to
- After generating a PRD, you can ask "what's missing from this?" and Copilot answers in the context of what it just created

To keep Copilot on track during complex multi-step tasks, complete one logical sequence in one conversation before starting something entirely different.

---

## Giving Copilot Enough Context

Agentic mode is most reliable when your workspace objects have clear, descriptive names. If you have three features with similar names, Copilot may ask you to confirm which one you mean. Using the feature key (e.g. FEAT-12) is always unambiguous.

**More reliable:**
> "Update FEAT-12 to Completed"  
> "Generate a PRD for the feature called Single Sign-On"

**Less reliable:**
> "Update the login feature" (if multiple features have "login" in the name)

---

## Rate Limits

Copilot is subject to rate limiting per user to ensure platform stability for all users. If you hit a rate limit, Copilot will let you know. Wait a short time and then continue. There is no need to reload the page.

---

## What Copilot Knows About Your Workspace

In Agentic mode, Copilot can access:
- Your backlog items (features): name, key, status, description
- Your roadmaps (projects): name, list of features
- Your releases: name, status, feature count
- Your strategies: name

It does not currently have access to:
- Customer quotes attached to features
- Evaluation scores or RICE/custom field values
- Financial Forecast models or assumptions
- Bento Grids or export history
- Competitive Intelligence reports

This means Copilot is best used for structural and workflow tasks — creating, organizing, and updating objects — rather than analytical tasks that depend on scores or evidence.

---

## Using Copilot Alongside Other Modules

Copilot works best as an accelerator for tasks you'd otherwise do manually. Common patterns:

**Rapid feature capture:** When you're in a meeting and ideas are coming fast, open Copilot and dictate features by name. "Create a feature called X, create a feature called Y..." — then organize and score them in the backlog afterward.

**Post-extract action:** After reviewing Extracts, instead of navigating to each feature to generate a PRD, ask Copilot: "Generate PRDs for all features related to onboarding." (Note: this works best when features are named clearly.)

**Roadmap assembly:** Create a new Roadmap and add multiple features to it in a single conversation, then open the Roadmap to review and organize the hierarchy visually.

**Document generation in bulk:** Rather than opening each feature detail page to generate documents, ask Copilot to generate them for specific features by name or key.

---

*Next: Troubleshooting & FAQs — what to do when Copilot doesn't behave as expected.*
