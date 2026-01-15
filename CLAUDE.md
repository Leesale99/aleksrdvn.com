# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next with core-web-vitals and typescript)
```

## Architecture

This is a Next.js 16 project using the App Router with React 19 and TypeScript.

- **app/**: App Router pages and layouts
  - `layout.tsx`: Root layout with Geist font configuration
  - `page.tsx`: Home page
  - `components/`: React components
- **Styling**: Tailwind CSS v4 with PostCSS

### Path Aliases

Use `@/*` to import from the project root (configured in tsconfig.json).
