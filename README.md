# WIN Store - Assessment Submission

## How to run the project

### 1) Prerequisites

- Node.js 18.18+ (or Node.js 20 LTS recommended)
- npm 9+

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment (optional)

The app already has a fallback API URL, so it can run without extra setup.

If you want to override the API endpoint, create a `.env.local` file in the project root:

```env
API_BASE_URL=https://your-api-base-url/api/v1
```

### 4) Run in development

```bash
npm run dev
```

Open http://localhost:3000 in  browser.

### 5) Production build and run

```bash
npm run build
npm run start
```

### 6) Lint

```bash
npm run lint
```

## Architecture explanation

This project is built with Next.js App Router and TypeScript, with a server-first data loading approach.

### High-level flow

1. Route pages in `app/` call server actions from `app/actions/catalog.ts`.
2. Server actions fetch data from the external API using `API_BASE_URL`.
3. API responses are validated using type guards in `lib/api/validators.ts`.
4. Typed data is passed down into presentational components under `components/`.
5. UI handles loading/error/empty states using route-level and section-level fallbacks.

### Main folders

- `app/`
  - App Router pages (`page.tsx`, dynamic route pages, loading/error/not-found files)
  - Server actions in `app/actions/catalog.ts`
- `components/`
  - Layout blocks (`Header`, `Footer`)
  - Homepage sections (`HeroBanner`, `ShopByCategory`, `NewArrivals`, `BestDeals`)
  - Reusable UI components (`ProductCard`, notices, image wrapper, loaders)
- `lib/`
  - Environment access in `lib/env.ts`
  - Runtime response validators in `lib/api/validators.ts`
  - Constants, shared types, and utilities

### Rendering and data strategy

- Server Components by default for page composition and data fetching.
- Client Components only where interactivity is needed (animations, tab switching, local UI state).
- Incremental revalidation and cache tags are applied in server actions using Next.js `fetch` options.

### Resilience strategy

- Route and global boundaries for errors and not-found states.
- Skeleton loading for route transitions and section loading states.
- Image fallback behavior for slow/broken image scenarios across the app.

## Assumptions taken

1. The assessment API remains available and stable at the configured base URL.
2. API response envelopes continue to match the validator contracts used in `lib/api/validators.ts`.
3. Category names are unique enough to be used as keys for tab/product mapping.
4. Build/runtime environment supports Next.js 15 and React 18.
5. Figma-perfect parity is secondary to functional correctness when external design/API access is rate-limited.
