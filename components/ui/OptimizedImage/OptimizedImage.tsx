import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "quality" | "loading"> {
  /**
   * Image quality (1-100). Defaults to 82 for best quality/size ratio.
   * Use 75 for thumbnails, 82 for cards, 90+ for hero images.
   */
  quality?: number;
  /**
   * Loading strategy: "lazy" or "eager"
   * Defaults to "lazy" for better performance
   */
  loading?: "lazy" | "eager";
  /**
   * Whether this is a critical image (logo, hero). If true, sets priority
   */
  isCritical?: boolean;
  /**
   * Alt text is required for accessibility
   */
  alt: string;
}

/**
 * OptimizedImage Component
 * Wrapper around Next.js Image with sensible defaults for optimization.
 *
 * Features:
 * - Smart quality defaults based on use case
 * - Lazy loading by default (set isCritical for priority images)
 * - Proper srcset handling for responsive images
 * - WebP/AVIF format support (via next.config.js)
 */
export function OptimizedImage({
  quality = 82,
  priority,
  isCritical = false,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      quality={quality}
      alt={alt}
      priority={priority || isCritical}
      {...props}
    />
  );
}
