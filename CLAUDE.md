# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check with tsc then bundle with Vite
npm run preview   # Serve the production build locally
```

There is no test runner configured.

## Architecture

Single-page React 19 app (no router — navigation is scroll-based). Built with Vite + Tailwind CSS v4 (via `@tailwindcss/vite` plugin). TypeScript strict mode is on via `tsconfig.app.json`.

**Page structure** (`src/App.tsx` owns everything):
- `App` holds two pieces of state: `lang: Lang` ('EN' | 'FR' | 'AR') and `activeSection: string`.
- An `IntersectionObserver` watches the six sections (`intro`, `services`, `team`, `programs`, `startups`, `contact`) and updates `activeSection`, which drives the Header's sliding nav indicator.
- Language changes toggle `body.rtl` CSS class and set `dir`/`lang` on `<html>`.
- `onNav(sectionId)` performs smooth-scroll to any section; pass `'top'` to scroll to the top.

**Section layout** (rendered in `<main>` in this order):
1. `Hero` — full-viewport parallax hero, stats bar, CTA buttons
2. `IntroSection` — About copy + director quote + pillars grid + `JourneyTimeline`
3. `ServicesSection` — 6 service cards (photo-header style)
4. `TeamSection` — team member photo grid
5. `ProgramsSection` — program cards + 6-module curriculum block
6. `StartupsSection` — featured startups grid
7. `ContactSection` — contact form
8. `Footer` (from `SharedCards`) — 4-column link grid

**Shared components** (`src/components/SharedCards.tsx`):
All reusable UI atoms live here:
- `SectionHeader` — label pill + title + optional subtitle
- `ServiceCard` — card with photo header, icon badge, hover lift
- `ProgramCard` — card with tag, hours badge, duration footer
- `StartupCard` — lightweight card for startup entries
- `TeamCard` — 4:5 portrait card; falls back to a monogram placeholder when `photo` is null/undefined
- `JourneyTimeline` — alternating left/right vertical timeline with animated milestone nodes
- `Footer` — site-wide footer

**i18n pattern:**  
Each section defines a `const t = { EN: {...}, FR: {...}, AR: {...} }[lang]` object — no external i18n library. All user-visible strings must appear in all three locales. Arabic (`lang === 'AR'`) sets `direction: 'rtl'` inline on each section.

**Styling approach:**  
Inline React styles are the primary styling mechanism. Tailwind is imported (`@import "tailwindcss"`) but used sparingly. Responsive overrides live in `src/index.css` using `data-*` attribute selectors (e.g. `[data-services-grid]`) with `!important` to win specificity over inline styles. Breakpoints: `≤1024px` (tablet), `≤768px` (mobile), `≤480px` (small mobile).

**Typography:**  
- Body: `DM Sans`  
- Display / numbers / headings: `Syne` (loaded from Google Fonts via `index.html`)  
- Arabic body: `Noto Kufi Arabic`  
- Numbers in Arabic mode still use `Syne` via the `.num` utility class and font-stack layering  
- `font-variant-numeric: tabular-nums` is applied globally so stats/years never reflow

**Brand colors:**  
- Blue (primary): `#0D2D72`, `#1B4FBB`, `#2762D8`  
- Green (accent): `#7DB83A`, `#5A8A22`, `#C4E390`  
- Background light: `#F7F8FC`  
- Text: `#121420` (headings), `#383D58` (body), `#6B7089` (muted)

**Types** (`src/types.ts`):  
- `Lang` — `'EN' | 'FR' | 'AR'`  
- `Milestone` — shape used by `JourneyTimeline` (year, ongoing, accent, tag, title, desc, stat)

**Assets** (`src/assets/`):  
Local images imported directly; team photos live in `src/assets/team/`. `TeamCard` gracefully degrades to an initials monogram when a photo isn't provided.
