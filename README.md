# Business Incubator M'Sila

A modern, multilingual marketing website for the Business Incubator of M'Sila University. Built with React 19, TypeScript, and Tailwind CSS, the site presents the incubator's mission, programs, startup portfolio, and team through a smooth single-page experience with full support for English, French, and Arabic (including RTL layout).

## Live Preview

> [https://github.com/Codex-team-1/Business-Incubator-M-Sila](https://github.com/Codex-team-1/Business-Incubator-M-Sila)

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 + Custom CSS |
| Fonts | Syne · DM Sans · Noto Kufi Arabic |

---

## Features

- **Trilingual (EN / FR / AR)** — full content translation with dynamic RTL layout for Arabic
- **Animated statistics** — number counters and scroll-reveal effects powered by custom hooks (`useCountUp`, `useReveal`)
- **Smooth navigation** — anchor-based single-page scroll with active-section highlighting via `IntersectionObserver`
- **Responsive design** — breakpoints at 1024 / 960 / 768 / 480 / 360 px; touch-friendly (≥ 44 px targets)
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion` support
- **Performance** — lazy image loading, priority hints, minimal runtime dependencies

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen banner with animated KPI counters (202+ patents, 17 graduated startups …) |
| **About** | Incubator history, four core pillars, director's note, and an 8-year milestone timeline (2018–2025) |
| **Services** | Core services offered by the incubator |
| **Programs** | Incubation programs and curriculum overview |
| **Startups** | Portfolio of graduated startups and ecosystem highlights |
| **Team** | Team members displayed in a marquee carousel |
| **Contact** | Application and inquiry contact form |

---

## Project Structure

```
incubator-msila/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Fixed nav, language switcher, mobile menu
│   │   ├── NotFound.tsx        # 404 page
│   │   ├── ScrollToTop.tsx     # Floating scroll-to-top button
│   │   └── SharedCards.tsx     # Reusable UI (Footer, JourneyTimeline, …)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── StartupsSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/
│   │   └── useReveal.ts        # useReveal + useCountUp scroll hooks
│   ├── assets/                 # Images (logo, building, team photos, services)
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   ├── types.ts                # Shared TypeScript interfaces
│   └── index.css               # Global styles, animations, responsive overrides
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 20.0.0
- npm ≥ 10.0.0

### Install & run

```bash
# Clone the repository
git clone https://github.com/Codex-team-1/Business-Incubator-M-Sila.git
cd Business-Incubator-M-Sila

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server starts at `http://localhost:5173` by default.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type-checking without emitting |

### Production build

```bash
npm run build
# Output is placed in dist/
```

---

## Internationalization

Language is controlled by a `Lang` state (`'EN' | 'FR' | 'AR'`) passed through the component tree. Switching to Arabic automatically sets `dir="rtl"` on the document root and swaps the active font to **Noto Kufi Arabic**. All section copy, headings, and labels are stored as language-keyed objects inside each component.

---

## License

This project is the property of the Business Incubator of M'Sila University. All rights reserved.
