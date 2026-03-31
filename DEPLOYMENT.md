# Deployment Guide

## Quick Start - Vercel (Recommended)

Vercel is the creator of Next.js and provides the best deployment experience.

### Prerequisites

- GitHub account
- Project pushed to GitHub
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js and configures build settings

3. **Set Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
     ```
   - Deploy

4. **Done!**
   - Your app is live at `https://your-project.vercel.app`
   - Automatic deploys on every push to main branch

## Alternative - Self-Hosted (Docker/VPS)

### Build

```bash
npm run build
npm start
```

Server runs on `http://localhost:3000`

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./.next
COPY public ./public
ENV PORT 3000
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t winstore .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1 winstore
```

### Using PM2 (Production Process Manager)

```bash
npm install -g pm2
npm run build
pm2 start "npm start" --name "winstore"
pm2 save
pm2 startup
```

## Environment Variables for Different Environments

### Development (.env.local)

```
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
NODE_ENV=development
```

### Production (.env.production)

```
NEXT_PUBLIC_API_BASE_URL=https://mm-assesment-server.vercel.app/api/v1
NODE_ENV=production
```

## Performance Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Check console for any TypeScript errors
- [ ] Test all product pages in preview build
- [ ] Verify images load correctly
- [ ] Test mobile responsiveness
- [ ] Check API connectivity
- [ ] Verify error pages (404)
- [ ] Check Core Web Vitals with Lighthouse

## Monitoring & Analytics

### Google Analytics (Optional)

1. Add to `.env.local`:

```
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

2. Create `lib/gtag.ts`:

```typescript
export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};
```

3. Add to root layout

## Rollback Procedure

### Vercel

- Go to Deployments tab
- Click the previous successful deployment
- Click "Re-deploy"

### Self-Hosted

- Keep previous builds available
- Use git tags: `git checkout v1.0.0`
- Rebuild and restart

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### API Connection Issues

- Check `NEXT_PUBLIC_API_BASE_URL` is correct
- Verify API endpoint is accessible: `curl https://mm-assesment-server.vercel.app/api/v1/products`
- Check CORS settings if needed

### Image Loading Issues

- Verify URLs are accessible
- Check Next.js Image optimization settings in `next.config.js`
- Ensure fallback image exists: `/public/fallback-product.jpg`

### Performance Issues

- Use `npm run build` to identify slow routes
- Check bundle size: `npm run build -- --analyze` (requires @next/bundle-analyzer)
- Review Server Components usage
- Check database/API response times

## Scaling Considerations

### Caching Strategy

- Server Actions use Next.js built-in caching
- ISR (Incremental Static Regeneration) for product pages
- Edge caching with Vercel CDN

### Database (Future)

- If adding real cart/user data, consider:
  - Supabase (PostgreSQL)
  - Firebase Firestore
  - MongoDB Atlas

### Load Testing

```bash
npm install -g loadtest
loadtest http://localhost:3000 -c 100 -t 30
```

## Backup Strategy

1. **Code**: GitHub (automatic)
2. **Environment Variables**: Stored in platform dashboard
3. **Assets**: stored in version control

## Security Checklist

- [ ] No API keys in code (use env variables)
- [ ] HTTPS enforced (automatic on Vercel)
- [ ] Content Security Policy headers
- [ ] Rate limiting on Server Actions (future)
- [ ] Input validation for all forms
- [ ] CORS properly configured

## Next Steps

1. Deploy to Vercel
2. Set up monitoring/analytics
3. Configure custom domain
4. Add SSL certificate
5. Set up CI/CD for automated testing

---

For more help, see [Next.js Deployment](https://nextjs.org/docs/deployment)
