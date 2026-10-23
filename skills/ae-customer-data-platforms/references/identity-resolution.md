# Identity resolution in the warehouse

## Identity graph tables
```
identifiers(identifier_type, identifier_value, source_system, first_seen_at, last_seen_at)
identity_edges(identifier_a, identifier_b, edge_type, confidence, observed_at)
   -- edge_type: login (deterministic), same_email, same_phone, checkout_email, probabilistic_device
customer_identity_map(identifier, customer_key)
```

## Deterministic steps
1. Normalise: lowercase and trim emails, E.164 phone numbers, strip spaces in card tokens.
2. Create edges from events that prove a link: login (`cookie_id` ↔ `user_id`), checkout (`cookie_id` ↔ `email`), CRM record (`email` ↔ `customer_id`), loyalty signup (`member_id` ↔ `email`).
3. Find connected components (all identifiers linked directly or indirectly) and assign one `customer_key` per component.

## Connected components in SQL (iterative label propagation sketch)
```sql
-- start: each identifier is its own label
create or replace table id_labels as
select identifier, identifier as label from identifiers_distinct;

-- repeat until no label changes (run as a loop in Python or dbt macro):
create or replace table id_labels as
select l.identifier, least(l.label, coalesce(min(n.label), l.label)) as label
from id_labels l
left join identity_edges e on e.identifier_a = l.identifier
left join id_labels n on n.identifier = e.identifier_b
group by l.identifier, l.label;
```
Edges must be symmetric (insert both directions). Graph tools or Python (`networkx`) are simpler for prototypes.

## Guardrails
- Cap component size; a component with thousands of emails usually means a shared device, a test account or a bad edge (for example a store terminal).
- Keep probabilistic edges in a separate graph with confidence, used only for low-risk purposes (analytics), never to merge legal identities or to show personal data.
- Keep full lineage: every profile can be traced to its source identifiers.
- Re-run when consent is withdrawn or erasure requested; the identity map is personal data.
