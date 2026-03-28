# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Start production server

# Install shadcn components (never edit components/ui/ directly)
npx shadcn@latest add [component]
```

No test suite is configured.

## Architecture

This is a **bilingual (Spanish/English) portfolio site** built with Next.js App Router. Key structural decisions:

- **Locale routing**: All pages live under `app/[locale]/`. Supported locales: `es` (default), `en`. The middleware at `middleware.ts` handles locale detection. Always prefix routes with the locale.
- **Translations**: Stored in `messages/en.json` and `messages/es.json`, structured by section. Use `next-intl`'s `useTranslations` (client) or `getTranslations` (server) to access them.
- **Static data**: Portfolio content (projects, certificates) lives in `lib/projects.ts` and `lib/certificates.ts` as static exports — no database or API calls.
- **Loader flow**: `app/context/LoaderContext.tsx` provides global loading state consumed by the `Loader` component; the hero section waits for the loader to finish before animating in.
- **Animations**: Framer Motion is used throughout. The hero section has a specific sequence that depends on `LoaderContext`.

## Code Conventions

**Components**
- Server Components by default; add `"use client"` only when strictly needed (hooks, browser events, interactivity). Push `"use client"` as far down the component tree as possible.
- Props typed with `interface`, never `type`. `type` is only for unions/intersections (e.g., `type Theme = 'light' | 'dark'`).
- No `any` — use `unknown` + type narrowing when needed.
- Interfaces for shared data types (projects, certificates) live in `app/interfaces/`.

**Styling**
- Mobile-first: `sm:`, `md:`, `lg:` breakpoints.
- Use shadcn/ui CSS variables for colors (`var(--foreground)`, `var(--background)`, etc.) — no hardcoded hex values.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- Dark mode is enabled by default via `.dark` class.

**Images**
- Always use `next/image`. Add `priority` only for above-the-fold images (hero/LCP).
- Static project assets go in `public/images/`.

**Metadata/SEO**
- Static metadata in root `app/layout.tsx`; locale-aware dynamic metadata via `generateMetadata` in `app/[locale]/layout.tsx`.
- `app/robots.ts` and `app/sitemap.ts` auto-generate SEO files.

**Accessibility**
- One `<h1>` per page; use semantic HTML (`<nav>`, `<main>`, `<footer>`).
- All interactive elements need descriptive text or `aria-*` attributes.
- Use Tailwind's `focus-visible` for focus styles.

**Performance**
- Prefer Server Components to reduce client JS bundle.
- Use `dynamic()` with `ssr: false` for heavy animation/library components.
