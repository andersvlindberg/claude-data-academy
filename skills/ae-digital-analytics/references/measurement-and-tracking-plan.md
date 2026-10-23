# Measurement plan and tracking plan

## Measurement plan template
| Business objective | Goal | KPI (definition) | Target | Segments | Data source |
|---|---|---|---|---|---|
| | | | | | |

## Tracking plan template
| Event | Trigger | Parameters (name: type, example) | Key event? | Consent category | Destination | Owner | Status |
|---|---|---|---|---|---|---|---|
| `view_item` | Product page load | `item_id: string, SKU_42`; `price: number, 4990`; `currency: string, SEK` | no | analytics | GA4 | web team | live |
| `add_to_cart` | Click add to cart | items array, value, currency | no | analytics | GA4, ads | web team | live |
| `purchase` | Order confirmation | `transaction_id`, value, tax, shipping, items | yes | analytics, ads | GA4, ads (server-side) | web + backend | live |
| `generate_lead` | Newsletter signup success | `form_id`, `method` | yes | analytics | GA4, CRM | marketing | planned |

## Worked example: "Grow online revenue" for a furniture retailer
- **Goal 1:** improve product page → cart. KPI add-to-cart rate = sessions with `add_to_cart` ÷ sessions with `view_item`. Segment by category and device.
- **Goal 2:** reduce checkout drop-off. KPI checkout completion = sessions with `purchase` ÷ sessions with `begin_checkout`.
- **Goal 3:** grow returning buyers. KPI 90-day repurchase rate (from orders, not GA4).
- **Business value link:** +0.4 pp conversion on 1 M sessions at AOV 3 000 = 1 M × 0.004 × 3 000 = 12 M in revenue; check against margin and capacity.

## Quality checklist for a tracking plan
- Event names follow GA4 recommended events where they exist.
- Parameters have types and examples; no personal data in parameters.
- Every key event has a business owner and a definition.
- Consent category per event.
- QA procedure: GTM Preview → DebugView → BigQuery export next day.
