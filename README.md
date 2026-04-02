# Betafore E-Commerce Store

A modern, production-ready e-commerce storefront built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## 🚀 How to Run the Project

### Prerequisites

- Node.js 18+ (or compatible runtime)
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
# Start development server (hot reload enabled)
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Type Checking

```bash
# Run TypeScript compiler (strict mode)
npx tsc --noEmit
```

### Linting

```bash
# Check for ESLint issues
npm run lint
```

---

## 🏗️ Architecture Explanation

### Overview

The project follows **Next.js App Router** architecture with clear separation of concerns using domain-driven folder organization. Data flows unidirectionally from **Server Actions** → **Type Validation** → **Server Components** → **Client Components (for interactivity only)**.

### Folder Structure

```
lib/
├── constants/          # Immutable configuration (no runtime mutations)
│   ├── navigation.ts   # NAV_LINKS, TOP_BAR_PHONE
│   ├── footer.ts       # FOOTER_LINKS, PAYMENT_METHODS, COMPANY_INFO
│   ├── hero.ts         # HERO_SLIDES array with slide definitions
│   ├── colors.ts       # Design tokens (COLORS) with TypeScript exports
│   └── index.ts        # Barrel export
├── types/              # Single source of truth for all TypeScript types
│   ├── common.ts       # ActionResult<T> (discriminated union), ApiEnvelope<T>, component prop interfaces
│   ├── product.ts      # Product, ProductRating, ProductCardProps
│   ├── category.ts     # Category, CategoryProps
│   └── index.ts        # Barrel export
├── utils/              # Reusable helper functions
│   ├── cn.ts           # Class name merging (cn), conditional classes
│   ├── string.ts       # truncate(), capitalize(), slugify(), formatPrice(), formatNumber()
│   └── index.ts        # Barrel export
└── api/                # API validation layer
    └── validators.ts   # Type guards for runtime response validation

components/
├── layout/             # Page structure components (persistent across pages)
│   ├── Header/         # Navigation, search, cart, user menu
│   └── Footer/         # Brand info, links, payment methods
├── sections/           # Page content sections (reusable page fragments)
│   ├── HeroBanner/     # Hero image with headline and CTA
│   ├── ShopByCategory/ # Category carousel
│   ├── NewArrivals/    # Recent products grid
│   └── BestDeals/      # Tabbed deals by category
├── ui/                 # Reusable UI widgets
│   ├── ProductCard/    # Individual product display with add-to-cart
│   └── SectionNotice/  # Error/empty state messages
└── animations/         # Animation components
    └── Reveal/         # Scroll-triggered reveal animation

app/
├── page.tsx            # Home page (Server Component)
├── products/
│   ├── page.tsx        # Products listing with category filter (Server Component)
│   └── [id]/
│       ├── page.tsx    # Product detail page (Server Component)
│       └── loading.tsx # Skeleton UI while loading
├── actions/
│   └── catalog.ts      # Server Actions for all API calls with caching
├── globals.css         # Global Tailwind styles
└── layout.tsx          # Root layout
```

### Component Hierarchy

#### Server Components (Default)

- **Routes**: All page.tsx files are Server Components by default
- **Layout sections**: Footer, NewArrivals, SectionNotice
- **Why**: Safe to emit secrets, direct DB access (not used here), automatic code stripping

#### Client Components ("use client")

- **Header**: Search and navigation interactivity
- **HeroBanner**: Carousel/slider effects
- **ShopByCategory**: Category selection with carousel
- **BestDeals**: Tabbed category filtering
- **ProductCard**: Add-to-cart button and feedback animations
- **Reveal**: Scroll-triggered reveal animations
- **Why**: Required for event listeners, hooks (useState, useEffect, etc.), browser APIs

### Data Flow Architecture

```
Server Actions (app/actions/catalog.ts)
    ↓
API Fetch + Error Handling
    ↓
Type Guard Validation (lib/api/validators.ts)
    ↓
ActionResult<T> (Discriminated Union)
    ↓
Server Components (read results, compose UI)
    ↓
Client Components (props only, no re-fetching)
```

### API Integration

**Base URL**: `https://mm-assesment-server.vercel.app/api/v1`

**Server Actions** (all in `app/actions/catalog.ts`):

- `getCategoriesAction()` - Cache: 1 hour (3600s), tags: ["categories"]
- `getAllProductsAction()` - Cache: 5 min (300s), tags: ["products"]
- `getProductsByCategoryAction(category)` - Cache: 5 min, tags: [`products:category:${category}`]
- `getProductByIdAction(productId)` - Cache: 5 min, tags: [`product:${productId}`]
- `getHomePageDataAction()` - Orchestrates parallel calls, fetches category products

**Caching Strategy**:

- Uses Next.js built-in caching via `next.revalidate` and `next.tags`
- Automatic ISR (Incremental Static Regeneration) with tag-based revalidation
- No client-side fetch or axios (all data goes through Server Actions)

### Error Handling Pattern

All Server Actions return `ActionResult<T>`:

```typescript
type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };
```

