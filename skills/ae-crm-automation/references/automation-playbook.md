# Marketing automation playbook

## Flow design template
```
Flow name:
Business goal / customer problem:
Lifecycle stage served:
Trigger (event + conditions):
Entry rules / audience:
Suppression (who never enters or exits early):
Steps (wait → condition → message → branch):
Exit conditions (goal reached, unsubscribe, ticket opened):
Channel(s) and consent required:
Personalisation fields and their source:
Frequency rules (contact policy):
Primary metric + guardrails:
Holdout size and duration:
Owner (RACI):
Data dependencies and failure behaviour:
```

## Contact policy (example)
- Max 3 marketing messages per 7 days per person across all flows and campaigns.
- Transactional messages (order, delivery) do not count but block marketing for 24 h.
- Priority order when limits collide: service > transactional > abandoned cart > win-back > newsletter.
- No marketing while a support ticket is open or within 14 days of a complaint.

## Abandoned cart spec
| Element | Decision |
|---|---|
| Trigger | `add_to_cart` by an identified, opted-in contact, no `purchase` within 2 hours |
| Data | Cart items, prices, stock, image URLs, customer id |
| Step 1 | 2 h: reminder with cart contents, no discount |
| Step 2 | 24 h: social proof (reviews) or help (questions? chat) |
| Step 3 | 72 h: optional incentive only for segments where tests show incremental profit |
| Exit | Purchase, unsubscribe, item out of stock, ticket opened |
| Measure | Recovered revenue per abandoned cart vs 10% holdout; margin after discounts |

## Win-back spec
- Trigger: days since last order > 2 × the customer's own median interval (minimum 60 days).
- Message 1 acknowledges the gap without pitching; message 2 offers value (new arrivals in their category); message 3 asks for feedback.
- Measure: reactivation rate vs holdout after 60 days.

## Measuring with holdouts
1. Randomly assign a fixed share (5–20%) of eligible contacts to holdout at entry.
2. Holdout receives nothing from the flow but stays in normal communication.
3. Compare conversion and revenue per eligible contact after a fixed window.
4. Incremental revenue = (treatment rate − holdout rate) × treated contacts × value.
5. Check sample ratio and run long enough for the expected effect (see `ae-statistics`).

## Why programs fail (diagnosis)
- **Data:** wrong ids, missing consent sync, stale segments.
- **Process:** nobody owns flows; no review cadence; flows conflict.
- **Organisation:** marketing, sales and service run separate tools and goals.
- **Measurement:** last-click credit, no holdouts, opens as success metric.
