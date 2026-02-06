# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BacklogBurner is an open-source platform for transparent, decentralized prioritization of open-source project backlogs. Built with Angular 21, SSR via Express, and PrimeNG for UI components.

## Commands

- **Dev server:** `bun start` (runs `ng serve`)
- **Build:** `bun run build` (production build with SSR)
- **Run tests:** `bun run test` (Vitest via Angular CLI)
- **Run single test:** `bun run test -- --include='src/app/path/to/file.spec.ts'`
- **SSR production server:** `bun run serve:ssr:backlog-burner` (port 4000)

## Architecture

### SSR with Express

The app uses Angular SSR with an Express server (`src/server.ts`). Two bootstrap paths exist:

- **Browser:** `src/main.ts` → `app.config.ts` (router, PrimeNG Aura theme, client hydration with event replay)
- **Server:** `src/main.server.ts` → `app.config.server.ts` (merges browser config with server rendering + server routes)

Server routes (`app.routes.server.ts`) control render mode per route (currently `RenderMode.Server` for all). Client routes live in `app.routes.ts`. Build uses `NG_BUILD_PARTIAL_SSR=1` to skip build-time route extraction (routes are resolved at request time).

### Standalone Components

No NgModules. All components use standalone architecture with `imports` array directly on the `@Component` decorator. The root component is `App` (selector: `app-root`).

### Styling

- TailwindCSS 4 via PostCSS (configured in `.postcssrc.json`)
- PrimeNG with Aura theme preset
- Global styles in `src/styles.css`
- Component styles use colocated `.css` files

## Code Conventions

- **Package manager:** Bun (not npm/yarn)
- **Formatting:** Prettier — 100 char print width, single quotes, Angular HTML parser
- **TypeScript:** Strict mode enabled with strict Angular templates
- **Reactivity:** Use Angular signals (not class properties) for component state
- **Component selector prefix:** `app-`
- **Indentation:** 2 spaces
- **Test files:** Colocated as `*.spec.ts` next to source files
