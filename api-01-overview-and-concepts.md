# Lodestone API — Overview & Concepts
*What it is, what it enables, and how it fits into your workflow*

---

## What Is the Lodestone API?

Lodestone exposes a REST API that gives external tools programmatic access to your workspace data. With the API, you can read and write Features, Roadmaps, Releases, Strategies, and more — using any tool or service that can make HTTP requests.

The API uses **API keys** for authentication. You generate a key inside Lodestone, copy it once, and then provide it to the external tool or service that needs access.

---

## What the API Enables

The most powerful use case for the Lodestone API is connecting your workspace to an AI assistant — a custom ChatGPT, Claude, or other LLM configuration that can read and act on your Lodestone data using natural language.

For example, you could build or configure a custom AI assistant that can:

- Retrieve your feature backlog and summarize it
- Create a new Feature from a customer conversation
- Update a Feature's status based on a message you send
- List what's in a Release and draft a status update
- Pull your Roadmap structure and prepare talking points for a meeting

Because the Lodestone API follows the OpenAPI standard, it is compatible with the custom tool/action frameworks in ChatGPT (Custom GPTs), Claude Projects, and similar LLM environments. You can point your AI assistant at the Lodestone API and give it read and write access to your product data — turning it into a Lodestone-aware productivity tool without any code.

---

## What the API Covers

The API is organized around the same objects you work with in Lodestone:

| Resource | What you can do |
|---|---|
| Features | List, read, create, update, manage tags |
| Roadmaps (Projects) | List, read, create, update; add and remove Features |
| Releases | List, read, create, update; manage release plan items and release notes |
| Strategies | List, read, create, update |
| Organizations | Read org details, list members, manage status stages |
| Bento Grids | List, read, create, update |

All endpoints are under `/api/v1/`. An OpenAPI specification is available at `/api/v1/openapi`, which you can import into AI tools, API clients, or any service that accepts an OpenAPI schema.

---

## Scopes and Permissions

When you generate an API key, you choose which scopes it is authorized for. Scopes control what the key can read or write:

| Scope | Access |
|---|---|
| `features:read` | Read Features and their details |
| `features:write` | Create and update Features |
| `projects:read` | Read Roadmaps |
| `projects:write` | Create and update Roadmaps |
| `releases:read` | Read Releases |
| `releases:write` | Create and update Releases |
| `strategies:read` | Read Strategies |
| `strategies:write` | Create and update Strategies |
| `bento-grids:read` | Read Bento Grids |
| `bento-grids:write` | Create and update Bento Grids |
| `settings:read` | Read org settings |
| `settings:write` | Update org settings |
| `*` | Full access to all scopes |

Choose the minimum scopes needed for the tool you're connecting. A read-only AI assistant for summarizing your backlog only needs `:read` scopes. An assistant that can create Features needs `features:write` as well.

---

## How API Keys Work

- Each key is associated with a specific organization in Lodestone
- The full key value is shown **only once** — at the moment of creation. Copy it immediately.
- Keys do not expire by default, but can be revoked at any time from Settings > Integrations
- Only one active key is shown in the main integrations panel at a time, but multiple keys can exist per organization

> **Security note:** Treat your API key like a password. Do not share it publicly, embed it in client-side code, or commit it to a repository. If a key is compromised, revoke it immediately and generate a new one.

---

## How Requests Are Authenticated

Include the API key in the `Authorization` header of every request:

```
Authorization: Bearer YOUR_API_KEY
```

Requests without a valid key return a `401 Unauthorized` response. Requests with a key that lacks the required scope return a `403 Forbidden` response.

---

## Rate Limiting

The API enforces rate limits to ensure fair usage. If you exceed the limit, requests return a `429 Too Many Requests` response. Implement appropriate retry logic with exponential backoff in any integration that makes high-frequency requests.

---

## How the API Relates to the Rest of Lodestone

The API is a read/write mirror of the Lodestone interface. Everything the API can do, you can also do manually through the Lodestone UI. The API adds:

- **Automation** — trigger Lodestone actions from external systems or scheduled jobs
- **Integration** — sync Lodestone data with other tools
- **AI access** — give an LLM assistant the ability to read and act on your product data

Changes made via the API appear in Lodestone immediately and are indistinguishable from changes made through the interface.

---

*Next: How-tos & Workflows — step-by-step guides for generating API keys and connecting an AI assistant to Lodestone.*
