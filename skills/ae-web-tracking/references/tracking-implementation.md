# Tracking implementation

## Ecommerce data layer pushes (GA4 recommended events)

```javascript
// Clear the previous ecommerce object to avoid leaking values between events
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "SEK",
    value: 4990,
    items: [{
      item_id: "SKU_42",
      item_name: "Laptop 14",
      item_category: "Computers",
      price: 4990,
      quantity: 1
    }]
  }
});
```

Purchase adds `transaction_id` (required for deduplication), plus optional `tax`, `shipping`, `coupon`. Field names must match exactly; a typo does not raise an error, it just produces empty reports.

## GTM setup for the event
1. **Variable:** Data Layer Variable `ecommerce` (or the GA4 tag's "send ecommerce data" option).
2. **Trigger:** Custom Event, event name `add_to_cart`.
3. **Tag:** GA4 Event, event name `add_to_cart`, ecommerce data from the data layer.
4. **Consent settings** on the tag: require `analytics_storage` (and ad consent for ad tags).
5. **Test:** GTM Preview → see the event, the tag fired, the values → GA4 DebugView → next day in the BigQuery export.

## Consent check in code (concept)

```javascript
const consent = JSON.parse(localStorage.getItem("consent") || "{}");
// { necessary: true, analytics: false, marketing: false, updatedAt: 1789977600000 }

function track(event) {
  if (!consent.analytics) {
    console.info("Blocked by consent:", event.name);   // log the outcome
    return;
  }
  sendEvent(event);
}
```
Order: read state → check purpose → allow or stop → log the outcome.

## Debugging a missing purchase (worked plan)

| Link | Check | Evidence |
|---|---|---|
| Created? | Does the confirmation page run the push? | Console: `dataLayer` contents |
| In data layer? | Is `purchase` with `transaction_id` there? | Console or GTM Preview |
| Sent? | Does a request go to the GA4 collect endpoint? | Network, filter `collect` |
| Received? | Does DebugView show it? | GA4 DebugView |
| Reported? | Does the export or report include it (after processing delay)? | BigQuery next day |

Hypotheses that can be disproved: tracking code never ran; consent blocked it; payload missing a required field; request never reached the receiver; reporting delayed or filtered.

## Server-side dedup

Generate `event_id` in the browser (or use `transaction_id`), send it with the client event, pass it to the backend, include it in the server event. The receiver (or your dbt model) keeps one event per id.
