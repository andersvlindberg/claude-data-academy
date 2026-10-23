# Lab 04: Track an e-commerce event with GTM and verify it in DevTools

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer · Business / MarTech | L2 | 2–3 h | Google Tag Manager, GA4, Chrome DevTools | Free | Lab 02 |

**Goal:** Push a `add_to_cart` event to the dataLayer on a test page, send it to GA4 via GTM, and prove it arrives correctly.

## What you'll learn
- The dataLayer and GA4 e-commerce event spec
- GTM tags, triggers and variables
- Verifying with DevTools Network, GTM Preview and GA4 DebugView
- Consent Mode basics

## Setup
- A GA4 test property and a GTM container
- A simple static HTML page (GitHub Pages or local server) with the GTM snippet

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-04-gtm-ga4-tracking && cd lab-04-gtm-ga4-tracking
git init
claude
```
Then type: `LAB 04`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Add a button that runs `dataLayer.push({event: 'add_to_cart', ecommerce: {currency: 'SEK', value: 199, items: [{item_id: 'SKU1', item_name: 'Mug', price: 199, quantity: 1}]}})`.
2. In GTM: create a Custom Event trigger for `add_to_cart` and a GA4 Event tag that sends e-commerce data.
3. Open GTM Preview, click the button, and confirm the tag fired with the right values.
4. In DevTools → Network, filter on `collect` and read the request parameters (`en=add_to_cart`, item params).
5. Confirm the event in GA4 DebugView.
6. Add a consent banner stub and make the tag respect `analytics_storage` (Consent Mode v2). Document what is sent before and after consent.

## Done when
- [ ] The event shows in DebugView with correct items and value
- [ ] You can show the request in the Network tab
- [ ] Nothing fires before consent

## Stretch
- Add `purchase` with a transaction id and test deduplication
- Write a tracking plan sheet for five events

## Ask the coach
- *"LEARN: how the dataLayer works"*
- *"BUILD: help me debug why my GA4 tag does not fire"*

## Portfolio
Tracking plan + screenshots of Preview, Network and DebugView.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
