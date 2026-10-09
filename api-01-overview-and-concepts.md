# Lodestone API & MCP — Overview & Concepts

Lodestone offers two programmable ways to work with platform data: a scoped REST API for integrations and an MCP server for AI clients. They share domain services, but intentionally do not expose identical capabilities. The in-app Copilot is separately bound to the signed-in user and is designed to assist with user-level work; neither the public API nor MCP should be treated as an unrestricted copy of the UI.

## REST API

The versioned API base is `https://app.lodestone.pm/api/v1/`. Its live OpenAPI document is `https://app.lodestone.pm/api/v1/openapi`. Authenticate requests with an organization-scoped API key:

```http
Authorization: Bearer lsk_…
```

The API organization is determined by the key; do not supply an `organizationId` query parameter or body field. Select only the scopes an integration needs. Keys are shown once when created and can be revoked under Settings > API & MCP.

## MCP

Connect an MCP-compatible client using the MCP URL shown under **Settings > API & MCP** (currently `https://app.lodestone.pm/mcp`). MCP uses the Lodestone OAuth sign-in flow and acts in the authenticated user's selected organization. It does not use a copied API key as its client credential. In the MCP session, call `list_organizations` and then `set_active_organization` before organization-specific work.

MCP tools are internal services that call Lodestone APIs with the user's identity and organization context. MCP exposes a curated set of AI-oriented actions, while API keys provide a narrower, explicit integration contract. Tool and endpoint availability can differ by design.

## Current Phase 1 API capability areas

The live OpenAPI document is authoritative for exact schemas, scopes, and responses. Phase 1 adds:

| Area | API capability |
|---|---|
| Object types | List and inspect configured types (`object-types:read`) |
| Typed identifiers | Resolve a typed ID or historical alias to a canonical object ID (`features:read`) |
| Relationships | Read parents, children, and ancestor paths (`hierarchy:read`) |
| Hierarchy | Add/remove parent relationships (`hierarchy:write`) |
| Goals | List, read, create, update, and bounded downstream analysis (`goals:read`, `goals:write`) |
| Lifecycle | Reversibly archive and restore objects (`features:write`) |
| Delete transition | Legacy object DELETE remains temporarily available but is deprecated; archive is the recommended reversible alternative |

Scope aliases preserve compatibility for older credentials: `features:read` may satisfy `object-types:read`, `hierarchy:read`, and `goals:read`; `features:write` may satisfy `hierarchy:write` and `goals:write`. Alias use is logged for migration planning. Prefer assigning the specific new scope when rotating credentials; do not assume aliases are permanent.

Object routes use `/api/v1/objects`, including for configured object types. The collection create request uses `type` to select a configured type; omit it for the default Feature type. Organization context comes from the credential.

## Safe identifier and lifecycle practices

- Typed identifiers (for example, `FEAT-123`) are resolved through `/api/v1/objects/resolve/{typedId}`. Routes whose parameter is `objectId` expect the canonical UUID.
- Archive is reversible; restore returns an object to its pre-archive status. Prefer these actions over destructive deletion.
- Object DELETE is deprecated but remains available during the compatibility period. No removal date has been announced. Deprecation responses link to the archive successor.
- Goal creation requires an `Idempotency-Key`; use a stable unique key when retrying a create request.
- Downstream Goal traversal is bounded (default depth 1 and limit 100; maximum depth 10 and limit 500).

## Product exposure model

Use the UI for all functions available to a user manually. The in-app Copilot should be nearly equivalent for work the user can delegate. MCP is a curated, user-authorized AI surface for moving completed work into Lodestone. The external API is the most constrained layer and exposes deliberate integration use cases, not every UI operation. This hierarchy is a product policy, not a promise that the surfaces mirror one another.

Never place API keys in client-side code, public prompts, or source control. Revoke compromised credentials immediately.
