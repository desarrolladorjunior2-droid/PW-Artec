# ARTEC S.A.S. — Website

Production website for ARTEC S.A.S., built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens defined as CSS variables in `src/app/globals.css`
- **Framer Motion** — scroll reveals, the ARTEC 360° explorer, counters, page transitions
- **next-themes** — light/dark mode with `localStorage` persistence and `prefers-color-scheme` support
- **lucide-react** — icons

## Structure

```
src/
  app/            Route, metadata, SEO (robots.ts, sitemap.ts), global styles
  components/
    layout/       Navbar, Footer
    sections/     Hero, Metrics, Solutions, Ecosystem 360°, Capabilities, Case Study, About, Contact...
    theme/        Theme provider + toggle
    ui/           Shared primitives (Reveal, MetricCounter, MagneticCTA, SectionHeading, Logo)
  hooks/          useActiveSection, useHasMounted
  lib/            Site constants and content (data.ts is the single source of truth for copy)
```

## Content

All copy lives in `src/lib/data.ts` and `src/lib/constants.ts`. Update those files to change solutions, capabilities, metrics, or contact details — the components render directly from that data.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
