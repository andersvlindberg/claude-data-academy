# Process maps with systems and data

## Order to cash (omnichannel retailer)
| Step | Actor | System | Record created/changed | Key | Typical data issue |
|---|---|---|---|---|---|
| Customer places order online | Customer | Commerce | order (status created) | order_id | Guest checkout without customer id |
| Payment authorised | Payment provider | Payment | transaction | payment_id, order_id | Async confirmation delays |
| Order released | OMS | OMS | order status released | order_id | Status names differ per system |
| Picking and shipping | Warehouse | WMS | shipment(s) | shipment_id, order_id | Split shipments |
| Delivery | Carrier | Carrier API | tracking events | tracking_no | Missing final scan |
| Invoice and booking | Finance | ERP | invoice, ledger entries | invoice_id | Timing differs from order date |
| Return (if any) | Customer, warehouse | Commerce, WMS, payment, ERP | return, refund, credit note | return_id | Partial returns |

Metric implications: "revenue" can mean ordered, shipped, invoiced or net of returns. The data team writes which one each report uses.

## Issue to resolution
Contact (phone/chat/email) → ticket created (category, priority) → assigned → diagnosis (may query OMS) → resolution → closed → CSAT survey → linked to customer profile and suppression rules.

## Migration checklist
- [ ] Entity list and history scope agreed with owners
- [ ] Field mapping document (source, target, rule, owner)
- [ ] Cleansing rules and duplicate handling
- [ ] Test loads in a sandbox; defects logged
- [ ] Reconciliation queries per entity (counts, sums, samples)
- [ ] Cutover runbook with timing, freeze, rollback
- [ ] Post-go-live monitoring and hypercare period
- [ ] Archive and retention for the old system
