# Cookies and tracking: the whole picture

Two layers of law apply to web and app tracking:
1. **ePrivacy (in Sweden: LEK chapter 9 section 28)** governs *storing or reading information on the user's device*: cookies, localStorage, sessionStorage, pixels, SDK identifiers, fingerprinting. Consent is required unless the storage is **strictly necessary** for a service the user explicitly requested. Supervised by **PTS**.
2. **GDPR** governs the *personal data processing* that follows (identifiers, events, profiles). Supervised by **IMY**.
Consent under LEK has the same meaning as in GDPR: freely given, specific, informed, unambiguous, by a clear affirmative action.

## What needs consent?
| Category | Examples | Consent needed? |
|---|---|---|
| Strictly necessary | Shopping cart, login session, load balancing, security, storing the consent choice itself | No (but inform) |
| Preferences / functional | Language, region, remembered settings beyond what the user asked for | Usually yes, unless directly requested |
| Statistics / analytics | GA4 `_ga`, heatmaps, session recording | Yes in Sweden as a rule |
| Marketing / advertising | Ad pixels (Meta, Google Ads), retargeting, cross-site tracking | Yes |
Server-side tagging does not remove the consent requirement for reading or setting identifiers in the browser, and the processing still needs a legal basis.

## Banner and consent design (requirements and authority guidance)
- Reject must be possible **on the first layer**, as easy as accept: same level, similar size and prominence.
- **No pre-ticked boxes** (CJEU Planet49, 2019). No consent by scrolling, continuing to browse or closing the banner.
- Granular choices per purpose/category; vendors, purposes and lifetimes available in the second layer.
- No **dark patterns**: colour or size favouring accept, misleading wording, extra friction to reject, false urgency, information overload. IMY has issued guidance and decisions on deceptive consent design; the EDPB cookie banner taskforce (2023) flagged missing reject buttons, deceptive design and misuse of "legitimate interest" for cookies.
- **Withdrawal** as easy as giving consent: a persistent link or icon; browser settings alone are not enough.
- Consent **before** non-essential cookies or tags run; store a **consent log** (timestamp, choices, banner version) as proof.
- Re-ask at reasonable intervals and when purposes or vendors change.

## Implementation (where data people come in)
1. **CMP** (consent management platform) stores the choice and exposes it to tags.
2. **GTM consent settings** on every tag; **Google Consent Mode v2** passes `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`.
   - *Basic mode:* tags blocked until consent.
   - *Advanced mode:* cookieless pings sent before consent for modeling. Assess legally with your DPO; Swedish practice is cautious.
3. **Server-side**: event ids for deduplication, consent state passed along, no identifiers for users who declined.
4. **Data layer** carries consent state so the warehouse can filter (`consent_analytics = true`).
5. **Warehouse:** model consent history; exclude non-consented data from purposes that require it; respect withdrawal going forward.

## Audit procedure (DevTools, 15 minutes)
1. Open the site in a fresh private window with DevTools open (Network with "Preserve log", Application → Cookies and Storage).
2. **Before any choice:** list cookies and storage keys; filter Network for analytics and ad domains (`google-analytics`, `googletagmanager`, `doubleclick`, `facebook`, `tiktok`...). Expected: only strictly necessary cookies, no tracking requests carrying identifiers.
3. **Click reject:** repeat the check. Expected: nothing new; consent cookie only.
4. **Click accept:** expected: analytics and marketing cookies and requests appear.
5. **Withdraw:** check that tags stop and cookies are removed or no longer used.
6. Document observations versus interpretations, with screenshots, as an evidence chain.

## Swedish cases worth knowing
- **IMY, 2023:** Google Analytics transfers to the US unlawful for four companies before the EU-US Data Privacy Framework (Tele2 fined SEK 12 million, CDON SEK 300,000). Analytics identifiers are personal data.
- **PTS cookie supervision (2022–2023):** reviews of large Swedish websites against LEK 9:28; decisions are useful as guidance on banners and information.
- **IMY on deceptive design (2025):** guidance and decisions on manipulative consent interfaces.
Check the authorities' sites for the latest decisions; this area moves fast.

## Common mistakes
Tags firing on page load before consent · "Accept" big and orange, "Settings" small and grey · analytics set as "necessary" · consent logs missing · emails or names in URLs sent to analytics · Consent Mode configured but tags not respecting it · a new marketing pixel added by someone outside the data team without review.
