# Lodestone API & MCP — How-tos & Workflows

## Create and manage an API key

1. Open **Settings > API & MCP** and choose API access.
2. Generate a key, give it a recognizable integration name, and select the minimum required scopes.
3. Copy and securely store the full key when it is displayed; it cannot be retrieved later.
4. Revoke a key from the same settings page when it is no longer needed or may be compromised. Rotate by creating a replacement with the required scopes, updating the integration, then revoking the old key.

Only the key's creator or an Admin of the organization can revoke a key; anyone else receives `403`. You can only select scopes your own role allows — a request for scopes above your role is refused. Keys an integration depends on should belong to someone who will stay in the organization with the right role, because a key follows its creator's current access.

## Inspect the live API contract

The OpenAPI document is available at `https://app.lodestone.pm/api/v1/openapi`. Import it into an API client or compatible action configuration. Check the live document for current operations, required scopes, parameters, and response envelopes before building an integration.

## Make an authenticated request

Use the production API base `https://app.lodestone.pm/api/v1`. The API key determines the organization; do not include `organizationId` in query parameters or request bodies.

```sh
curl --fail-with-body \
  -H "Authorization: Bearer $LODESTONE_API_KEY" \
  "https://app.lodestone.pm/api/v1/objects"
```

Grant `features:read` for object listing. A missing/invalid key returns `401`; a credential lacking the required scope returns `403`.

## Resolve an object identifier

Typed IDs are convenient for people and AI clients, but object-specific routes expect a canonical UUID. Resolve first:

```sh
curl --fail-with-body \
  -H "Authorization: Bearer $LODESTONE_API_KEY" \
  "https://app.lodestone.pm/api/v1/objects/resolve/FEAT-123"
```

Use the returned canonical object ID in later route parameters. Historical aliases can also be resolved where available.

## Create a typed object

The object collection is `/objects`; `type` is an optional configured object-type name. Omit `type` to create the default Feature type. Grant `features:write`.

```sh
curl --fail-with-body -X POST \
  -H "Authorization: Bearer $LODESTONE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"Improve onboarding","type":"Feature","description":"Reduce setup friction"}' \
  "https://app.lodestone.pm/api/v1/objects"
```

## Work with hierarchy

Read relationship data with `GET /objects/{objectId}/relationships` (`hierarchy:read`). Add a parent with `POST /objects/{objectId}/parents` and body `{"parentId":"<canonical-uuid>"}`; remove it with `DELETE /objects/{objectId}/parents/{parentId}` (`hierarchy:write`). These commands validate organization, type, and cycle constraints. An optional `Idempotency-Key` can make mutation retries safe.

## Work with Goals

Use `GET /goals` to list Goals, `GET /goals/{goalId}` to inspect one, and `POST /goals` or `PATCH /goals/{goalId}` to create/update (`goals:write`). Goal creation requires an `Idempotency-Key`; use a unique stable value for retries.

For impact analysis, call `GET /goals/{goalId}/downstream`. Optional `include` values are `objects,roadmaps,releases,strategies,orphanedChildren`; traversal defaults to depth 1 and limit 100, with maximum depth 10 and limit 500.

## Archive and restore instead of deleting

Archive an object with `POST /objects/{objectId}/archive` and restore it with `POST /objects/{objectId}/restore` (`features:write`). Archive is reversible and restore returns the prior status. Object `DELETE /objects/{objectId}` remains during a compatibility period but is deprecated. There is no announced removal date; use archive for new integrations.

## Update an object's status

Set `status` with `PATCH /objects/{objectId}` (`features:write`), or with the `update_object` tool in MCP. Status accepts the platform statuses (`NOT_STARTED`, `IN_PROGRESS`, `COMPLETED`, `ARCHIVED`) or the name of any custom status stage configured for your organization. Matching ignores capitalization and surrounding spaces. An unrecognized value returns `400` with the list of valid values. In MCP, call `list_status_stages` to see your organization's custom stage names.

## Connect an MCP client

Use the MCP connection URL shown in **Settings > API & MCP** and complete Lodestone's OAuth sign-in flow in the MCP client. Do not paste an API key into the MCP client as its authentication mechanism. The first time you connect, call `list_organizations`, then `set_active_organization`, and use the exposed tools for the desired task. Lodestone remembers your active organization across sessions; call `set_active_organization` again only when you want to switch. The MCP tool catalog is intentionally curated and need not match the REST API endpoint catalog.

## Refresh Discovery from an MCP client

Discovery trends and Synthesis can be regenerated only through MCP — not through the REST API or the in-app Copilot. With the right organization active:

1. Call `regenerate_discovery_trends` to rebuild trends from your ungrouped Extracts. At least three Extracts are required.
2. Call `regenerate_synthesis` to generate a new Discovery Synthesis from your available sources. Optionally pass a topic to focus the results.
3. Open **Discovery** in Lodestone to review the results.

## Retry and operational guidance

Use idempotency keys where required or supported, especially for creates. Respect `429 Too Many Requests` and apply bounded exponential backoff. Log request IDs and status codes without logging bearer tokens or sensitive payloads. Scope-alias use is recorded by the service for compatibility monitoring; migrate credentials to specific scopes when practical.
