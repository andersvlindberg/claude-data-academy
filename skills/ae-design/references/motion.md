# Motion: making a page feel expensive

Most generated sites look fine but feel flat, because nothing moves with intent. Motion is the gap between "template" and "award-winning". Three free tools cover almost everything:

| Tool | Job | Links |
|---|---|---|
| **GSAP** | Animations and scroll effects: ScrollTrigger, SplitText, Flip | https://github.com/greensock/GSAP · https://gsap.com |
| **Lenis** | Smooth scrolling, so the whole page feels fluid | https://github.com/darkroomengineering/lenis |
| **React Bits** | Ready-made animated components: text, backgrounds, buttons | https://github.com/DavidHDev/react-bits · https://reactbits.dev |

Licences (verify in current docs): GSAP is free for all use, including commercial, and includes the former bonus plugins (SplitText, MorphSVG). Lenis is MIT. React Bits is MIT with Commons Clause: free to use, not to resell as a component library.

## Pick the setup

- **Plain HTML, a dashboard page or a Claude artifact:** GSAP + Lenis from a CDN. React Bits needs React.
- **React or Next.js:** all three from npm.
- **One effect only:** GSAP alone. Don't add libraries you don't need.

## Install

```bash
npm i gsap @gsap/react lenis
npx shadcn@latest add @react-bits/BlurText-TS-TW   # one component at a time
```

React Bits names follow `@react-bits/<Component>-<JS|TS>-<CSS|TW>`.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.3.23/dist/lenis.min.js"></script>
```

Pin exact versions (the ones above were current in October 2026; verify in current docs). Inside Claude artifacts, inline `lenis.css` because external stylesheets are blocked.

## Wire Lenis to GSAP (or it stutters)

```js
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000)); // GSAP gives seconds, Lenis wants ms
gsap.ticker.lagSmoothing(0);
```

Don't also set `autoRaf: true`, or two loops run.

In React, use `useGSAP()` from `@gsap/react` instead of `useEffect`; it cleans up for you. Wrap the app in `ReactLenis` from `lenis/react`.

## Rules for motion that feels expensive

1. **One thing moves at a time.** Motion guides the eye; it does not compete for it.
2. **Animate `transform` and `opacity` only.** Never `width`, `top` or `margin` for UI movement.
3. **Timing:** 0.4–0.8 s for elements, 1–1.4 s for hero moments. Ease `power3.out` or `expo.out`, never `linear` for UI.
4. **Stagger** 0.03–0.12 s when several items enter.
5. **Respect `prefers-reduced-motion`:** turn off Lenis and skip or shorten animations.
6. **Content works without JavaScript.** Animate *from* a hidden state with `gsap.from`, so if the script fails, everything is still visible.
7. **Animate on change, not on every render.** Data refreshes should not replay entrance animations.
8. **Test on mobile width (375 px).** Heavy WebGL backgrounds may need to be off on phones.

## Patterns for data products

| Pattern | How |
|---|---|
| KPI count-up | `gsap.to(obj, { val: 38, snap: { val: 1 }, onUpdate })` writing the number into the element |
| Bars growing | `gsap.from(bars, { scaleY: 0, transformOrigin: 'bottom', stagger: 0.08 })` |
| Cards entering on scroll | `ScrollTrigger.batch('.card', { onEnter: b => gsap.from(b, { y: 20, opacity: 0, stagger: 0.08 }) })` |
| Progress line tied to scroll | `scrollTrigger: { scrub: true }` on a `scaleX` tween |
| Headline reveal | `SplitText` into words, `y: 12`, opacity, stagger 0.04 |
| Line or arc drawing | Animate `strokeDashoffset` from the path length to 0 |

## In PowerPoint

The same principles carry over: **Morph** between slides for continuity, **Wipe** for lines and bars, **Fade + Grow** for a hero number, and sequence cards with short delays. Keep one motion idea per slide.

## Check before shipping

- No console errors, no ScrollTrigger markers left on.
- Scroll feels smooth with no double animation loop.
- Works with reduced motion and at phone width.
- Content is readable with JavaScript turned off.
