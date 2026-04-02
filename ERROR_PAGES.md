# Error Pages Documentation

This document describes the error handling pages implemented in your WIN Store application.

## ✅ Error Pages Created

### 1. **Root 404 Page** (`app/not-found.tsx`)
- Displays when user visits a non-existent page
- Shows 404 error with gradient text
- Includes action buttons to return home or browse products
- Professional UI matching your app design

### 2. **Root Error Page** (`app/error.tsx`)
- Catches runtime errors in your app using error boundary
- Shows error message and error ID for debugging
- "Try Again" button to reset error state
- Logs errors to console for debugging

### 3. **Global Error Page** (`app/global-error.tsx`)
- Catches critical errors at the root level
- Renders full HTML document (needed for global errors)
- Professional dark theme for error severity
- Support contact information

### 4. **Products 404 Page** (`app/products/not-found.tsx`)
- Displays when a specific product doesn't exist
- Contextual messaging about missing product
- Quick links to browse all products or return home
- Product-specific icon and styling

### 5. **Products Error Page** (`app/products/error.tsx`)
- Catches errors loading products section
- Friendly "Retry Loading" button
- Troubleshooting tips for users
- Links back to home

## 📊 Error Handling Flow

```
Request to Route
    ↓
[Route not found?] → 404 Page (not-found.tsx)
    ↓ No
[Error during render?] → Error Page (error.tsx)
    ↓ No
[Critical app error?] → Global Error Page (global-error.tsx)
    ↓ No
Display Normal Page
```

## 🎨 Error Pages Features

✓ **Responsive Design**: Works perfectly on mobile, tablet, desktop  
✓ **Consistent Styling**: Matches your existing design system  
✓ **User-Friendly**: Clear messaging and helpful actions  
✓ **Debugging Info**: Shows error details in development  
✓ **Accessible**: Proper ARIA labels and semantic HTML  
✓ **Professional**: Modern UI with gradients and icons  

## 🔧 How Next.js Routes Errors

### Not Found (404)
When Next.js can't find a matching route:
- `app/[route]/not-found.tsx` catches segment-level 404s
- `app/not-found.tsx` catches root-level 404s

### Runtime Errors
When an error occurs during rendering:
- `app/[route]/error.tsx` acts as error boundary for segment
- `app/error.tsx` acts as root-level error boundary
- Provides `error` object and `reset()` function

### Global Errors
For critical errors that break the page:
- `app/global-error.tsx` must render full HTML
- Catches errors error boundaries can't handle
- Best for logging to error tracking services

## 💡 Usage Examples

### Update Product Not Found
If you need custom logic when a product doesn't exist, the app already handles it via [app/products/not-found.tsx](app/products/not-found.tsx)

### Log Errors to Service
In error pages, you can send errors to error tracking services:

```tsx
useEffect(() => {
  // Send to Sentry, LogRocket, etc.
  errorTrackingService.captureException(error);
}, [error]);
```

### Add Segment-Specific Error Handling
Create error pages at any route level:
```
app/
  error.tsx (root errors)
  products/
    error.tsx (products errors)
    [id]/
      error.tsx (product detail errors)
```

## 🚀 Testing Error Pages

### Test 404 Page
Visit: `http://localhost:3000/invalid-route`

### Test Product 404
Visit: `http://localhost:3000/products/99999`

### Test Error Boundary (in development)
Add an intentional error to a component and it will show the error page.

## 📝 Customization

All error pages match your brand colors:
- Primary color: `#00b4b4` (teal)
- Secondary color: `#00d9d9` (light teal)
- Text: Gray scale (900, 600, 300)

To customize further, edit the respective files in the `app/` directory.

## ✨ Best Practices

1. **Always show helpful content**: Tell users what happened
2. **Provide clear actions**: "Go Home", "Try Again", "Browse Products"
3. **Log important errors**: Use for debugging in development/staging
4. **Match your brand**: Error pages follow your design system
5. **Test error states**: Verify all error types are handled

---

For Next.js error documentation, see: [Next.js Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
