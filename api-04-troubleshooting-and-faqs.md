# Lodestone API & MCP — Troubleshooting & FAQs

## Authentication and authorization

### `401 Unauthorized`

Check that the request includes `Authorization: Bearer <API key>`, the key is active, and the request is sent to `https://app.lodestone.pm/api/v1/`. API keys are scoped to an organization; the organization is inferred from the key.

### `403 Forbidden`

The credential is authenticated but lacks the operation's scope. Check the live OpenAPI document and key settings. Rotate to a credential with the appropriate least-privilege scope; existing keys may use temporary `features:read` / `features:write` compatibility aliases for some newer scopes. Alias usage is logged and should not be treated as a permanent contract.

### MCP cannot access the intended organization

MCP uses Lodestone OAuth user sign-in, not an API key copied into the client. Call `list_organizations` and then `set_active_organization` for the organization to use in the session.

## Identifiers, routes, and payloads

### “Not found” for a typed ID

Resolve a typed ID or historical alias through `GET /api/v1/objects/resolve/{typedId}`. Object-specific routes expect the canonical UUID, not a display ID.

### “Not found” when querying an organization

Do not pass `organizationId` in requests. The API key supplies organization context. For MCP, select an organization in the session using `set_active_organization`.

### Which host and endpoint should I use?

The production API base is `https://app.lodestone.pm/api/v1/`. The OpenAPI contract is at `https://app.lodestone.pm/api/v1/openapi`. Use `/objects` for configured backlog object types; the older `/features` path is not the current collection contract.

## Lifecycle and compatibility

### Can I delete an object through the API?

The legacy `DELETE /api/v1/objects/{objectId}` operation remains available during a compatibility period, but is deprecated. Prefer `POST /api/v1/objects/{objectId}/archive`; archive is reversible and `POST .../restore` returns the object to its prior status. No delete removal date has been announced.

### Why are my API and MCP capabilities different?

They are intentionally different product surfaces. MCP is a curated, user-authorized set of tools for AI-assisted workflows; the external API is a narrower integration contract. Consult the live OpenAPI specification for API coverage and the MCP client tool list for MCP coverage.

## Other common issues

### `429 Too Many Requests`

Reduce request frequency and retry with bounded exponential backoff. Avoid unbounded or synchronized retry loops.

### OpenAPI import fails

Confirm the importer can reach `https://app.lodestone.pm/api/v1/openapi`, supports the published OpenAPI version, and is configured for Bearer authentication. The live document is preferable to a stale downloaded copy.

### A successful change is not visible in the UI

Confirm the response indicates success, refresh the relevant view, and check that the correct object ID and API-key organization were used. Never include secrets in logs or support messages.
