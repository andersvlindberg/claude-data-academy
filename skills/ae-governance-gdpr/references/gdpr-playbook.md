# GDPR playbook for data teams

Not legal advice. Use to structure work and questions for the DPO.

## Data mapping template (one row per processing purpose)

| Purpose | Data categories | Data subjects | Legal basis | Source systems | Recipients/processors | Transfers outside EEA | Retention | Security measures |
|---|---|---|---|---|---|---|---|---|
| Order fulfilment | name, address, email, order lines | customers | Art. 6(1)(b) contract | shop platform | carrier, payment provider | check | per bookkeeping law for accounting records | access control |
| Product analytics | cookie id, events, device | visitors | consent (cookie law) + 6(1)(a) or (f) per legal assessment | GA4 | Google (processor terms) | check | e.g. 14 months | consent mode, IP handling |
| Email marketing | email, purchase history | customers/subscribers | consent or legitimate interest with opt-out, per marketing law | ESP | ESP | check | until withdrawal + short period | unsubscribe link |

## Legitimate interest assessment (three-part test)
1. **Purpose:** is there a legitimate interest? (e.g. understanding product performance)
2. **Necessity:** is the processing necessary for it, or is there a less intrusive way? (aggregate, pseudonymise)
3. **Balancing:** do the person's interests and expectations override it? Consider data type, reasonable expectations, safeguards, opt-out.
Document the result.

## Deletion runbook (right to erasure)
1. Verify identity of the requester.
2. Look up all identifiers (email, customer id, hashed email, cookie ids if linked).
3. Delete or anonymise in source systems (CRM, ESP, shop, support).
4. Warehouse: delete from raw tables; rebuild or update affected models; handle snapshots (anonymise historical rows); check exports and ML training sets.
5. Backups: follow the documented backup retention policy (data restored later must be re-deleted).
6. Log the request and completion date (without storing more personal data than needed). Respond within one month (extendable in some cases).

## Scraping and third-party data checklist
- Does the data contain personal data? If yes, GDPR applies even if public.
- Legal basis (usually legitimate interest with documented balancing) and information duty (Art. 14).
- Minimise: scrape only fields needed for a defined purpose.
- Respect the site's terms, robots rules and rate limits; consider copyright and database rights.
- Company data only (prices, products) is mainly a terms-of-service and IP question.

## Questions to ask before building anything with personal data
1. What is the purpose, and is it documented?
2. What is the legal basis for that purpose?
3. Is every field necessary? Can we pseudonymise or aggregate?
4. Who gets access, and is it least privilege?
5. How long do we keep it, and how is deletion done?
6. Which processors are involved, and are agreements in place?
7. Does it leave the EU/EEA?
