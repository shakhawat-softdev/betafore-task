# WIN Store - E-commerce Platform

A modern, pixel-perfect e-commerce application built with Next.js 15+, React Server Components, and Tailwind CSS. The application reproduces the WIN Store design and integrates with a real API backend.

## Features

- ✅ **Next.js 15+ App Router** - Latest Next.js features with Server Components and Server Actions
- ✅ **Server Actions Only** - All API calls use Server Actions (no client-side fetch)
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Tailwind CSS** - Responsive design matching Figma specifications
- ✅ **React 19 / React 18** - Latest React version compatibility
- ✅ **No External State Management** - Pure React with Server Components
- ✅ **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- ✅ **Error Handling** - Graceful error handling with user-friendly messaging
- ✅ **Image Optimization** - Next.js Image component with lazy loading
- ✅ **API Integration** - Connects to external product and category APIs

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **React**: React 19 (or React 18)
- **Icons**: Lucide React
- **Utilities**: clsx for class management

## Project Structure

```
├── app/
│   ├── actions/
│   │   └── productActions.ts      # Server Actions for API calls
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx            # Category page with dynamic routing
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx            # Product detail page
│   ├── products/
│   │   └── page.tsx                # All products listing
│   ├── layout.tsx                  # Root layout with metadata
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Global styles
│   ├── error.tsx                   # Error boundary
│   └── not-found.tsx               # 404 page
├── components/
│   ├── Header.tsx                  # Navigation header (Client Component)
│   ├── HeroBanner.tsx              # Hero carousel (Client Component)
│   ├── ShopByCategory.tsx          # Category carousel (Client Component)
│   ├── NewArrivals.tsx             # New products section (Server Component)
│   ├── BestDeals.tsx               # Best deals section (Client Component)
│   ├── ProductCard.tsx             # Reusable product card (Client Component)
│   └── Footer.tsx                  # Footer component
├── lib/
│   ├── utils.ts                    # Utility functions and types
│   └── data.ts                     # Static data (if needed)
├── public/
│   └── fallback-product.jpg        # Fallback image for broken images
├── .env.example                    # Environment variables template
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/winstore-ecommerce.git
cd winstore-ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Integration

All API requests are made through **Server Actions** to maintain security and avoid exposing API endpoints to the client.

### API Endpoints Used

- **All Products**: `GET /api/v1/products`
- **Categories**: `GET /api/v1/products/categories`
- **Category Products**: `GET /api/v1/products/category/{category}`
- **Single Product**: `GET /api/v1/products/{id}`

Base URL: `https://mm-assesment-server.vercel.app`

### Server Actions

Located in `app/actions/productActions.ts`:

- `fetchAllProducts()` - Fetches all products with pagination
- `fetchCategories()` - Fetches available categories
- `fetchProductsByCategory(category)` - Fetches products by category slug
- `fetchProductById(id)` - Fetches a single product by ID

### Usage Example

```typescript
import { fetchAllProducts } from "@/app/actions/productActions";
import { normalizeProduct } from "@/lib/utils";

export default async function MyComponent() {
  const { products } = await fetchAllProducts();
  const normalized = products.map(normalizeProduct);

  return (
    // Use normalized products
  );
}
```

## Key Architectural Decisions

### 1. Server Components by Default

- Pages and sections are Server Components by default
- Only interactive elements are Client Components (useState, useEffect)
- Reduces JavaScript sent to the client

### 2. Server Actions for Data Fetching

- All API calls are made in Server Actions
- No fetch() calls in Client Components
- Prevents exposing API endpoints and keys
- Simplifies error handling and caching

### 3. TypeScript Throughout

- Full type safety with interfaces for all API responses
- Utility functions are fully typed
- Better IDE support and compile-time error checking

### 4. No External State Management

- Uses React Server Components instead of Redux/Zustand
- Props and server-side data handle most state
- Client-side state only for UI interactions (modals, carousels, etc.)

### 5. Responsive Design

