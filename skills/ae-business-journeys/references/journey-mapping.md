# Journey mapping template and example

## Template

| | Awareness | Consideration | Purchase | Delivery | Use and service | Loyalty |
|---|---|---|---|---|---|---|
| Customer goal | | | | | | |
| Actions | | | | | | |
| Touchpoints | | | | | | |
| Feelings (+ / −) | | | | | | |
| Pain points | | | | | | |
| Opportunities | | | | | | |
| Data created (system: event/record) | | | | | | |
| KPI | | | | | | |

## Worked example: buying a sofa online (furniture retailer)

| | Awareness | Consideration | Purchase | Delivery | Use and service | Loyalty |
|---|---|---|---|---|---|---|
| Goal | Find a three-seat sofa under a budget | Compare models, check it fits | Buy with confidence | Get it home on time | Enjoy it, fix problems | Come back for more |
| Actions | Searches "three-seat sofa" | Filters by price and colour, reads product page, checks dimensions, views in 3D/AR | Adds to cart, checks stock and delivery by postcode, pays | Tracks delivery, receives | Assembles, may contact support | Buys accessories, leaves a review |
| Touchpoints | Search results (paid ad above organic result), social | Category page, filters, product page, reviews, AR viewer | Cart, stock checker, checkout, payment | Email/SMS updates, carrier | Manuals, support chat, returns | Loyalty club, newsletter, review request |
| Feelings | + many options / − ads crowd the results | + clear filters, 3D view / − price shown in a confusing way, no local-language reviews | + clear stock info / − irrelevant cart recommendations | + tracking / − delivery window too wide | ± depends on support | + member offers |
| Pain points | Competitor ad ranked above | Misleading price display, few local reviews | Recommendations not relevant (a second sofa) | Wide time window | Long support queue | Generic emails |
| Opportunities | Own the brand + category search | Show local reviews, clear pricing | Recommend complementary small items | Narrower slots | Self-service guides | Personalised accessory offers |
| Data created | Search console, ad platform: impressions, clicks | GA4: `view_item_list`, `view_item`, filter events | GA4: `add_to_cart`, `begin_checkout`, `purchase`; order system: order | Carrier API: status events | Support tool: tickets; returns system | CRM/loyalty: membership, email events; reviews |
| KPI | Search impression share, CTR | Product page → add-to-cart rate | Checkout completion, AOV | On-time delivery rate | CSAT, CES, return rate | Repurchase rate, NPS, CLV |

Analysis line: **Decision:** change cart recommendations to complementary small items. **Data:** add-to-cart events for recommended items, order lines. **Metric:** attach rate and AOV, measured with an A/B test.
