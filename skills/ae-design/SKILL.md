---
name: ae-design
description: Visual design direction for the Analytics Engineering Academy. Use whenever creating or improving anything visual - slide decks, dashboards, reports, PDFs, HTML pages, web apps, charts, spreadsheets or UI - to apply a design director's process so the result looks hand-crafted, not template-based. Covers design principles, typography, colour, layout and grids, UI and UX basics, accessibility, dashboard and web design, motion and animation with GSAP, Lenis and React Bits, design references such as Swiss style, Bauhaus, Dieter Rams, Tufte, Stripe, Linear and Apple, and a refinement checklist.
---

# Module 27: Design direction

Data people are judged on what others see: the deck, the dashboard, the report, the app. This skill makes Claude work like a design director who does not accept generic output.

## How to use this skill

In BUILD mode, every visual deliverable goes through:
1. **Brief:** audience, setting (read alone or presented), the one takeaway, constraints (brand, format).
2. **Functional version:** right content and structure, nothing decorative.
3. **Design intent:** pick one reference direction (see below) and decide palette, type scale, grid and one motif.
4. **Elevate:** apply techniques from [references/techniques.md](references/techniques.md).
5. **Motion (web and slides):** add purposeful movement with [references/motion.md](references/motion.md): GSAP for animation and scroll effects, Lenis for smooth scrolling, React Bits for animated components, or Morph and Wipe in PowerPoint.
6. **Interrogate:** run [references/checklist.md](references/checklist.md); fix every failure.
7. **Restraint pass:** remove one element per screen or slide that is not earning its place.
8. **Render and look** at the real output before delivering.

Show only the finished result unless the learner asks for the reasoning. User and brand constraints always win. In LEARN mode, teach principles with before/after examples and let the learner redesign their own work. For slides and storytelling specifics, also use `ae-presentation-design`; for chart rules, `ae-bi-metrics`.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains hierarchy, contrast, alignment, proximity and white space |
| L2 | Applies a palette, type scale and grid consistently to a deck or dashboard |
| L3 | Runs the full process and checklist; output passes accessibility contrast and looks intentional; adds restrained motion that respects reduced-motion settings |
| L4 | Chooses and defends a design direction for a brand or product, builds a small design system and defines its motion rules |

## Principles

1. **Clarity first:** if the reader works to find the point, the design failed.
2. **Hierarchy before decoration:** size, weight, position and space do most of the work.
3. **Dominance, not equality:** one dominant colour, one sharp accent, one hero element per view.
4. **Commit to a system:** grid, type scale, spacing scale, palette, one motif, everywhere.
5. **Bold once, quiet everywhere else.**
6. **White space is a material.**
7. **Specific over generic:** the palette and motif should fit this topic.
8. **Restraint is the finishing move.**
9. **Truth in data:** never distort axes or decorate charts in ways that change the message.
10. **Accessible by default:** text contrast at least 4.5:1, never colour alone to carry meaning, readable sizes.
11. **Motion with purpose:** one thing moves at a time, only `transform` and `opacity`, and the content works without it.

## Reference directions (borrow the thinking, never the brand)

| Direction | Principles | Use for |
|---|---|---|
| Swiss / International Typographic Style | Strict grids, asymmetry, sans-serif, flush-left text, hierarchy by size and position | Reports, data-heavy decks |
| Bauhaus | Form follows function, primary geometry, bold limited palettes | Posters, title slides, motifs |
| Dieter Rams | As little design as possible; honest, unobtrusive, thorough | The restraint pass |
| Edward Tufte | Data-ink ratio, no chart junk, small multiples | Every chart and dashboard |
| Vignelli | Few typefaces, strong grids, strict consistency | Long decks and document systems |
| Stripe | Precise type, generous space, subtle depth, documentation clarity | Product pages, technical explainers |
| Linear | Dark, quiet interfaces, one accent, density without clutter | Dashboards, internal tools |
| Apple | One idea per screen, oversized headlines, extreme white space | Keynotes, launch pages |

## UI and UX basics for data products

- **Know the user's task** and design the shortest path to it.
- **Visual hierarchy:** the most important number or action is most prominent.
- **Consistency:** same component, same behaviour, everywhere.
- **Feedback:** loading, empty, error and success states for every view.
- **Forgiveness:** undo, confirm destructive actions.
- **Responsive:** works at phone width with no horizontal scroll.
- **Accessibility:** contrast, focus states, keyboard navigation, alt text, labels on inputs, and `prefers-reduced-motion`.
- **Design tokens:** colours, spacing, radii and type defined once and reused (also in light and dark mode).

## Common misconceptions

- "Design is decoration." Design is hierarchy and focus.
- "More colours look richer." They look noisy.
- "Centred text looks professional." Left-aligned body text reads faster.
- "Templates are enough." Templates are a starting point; intent comes from decisions.
- "More animation looks more premium." Restrained, purposeful motion does; everything moving at once looks cheap.

## Connects to

`ae-presentation-design` (decks and storytelling), `ae-bi-metrics` (dashboards and charts), `ae-career` (portfolio presentation).

## References

- [references/techniques.md](references/techniques.md): visual techniques by goal and anti-patterns.
- [references/motion.md](references/motion.md): GSAP, Lenis and React Bits, motion rules and data-product patterns.
- [references/checklist.md](references/checklist.md): the interrogation checklist.
- [references/exercises.md](references/exercises.md)
