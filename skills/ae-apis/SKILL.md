---
name: ae-apis
description: APIs and integration technology for the Analytics Engineering Academy. Use for questions about REST APIs, HTTP methods and status codes, JSON, endpoints and query parameters, headers, authentication with API keys, OAuth 2.0 and bearer tokens, pagination, rate limits, retries and backoff, webhooks, GraphQL, testing APIs with Bruno or Postman, calling APIs from Python, integration patterns and iPaaS tools like Zapier, Make or n8n, event-driven integration, reverse ETL, and the API and integration technology course.
---

# Module 13: APIs and integrations

APIs are how systems talk. Ingestion pulls data from them, reverse ETL pushes data into them, and every MarTech stack is held together by them.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only.

BUILD rules:
- Read the API documentation first: base URL, auth, rate limits, pagination, data model.
- Explore with Bruno or Postman (or `curl`) before writing code.
- Secrets in environment variables or a secret manager; never in code, chat or Git.
- Handle pagination, retries with backoff, and timeouts from the start.
- Log status codes and counts so failures are visible.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains request/response, methods, status codes, JSON and what an API key is |
| L2 | Calls a REST API from Bruno and Python with auth and query parameters; parses JSON |
| L3 | Builds a robust extractor: pagination, rate limits, retries, incremental parameters, webhooks with signature verification |
| L4 | Chooses integration patterns (point-to-point, iPaaS, event-driven, reverse ETL) for a company and explains trade-offs |

## Core knowledge

### HTTP and REST
- **Resources** at URLs (`/customers/42/orders`), manipulated with methods: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE.
- **Idempotent** methods: GET, PUT, DELETE (repeating gives the same result). POST is not, which matters for retries.
- **Status codes:** 200 OK, 201 Created, 202 Accepted (received, not finished), 204 No Content, 301/302 redirect, 400 bad request, 401 unauthenticated, 403 forbidden, 404 not found, 409 conflict, 422 validation error, 429 too many requests, 500/502/503 server errors.
- **Headers:** `Authorization`, `Content-Type: application/json`, `Accept`, `Retry-After`, rate-limit headers.
- **Query parameters** for filtering and paging: `?updated_since=2026-10-01&limit=100`.

### JSON
Objects `{}`, arrays `[]`, strings, numbers, booleans, null. Nested structures map to semi-structured warehouse types (BigQuery `STRUCT`/`ARRAY`/`JSON`, Snowflake `VARIANT`).

### Authentication
| Method | How | Notes |
|---|---|---|
| API key | Header or query parameter | Simple; treat like a password |
| Basic auth | `Authorization: Basic base64(user:pass)` | Only over HTTPS |
| Bearer token | `Authorization: Bearer <token>` | Often from OAuth |
| OAuth 2.0 | Client credentials (server-to-server) or authorization code (on behalf of a user) flows give access tokens; refresh tokens renew them | Standard for SaaS APIs |
| Signed requests / HMAC | Signature of the payload with a shared secret | Common for webhooks |

### Pagination
- **Offset/limit:** `?offset=200&limit=100`. Simple; can skip or duplicate rows if data changes during paging.
- **Cursor:** response returns `next_cursor`; pass it on. Stable under changes.
- **Link header / next URL:** follow `next` until absent.

### Rate limits and retries
Respect documented limits. On 429 or 5xx: retry with **exponential backoff** and jitter, honour `Retry-After`, cap the attempts. Do not retry 4xx client errors other than 429 (fix the request instead).

### Webhooks
The other system calls **you** when something happens (order created). Requirements: a public HTTPS endpoint, signature verification, fast 2xx response (process asynchronously), idempotency on event id (webhooks can be delivered more than once), and a fallback reconciliation job.

### Other API styles
- **GraphQL:** one endpoint; the client specifies exactly which fields it wants.
- **SOAP/XML:** older enterprise systems.
- **Bulk/export APIs:** for large extracts; prefer them over paging millions of records.

### Integration patterns
| Pattern | Example | Trade-off |
|---|---|---|
| Point-to-point | Shop calls ESP directly | Simple at first, spaghetti at scale |
| iPaaS / workflow tools | Zapier, Make, n8n, MuleSoft | Fast, visual; can become hidden logic without version control |
| Warehouse-centric (ELT + reverse ETL) | Fivetran in, dbt models, Hightouch/Census out | One source of truth; latency of batch |
| Event-driven | Pub/Sub, Kafka, webhooks | Real-time and decoupled; more infrastructure |

With AI coding tools, small custom integrations are increasingly written as code (versioned, testable) instead of configured in iPaaS tools; the right choice depends on who maintains it.

## Common misconceptions

- "200 means everything worked." Check the body; some APIs return errors with 200.
- "Retry everything." Retrying POST can create duplicates without idempotency keys.
- "Webhooks are reliable." They can be lost or duplicated; reconcile.
- "The API key can live in the script, it's private." Repos become public; keys leak.

## Connects to

`ae-data-engineering` (extract and load), `ae-python-oop` (client code), `ae-web-tracking` (HTTP in the browser), `ae-martech` (integrations), `ae-governance-gdpr` (personal data in transfers), `ae-mcp-tooling` (MCP servers wrap APIs for AI).

## References

- [references/api-client-patterns.md](references/api-client-patterns.md): Python extractor with pagination, retries and incremental loading; webhook receiver sketch; Bruno workflow.
- [references/exercises.md](references/exercises.md)
