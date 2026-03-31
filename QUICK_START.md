# Quick Start Checklist

## Pre-Deployment Verification

### 1. Local Setup ✓

- [ ] Node.js 18+ installed: `node --version`
- [ ] npm installed: `npm --version`
- [ ] Project cloned/downloaded
- [ ] Dependencies installed: `npm install`

### 2. Development Server ✓

```bash
npm run dev
```

- [ ] Server starts on http://localhost:3000
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Homepage loads correctly

### 3. Homepage Components ✓

Navigate to http://localhost:3000

- [ ] Header displays correctly
- [ ] Search box is visible
- [ ] Hero carousel appears
- [ ] Category carousel shows
- [ ] New Arrivals section loads products
- [ ] Best Deals section shows
- [ ] Footer displays

### 4. Navigation ✓

- [ ] Home link works
- [ ] Products page loads: /products
- [ ] Header navigation links work
- [ ] Mobile menu opens on small screens
- [ ] Social icons visible in footer

### 5. API Integration ✓

- [ ] Products load from API
- [ ] Product images display with fallbacks
- [ ] Pricing shows correctly
- [ ] No 404 errors in console
- [ ] API calls in Network tab show responses

### 6. Product Pages ✓

- [ ] Visit `/products` - all products load
- [ ] Visit `/category/electronics` - works
- [ ] Product images load properly
- [ ] Pricing displays correctly
- [ ] "Add to cart" button works (shows feedback)

### 7. Responsive Design ✓

- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Mobile view (320px): 2-column grid
- [ ] Tablet view (768px): 3-4 column grid
- [ ] Desktop view (1024px): 6-column grid
- [ ] Navigation hamburger appears on mobile
- [ ] No horizontal scroll on any size

### 8. TypeScript Compilation ✓

```bash
npm run build
```

- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No build warnings
- [ ] `.next` folder created

### 9. Production Build ✓

```bash
npm run build
npm start
```

- [ ] Production server starts
- [ ] App loads at http://localhost:3000
- [ ] All features work same as dev mode
- [ ] Performance is good

### 10. Code Quality ✓

```bash
npm run lint
```

- [ ] No ESLint errors
- [ ] No unused variables warnings
- [ ] Console is clean

## Environment Setup

- [ ] `.env.local` created (copy from `.env.example`)
- [ ] `NEXT_PUBLIC_API_BASE_URL` set correctly
- [ ] API base URL is: `https://mm-assesment-server.vercel.app/api/v1`

## Pre-Deployment Tests

### Homepage

- [ ] All sections visible
- [ ] Images load
- [ ] Responsive on mobile/tablet/desktop
- [ ] No broken links

### Products Page

- [ ] Products load from API
- [ ] Grid layout is correct
- [ ] Product cards display pricing
- [ ] Images have proper fallbacks

### Category Page

- [ ] Navigation to categories works
- [ ] Products filter by category
- [ ] Empty states handled

### Error Handling

- [ ] Invalid URLs show 404
- [ ] API errors show user-friendly messages
- [ ] Image failures use fallback

### Performance

- [ ] Page loads quickly
- [ ] Images lazy-load
- [ ] No console errors
- [ ] DevTools shows no warnings

## Deployment Verification

### For Vercel

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel connected to repo
- [ ] Build succeeds on Vercel
- [ ] Environment variables set
- [ ] Live URL works

### For Self-Hosting

- [ ] Build completes: `npm run build`
- [ ] Server starts: `npm start`
- [ ] App accessible at deployment URL
- [ ] All features working

## Browser Testing

Test in latest versions of:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Chrome
- [ ] Mobile Safari

## Final Checklist

- [ ] All files present and correct
- [ ] No console errors or warnings
- [ ] Responsive design working
- [ ] API integration complete
- [ ] Performance acceptable
- [ ] Ready for production

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### No Products Loading

- Check if API is accessible: `curl https://mm-assesment-server.vercel.app/api/v1/products`
- Check browser console for errors
- Verify `NEXT_PUBLIC_API_BASE_URL` is set

### Images Not Loading

- Check browser DevTools Network tab
- Verify image URLs are accessible
- Check fallback image exists: `/public/fallback-product.jpg`

### TypeScript Errors

```bash
npm run build  # Shows detailed errors
```

### Port Already in Use

```bash
# Find and use different port
npm run dev:auto
```

---

## Quick Reference

**Start Development:**

```bash
npm run dev
```

Open http://localhost:3000

**Build for Production:**

```bash
npm run build
npm start
```

**Check Code Quality:**

```bash
npm run lint
```

**Environment Variables:**

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

**Deploy to Vercel:**

1. Push to GitHub
2. Connect with Vercel
3. Set env variables
4. Deploy button

---

## Resources

- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Developer guide
- [PROJECT_COMPLETION.md](./PROJECT_COMPLETION.md) - Completion summary

---

**When all checkmarks are set, you're ready to deploy! 🚀**
