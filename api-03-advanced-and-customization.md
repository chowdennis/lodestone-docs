# Lodestone API — Advanced Features & Customization
*Scope strategy, multi-key management, and designing effective AI assistants*

---

## Scoping Keys to the Minimum Required Access

Every API key should carry the minimum scopes needed for its purpose. This principle — least privilege — limits the blast radius if a key is ever compromised.

### Practical scope examples

| Use case | Recommended scopes |
|---|---|
| Read-only AI assistant for summarizing backlog and roadmaps | `features:read`, `projects:read`, `releases:read` |
| AI assistant that can also create Features | `features:read`, `features:write`, `projects:read`, `releases:read` |
| Full-access assistant for a trusted admin user | `*` (all scopes) |
| External reporting dashboard (read-only) | `features:read`, `projects:read`, `releases:read`, `strategies:read` |
| Automated sync from an external system | Scopes specific to what is being synced |

Never use `*` (full access) for integrations that only need to read data.

---

## Managing Multiple API Keys

You can generate multiple API keys for a single organization. This is useful when:

- Different tools need different scopes
- Different people or teams need separate keys they can revoke independently
- You're rotating a key and want to keep the old one active while transitioning

Each key is listed in Settings > Integrations with its name, a masked key prefix, and its last-used date. Revoke individual keys without affecting others.

**Key rotation best practice:** When rotating a key, generate the new key first and configure the integration to use it before revoking the old key. This prevents downtime.

---

## Designing Effective AI Assistants for Lodestone

When building a ChatGPT or Claude assistant powered by the Lodestone API, the instructions you write for the assistant significantly affect how useful it is. A few principles:

### Ground the assistant in your context

Include your Organization ID and any relevant context directly in the assistant instructions:

> "When the user asks about features, always query organization ID `abc123`. The team uses a 3-level Roadmap hierarchy: Goal → Theme → Feature. Status stages are: Not Started, In Design, In Dev, In QA, Shipped."

Without this grounding, the assistant will ask for IDs and context on every request, which creates friction.

### Define what the assistant should and shouldn't do

Be explicit in the instructions:

> "Do not create, update, or delete any data unless the user explicitly asks you to. Always confirm with the user before making any write operation."

This prevents the assistant from making unintended changes to your Lodestone data.

### Tell the assistant how to handle uncertainty

> "If you are unsure which Feature or Release the user is referring to, ask for clarification rather than guessing. If a request would require a scope you don't have access to, explain that and suggest what the user should do instead."

### Common assistant patterns that work well

- **Daily standup assistant** — "What's in our current Release and what moved to Completed yesterday?"
- **Backlog groomer** — "Which Features are missing descriptions? Which have no evaluation scores?"
- **Stakeholder prep** — "Summarize our Q2 Roadmap in plain language for a non-technical audience"
- **Meeting follow-up** — "I just got off a call where [name] requested [thing]. Create a Feature for this."
- **Status reporter** — "What's the status of everything in the mobile release?"

---

## Using the OpenAPI Spec with Third-Party Tools

The Lodestone OpenAPI specification (`/api/v1/openapi`) is a standard JSON schema that can be used with:

- **Postman / Insomnia** — import as a collection to explore all endpoints and test requests
- **Custom code** — use an OpenAPI code generator to produce a type-safe client in your language of choice
- **LangChain / LlamaIndex** — load the spec as a tool definition for a programmatic agent pipeline
- **Zapier / Make** — use the API module with your Lodestone key to build automated workflows

---

## Understanding Write Operations

Write operations (endpoints that create or update data) follow the same rules as the Lodestone UI:

- Creating a Feature adds it to the organization's backlog — it is immediately visible in Lodestone
- Updating a Feature's status follows the same rules as dragging a card in a Release — the status propagates everywhere
- Creating a Feature does not automatically add it to any Roadmap or Release — you must do that as a separate operation
- Deleting a Feature is not currently exposed via the API — deletions must be done from the Lodestone UI

---

## Rate Limiting and Reliability

The API enforces rate limits on all endpoints. If you build automation that makes many requests in a short period (for example, syncing a large number of Features at once), implement exponential backoff and retry logic.

Signs you're being rate-limited:
- HTTP `429 Too Many Requests` responses
- Requests succeeding intermittently in bursts

Mitigation strategies:
- Add a small delay between requests in batch operations
- Spread scheduled syncs over time rather than running them all at once
- Cache read responses when the same data is needed multiple times in a short period

---

*Next: Troubleshooting & FAQs — common issues with authentication, scope errors, and AI assistant configuration.*
