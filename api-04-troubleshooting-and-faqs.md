# Lodestone API — Troubleshooting & FAQs
*Common authentication issues, scope errors, and answers to frequent questions*

---

## Frequently Asked Questions

### Who can generate API keys?

Any workspace member can generate API keys for their organization. Keys are scoped to an organization, not to an individual user — they provide access to the organization's data regardless of who created them.

### How many API keys can I have?

There is no enforced limit. You can generate multiple keys with different scopes for different purposes, and revoke them individually.

### Can I retrieve the full API key after it's been created?

No. The full key value is displayed **once** at the moment of creation. After you navigate away, only a masked prefix is shown. If you lose the key, revoke it and generate a new one.

### Does an API key expire?

API keys do not expire automatically. They remain valid until revoked. Revoking is immediate — any requests using a revoked key return `401 Unauthorized` at once.

### What happens to requests made with a revoked key?

They are rejected immediately with a `401 Unauthorized` response. There is no grace period.

### Where do I find my Organization ID?

Look at the URL when logged into Lodestone. The Organization ID is the alphanumeric string between `/organizations/` and the next `/` in the URL:

```
https://app.lodestonepm.com/organizations/YOUR_ORG_ID/features
```

### Is the API available on all subscription plans?

Yes. The API is available to all Lodestone users — there are no plan or tier restrictions.

### Can the API delete Features?

No. The current API does not expose delete operations for Features or other objects. Deletion must be performed from the Lodestone UI.

### What is the base URL for all API requests?

```
https://app.lodestonepm.com/api/v1/
```

### Where is the full API reference?

The OpenAPI specification is available at: `https://app.lodestonepm.com/api/v1/openapi`

---

## Common Issues

### Requests return `401 Unauthorized`

Check the following in order:

1. Your request includes the `Authorization: Bearer YOUR_KEY` header
2. The key has not been revoked — check Settings > Integrations to confirm it's still active
3. The key is for the correct organization — keys are org-scoped and won't work for a different org's endpoints
4. You're using the correct base URL (`https://app.lodestonepm.com/api/v1/`)

### Requests return `403 Forbidden`

This means your key doesn't have the scope required for the operation you're attempting. Check what scopes are needed for the endpoint (see the OpenAPI spec or the Scopes table in the Overview doc) and compare against the scopes assigned to your key. If the key is missing a scope, you'll need to revoke it and generate a new one with the correct scopes — scopes cannot be added to an existing key.

### My AI assistant isn't finding the right Features or Roadmaps

This is usually a context issue rather than an API issue. Check that:

- The `organizationId` parameter is correct — this is required for most list endpoints
- The assistant's instructions specify which organization to query (without this, the assistant may not know which org to use)
- The data you're looking for actually exists in Lodestone and hasn't been archived

### The OpenAPI spec import into ChatGPT isn't working

Try the following:

- Make sure you're importing from the URL `https://app.lodestonepm.com/api/v1/openapi` (not a local file)
- Check that the GPT action is configured with Bearer token authentication
- If ChatGPT shows an error during import, verify the URL is accessible and returns a valid JSON response

### Requests return `429 Too Many Requests`

You're hitting the rate limit. Add a delay between requests or spread batch operations over time. Implement exponential backoff in any automated script that retries failed requests.

### Changes made via API aren't appearing in Lodestone

API changes are applied immediately. If a change isn't appearing:

- Refresh the page in Lodestone
- Verify the API request returned a `200` or `201` success response (not an error that was silently ignored)
- Check that you sent the write request to the correct endpoint with the correct `organizationId`

---

*This is version 1 of the Lodestone API documentation, documenting confirmed platform behavior.*
