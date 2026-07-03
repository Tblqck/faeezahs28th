Project overview for angrybird4ever

- Purpose: TanStack Start + React 19 single-page birthday experience (sections: hero, story, reasons, lessons, messages, promises, letter, memory jar, final surprise) themed with Tailwind v4 custom palette.

- How to run:
  - Install deps: `npm install`
  - Dev: `npm run dev -- --host --port 4173 --strictPort`
  - Build: `npm run build`
  - Preview built app: `npm run preview`

- Routing:
  - `src/routes/__root.tsx`: app shell, meta tags, font links, QueryClient provider, error/not-found boundaries.
  - `src/routes/index.tsx`: only defined page (`/`), composes all birthday sections and countdown gate.
  - `src/routeTree.gen.ts`: auto-generated route tree (do not edit); reflects only `/` route.

- Core app pieces:
  - Birthday sections in `src/components/birthday/`: `Hero`, `Story`, `Reasons`, `Lessons`, `Messages` (guestbook + modal), `Promises`, `Letter`, `MemoryJar`, `FinalSurprise`, `Nav`, `CountdownGate`, `Reveal`.
  - UI primitives in `src/components/ui/`: Shadcn-style Radix wrappers (buttons, dialogs, forms, nav, etc.) plus chart/carousel helpers.
  - Data in `src/data/content.ts`: unlock date, timeline, reasons, lessons, initial messages, promises, letter text, memory notes.
  - Hooks in `src/hooks/use-mobile.tsx`.
  - Shared libs in `src/lib/`: `utils.ts`, error capture/render/report helpers for SSR.

- Styling:
  - `src/styles.css`: Tailwind v4 setup, custom theme tokens (ivory/espresso/gold palette), font utilities.

- Routing/SSR plumbing:
  - `src/router.tsx`: creates router with QueryClient and scroll restoration.
  - `src/start.ts`: TanStack Start setup with server error middleware.
  - `src/server.ts`: SSR fetch wrapper that normalizes catastrophic errors and renders friendly error page.

- Tooling/config:
  - `package.json`: scripts (dev/build/preview/lint/format) and deps (TanStack Router/Start, Radix UI, Tailwind v4, Motion, etc.).
  - `vite.config.ts`: standard Vite + TanStack Start plugin with server entry override.
  - `tsconfig.json`, `eslint.config.js` (ignores dist/.output/.vinxi), `.prettierrc`, `.prettierignore`, `.gitignore`.
  - `components.json`: shadcn-style generator config; `bunfig.toml` present but npm scripts are primary.

- Outputs/cache:
  - `dist/` holds built client and server assets (generated; can be cleaned/regenerated).
  - `node_modules/` contains installed dependencies (generated).

Notes:
- Only the `/` route is defined; other paths render the 404 boundary from `__root.tsx`.
- All page content lives in the section components under `src/components/birthday/` using the data in `src/data/content.ts`.
