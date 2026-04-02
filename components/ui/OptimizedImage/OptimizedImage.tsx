"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "quality"> {
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
   * Enables a pulse skeleton until the image has loaded.
   */
  showSkeleton?: boolean;
  /**
   * Class name applied to the skeleton layer.
   */
  skeletonClassName?: string;
  /**
   * Class name applied to the wrapper container.
   */
  containerClassName?: string;
  /**
   * Class name applied to the image-not-found fallback container.
   */
  fallbackClassName?: string;
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
  loading = "lazy",
  priority,
  isCritical = false,
  showSkeleton = true,
  skeletonClassName,
  containerClassName,
  fallbackClassName,
  alt,
  className,
  onLoad,
  onError,
  fill,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const shouldPrioritize = Boolean(priority || isCritical);
  const resolvedLoading = shouldPrioritize ? undefined : loading;
  const shouldShowSkeleton = showSkeleton && !isLoaded && !hasError;

  const wrapperClassName = fill
    ? "absolute inset-0 block"
    : "relative inline-block";

  return (
    <span className={cn(wrapperClassName, containerClassName)}>
      {shouldShowSkeleton && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 animate-pulse bg-gray-200",
            skeletonClassName,
          )}
        />
      )}
      {hasError && (
        <span
          role="img"
          aria-label={`${alt || "Image"} not available`}
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded bg-gray-100 text-gray-500",
            fallbackClassName,
          )}
        >
          <span className="flex flex-col items-center gap-1">
            <ImageOff size={22} strokeWidth={1.8} />
            <span className="text-[10px] font-semibold uppercase tracking-wide">
              Image Unavailable
            </span>
          </span>
        </span>
      )}
      <Image
        quality={quality}
        loading={resolvedLoading}
        fill={fill}
        alt={alt}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setHasError(true);
          onError?.(event);
        }}
        className={cn(
          className,
          hasError ? "opacity-0" : "",
          shouldShowSkeleton ? "opacity-0" : "opacity-100",
          "transition-opacity duration-300",
        )}
        priority={shouldPrioritize}
        {...props}
      />
    </span>
  );
}
