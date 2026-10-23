# JavaScript for analytics (scripting essentials)

Enough JavaScript to read, debug and write tracking code.

## Basics
```javascript
const price = 4990;                       // constant
let quantity = 1;                         // can change
const item = { id: "SKU_42", name: "Laptop 14", price };   // object
const items = [item];                     // array
const total = items.reduce((sum, i) => sum + i.price * quantity, 0);
console.log(`Total: ${total}`);           // template literal
```

## DOM and events
```javascript
const button = document.querySelector("#add-to-cart");
if (!button) console.warn("Button not found: check the id");   // null guard
button?.addEventListener("click", () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "add_to_cart", ecommerce: { currency: "SEK", value: price, items } });
});
```

## Reading a value from the page safely
```javascript
const priceText = document.querySelector(".product-price")?.textContent ?? "";
const parsed = Number(priceText.replace(/[^\d,]/g, "").replace(",", "."));
const value = Number.isFinite(parsed) ? parsed : null;
```
Prefer values pushed by the backend into the data layer over scraping the page.

## Network: sending an event to your own endpoint
```javascript
fetch("/api/events", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "booking_submitted", eventId: crypto.randomUUID(), ts: Date.now() })
}).then(r => console.log("status", r.status));   // 202 = received, not stored
```
`navigator.sendBeacon` is useful for events sent while the page unloads.

## Storage
```javascript
localStorage.setItem("visitorId", crypto.randomUUID());
const visitorId = localStorage.getItem("visitorId");
document.cookie = "consent=analytics; max-age=31536000; path=/; SameSite=Lax";
```

## In Google Tag Manager
- Custom JavaScript variables must be an anonymous function returning a value: `function() { return {{DLV - ecommerce.value}} || 0; }`.
- Custom HTML tags run arbitrary code: keep them minimal, consent-controlled and reviewed.

## Debugging habits
`console.log` the object, read the first red error in Console and click its file:line, check Network for the request, and test one change at a time.

## CSS selectors (for tag triggers)
GTM click and visibility triggers use CSS selectors: `#id`, `.class`, `button[data-action="add-to-cart"]`, `form#signup input[type="email"]`. Prefer stable `data-*` attributes agreed with developers over classes that designers change. Better still: have the site push business events to the data layer, so tracking does not depend on page layout.

## HTTPS and security basics (data perspective)
- **HTTPS** encrypts traffic between browser and server (TLS); without it, cookies and form data can be read in transit. All tracking endpoints should be HTTPS.
- Cookie flags: `Secure` (HTTPS only), `HttpOnly` (not readable by JavaScript), `SameSite` (`Lax`/`Strict`/`None`) controls cross-site sending.
- **First-party versus third-party** cookies: set by the site you visit versus another domain; browsers increasingly restrict third-party cookies.
- Never put personal data (email, name, phone) in URLs or query strings: they end up in logs, analytics and referrers.
