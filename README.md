# WIN Store — Next.js E-Commerce

Converted from Figma design to Next.js 14 with TypeScript and Tailwind CSS.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
ecommerce/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── products/page.tsx   # Products listing page
├── components/
│   ├── Header.tsx          # Top bar + navigation bar
│   ├── HeroBanner.tsx      # Auto-sliding hero carousel
│   ├── ShopByCategory.tsx  # Category cards with arrows
│   ├── NewArrivals.tsx     # New arrivals product grid
│   ├── BestDeals.tsx       # Tabbed deals section (2 rows × 6)
│   ├── ProductCard.tsx     # Reusable product card
│   └── Footer.tsx          # Footer with links & payment badges
├── lib/
│   └── data.ts             # All mock data (products, categories, etc.)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Design System

| Token       | Value       |
|-------------|-------------|
| Brand Teal  | `#00b4b4`   |
| Dark BG     | `#222831`   |
| Nav BG      | `#2d3541`   |
| Orange badge| `#f97316`   |
| Blue CTA    | `#1a6ff0`   |

## Features Implemented

- ✅ Sticky header with search bar + category dropdown
- ✅ Top contact bar + social icons in nav
- ✅ Auto-play hero carousel (5s) with dots + prev/next arrows
- ✅ Category cards with image + scrollable arrows
- ✅ New Arrivals 6-column product grid
- ✅ Best Deals with tab switcher (Kitchen, Consoles, TV, Cell Phones, Grocery)
- ✅ Two-row product layout in Best Deals
- ✅ Strikethrough pricing + teal sale price
- ✅ Add to cart button with confirmation state
- ✅ Footer with 3 link columns + payment badges
- ✅ Copyright bar

## Connecting a Real API

Replace the mock data in `lib/data.ts` with real API calls.
For example, using the `app/` directory with server components:

```typescript
// app/page.tsx (server component)
async function getProducts() {
  const res = await fetch("https://your-api.com/products");
  return res.json();
}
```
