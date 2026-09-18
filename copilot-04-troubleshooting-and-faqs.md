# Copilot — Troubleshooting & FAQs
*Common questions and what to do when things don't work as expected*

---

## Who can use Copilot?

All workspace members — both Admins and Builders — have access to Copilot. It is available from every page in Lodestone.

---

## Copilot created the wrong feature / took the wrong action. What do I do?

Copilot respects the same permissions as your account but does not have an undo button. If it creates something incorrectly, you can:
- Ask it to fix it: "Update that feature name to X" or "Change the status to Not Started"
- Navigate to the object directly and edit it manually in the normal UI

For anything Copilot cannot undo (like a mistaken creation you want removed), delete the object from the standard backlog or roadmap UI.

---

## Copilot isn't finding the right feature when I ask it to act on one.

If your workspace has multiple features with similar names, Copilot may ask for clarification or act on the wrong one. The most reliable way to reference a specific feature is to use its feature key (e.g. FEAT-7) instead of a partial name.

You can ask Copilot to list features first: "List features with 'auth' in the name" — then use the key from the results in your next instruction.

---

## Copilot answered my question incorrectly or gave outdated information.

Copilot's knowledge base is periodically updated to reflect changes to the platform. If you receive incorrect information about Lodestone:

- Try rephrasing the question
- Check the relevant help documentation directly
- If the answer seems significantly wrong, it may indicate the knowledge base hasn't been updated yet for a recent feature

For questions about your own workspace data (features, roadmaps, etc.), Copilot reads live from your workspace, so that information is always current.

---

## I asked Copilot to do something but it just answered my question instead.

Copilot classifies intent based on your message. If your request reads more like a question than an instruction, it defaults to Chatbot mode.

Try rephrasing as a clear instruction:

- Instead of: "Can you make a feature called SSO?"
- Try: "Create a feature called SSO"

- Instead of: "Is there a way to add this to my roadmap?"
- Try: "Add this feature to my Q3 Roadmap"

---

## Copilot is returning a rate limit error.

Copilot is rate-limited per user. If you've sent many messages in a short time, wait a minute and try again. This resolves automatically — no page reload is needed.

---

## I lost my conversation history. What happened?

Conversation history is stored locally in your browser and expires. Once a conversation expires, it is gone — it is not recoverable from the server. Starting a fresh conversation is the only option.

This is intentional: conversation history is session context, not a permanent record. Use Copilot for in-the-moment tasks, not as a log of past actions.

---

## Can Copilot access my quotes, evaluation scores, or financial models?

Not currently. Copilot's workspace access is limited to backlog items (name, status, description, key), roadmaps, releases, and strategies. It does not have access to customer quotes, RICE scores, custom evaluation fields, or Financial Forecast data.

If you need to act on those objects, use the relevant module directly.

---

## Can Copilot take actions in JIRA or other external tools?

No. Copilot operates only within Lodestone. It does not have access to external tools, even if you have integrations connected (JIRA, Gong, Fireflies, etc.). Actions taken through Copilot in Lodestone will sync to JIRA in the normal way if the JIRA integration is active.

---

## Does Copilot delete things?

Copilot cannot delete features, roadmaps, releases, or any other objects. If you ask it to delete something, it will tell you it can't and suggest how to do it manually.

---

## Is there a limit to what I can create through Copilot?

No separate limit applies to objects created through Copilot. The same workspace limits that apply to your account apply regardless of how objects are created.

---
