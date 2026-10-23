# Course notes: Digital platform technology (my summary)

## The whole course in one line
**action → identity → state → event → collection → interpretation**. Troubleshooting model: **expectation → observation → isolation → test → confirmation**. Core principle: **separate observation from interpretation**; measurement data is a constructed picture of reality.

## Week 1 · Lessons 1–3: "A click becomes data"
Running case: the purchase that disappeared (customer got a confirmation, marketing saw no conversion).
- L1 See the whole chain: human → client → network → server → storage; troubleshoot from the known to the unknown with the five questions.
- L2 Open the client: HTML → DOM → display → action. HTML describes, the DOM represents, JavaScript reacts. DevTools panels by question.
- L3 Follow the traffic: request (method, address, headers, body) and response (status, headers, body, time). GET versus POST. 202 = received, not finished.

## Week 2 · Lessons 4–6: "When the browser starts remembering"
Case: one customer became three users.
- L4 Data in JavaScript: value → variable → object → event → request. Field names make information interpretable later. Syntax error (code cannot be parsed, nothing after it runs) versus logic error (runs, wrong result).
- L5 Browser memory: cookie, localStorage, sessionStorage. Four questions: what, where, how long, who can read it?
- L6 Identification: signal → identifier → storage → transfer → linking. An id identifies a browser, not a person. Merging at login is a design decision.

## Week 3 · Lessons 7–9: "When measurement doesn't follow reality"
- L7 Tracking and the data layer: business event ≠ measurement event. Data quality in two layers: form (names, types, required values) and meaning (right business event, time, amount, no duplicates). An event can die in five links.
- L8 Consent is a technical state: choice → stored → code allowed/stopped → collection. Check before collecting. Client-side versus server-side; deduplicate with an event id.
- L9 Build an explanation that holds: start from a clear deviation, use disprovable hypotheses, change one thing at a time, show both support and limits.

## Lesson 10 · Group work and presentation
Investigate one real digital service and one clear action. Follow: action → event/code → request → response → storage or effect. Present as an evidence chain (service, action, expected result → observation and deviation → hypothesis and test → technical evidence → conclusion, consequence and what you could not determine). 15 minutes: 10 presenting, 5 questions. Listeners look for the method: what was expected, which observations are evidence, which hypothesis was tested, other explanations, what you can reuse.

Checklist: clear scope · claims supported by observations or marked as interpretations · readable screenshots · everyone knows their part · backup plan without live demo.

## The lab working loop
Change one thing in the editor → save → reload → observe in DevTools → repeat. DevTools is where you look; the editor is where you change. `git restore <file>` when it goes wrong. An AI answer is a hypothesis until verified in the browser, DevTools, terminal or server log.
