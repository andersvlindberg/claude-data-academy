# The GDPR handbook (article by article, for data people)

A structured walk through the General Data Protection Regulation (EU) 2016/679 with what each part means in data work. Not legal advice: decisions belong to the controller with its DPO or lawyer. Always read the article itself (eur-lex.europa.eu) and current guidance from IMY (imy.se) and the EDPB (edpb.europa.eu).

## Chapter 1 · Scope and definitions (Art. 1–4)

**Material scope (Art. 2):** processing of personal data wholly or partly by automated means, or in a filing system. Not covered: purely personal or household activities, and law enforcement (separate directive).

**Territorial scope (Art. 3):** organisations established in the EU, and organisations outside the EU that offer goods or services to people in the EU or monitor their behaviour there (tracking counts).

**Key definitions (Art. 4):**
| Term | Meaning | Data example |
|---|---|---|
| Personal data | Any information relating to an identified or identifiable natural person | Email, customer id, IP address, cookie id, device id, order history, location |
| Processing | Any operation on personal data | Collecting, storing, querying, joining, exporting, deleting |
| Controller | Decides purposes and means | The webshop |
| Processor | Processes on the controller's behalf | Cloud warehouse, email tool, analytics vendor (often) |
| Consent | Freely given, specific, informed, unambiguous indication by a clear affirmative action | Unticked checkbox the user ticks |
| Pseudonymisation | Data cannot be attributed without additional information kept separately | Salted hash of email with key stored elsewhere; **still personal data** |
| Profiling | Automated evaluation of personal aspects (preferences, behaviour, reliability) | Churn score, segment assignment |
| Personal data breach | Security incident leading to destruction, loss, alteration, unauthorised disclosure or access | Public bucket with a customer export |

Anonymous data (no reasonable way to identify anyone, considering all means likely to be used) is outside GDPR. True anonymisation is hard: small groups, rare combinations and linkable ids can re-identify.

## Chapter 2 · Principles (Art. 5–11)

**Art. 5 principles:** lawfulness, fairness and transparency · purpose limitation · data minimisation · accuracy · storage limitation · integrity and confidentiality · **accountability** (you must be able to demonstrate compliance: documentation is part of the duty).

**Art. 6 legal bases** (every processing purpose needs one, chosen before processing):
| Basis | When it fits | Watch out |
|---|---|---|
| (a) Consent | Optional processing the person can refuse, e.g. marketing cookies, newsletter | Must be as easy to withdraw; no bundling; keep proof |
| (b) Contract | Necessary to deliver what the person asked for: order, delivery, account | Only what is *necessary*, not "useful" |
| (c) Legal obligation | Bookkeeping, tax | Name the law |
| (d) Vital interests | Life-threatening situations | Rare in data work |
| (e) Public task | Authorities | Not for companies generally |
| (f) Legitimate interests | Fraud prevention, security, some analytics and B2B marketing | Documented three-part balancing test; right to object |

**Art. 7 conditions for consent:** demonstrable, distinguishable from other matters, withdrawable at any time as easily as given, not conditional on a service when not necessary for it.
**Art. 8 children:** consent for information society services directly to children requires parental authorisation below an age set nationally (13 in Sweden, in the Swedish Data Protection Act; verify current rules).
**Art. 9 special categories:** health, racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic, biometric (for identification), sex life or sexual orientation. Prohibited unless an Art. 9(2) exception applies (often explicit consent). Do not infer them from behaviour (e.g. purchases suggesting pregnancy or illness).
**Art. 10 criminal offence data:** only under official authority or specific law.
**Art. 11:** if you do not need to identify people, you are not required to collect extra data just to comply with rights.

## Chapter 3 · Data subject rights (Art. 12–23)

Respond **without undue delay and within one month** (extendable by two months for complex requests, with notice). Free of charge as a rule. Verify identity proportionately.

