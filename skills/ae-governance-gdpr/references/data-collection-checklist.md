# Collecting data correctly: the checklist

Use before any new collection: a form, a tracking event, a survey, an import, a new source in the warehouse, an AI feature. The coach walks through it with you and stops on any "no" or "unsure".

## 1 · Purpose and necessity
- [ ] The purpose is written down in one sentence, specific (not "to improve our services").
- [ ] Every field or event is necessary for that purpose. Remove "nice to have" fields.
- [ ] Could the purpose be met with aggregated, anonymous or pseudonymous data instead?

## 2 · Legal basis
- [ ] One Art. 6 basis per purpose is chosen and documented.
- [ ] If legitimate interest: balancing test documented, objection route exists.
- [ ] If consent: freely given, specific, informed, unambiguous, unticked by default, separate per purpose, easy to withdraw, logged (who, when, what text, which version).
- [ ] No special categories (health, religion, ethnicity...) unless an Art. 9 exception applies; no inferring them.
- [ ] Children: is the service likely used by under-13s? Then parental consent rules apply for consent-based processing.

## 3 · Transparency
- [ ] The person is told at collection: who you are, why, legal basis, recipients, transfers, retention, rights, contact (Art. 13). For data from other sources, Art. 14 applies.
- [ ] Language is plain; no surprises later ("would the person expect this?").

## 4 · Technical collection
- [ ] Device storage or reading (cookies, localStorage, pixels, SDKs, fingerprinting) has consent unless strictly necessary (LEK 9:28). See cookies-and-tracking.md.
- [ ] Tags fire **after** consent, verified in DevTools.
- [ ] No personal data in URLs, event parameters or analytics tools that do not need it (emails, names, phone numbers in query strings or page titles).
- [ ] Forms: required fields really required; free-text fields warn against sensitive data.
- [ ] Surveys: anonymous or confidential stated correctly; small groups not reported.

## 5 · Storage, access and retention
- [ ] Where it is stored, in which region (EU preferred), and who can access it (least privilege, roles).
- [ ] PII columns tagged; marts for BI without direct identifiers where possible.
- [ ] Retention period set per purpose and implemented (partition expiry, scheduled deletion).
- [ ] Deletion and access requests can be served end to end.

## 6 · Vendors and transfers
- [ ] Every vendor that processes the data has a data processing agreement.
- [ ] Transfers outside the EU/EEA have a valid mechanism and an assessment.
- [ ] Joint controllership considered for social plugins and ad pixels.

## 7 · Risk and records
- [ ] DPIA screening done (profiling at scale, monitoring, new tech, special categories, children, AI decisions).
- [ ] Record of processing updated (Art. 30).
- [ ] Security measures fit the risk (encryption, access logs, secrets management).

## 8 · Purchased or imported data
- [ ] Source, legal basis and information to the persons are documented (Art. 14).
- [ ] Marketing lists: consent valid for **your** company and channel (MFL), not just the seller's.

## Red flags that stop the work
"We'll figure out the purpose later" · "Collect everything, it may be useful" · "Hash it, then it's anonymous" · "The vendor handles GDPR" · "Accept-all is the default" · "Just for a test, with real customer data".
