---
name: ae-systems-processes
description: System understanding and business processes for the Analytics Engineering Academy. Use for questions about the enterprise system landscape - ERP, CRM, e-commerce platforms, POS, OMS, WMS, PIM, CMS and headless CMS, customer service and marketing systems - how they support business processes such as order to cash, procure to pay, lead to order and issue to resolution, master data, source of truth per entity, system integration and data flows, requirements and change in systems, data migration between systems, and how data engineers and analytics engineers work with operational systems.
---

# Module 26: System understanding and business processes

Data is created by business processes running in operational systems. To model it correctly you must know what the systems do, which process steps create which records, and which system is the source of truth.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, map/design → BUILD, graded work → LEARN only.

Always pair a **process** with its **systems** and its **data**: "In order to cash, the OMS creates the order, payment confirms it, WMS ships it, ERP invoices and books it."

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains what ERP, CRM, OMS, WMS, POS, PIM and CMS do |
| L2 | Maps one end-to-end process across systems with the records created at each step |
| L3 | Identifies source of truth and master data per entity, designs integrations and a migration plan |
| L4 | Advises on system landscape changes (consolidate, integrate, replace) with data, process and organisational trade-offs |

## Core knowledge

### The system landscape
| System | Job | Typical data | Examples |
|---|---|---|---|
| ERP | Finance, purchasing, inventory, production, invoicing | Ledger, invoices, suppliers, stock | SAP, Microsoft Dynamics 365, Oracle NetSuite, Visma, Monitor |
| CRM | Relationships, sales, service | Contacts, deals, cases | Salesforce, HubSpot, Dynamics, Lime |
| E-commerce platform | Online catalogue, cart, checkout | Products, carts, orders | Shopify, Magento/Adobe Commerce, Centra, Norce |
| POS | In-store sales | Receipts, payments | Retail POS systems |
| OMS | Order management across channels | Orders, fulfilment status | OMS products or ERP/commerce modules |
| WMS | Warehouse operations | Stock locations, picking, shipping | WMS products |
| PIM | Product information | Attributes, descriptions, images | Akeneo, inRiver |
| CMS / headless CMS | Content | Pages, articles; headless delivers the same content to web, app and screens via API | WordPress, Contentful, Storyblok |
| Customer service | Tickets, chat, phone | Cases, conversations | Zendesk, Freshdesk, Salesforce Service Cloud |
| Marketing automation / ESP | Communication | Sends, opens, clicks, consent | Voyado, Klaviyo, HubSpot |
| Analytics | Behaviour | Events, sessions | GA4 |
| Payment provider | Payments | Transactions, refunds | Klarna, Adyen, Stripe |
| Logistics / carrier | Delivery | Shipments, tracking events | Carrier APIs |

### Core processes
| Process | Steps | Systems | Key records |
|---|---|---|---|
| Order to cash | Order → payment → pick and pack → ship → invoice → payment received → bookkeeping | Commerce/POS, payment, OMS, WMS, ERP | Order, payment, shipment, invoice, ledger entry |
| Procure to pay | Need → purchase order → goods receipt → supplier invoice → payment | ERP, WMS | PO, receipt, invoice |
| Lead to order | Lead → qualification → opportunity → quote → order | Marketing automation, CRM, ERP | Lead, opportunity, quote, order |
| Issue to resolution | Contact → ticket → diagnosis → resolution → feedback | Service tool, CRM, OMS | Ticket, status changes, CSAT |
| Return | Request → return label → receive → inspect → refund/replace | Commerce, WMS, payment, ERP | Return, refund |

### Master data and source of truth
- **Master data:** core entities shared across processes (customer, product, supplier, location). **Transactional data:** events (orders, payments).
- For each entity, decide the **source of truth** (product: PIM; price: ERP or commerce; customer: CRM or a golden record; stock: WMS/ERP).
- **Master data management (MDM):** processes and tools that keep master data consistent across systems.

### Integration patterns between operational systems
Point-to-point APIs, middleware/iPaaS, message queues/event buses, file transfers, and the warehouse as an analytics hub (not usually a hub for operational writes). Questions for every integration: which system sends, which receives, what data, when, which identifier, what happens on failure? (See `ae-apis`.)

### Data migration between systems
1. **Scope:** which entities, how much history, which fields.
2. **Mapping:** source-to-target field mapping with transformations and rules.
3. **Cleanse:** deduplicate and fix before moving (do not migrate garbage).
4. **Extract, transform, load** in test environments; iterate.
5. **Reconcile:** counts, sums and samples per entity between old and new.
6. **Cutover plan:** freeze, final load, validation, rollback plan.
7. **Decommission** old system with archiving per retention rules.

### Why this matters for data teams
- Grain and keys come from the process (one order can have several shipments and invoices).
- Status fields change over time: model history (snapshots) when the process needs it.
- Revenue differs by process step (ordered, shipped, invoiced, paid, after returns); define which step a metric uses.
- Most data quality problems are process problems; fix at the source with the process owner.

## Common misconceptions

- "The e-commerce platform is the source of truth for everything." It is for some entities and events, not invoices or stock.
- "Integration is a technical task." It is a process and ownership task with technical parts.
- "Migrate everything." Migrate what is needed; archive the rest.

## Connects to

`ae-modeling` (grain from processes), `ae-data-engineering` (pipelines, migration), `ae-apis` (integration), `ae-customer-data-platforms` (customer data across systems), `ae-business-journeys` (process mapping), `ae-governance-gdpr` (retention, ownership).

## References

- [references/process-maps.md](references/process-maps.md): order to cash and return processes with system and data swimlanes, and a migration checklist.
- [references/exercises.md](references/exercises.md)
