# Nordvik Outdoor: the academy's practice company

Nordvik Outdoor is a **fictional** Swedish webshop for outdoor gear. Every lab can use its data, so your whole portfolio tells one story: from raw shop and tracking data to models, dashboards and decisions.

```bash
python datasets/nordvik/generate.py          # about 20 MB of CSVs in datasets/nordvik/data/
python datasets/nordvik/generate.py --small  # a tenth of the size
```

The data folder is in `.gitignore`: generate it on your machine, don't commit it. The same seed always gives the same data, so numbers match between students.

| Table | Like the real thing in | Notes |
|---|---|---|
| `products` | Shopify products | 64 products in 8 categories, price and cost in SEK |
| `customers` | Shopify customers | 4,000 fictional people with `@example.com` addresses and a marketing consent flag |
| `orders` | Shopify orders | Amounts in **öre** (like many shop APIs), status, payment method, GA session id |
| `order_items` | Shopify line items | Quantity, unit price, discount |
| `refunds` | Shopify refunds | Returned orders with reason |
| `web_events` | GA4 BigQuery export (flattened) | session_start, page_view, view_item, add_to_cart, begin_checkout, purchase, with source, medium, campaign, device and a consent flag |
| `crm_contacts` | HubSpot contacts | Lifecycle stage, lead source, email opt-in |
| `marketing_campaigns` | Ad platforms | Monthly campaigns with spend |

Built-in realism: seasonality with a Black Friday spike, higher conversion for returning customers, a free-shipping threshold at 999 SEK, about 7% returns, and some events without analytics consent.

Planted data quality issues for testing labs: one duplicated order row and one order with a customer id that doesn't exist.

All names and emails are invented. Never mix real personal data into this dataset.
