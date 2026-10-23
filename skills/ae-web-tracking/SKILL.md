---
name: ae-web-tracking
description: Web tracking and digital platform technology for the Analytics Engineering Academy. Use for questions about how a user action becomes data - client, network, server and storage, HTML and the DOM, JavaScript events, HTTP requests and status codes, browser DevTools, cookies, localStorage and sessionStorage, identifying browsers versus people, the data layer, Google Tag Manager, GA4 events and ecommerce tracking, consent and Consent Mode, client-side versus server-side tracking, deduplication, the GA4 BigQuery export, and troubleshooting tracking with an evidence chain.
---

# Module 07: Web tracking (where data is born)

Every customer dataset starts as an action in a browser or app. This module follows that action through the chain and trains the core habit: **separate observation from interpretation**.

The chain: **action → identity → state → event → collection → interpretation**.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, implement/debug → BUILD, graded work → LEARN only (work on a different site or a parallel example; review their own evidence).

Always teach and debug with the five questions:
1. What was expected to happen?
2. What can we actually observe?
3. What is the last link we know works?
4. Which small test separates two possible causes?
5. What proves the problem is solved?

And the troubleshooting model: **expectation → observation → isolation → test → confirmation**. Change one thing at a time.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Names the links (human → client → network → server → storage) and what each DevTools panel answers |
| L2 | Traces one action on a real site: element, JS event, request, status, storage, with screenshots as evidence |
| L3 | Implements a data layer push and a GTM tag for an ecommerce event, verifies it in GA4 DebugView and BigQuery, handles consent |
| L4 | Explains why GA4 and the order system disagree, designs client- plus server-side tracking with deduplication, and states what the evidence cannot prove |

## Core knowledge

### The chain
`Human → Client → Network → Server → Storage`

- **Client:** HTML describes, the DOM represents, JavaScript reacts. What you see on screen is the result, not the source.
- **Network:** HTTP request (method, URL, headers, body) and response (status, headers, body, time).
- **Server:** receives, validates, processes, responds.
- **Storage:** where the result is kept (database, logs, analytics tool).

### DevTools: learn the question, not the button
| Panel | Question |
|---|---|
| Elements | What is on the page? |
| Console | What does the code say? Did it crash, and where? |
| Network | What was sent, to where, with which status? |
| Application | What is stored locally (cookies, localStorage, sessionStorage)? |

DevTools is where you **look**. The editor (or GTM, or the CMS) is where you **change**. Edits in DevTools vanish on reload. An empty Network panel is also evidence: the chain broke before the network.

### HTTP status codes
| Range | Meaning |
|---|---|
| 2xx | Received (200 OK, 201 Created, **202 Accepted = received, not necessarily processed or stored**) |
| 3xx | Redirect |
| 4xx | Problem with the request (400 bad request, 401 not authenticated, 403 forbidden, 404 not found, 429 too many requests) |
| 5xx | Problem on the server |

GET retrieves (parameters in the URL, should not change data). POST sends (body, may create an event).

### Browser memory
| | Cookie | localStorage | sessionStorage |
|---|---|---|---|
| Sent with HTTP requests | Yes, automatically | No | No |
| Scoped to | domain + path | origin | origin + tab |
| Expires | when set to | never (until cleared) | when the tab closes |
| Size | small | larger | larger |

Ask four questions about any stored value: **What is stored? Where? For how long? Who can read it?**

### Identity
**An id identifies a browser, not a human.**
- One person → many ids: other device or browser, cleared storage, private mode, blocked storage.
- Many people → one id: shared computer, shared login, test accounts, bad merges.
- Stitching an anonymous id to a customer id at login is a **design decision**, not a fact of nature.
- GA4: `user_pseudo_id` (client id, from the `_ga` cookie on web) versus `user_id` (set by you when the user logs in).

### Business events versus measurement events
- **Business event:** order created, payment approved, stock reduced.
- **Measurement event:** event sent, parameters registered, tool received it, report updated.
The order database can show order 7842 while analytics shows 0 purchases. Both can be "right".

An event can die in five places: **created? → in the data layer? → sent? → received? → reported?** Check one link at a time and keep the evidence.

### Data layer and tag management
`Website → data layer → tag manager → analytics tool`

The data layer separates the business (what happened) from the measurement tool (who gets told). It reduces dependence on page layout and CSS selectors.

Google Tag Manager concepts: **tags** (what to fire), **triggers** (when), **variables** (values, e.g. from the data layer). Test with Preview mode (Tag Assistant).

### GA4 event model
- Everything is an event with parameters. Categories: automatically collected, enhanced measurement, recommended (e.g. `view_item`, `add_to_cart`, `begin_checkout`, `purchase`), custom.
- Ecommerce events carry an `ecommerce` object with `currency`, `value`, `transaction_id` (purchase) and an `items` array.
- Debug with GA4 **DebugView** and GTM Preview.

### Consent
`User chooses → choice is stored → code is allowed or blocked → collection happens`
- **A banner is only the interface.** If the code is not actually controlled by the stored choice, the button changes nothing.
- Check **before** collecting. Deleting afterwards is not the same as never collecting.
- Google **Consent Mode** passes consent state to Google tags (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`). Basic mode blocks tags until consent; advanced mode sends cookieless pings and uses modeling. Check current Google documentation for requirements in the EEA.
- Legal side: see `ae-governance-gdpr`.

### Client-side versus server-side
| | Client-side | Server-side |
|---|---|---|
| Strengths | Sees clicks and UI behaviour, fast to implement, easy to observe | Close to the business event, stable, more control, can log receipts |
| Weaknesses | Blocked by browsers and ad blockers, can be manipulated, network can fail | Does not see the UI, needs implementation, can also be wrong, must follow the same consent and purpose |

When sending both: `client event → event_id → server event → deduplication`. Without a shared id the same purchase counts twice.

### From GA4 to the warehouse
GA4 exports raw events daily to BigQuery (`events_YYYYMMDD`, nested `event_params`, `items`). Modeling it is covered in `ae-dbt` ([ga4-in-dbt.md](../ae-dbt/references/ga4-in-dbt.md)).

## Evidence chain (presenting a tracking investigation)
1. The service, the action and the expected result.
2. What you observed and which deviation you chose.
3. Your hypothesis and how you tested it.
4. Technical evidence: Network, Console or storage.
5. Conclusion, consequence and what you **could not** determine.

One clear piece of evidence beats ten screenshots. Claims are either supported by observation or marked as interpretation.

## On the reference stack

GTM with a CMP and Consent Mode v2 in front of GA4; data layer events designed to match GA4 recommended events so the dbt models stay simple. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "200 means it was saved." It means the server responded OK to that request.
- "The cookie id is the customer." It is a browser.
- "If the banner says no, nothing is tracked." Only if the code obeys the stored state.
- "Fixing it in DevTools fixed it." Reload and it is back.
- "GA4 should match the order system exactly." It should be close and stable, not identical.

## Connects to

`ae-governance-gdpr` (consent law), `ae-dbt` (GA4 models), `ae-martech` (tag management in the stack), `ae-project-method` (troubleshooting method), `ae-apis` (HTTP in depth).

## References

- [references/tracking-implementation.md](references/tracking-implementation.md): data layer pushes, GTM setup, consent checks, server-side dedup.
- [references/course-notes-tdp.md](references/course-notes-tdp.md): lesson-by-lesson summary of the digital platform technology course.
- [references/javascript-for-analytics.md](references/javascript-for-analytics.md): JavaScript essentials for reading and writing tracking code.
- [references/exercises.md](references/exercises.md)
