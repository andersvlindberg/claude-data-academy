# Exercises: Web tracking

## Set A (practitioner)

1. On any public site, pick one action (search, add to cart). Record: the element (Elements), the request (Network: method, URL, status), and what is stored (Application).
2. Mark each statement as observation or interpretation: "request sent with status 202", "the booking was saved", "`_ga` cookie exists", "the user is a returning customer".
3. Explain the difference between cookie, localStorage and sessionStorage with one use for each.
4. Break an `id` in a local HTML page so the JavaScript cannot find a button. Describe the symptoms in Console and Network.

## Set B (independent)

1. Implement `view_item`, `add_to_cart` and `purchase` data layer pushes on a practice site, fire them through GTM to GA4, and verify each in DebugView.
2. Add a consent state that blocks analytics events when declined. Prove it with Network evidence for both states.
3. The order system shows 112 purchases yesterday, GA4 shows 80. Write a test plan with five disprovable hypotheses and the evidence each needs.
4. Present one investigation as an evidence chain (5 parts), including what you could not determine.

## Quiz bank

1. What does 202 mean, and what does it not mean?
2. Which DevTools panel answers "was anything sent?"
3. Which storage is sent automatically with HTTP requests? *(cookies)*
4. Why can one person become three users?
5. Why must `transaction_id` be sent with purchases?
6. What is the difference between basic and advanced Consent Mode?

## Interview questions

1. "Walk me through how a click on 'Buy' becomes a row in BigQuery."
2. "Why do GA4 and our order system disagree, and how would you explain it to the CMO?"
3. "How would you implement server-side tracking without double counting?"