- Mobile-first with Tailwind breakpoints (sm, md, lg)
- Images optimized with Next.js Image component
- Semantic HTML for accessibility

## Available Scripts

```bash
# Development server on auto-detected port
npm run dev
npm run dev:auto

# Production build
npm run build

# Start production server
npm start

# ESLint check
npm run lint
```

## Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```bash
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
```

## Design Implementation

The application matches the provided Figma design with:

- **Colors**: Primary teal (#00b4b4), dark charcoal (#222831), light gray (#f9f9f9)
- **Typography**: Bold headlines, readable body text with proper hierarchy
- **Spacing**: Consistent padding and margins using Tailwind scale
- **Components**: Pixel-perfect cards, buttons, and layout sections
- **Responsive**: Adapts beautifully from mobile (320px) to desktop (1200px+)

## Performance Optimizations

1. **Image Optimization**: Using Next.js Image component with lazy loading
2. **Caching**: Next.js automatic caching with revalidation
3. **Code Splitting**: Automatic code splitting per route
4. **Font Optimization**: System fonts with fallbacks
5. **Minimal JavaScript**: Server Components reduce client-side JS

## Error Handling

- Try-catch blocks in Server Actions with user-friendly error messages
- Error boundary pages (error.tsx)
- 404 not found pages (not-found.tsx)
- Fallback image when product images fail to load
- Graceful degradation when API is unavailable

## Type Safety

All major types are defined in `lib/utils.ts` and `app/actions/productActions.ts`:

```typescript
export interface Product {
  /* from API */
}
export interface NormalizedProduct {
  /* normalized for UI */
}
export interface ProductsResponse {
  /* API response */
}
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push
4. Set environment variables in Vercel dashboard

```bash
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
```

### Other Platforms

```bash
npm run build
npm start
```

## Assumptions & Notes

1. **API Response Structure**: We assume the API returns products with `thumbnail`, `images`, `title`, `price`, `discountPercentage`, etc.

2. **Image Handling**: Products without images fallback to `/fallback-product.jpg`

3. **Pricing**: We calculate the discounted price using: `price * (1 - discountPercentage / 100)`

4. **Category Slugs**: Category names are slugified (lowercase, hyphenated) for URLs

5. **Server Actions Caching**: Uses Next.js built-in caching with revalidation

6. **No Authentication**: Current implementation doesn't include user authentication (can be added later)

7. **Cart Functionality**: Cart state is UI-only (add to cart shows visual feedback but doesn't persist)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Features Implemented

### Homepage

- ✅ Hero carousel with automatic slideshow
- ✅ Category carousel with navigation
- ✅ New Arrivals section fetching from API
- ✅ Best Deals with category filters
- ✅ Responsive grid layout

### Product Browsing

- ✅ All Products page with grid layout
- ✅ Category page with dynamic routing
- ✅ Product Detail page with full information
- ✅ Related products section
- ✅ Customer reviews display

### Design & UX

- ✅ Pixel-perfect implementation of Figma design
- ✅ Mobile responsive with Tailwind
- ✅ Smooth transitions and hover effects
- ✅ Product card with rating and pricing
- ✅ Error states and loading states

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ using Next.js 15+ and Server Components**
├── app/
│ ├── layout.tsx # Root layout with metadata
│ ├── page.tsx # Home page
│ ├── globals.css # Global styles
│ └── products/page.tsx # Products listing page
├── components/
│ ├── Header.tsx # Top bar + navigation bar
│ ├── HeroBanner.tsx # Auto-sliding hero carousel
│ ├── ShopByCategory.tsx # Category cards with arrows
│ ├── NewArrivals.tsx # New arrivals product grid
│ ├── BestDeals.tsx # Tabbed deals section (2 rows × 6)
│ ├── ProductCard.tsx # Reusable product card
│ └── Footer.tsx # Footer with links & payment badges
├── lib/
│ └── data.ts # All mock data (products, categories, etc.)
├── tailwind.config.ts
├── next.config.js
└── package.json

````

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
````
