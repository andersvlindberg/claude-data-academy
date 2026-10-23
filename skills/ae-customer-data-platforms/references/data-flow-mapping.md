# Mapping a company's customer data flow (workshop method)

Works for any company in about three hours, alone or in a group.

## Step 1 · Understand the customer and the business (≈20 min)
Who are the customers? What does a typical journey look like? Where in the journey is data created? Sketch a simple journey with 4–6 steps.

*Example, hotel:* sees ad → searches and compares → books online → checks in → stays (restaurant, spa) → checks out → gets survey → returns.

## Step 2 · Map the data sources (≈35 min)
| Source/system | Data it holds | Identifier | Structured? | Owner |
|---|---|---|---|---|
| Booking engine | bookings, dates, price | booking id, email | yes | revenue mgmt |
| Property system (PMS) | stays, room, extras | guest id | yes | operations |
| CRM / email tool | profile, consent, sends | email | yes | marketing |
| Website analytics | sessions, events | cookie id | yes | marketing |
| Reviews / surveys | scores, free text | email or none | partly | CX |
| Customer service | tickets, calls | phone, email | partly | service |

## Step 3 · Draw the data flow (≈40 min)
Boxes for systems, arrows for flows, labels for **what**, **how** (API, file, manual) and **how often**. Example simplified flow: CRM → data warehouse; social media → data platform; app → data platform.

## Step 4 · Find the problems (≈25 min)
Silos, missing ids, manual exports, duplicates, delays, conflicting definitions, missing consent, data nobody uses (dark data).

## Step 5 · Design a better solution
1. Collect: which sources must be connected? 2. Integrate: with which identifier? 3. Quality: which rules? 4. Use: which profiles, segments and analyses? 5. Activate: in which channels? No need to name a specific vendor.

## Step 6 · Create business value
For each improvement: customer effect, business effect, how it is measured. Be ready for: *What could go wrong if data quality is poor? Which data is most critical? What would you do first?*

## Documenting evidence (lab template)
**Thesis · Customer evidence · Technical evidence · Decision · Uncertainty and test · AI use · Sources.** Separate observations, case facts, hypotheses, assumptions and verified conclusions. Never claim you interviewed customers or tested a system if you did not. Verify claims about real platforms in current vendor documentation. Choose the simplest solution that meets the need; a new system is not automatically the right answer.

## Following one event across systems
Pick one customer event (a purchase) and follow it: which system records it, where it is stored, how it moves, which systems need it (CRM, segment, running campaign that should stop, analytics, warehouse, customer service), what happens if it is missing or late. **A data flow is also a work flow.**
