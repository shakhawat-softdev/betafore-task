# Developer Implementation Guide

## Quick Reference for Developers

### How to Add a New Page

1. **Create page directory under `app/`**

```
app/about/page.tsx
```

2. **Use Server Component by default**

```typescript
// app/about/page.tsx
export const metadata = {
  title: "About Us | WIN Store",
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      {/* Your content */}
      <Footer />
    </div>
  );
}
```

3. **Fetch data using Server Actions**

```typescript
import { fetchAllProducts } from "@/app/actions/productActions";
import { normalizeProduct } from "@/lib/utils";

export default async function AboutPage() {
  const { products } = await fetchAllProducts();
  const normalized = products.map(normalizeProduct);

  return (
    // Use normalized
  );
}
```

### How to Create a New Server Action

1. **Add to `app/actions/productActions.ts`**

```typescript
"use server";

export async function myNewAction(param: string): Promise<MyType> {
  try {
    const response = await fetch(`${API_BASE}/endpoint`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "revalidate",
    } as any);

    if (!response.ok) throw new Error("Failed");
    return await response.json();
  } catch (error) {
    console.error("Failed:", error);
    throw new Error("Failed to fetch");
  }
}
```

2. **Use in Server Component**

```typescript
import { myNewAction } from "@/app/actions/productActions";

export default async function MyPage() {
  const data = await myNewAction("param");
  return <div>{/* Use data */}</div>;
}
```

### How Client-Side Interactivity Works

**Only use `useState`, `useEffect` in Client Components:**

```typescript
"use client";

import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle client-side search
  };

  return <form onSubmit={handleSearch}>{/* */}</form>;
}
```

**Don't fetch in Client Components:**

```typescript
// ❌ WRONG - Never do this
"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") // ❌ WRONG - use Server Action instead
      .then((r) => r.json())
      .then(setProducts);
  }, []);
}

// ✅ RIGHT - Use Server Component
import { fetchAllProducts } from "@/app/actions/productActions";

export default async function Products() {
  const { products } = await fetchAllProducts(); // ✅ Server Action
}
```

### How to Add TypeScript Types

1. **Define types in util file or the file that uses them**

```typescript
// lib/utils.ts
export interface MyType {
  id: number;
  name: string;
  // ...
}
```

2. **Use in components**

```typescript
import { MyType } from "@/lib/utils";

interface Props {
  item: MyType;
}

export default function MyComponent({ item }: Props) {
  // TypeScript now knows about item properties
}
```

### How to Style Components

**Use Tailwind CSS classes:**

```typescript
export default function Button() {
  return (
    <button className="bg-[#00b4b4] text-white px-4 py-2 rounded hover:bg-[#009090] transition-colors">
      Click me
    </button>
  );
}
```

**For dynamic classes, use clsx:**

```typescript
import clsx from "clsx";

export default function Badge({ type }: { type: "sale" | "new" }) {
  return (
    <span
      className={clsx("px-3 py-1 rounded text-white font-bold", {
        "bg-red-500": type === "sale",
        "bg-green-500": type === "new",
      })}
    >
      {type.toUpperCase()}
    </span>
  );
}
```

### How to Handle Images

**Always use Next.js Image component:**

```typescript
import Image from "next/image";

export default function ProductImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className="object-contain"
      onError={(e) => {
        e.currentTarget.src = "/fallback-product.jpg";
      }}
    />
  );
}
```

### How to Handle Errors

**In Server Components:**

```typescript
export default async function MyPage() {
  try {
    const data = await fetchData();
    return <div>{/* Show data */}</div>;
  } catch (error) {
    return <div>Failed to load. Please try again.</div>;
  }
}
```

**In Server Actions:**

```typescript
"use server";

export async function myAction() {
  try {
    // ...
    return result;
  } catch (error) {
    console.error("Action failed:", error);
    throw new Error("User-friendly error message");
  }
}
```

### How to Add Metadata

**Per page:**

```typescript
export const metadata = {
  title: "Page Title | WIN Store",
  description: "Page description for SEO",
};
```

**Dynamic metadata:**

```typescript
export async function generateMetadata({ params }: Props) {
  const product = await fetchProductById(params.id);
  return {
    title: `${product.title} | WIN Store`,
    description: product.title,
  };
}
```

### How to Use Environment Variables

**In Server Components/Actions:**

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
// Now use apiUrl

// Or for secrets (not exposed to client):
const secretKey = process.env.SECRET_KEY; // Only available at build time on server
```

**Create `.env.local`:**

```
NEXT_PUBLIC_API_BASE_URL=https://...
MY_SECRET=value // Not available in browser
```

### Common Tailwind Patterns

**Responsive Grid:**

```typescript
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
  {/* Items */}
</div>
```

**Container:**

```typescript
<div className="max-w-[1200px] mx-auto px-4">
  {/* Content */}
</div>
```

**Hover Effects:**

```typescript
<div className="hover:shadow-md hover:scale-105 transition-all">
  {/* Content */}
</div>
```

**Responsive Text:**

```typescript
<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
  Title
</h1>
```

### Performance Tips

1. **Use Server Components for data fetching**
   - Reduces JavaScript in browser
   - Faster page loads

2. **Lazy load images**
   - Next.js Image does this automatically
   - Use `priority` for above-fold images only

3. **Minimize Client Components**
   - Only components with interactivity need `"use client"`
   - Keep them small and focused

4. **Use dynamic imports for heavy components**
   ```typescript
   import dynamic from "next/dynamic";
   const HeavyComponent = dynamic(() => import("./Heavy"), {
     loading: () => <p>Loading...</p>,
   });
   ```

### Testing Checklist Before Push

- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] Pages load with `npm run dev`
- [ ] Images display correctly
- [ ] Mobile responsive (DevTools)
- [ ] API calls work
- [ ] Error handling works
- [ ] No console errors

### Useful Commands

```bash
# Development
npm run dev           # Start dev server
npm run dev:auto      # Auto-find available port

# Production
npm run build         # Build for production
npm start             # Start production server

# Code quality
npm run lint          # ESLint check
npm run build -- --analyze  # Bundle size analysis
```

### Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Common Issues & Solutions

### Issue: "Cannot use async/await in component"

**Solution:** Make sure component is async (Server Component):

```typescript
// ✅ Correct
export default async function Page() {}

// ❌ Wrong
export default function Page() {
  const data = await fetch(); // Error!
}
```

### Issue: Fetch in Client Component

**Solution:** Use Server Action instead:

```typescript
// ❌ Wrong
"use client";
useEffect(() => { fetch(...) }, []); // Wrong

// ✅ Right
import { fetchData } from "@/app/actions";
export default async function Page() {
  const data = await fetchData();
}
```

### Issue: Type errors on API responses

**Solution:** Define interfaces in `lib/utils.ts` or `app/actions/productActions.ts`

### Issue: Styling not applying

**Solution:** Check if using correct Tailwind classes and `npm run dev` is running

---

**Happy coding!**
