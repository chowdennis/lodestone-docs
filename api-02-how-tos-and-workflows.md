# Lodestone API & MCP — How-tos & Workflows
*Step-by-step guides for generating keys and connecting external tools*

---

## Generating an API Key

1. Go to **Settings > API & MCP**.
2. Scroll to the **API Access** section.
3. Click **Generate API Key**.
4. Give the key a name — something that identifies the tool or person it's for (e.g. "ChatGPT Integration", "Custom Claude Agent").
5. Select the scopes this key should have access to. Choose only what the integration needs (see the Scopes reference in the Overview doc).
6. Click **Create**.
7. The full key is displayed **once**. Copy it immediately and store it securely — you will not be able to retrieve it again.

> **Important:** Once you navigate away from the creation screen, the full key value is gone. If you lose it, you must revoke the key and generate a new one.

---

## Revoking an API Key

If a key is compromised, no longer needed, or you want to rotate it:

1. Go to **Settings > API & MCP**.
2. Scroll to the **API Access** section.
3. Click **Revoke** next to the key you want to remove.
4. Confirm. The key is immediately invalidated — any requests using it will return `401 Unauthorized`.

---

## Finding Your OpenAPI Specification

The Lodestone API publishes an OpenAPI specification at:

```
https://app.lodestonepm.com/api/v1/openapi
```

This specification describes every endpoint, request parameter, and response format. You can import it into:

- **ChatGPT Custom GPTs** — as a custom action schema
- **Claude Projects** — as an MCP-compatible tool definition
- **Postman, Insomnia, or any API client** — for manual testing and exploration
- **Any service that accepts OpenAPI schemas**

---

## Connecting Lodestone to a Custom ChatGPT (Custom GPT)

This workflow allows you to create a ChatGPT assistant that can read and act on your Lodestone workspace data.

### Step 1: Generate an API key

Generate an API key with the scopes your GPT will need (see Generating an API Key above). For a read-only assistant, select all `:read` scopes. For an assistant that can create Features, add `features:write`.

### Step 2: Create a Custom GPT

1. In ChatGPT, go to **Explore GPTs** > **Create a GPT**.
2. In the **Configure** tab, give your GPT a name and instructions. Example instructions:

   > "You are a product management assistant connected to Lodestone. You can read and create Features, check Roadmaps, review Releases, and summarize Strategy. When the user asks about their product plans, use the Lodestone API to retrieve accurate, up-to-date information."

3. Under **Actions**, click **Create new action**.

### Step 3: Import the OpenAPI schema

1. In the Action editor, select **Import from URL**.
2. Enter the Lodestone OpenAPI URL: `https://app.lodestonepm.com/api/v1/openapi`
3. The schema imports and populates the available endpoints.

### Step 4: Add authentication

1. Under **Authentication**, select **API Key**.
2. Set the **Auth Type** to **Bearer**.
3. Paste your Lodestone API key.

### Step 5: Test and save

1. Use the preview panel to test a request — for example, ask "What features do I have in my organization?"
2. When satisfied, save your Custom GPT.

Your ChatGPT assistant can now query and act on your Lodestone workspace using natural language.

---

## Connecting Lodestone to a Claude Project

This workflow allows you to create a Claude assistant with access to your Lodestone data.

### Step 1: Generate an API key

Generate an API key with the scopes your Claude project will need.

### Step 2: Create a Project in Claude

1. In Claude, create a new Project.
2. In the Project instructions, describe how the assistant should use Lodestone. Example:

   > "You have access to the Lodestone product management platform via API. Use it to retrieve Features, check Roadmap structure, and report on Release status. Always fetch current data from Lodestone rather than relying on memory."

### Step 3: Configure the Lodestone API as a tool

Add the Lodestone API as a tool in your Project, using the OpenAPI specification URL and your API key as the bearer token.

### Step 4: Test

Ask the assistant to retrieve your feature backlog or summarize a specific Release to confirm the connection is working.

---

## Making API Requests Directly

If you want to test the API or build a custom integration without an AI tool:

### List all Features in an organization

```
GET /api/v1/features?organizationId=YOUR_ORG_ID
Authorization: Bearer YOUR_API_KEY
```

### Create a new Feature

```
POST /api/v1/features
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "organizationId": "YOUR_ORG_ID",
  "name": "New Feature Name",
  "description": "What this feature does and why"
}
```

### List all Releases

```
GET /api/v1/releases?organizationId=YOUR_ORG_ID
Authorization: Bearer YOUR_API_KEY
```

For the full list of endpoints and request/response formats, refer to the OpenAPI specification.

---

## Finding Your Organization ID

Your Organization ID is required for most API requests. You can find it in the URL when you are logged into Lodestone:

```
https://app.lodestonepm.com/organizations/YOUR_ORG_ID/...
```

The alphanumeric string between `/organizations/` and the next `/` is your Organization ID.

---

*Next: Advanced Features & Customization — scope strategy, multi-key management, and AI assistant design tips.*
