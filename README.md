# SaaS Startup Template

## About

A Website Template for SaaS Startup

## Tech Stack

- Next.js
- Tailwind CSS
- Framer Motion

## Folder Structure

```bash
3-saas-startup-template/
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tsconfig.json
├─ app/ (Routes & Nested Routes)
│  ├─ global.d.ts
│  ├─ layout.tsx
│  └─ page.tsx
├─ features/ (Features with its UI Components, hooks and functionalities)
├─ lib/ (Utility Functions & Optimizations)
├─ public/ (Static Images & Fonts)
├─ styles/ (CSS files & Fonts)
│  └─ globals.css
├─ types/ (Typescript Types & Interfaces)
└─ ui/ (Reusable UI Components such as Buttons, Cards, ...)
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
