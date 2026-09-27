# Dhinakaran Nambiraj — Senior React.js Developer & Frontend Engineer Portfolio

Modern, WCAG 2.1 AA accessible developer portfolio built with **Vite + React + TypeScript + SCSS**.

## Architecture & Folder Convention

Every component inside `src/components/<ComponentName>/` follows a strict 6-file modular structure:

- `index.ts` — Barrel export
- `<ComponentName>.tsx` — Declarative React component
- `<ComponentName>.constants.ts` — Static resume/portfolio data & configuration
- `<ComponentName>.interface.ts` — Strict TypeScript interfaces & types
- `<ComponentName>.helpers.ts` — Pure utility & helper functions
- `<ComponentName>.scss` — Component-scoped BEM SCSS styles

## Getting Started

```bash
# Start development server
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```
