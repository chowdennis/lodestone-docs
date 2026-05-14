# Documents — Advanced Features & Customization
*Getting the most from AI generation, the Opportunity Canvas, and document strategy*

---

## Getting Better Output from AI Generation

The quality of AI-generated Documents is directly tied to the inputs Lodestone has to work with. There are two levers you control:

### Feature Description
This is the most important input. A strong Feature Description should answer:
- What problem does this solve?
- Who is it for?
- What does the solution do?
- What does success look like?

The more specific and context-rich your description, the less generic the output will be. Treat the description as a brief — write it as if you were handing it to a colleague and asking them to draft the document for you.

### Organization Description
Set in Settings > Organization, the Organization Description provides Lodestone with context about your company, industry, and customer base. This context is applied to every document generation across the platform.

If your AI output consistently feels off-brand or irrelevant to your domain, improving the Organization Description is usually the fastest fix. A description that captures your industry, business model, and customer type makes a meaningful difference.

> **Example:** A generic Organization Description like "We build software" will produce generic output. A description like "We build project management software for mid-market construction firms" gives the AI enough context to produce industry-relevant language.

---

## The Opportunity Canvas

The Opportunity Canvas is the most versatile Document type in Lodestone. It's worth understanding it in more depth than the other types.

### What it captures
The Opportunity Canvas is a structured one-pager designed to answer the key questions stakeholders ask about any new initiative:
- What is the problem or opportunity?
- Who is affected?
- What is the proposed solution?
- What is the expected value?
- What are the risks or unknowns?

### Why it's the most-used document
The Opportunity Canvas sits at the intersection of thinking aid and communication asset. It's detailed enough to be substantive, but concise enough to share widely. Strong PMs often generate it early in a Feature's lifecycle and use it as the anchor document for stakeholder conversations.

### Its role in Roadmap exports
When you export a Roadmap as a PowerPoint presentation, Lodestone automatically collects Opportunity Canvases for all Features in the Roadmap and appends them as slides at the end of the deck. This means a well-maintained set of Opportunity Canvases effectively self-assembles into a supporting appendix for your roadmap presentation — with no manual work required.

---

## Matching Document Type to Lifecycle Stage

Not every document is useful at every stage of a Feature's lifecycle. A rough guide:

| Lifecycle stage | Most useful documents |
|---|---|
| Early discovery / idea validation | Opportunity Canvas |
| Stakeholder alignment | Opportunity Canvas, PRD |
| Engineering handoff | PRD, User Stories, Prototype Prompt |
| QA and testing | UAT Test Plan |
| Launch preparation | Customer Email, Blog Post, Social Posts |
| User enablement | User Guide Documentation |

Using the right document at the right stage avoids producing artifacts that nobody reads and keeps your effort focused where it matters.

---

## Using the Prototype Prompt

The Prototype Prompt is a document type with a specific use case: it generates a prompt designed to be pasted directly into an AI prototyping tool (such as v0, Bolt, or similar).

The Prototype Prompt is optimized for the following AI prototyping tools:

- **Lovable**
- **Vercel (v0)**
- **Replit**
- **Bolt**

Copy the generated prompt and paste it directly into any of these tools to get a working prototype of your Feature concept without writing the prompt yourself.

---

## Customizing AI Prompts per Document Type

Admin-level customization of AI prompts per document type is not yet available. This is a planned enhancement — when it ships, admins will be able to tailor the instructions Lodestone uses to generate each document type, allowing output to better reflect your team's specific style, terminology, and standards.

---

## Documents and the Roadmap PPT Export

The relationship between Documents and Roadmap exports is worth understanding if you regularly present roadmaps to stakeholders.

When you export a Roadmap as a full PowerPoint presentation:
- Lodestone walks through the roadmap hierarchy slide by slide
- Opportunity Canvases for Features in the Roadmap are automatically collected
- They appear as an appendix at the end of the deck

This means keeping your Opportunity Canvases up to date pays dividends every time you export a Roadmap presentation. You get a richer, more substantive deck without any additional assembly work.

---

## Documents and Permissions

Any team member can generate, edit, export, and delete Documents — deletion is not restricted to admins. Admin-level configuration such as the Organization Description (which affects AI output quality across all documents) is restricted to admins.

---

*Next: Troubleshooting & FAQs — common issues with document generation, export problems, and frequent questions.*
