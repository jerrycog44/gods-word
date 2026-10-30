# God's Word

**The Word. Every Day. Everywhere.**

A global, non-denominational, Christ-centred Bible engagement and digital publication platform.
This repository currently holds the **Phase 1** frontend foundation only.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Setup

```bash
git clone https://github.com/jerrycog44/gods-word.git
cd gods-word
npm install
npm run dev
```

## Scripts

| Command             | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                   |
| `npm run typecheck` | Strict TypeScript check (`tsc -b`)          |
| `npm run build`     | Typecheck, then production build to `dist/` |
| `npm run preview`   | Serve the production build locally          |

## Stack

React 19, TypeScript (strict), Vite, Tailwind CSS v4 (`@tailwindcss/vite`), React Router.
Fonts are self-hosted through Fontsource (no external requests), which suits PWA and Capacitor use.

## Structure

```
src/
  assets/       Static assets imported by code
  components/   Reusable UI (ui/ holds primitives)
  constants/    Site metadata and route paths
  hooks/        Shared React hooks
  layouts/      Page shells that render <Outlet />
  lib/          Framework-agnostic helpers
  pages/        Route-level components
  services/     External data access (empty until later phases)
  styles/       Global CSS and Tailwind theme tokens
  types/        Shared TypeScript types
  router.tsx    Route table
  main.tsx      Entry point
public/         Files served as-is (favicon)
```

The `@/` alias maps to `src/`.

## Design tokens

Defined in `src/styles/index.css` and available as Tailwind utilities.

| Token    | Value     | Utility examples               |
| -------- | --------- | ------------------------------ |
| Midnight | `#071A33` | `bg-midnight`, `text-midnight` |
| Ivory    | `#F8F5ED` | `bg-ivory`, `text-ivory`       |
| Gold     | `#C5A15A` | `bg-gold`, `border-gold`       |
| White    | `#FFFFFF` | `bg-white`                     |
| Charcoal | `#292929` | `text-charcoal`                |

- `font-display`: Playfair Display, for editorial headings (applied to `h1` to `h4` by default).
- `font-sans`: Inter, for body text and interface.
- Gold has low contrast on Ivory. Use it for rules, borders and accents, or as text on Midnight, not for small text on Ivory.

## Prepared for later phases (not implemented)

| Area                   | Where it will live                                      |
| ---------------------- | ------------------------------------------------------- |
| Supabase auth and data | `src/services/`, `src/lib/`; env vars in `.env.example` |
| Bible reading engine   | `src/pages/`, `src/components/`, `src/services/`       |
| Editorial CMS          | `src/services/`, `src/types/`                           |
| Personal accounts      | `src/layouts/` (protected layouts), `src/hooks/`        |
| PWA                    | Vite plugin and manifest, added in its own phase        |
| Capacitor              | Wraps the `dist/` build; safe-area padding is in the base styles |

## Phase 1 scope

Included: project structure, design tokens, routing with one placeholder route, strict TypeScript, build tooling.
Excluded: homepage, Supabase connection, authentication, payments, admin dashboard, content, deployment configuration.
