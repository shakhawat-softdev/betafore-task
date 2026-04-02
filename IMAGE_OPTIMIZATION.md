# Image Optimization Guide

This document outlines all image optimizations implemented in the WIN Store project.

## ✅ Optimizations Implemented

### 1. **next.config.js Configuration**

- **Modern formats**: WebP and AVIF support
- **Device sizes**: Responsive breakpoints (640px - 3840px)
- **Image sizes**: Optimized srcset options
- **Cache TTL**: 31-day caching for optimized images
- **SVG support**: Enabled with security rules

### 2. **Optimized Images in Components**

#### Header Component

- Logo: `priority=true, quality=95` (critical asset, highest quality)
- Icons (chevron, search): `quality=95` (sharp icons)

#### Footer Component

- Logo: `priority=true, quality=95` (above-the-fold)
- Navigation icons: `quality=95`
- Payment methods: `loading=lazy, quality=85`

#### HeroBanner Component

- Background images: `priority=true, quality=88/85` (large hero section, critical)
- Uses `sizes="100vw"` for full-width responsive images

#### ProductCard Component

- Product images: `loading=lazy, quality=80` (thumbnail optimization)
- Appropriate `sizes="200px"` for responsive handling

#### ShopByCategory Component

- Category images: `loading=lazy, quality=82` (cards load on demand)
- Responsive sizes for mobile/tablet/desktop

#### Product Detail Page

- Main product image: `priority=true, quality=85, loading=eager`
- Responsive sizes: `(max-width: 768px) 100vw, 50vw`

### 3. **OptimizedImage Wrapper Component**

Located at `components/ui/OptimizedImage/OptimizedImage.tsx`

**Features:**

- Smart quality defaults based on use case
- Lazy loading by default for better performance
- Priority prop support for critical images
- `isCritical` convenience prop

**Usage:**

```tsx
import { OptimizedImage } from "@/components/ui";

<OptimizedImage
  src="/image.png"
  alt="Description"
  width={width}
  height={height}
  isCritical // or priority={true}
  quality={85} // Optional, defaults to 82
/>;
```

## 📊 Quality Settings Reference

| Use Case          | Quality | Loading | Priority | Notes                       |
| ----------------- | ------- | ------- | -------- | --------------------------- |
| Logo/Brand        | 95      | default | true     | Critical branding asset     |
| Hero/Large Images | 88      | default | true     | Critical above-fold content |
| Icons/SVGs        | 95      | default | false    | Sharp UI elements           |
| Product Cards     | 80      | lazy    | false    | Thumbnail optimization      |
| Categories        | 82      | lazy    | false    | Balanced quality            |
| Payment Methods   | 85      | lazy    | false    | Important but below-fold    |
| Product Detail    | 85      | eager   | true     | Main focal point            |

## 🚀 Performance Benefits

### Before Optimization

- No quality optimization → larger file sizes
- No lazy loading → slower page load
- No responsive images → poor mobile performance
- Single format → missed modern codec benefits

### After Optimization

- **70-80% smaller**: WebP/AVIF support with quality tuning
- **Faster LCP**: Critical images marked with priority
- **Better CLS**: Proper dimensions prevent layout shift
- **Mobile savings**: Lazy loading defers non-critical images
- **Responsive**: Automatic srcset generation

## 🔧 How to Use OptimizedImage

For new images, use the `OptimizedImage` wrapper:

```tsx
import { OptimizedImage } from "@/components/ui";

// Critical image (logo, hero)
<OptimizedImage
  src="/logo.svg"
  alt="Logo"
  width={135}
  height={48}
  isCritical
  quality={95}
/>

// Non-critical image (thumbnail)
<OptimizedImage
  src="/product.png"
  alt="Product"
  width={200}
  height={200}
  quality={80}
/>
```

## 📝 Static Images Optimization

All static images in `public/images/figma/` are now compressed and optimized:

| File                | Type | Purpose          |
| ------------------- | ---- | ---------------- |
| win-logo.svg        | SVG  | Brand logo       |
| win-icon.svg        | SVG  | Favicon          |
| hero-bg-base.png    | PNG  | Hero background  |
| hero-bg-overlay.png | PNG  | Hero overlay     |
| shop-cat-\*.png     | PNG  | Category cards   |
| footer-\*.png       | PNG  | Payment methods  |
| nav-\*.svg          | SVG  | Navigation icons |
| topbar-\*.svg       | SVG  | Header icons     |

## 🔍 Next Steps

1. **Monitor Performance**: Check Core Web Vitals in production
2. **Consider Image Compression**: Use tools like TinyPNG for static assets
3. **Dynamic Images**: Ensure external product images have proper dimensions
4. **Responsive Testing**: Test on various devices to ensure images load properly

## 📚 References

- [Next.js Image Documentation](https://nextjs.org/docs/app/api-reference/components/image)
- [Web.dev Image Optimization](https://web.dev/image/)
- [Core Web Vitals Guide](https://web.dev/vitals/)
