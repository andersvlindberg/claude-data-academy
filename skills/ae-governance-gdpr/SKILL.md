---
name: ae-governance-gdpr
description: Data governance, GDPR and data quality for the Analytics Engineering Academy. Use for questions about GDPR principles, legal bases, consent, legitimate interest, data subject rights, records of processing, DPIA, processors and data processing agreements, international transfers, cookie and tracking law, the Swedish data protection authority IMY, the EU AI Act at a high level, personal data in warehouses, pseudonymisation versus anonymisation, PII tagging, retention and deletion, access control, data quality dimensions, data contracts, ownership, catalogs and lineage, dark data, and the GDPR and law course.
---

# Module 12: Governance, GDPR and data quality

Trust is the product. Data that is wrong, or collected without a lawful basis, is a liability. This module makes the analytics engineer the person who can prove both quality and compliance.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, implement → BUILD, graded work → LEARN only.

Important boundaries:
- Explain the law accurately at the level of principles and articles, and say clearly that this is not legal advice. For a real decision, the company's DPO or legal counsel decides.
- Cite articles (e.g. "Art. 6(1)(f)") so the learner can check the source. Point to IMY (imy.se) and the EDPB for guidance.
- Laws and guidance change: verify current national rules and authority guidance before stating specifics.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains personal data, the six principles areas, the six legal bases and the main data subject rights |
| L2 | Maps the personal data in a webshop: categories, purposes, legal basis, retention, systems |
| L3 | Implements PII tagging, pseudonymisation, access control, retention and a deletion process in a warehouse; tests data quality as contracts |
| L4 | Advises on trade-offs (legitimate interest assessment, consent design, transfers) and designs governance roles and processes |

## Core knowledge: GDPR for data teams

### Personal data
Any information relating to an identified or identifiable person: name, email, customer id, IP address, cookie id, device id, location, order history linked to a person. **Pseudonymised data (e.g. hashed email) is still personal data** when it can be re-linked. **Anonymised** data that cannot reasonably be re-identified is outside GDPR, and true anonymisation is hard.

Special categories (Art. 9) such as health, ethnicity, religion, sexual orientation, political opinions, biometric and genetic data need extra conditions. Avoid inferring them from behaviour.

### Principles (Art. 5)
Lawfulness, fairness and transparency · purpose limitation · data minimisation · accuracy · storage limitation · integrity and confidentiality · accountability (you must be able to **demonstrate** compliance).

### Legal bases (Art. 6(1))
(a) consent · (b) contract · (c) legal obligation · (d) vital interests · (e) public task · (f) legitimate interests (requires a balancing test). Each purpose needs its own basis. Examples: processing an order → contract; bookkeeping records → legal obligation; product analytics → often legitimate interest **or** consent depending on method and local cookie law; marketing emails → consent or legitimate interest with opt-out depending on context and marketing law.

Valid consent is freely given, specific, informed, unambiguous, as easy to withdraw as to give, and documented.

### Cookies and tracking
Storing or reading information on a user's device (cookies, localStorage, device ids) generally requires consent unless strictly necessary, under the ePrivacy rules implemented nationally (in Sweden in the Electronic Communications Act; verify the current reference). GDPR then governs the personal data processing that follows. That is why consent must be checked **before** tags fire (see `ae-web-tracking`).

### Rights (Art. 12–22)
Information (Art. 13–14), access (15), rectification (16), erasure (17), restriction (18), portability (20), objection (21, including absolute right to object to direct marketing), and rules on automated decision-making (22). A deletion request must reach **every** system: CRM, email tool, warehouse, backups policy, snapshots, ML training sets.

### Accountability tools
- **Records of processing (Art. 30):** what, why, legal basis, categories, recipients, transfers, retention, security.
- **Privacy by design and default (Art. 25).**
- **Processors (Art. 28):** a data processing agreement with every vendor that processes personal data for you (analytics, email, warehouse).
- **Security (Art. 32)** and **breach notification (Art. 33)** to the authority within 72 hours where required.
- **DPIA (Art. 35)** for high-risk processing (large-scale profiling, new technologies).
- **International transfers (Ch. V):** outside the EU/EEA need an adequacy decision (e.g. the EU-US Data Privacy Framework for certified companies), standard contractual clauses or other safeguards. Check EU locations for datasets.
- Fines can reach 4% of global annual turnover or 20 million euro for the most serious infringements (Art. 83).

### EU AI Act (overview)
Risk-based rules for AI systems: prohibited practices, high-risk systems with strict requirements, transparency duties for some systems, and rules for general-purpose models, phased in over several years. Relevant when customer data feeds AI that makes or supports decisions about people. Verify current application dates.

## Core knowledge: data ethics

Legal is the floor, not the ceiling. Ask: would the customer expect this use? Would they be surprised or uneasy if they knew? Could it harm or discriminate against a group? Is it transparent and reversible? Principles: benefit for the customer, transparency, fairness, proportionality, human accountability. Personalisation becomes surveillance when the customer cannot understand how the company knows something.

## Core knowledge: governance in the warehouse

- **Classify** columns: `meta: {contains_pii: true, pii_type: email}` in dbt YAML; keep PII in as few models as possible.
- **Pseudonymise** early: hash or tokenize identifiers in staging (salted hash), keep the mapping in a restricted table.
- **Access control:** separate roles; column masking or authorized views for PII; BI reads marts without direct identifiers where possible.
- **Retention:** document per table; implement with partition expiration or scheduled deletes.
- **Deletion process:** a documented, tested procedure that removes or anonymises a person across raw, models, snapshots and exports.
- **Dark data:** data collected and stored but never used. It carries risk without value: inventory it, give it a purpose or delete it.

## Core knowledge: data quality

Dimensions: **accuracy, completeness, consistency, timeliness, validity, uniqueness**.

- **Data contracts:** an agreement between producer and consumer on schema, semantics, quality and SLAs; enforced with tests and model contracts in dbt.
- **Ownership:** data owner (business, purpose), data steward (quality, definitions), data custodian (IT, operations and security).
- **Catalog and lineage:** dbt docs, or catalogs like DataHub, Atlan or Unity Catalog, so people can find data and see impact.
- **Observability:** freshness, volume, schema and distribution monitoring (see `ae-data-engineering`).

## Common misconceptions

- "Hashed emails are anonymous." Pseudonymous, still personal data.
- "Legitimate interest means we don't need to think about it." It requires a documented balancing test.
- "If the data is public, GDPR doesn't apply." It does.
- "Consent banner = compliance." Only if tags actually obey it and the processing has a valid basis and purpose.
- "Data quality is the source system's problem." Consumers must detect and communicate issues.

## Connects to

`ae-web-tracking` (consent in code), `ae-martech` (purposes and ownership), `ae-dbt` (tests, meta, contracts), `ae-warehouses` (access control), `ae-ai-ml` (AI Act, automated decisions), `ae-apis` (scraping and third-party data).

## References

- [references/gdpr-playbook.md](references/gdpr-playbook.md): data mapping template, legitimate interest test, deletion runbook, scraping checklist.
- [references/data-quality.md](references/data-quality.md): tests per quality dimension and a data contract template.
- [references/course-notes-gdpr-surveys.md](references/course-notes-gdpr-surveys.md): GDPR in surveys and customer research, data minimisation exercise pattern.
- [references/exercises.md](references/exercises.md)
