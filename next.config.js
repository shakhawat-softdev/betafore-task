/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimize static images
    formats: ["image/webp", "image/avif"],
    
    // Device size breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache optimized images for 31 days
    minimumCacheTTL: 31536000,
    
    // Dangerously allow SVG (needed for your icons)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Remote image optimization
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};
module.exports = nextConfig;
