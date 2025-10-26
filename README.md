# SaaS Startup Template

## About

A Website Template for SaaS Startup

## Tech Stack

- Next.js
- Tailwind CSS
- Framer Motion

## Folder Structure

```bash
├─ eslint.config.mjs        (ESLint configuration)
├─ next-env.d.ts            (Next.js environment type declarations)
├─ next.config.ts           (Next.js configuration)
├─ package.json             (Project metadata, scripts & dependencies)
├─ postcss.config.mjs       (PostCSS configuration)
├─ README.md                (Project documentation)
├─ tsconfig.json            (TypeScript configuration)
├─ app/                     (Next.js App Router: routes, layouts, pages)
│ ├─ global.d.ts
│ ├─ layout.tsx
│ └─ page.tsx
├─ features/                (Feature modules: UI, hooks, and business logic)
├─ lib/                     (Utilities, services, and helpers)
├─ public/                  (Static assets: images, fonts, and icons)
│ └─ assets
├─ styles/                  (Global styles, Tailwind & CSS files)
│ └─ globals.css
├─ types/                   (TypeScript types and interfaces)
└─ ui/                      (Reusable UI components: buttons, cards, etc.)
```

### To Run The Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
