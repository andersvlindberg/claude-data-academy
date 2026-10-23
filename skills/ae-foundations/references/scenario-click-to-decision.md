# Scenario: from click to decision

Use this scenario as the shared example across modules.

**Anna** sees a TikTok ad for an electronics webshop and taps it.

| # | What happens | Data created | Where it lives | Chain step |
|---|---|---|---|---|
| 1 | Ad impression and click | Impression, click, campaign id, `utm_source=tiktok` | TikTok Ads | Source (adtech) |
| 2 | Landing page loads | `page_view`, session start, client id cookie | Browser → GA4 | Source (behavioural) |
| 3 | Views a laptop, adds to cart | `view_item`, `add_to_cart` pushed to the data layer | Data layer → GTM → GA4 | Source |
| 4 | Pays | Order row, payment row, `purchase` event with `transaction_id` | Order DB, payment provider, GA4 | Source (transactional + behavioural) |
| 5 | Nightly export | GA4 events land in BigQuery `events_YYYYMMDD`; orders are loaded by a pipeline | Warehouse (raw) | Ingest + store |
| 6 | Transformation | `stg_ga4__events`, `stg_shop__orders` → `fct_sessions`, `fct_orders` with channel attribution | Warehouse (dbt models) | Transform |
| 7 | Serve | Dashboard "revenue and conversion by channel" | BI tool | Serve |
| 8 | Decide | Marketing moves budget towards TikTok because ROAS is highest | Meeting | Decide |

## Where it typically breaks

| Break | Symptom | Chain step to check |
|---|---|---|
| Consent denied | Purchase in orders, none in GA4 | Source (consent state) |
| `transaction_id` missing | Duplicated purchases in GA4 | Source (data layer) |
| Export delayed | Yesterday's revenue looks low | Ingest |
| Timezone mismatch | Daily totals differ from finance | Transform |
| Channel logic differs between teams | Two dashboards, two answers | Transform / metric definition |

## Discussion questions

1. Which number is "true" for revenue: GA4 or the order system? For what purpose is each one right?
2. Who should own the definition of "channel"?
3. What would you need to prove that TikTok really caused the purchases?