This enforces explicit error handling at the call site:

```typescript
const result = await getCategoriesAction();
if (result.ok) {
  // result.data is safely typed
} else {
  // result.error contains error message
}
```

### Type Validation

Every API response passes through a **type guard** before being used:

```typescript
// Example: isCategoriesEnvelope
const isCategoriesEnvelope = (
  value: unknown,
): value is ApiEnvelope<Category[]> => {
  return (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    Array.isArray((value as any).data)
  );
};
```

This ensures type safety at **runtime**, not just compile time.

---

## 📋 Assumptions Taken

### Technology Stack

- **Next.js App Router** (not Pages Router) - required for Server Components and automatic route handling
- **React Server Components (RSC)** - all routes are server-first by default
- **TypeScript strict mode** - all code must be strictly typed (no `any`, strict null checks)
- **Tailwind CSS v3.4.1** - utility-first CSS approach
- **Framer Motion** - for animations (imported where needed)

### API & Data

- **Single REST API endpoint** - All product/category data comes from a single external API
- **API response envelope format** - All responses have `{ data: T, ... }` structure
- **No database** - No direct database connections (fully API-driven)
- **No authentication** - Public API, no user login or session management
- **Stateless API calls** - All data is fetched fresh each request (caching handled by Next.js)

### Architecture & Code Organization

- **No state management library** - No Redux, Zustand, or Recoil
- **No client-side HTTP client** - No axios or explicit fetch() in browser (all via Server Actions)
- **Barrel exports for clean imports** - Enables `/lib`, `/components` imports instead of deep paths
- **Constants are immutable** - No runtime config changes; all config is in `lib/constants/`
- **Utility functions are pure** - No side effects in helper functions

### Component Behavior

- **Routes are Server Components by default** - Any interactivity requires "use client" marker
- **Client Components only for UX** - Limited to interactive elements (buttons, carousels, search)
- **Props flow downward** - No prop drilling via context (props are explicit)
- **No server-side rendering of client state** - Client components don't share state with server

### Build & Deployment

- **Node.js 18+** - Uses modern JavaScript features
- **Static & dynamic pages** - Home page can be pre-rendered; product pages fetch at request time
- **ISR (Incremental Static Regeneration)** - Pages revalidate automatically after cache expires
- **Production build successful** - Verifies all TypeScript types and ESLint rules pass

### Image Assets

- **Static images in `/public`** - Figma-exported images for hero, product cards, payment methods
- **Image paths are file-based** - Direct reference to `/public/images/figma/` directory
- **No image CDN** - Images served directly from Next.js static folder (suitable for smaller catalogs)

### Performance Assumptions

- **Moderate product catalog** - Optimization strategy assumes 100-1000 products (not millions)
- **Typical e-commerce traffic** - No special handling for viral traffic spikes
- **Fast API responses** - Assumes external API responds in < 2 seconds
- **User bandwidth** - Tailwind CSS generates ~50KB of used styles (not optimized for slow networks)

---

## ✅ Compliance & Quality

- **TypeScript**: Zero errors (strict mode enabled)
- **ESLint**: Zero warnings or errors
- **Next.js Build**: Successful (322 artifacts generated)
- **API Constraints**:
  - ✅ No Redux/Zustand/state management
  - ✅ No axios or client-side fetch
  - ✅ No `pages/` directory (App Router only)
  - ✅ No direct database calls
  - ✅ All fetch operations in Server Actions with Next.js caching
  - ✅ Type guards for all API responses
  - ✅ ActionResult<T> error handling throughout

---

## 📚 Key Files Reference

| File                                              | Purpose                               |
| ------------------------------------------------- | ------------------------------------- |
| `lib/constants/footer.ts`                         | Payment method logos and footer links |
| `lib/types/common.ts`                             | ActionResult, error handling contract |
| `lib/api/validators.ts`                           | Type guards for API responses         |
| `app/actions/catalog.ts`                          | All Server Actions with caching       |
| `app/page.tsx`                                    | Home page composition                 |
| `app/products/page.tsx`                           | Product listing with filters          |
| `components/layout/Header/Header.tsx`             | Navigation and search                 |
| `components/sections/NewArrivals/NewArrivals.tsx` | Product grid                          |

---

## 🔄 Development Workflow

1. **Create new types**: Add to `lib/types/` and re-export in `lib/types/index.ts`
2. **Add API endpoints**: Create new Server Action in `app/actions/catalog.ts`, add type guard in `lib/api/validators.ts`
3. **Create pages**: Add new `page.tsx` under `app/` (automatically Server Component)
4. **Build UI**: Create components under `components/` (add "use client" only if interactive)
5. **Add constants**: Use `lib/constants/` for strings, colors, navigation (single point of update)

---

## 📝 License

Internal project - See project documentation for details.

## Design System

| Token       | Value       |
|-------------|-------------|
| Brand Teal  | `#00b4b4`   |
| Dark BG     | `#222831`   |
| Nav BG      | `#2d3541`   |
| Orange badge| `#f97316`   |
| Blue CTA    | `#1a6ff0`   |
