# Course notes: MarTech and customer data (my summary)

My own summary of the MarTech course material (lecture PDFs, e-book and podcast series) used at IHM. Course material itself is not reproduced here.

## The red thread
**Follow the customer. Follow the data. Understand the ecosystem. Create effect.** Never start with "which system should we use?" Start with the customer, then the data. Data is not the goal; effect is.

Four everyday questions: **See** (what happens for the customer?) · **Understand** (what happens to the data?) · **Analyse** (what does it mean for systems, people and processes?) · **Create** (what could we do better?).

## Three perspectives on the same customer
| Perspective | Questions |
|---|---|
| Customer | What happens in the journey? Which touchpoints? Where is friction? |
| Business | Which problem should be solved? Which goals? Which information do decisions need? |
| Technology | Which systems? Which data is created? How do systems communicate? Where is it stored? |

## Five types of customer data
Identity (who) · demographic/firmographic (what kind of person or organisation) · behavioural (what they do) · transactional (what they buy) · service and relationship (what happens in the relationship).

## Owned, paid and earned
Owned = own channels (site, shop, app, newsletter, portal). Paid = bought (ads, sponsored content). Earned = attention from others (reviews, recommendations, shares, press, word of mouth).

## MarTech is an ecosystem, not a toolbox
What matters is not how many systems a company has but how they connect and which problem they solve. A company can have an impressive stack and still give a poor experience: customers repeat themselves, offers go to people who already bought, sales lacks service information, management looks at numbers with different definitions. Sometimes you must remove tools to create shared effect.

## One interaction, many data flows
A single purchase may need to reach: CRM, a segment, a running campaign (that should stop), analytics, the warehouse, customer service and the next communication. **A data flow is also a work flow.**

## Integration questions (you don't build every integration, but you ask)
Which system sends? Which receives? What information? When? How is the customer identified? What happens if something fails?

## How systems talk (podcast concepts)
- **API:** the receiver asks ("like calling the post office to ask if mail has arrived"). **Polling** = asking again and again.
- **Webhook:** the sender tells ("like a mailbox that pings"). A setting in the system.
- **Headless CMS:** content without presentation, delivered to web, app and screens via API.
- **Payload** = the data sent. **Rate limit** = maximum calls allowed (Black Friday!); solution: queues.
- Example chain: form → webhook → CRM → email tool → email sent. Without identity resolution (same customer id) the chain breaks.
- **Event** = what happened (`add_to_cart`) with name, parameters and timestamp; **data point** = one value in it. Good event design = consistent names.
- **E-commerce is a data engine:** data before, during and after purchase. Checkout is where an anonymous visitor becomes an identified customer. An abandoned cart is a signal: you know exactly what the customer wanted.

## What goes wrong with data
- Garbage in, garbage out: the same customer three times in CRM; the five-year customer gets "Welcome, new customer". Deduplication is core work.
- Different definitions: "active customer" = purchase last year in e-commerce, but logged in last 30 days in CRM.
- Integrations break: rate limits and renamed fields lose data silently. Fix: queues and alerts.
- Wrong channel gets the credit: last click gives everything to the final ad; control groups show real effect (incrementality).
- Pipeline breaks: history disappears, the VIP is treated as new. Data quality is customer experience.
- Customer service as radar: a hundred tickets about the same fault become an alarm, often before IT's own. A customer with an open complaint should not get a sales email.

## Before moving data (ETL/ELT episode)
Why? Which data? Which identity? How often? What happens if it is missing? Think in flows, not systems. Data lake = cheap raw data; warehouse = analysis-ready; lakehouse = both.

## From problem to solution (ten questions)
1. What do we need to understand? 2. Which customer experience do we want? 3. Which data do we need? 4. Where is it? 5. Can we trust it? 6. Which systems are affected? 7. Which functions must collaborate? 8. What will we do with the data? 9. What should the customer notice? 10. How do we measure the effect?

"Good data doesn't make the organisation smarter. It makes people better at making decisions together."

## The cycle from customer to effect
Customer → interaction → data (what is created?) → system (where does it land?) → integration → processing (make it usable) → analysis (what can we understand?) → collaboration (who needs it?) → creativity (what can we create?) → activation (what do we do?) → customer experience → business effect → new interaction.

## Where ROI comes from
Campaign → click → visit → conversion → purchase → revenue; but also service → solved problem → satisfied customer → repurchase; and better relevance → better response → better conversion. ROI is not only campaign measurement; it is what the whole ecosystem makes possible: more sales, conversion and loyalty, lower cost and manual work, better experience, faster decisions.

## The big ethical question
How much should a company know about the customer and do with it? Answer: benefit for the customer, consent and openness, and data quality so decisions are right. Personalisation becomes surveillance when the customer doesn't understand how the company knows something.

## Lab method (co-lab between customer-experience and customer-data students)
Two specialist tracks on one case: **customer and business** (needs, journey and friction, communication, CX and goals) and **data and technology** (sources and quality, system functions, data flows and integrations, technical limits), merged into one recommendation.

Rules of the game: start with the customer problem, not a tool you already know · use the case material as evidence and mark what it actually shows · use AI and public sources to explore terms, hypotheses and alternatives · separate observations, case facts, hypotheses, assumptions and verified conclusions · never claim interviews or tests you did not do · check claims about real platforms against current vendor documentation · choose the simplest solution that meets the need; a new system is not automatically right · save findings each week.

Work template: **Our thesis · Customer evidence · Technical evidence · Our decision · Uncertainty and test · AI use · Sources.** Earlier lab template: Question · Answer · Example · Source · Conclusion.

Four-week arc: understand (we don't know our customers) → retrieve and extract → structure and move → build and test an architecture.

## "MarTech from zero" warm-ups
- What must work for a pair of shoes ordered online to arrive? (order, payment, stock, shipping, notification)
- What does a company know after you view, add to cart and buy a jacket?
- Draw the four boxes when a bike is paid for but the warehouse never hears about it, and mark where it breaks.
- Webshop, warehouse, payment and customer service: which must share information, and what happens if stock doesn't know a product was sold?
