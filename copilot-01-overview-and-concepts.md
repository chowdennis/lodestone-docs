# Copilot — Overview & Concepts
*What it is, how it works, and what it can do for you*

---

## What Is Copilot?

Copilot is Lodestone's built-in AI assistant. It's accessible from anywhere in the platform through the **Copilot** button in the left-hand navigation. It helps you in two ways: answering questions about Lodestone and product management, and taking actions directly in your workspace — creating features, building roadmaps, generating documents — on your behalf.

Copilot is not a general-purpose chatbot. It knows your workspace, understands Lodestone's modules, and can act on your data. The difference from a typical AI chat tool is that Copilot is wired into the platform — it can see your features, your roadmaps, your releases, and it can make changes when you ask it to.

---

## How to Access Copilot

Click **Copilot** in the left-hand navigation. A chat panel opens on top of the current page. You can close it at any time and return to whatever you were doing — the panel is non-destructive and doesn't navigate away from your current view.

Copilot is available from every module in Lodestone. You don't need to navigate to a special page to use it.

---

## Two Modes

Copilot automatically detects what kind of help you need and routes your message to the appropriate mode. You don't choose the mode manually.

### Chatbot Mode
Used when you ask a question or want to learn something.

- "How does the RICE scoring framework work?"
- "What's the difference between a Roadmap and a Strategy?"
- "How do I connect Gong to Lodestone?"
- "What should I include in a PRD?"

In Chatbot mode, Copilot draws from Lodestone's knowledge base (platform guides, tutorials, FAQs) and product management best practices (RICE, user stories, frameworks, templates) to give you accurate, contextual answers.

### Agentic Mode
Used when you ask Copilot to do something.

- "Create a feature called Single Sign-On"
- "Add that feature to my Q3 Roadmap"
- "Generate a PRD for the SSO feature"
- "Show me all features that are In Progress"
- "Create a release called v2.1"

In Agentic mode, Copilot uses tools connected to your workspace to carry out the requested action. It returns a confirmation of what it did, including links where relevant. All actions respect your current role and permissions — Copilot cannot do things you couldn't do yourself.

---

## What Copilot Can Do

### Questions and guidance (Chatbot mode)
- Explain any Lodestone feature or concept
- Answer product management questions (frameworks, best practices, templates)
- Help you understand the difference between modules or decide which to use

### Actions on your workspace (Agentic mode)
| Action | Example |
|---|---|
| List backlog items | "Show me all features with status In Progress" |
| Create a feature | "Create a feature called Offline Mode" |
| Update a feature | "Set the SSO feature to In Progress" |
| Create a Roadmap | "Create a roadmap called Q4 2026" |
| Add a feature to a Roadmap | "Add SSO to the Q4 roadmap" |
| List Roadmaps | "What roadmaps do I have?" |
| Create a Release | "Create a release called v2.1" |
| List Releases | "What releases are active?" |
| Create a Strategy | "Create a strategy called Platform 2027" |
| List Strategies | "Show me my strategies" |
| Generate documents | "Generate a PRD for the SSO feature" |

---

## What Copilot Cannot Do

Copilot works within the same permissions you have. It cannot:

- Access data in other organizations you are not a member of
- Delete features, roadmaps, or other objects (as of current version)
- Take actions outside of Lodestone (it is not connected to JIRA, Gong, or other external tools)
- Access or reference quotes, evaluation scores, or financial models in responses (it reads backlog items and planning objects, not all sub-objects)

---

## Conversation Persistence

Copilot remembers the context of your current conversation as you chat — you can refer back to things earlier in the exchange ("do that again", "now add it to the roadmap we just created") and Copilot will understand. This context is maintained within the conversation session.

---

*Next: How-tos & Workflows — using Copilot effectively for common tasks.*