| Article | Right | Data team implication |
|---|---|---|
| 13–14 | Information when collecting (directly or from others) | Privacy notice: controller, purposes, legal bases, recipients, transfers, retention, rights, source |
| 15 | Access (copy of data + information) | Be able to find all data about a person across systems and the warehouse |
| 16 | Rectification | Corrections must flow to downstream systems |
| 17 | Erasure ("right to be forgotten") | Deletion runbook covering raw, models, snapshots, exports, ML training sets, backups policy |
| 18 | Restriction | Flag to stop processing while disputed |
| 19 | Notify recipients of rectification/erasure | Reverse ETL and integrations must propagate |
| 20 | Portability | Machine-readable export of data provided by the person (consent/contract basis) |
| 21 | Object | Absolute for direct marketing; for legitimate interest, stop unless compelling grounds |
| 22 | Automated decisions with legal or similarly significant effects | Human review, explanation, contest; relevant for scoring, credit, pricing |

## Chapter 4 · Controller and processor duties (Art. 24–43)

- **Art. 24–25:** responsibility of the controller; **data protection by design and by default** (minimal data, minimal access, short retention as the default setting).
- **Art. 26:** joint controllers need an arrangement (e.g. some social media plugins and ad pixels create joint controllership for the collection step).
- **Art. 28:** processors only with a **data processing agreement** (instructions, confidentiality, security, sub-processors, assistance, deletion at end).
- **Art. 30:** **records of processing activities** (purposes, categories, recipients, transfers, retention, security).
- **Art. 32:** appropriate security: pseudonymisation, encryption, access control, resilience, restore ability, regular testing.
- **Art. 33–34:** **breach notification** to the supervisory authority within **72 hours** of becoming aware (unless unlikely to result in risk), and to affected people when high risk. Document all breaches.
- **Art. 35–36:** **DPIA** before high-risk processing (large-scale profiling, systematic monitoring, new technologies, special categories at scale). Consult the authority if high risk remains.
- **Art. 37–39:** **DPO** required for public bodies and for core activities involving large-scale regular monitoring or special categories.
- **Art. 40–43:** codes of conduct and certification.

## Chapter 5 · Transfers outside the EU/EEA (Art. 44–50)

Allowed with: an **adequacy decision** (e.g. the EU-US Data Privacy Framework since July 2023 for certified US companies; check its current status, as it has been challenged), **appropriate safeguards** (standard contractual clauses plus a transfer impact assessment and supplementary measures, binding corporate rules), or narrow **derogations** (Art. 49).

Case to know: in 2023, IMY found that four Swedish companies (Tele2, CDON, Coop, Dagens Industri) transferred personal data unlawfully through Google Analytics, because the protective measures were insufficient before the new adequacy decision; Tele2 was fined SEK 12 million and CDON SEK 300,000. Lessons: analytics identifiers are personal data, and vendor and transfer assessments are your responsibility.

## Chapters 6–8 · Authorities, remedies and fines (Art. 51–84)

- Supervisory authority in Sweden: **IMY** (Integritetsskyddsmyndigheten). Lead authority mechanism (one-stop shop) for cross-border processing.
- People can complain (Art. 77), go to court (Art. 78–79) and claim compensation (Art. 82).
- **Fines (Art. 83):** up to EUR 10 million or 2% of global annual turnover for some duties (e.g. records, security, breach notification), up to **EUR 20 million or 4%** for principles, legal bases, consent, rights and transfers. Plus orders to stop processing.

## Swedish supplements

- **Dataskyddslagen (2018:218)** supplements GDPR: age for children's consent, rules on personal identity numbers (personnummer only when clearly justified), public sector rules.
- **Lagen om elektronisk kommunikation (LEK)** chapter 9 section 28: storing or reading information on a user's device requires information and consent unless strictly necessary. Supervised by **PTS**. See cookies-and-tracking.md.
- **Marknadsföringslagen (MFL)** section 19: marketing by email, SMS and similar to individuals requires prior consent, with an exception for existing customers (own similar products, opt-out offered at collection and in every message). Supervised by the Consumer Agency (Konsumentverket). Verify the current wording.
- **EU AI Act:** risk-based obligations for AI systems, phased in from 2025; relevant when customer data feeds AI that affects people.
