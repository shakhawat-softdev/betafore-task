/**
 * Loading Skeleton Components
 * Reusable skeleton components for fallback loading states
 */

export function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded flex flex-col shadow-sm animate-pulse">
      <div className="px-3 pt-3 pb-1">
        <div className="h-3 bg-gray-200 rounded w-20 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-full" />
      </div>

      <div className="relative h-36 mx-3 my-2 bg-gray-100 rounded" />

      <div className="px-3 pb-2 flex items-center gap-2">
        <div className="h-3 bg-gray-200 rounded w-16" />
        <div className="h-4 bg-gray-200 rounded w-24" />
      </div>

      <div className="px-3 pb-2">
        <div className="h-3 bg-gray-200 rounded w-32" />
      </div>

      <div className="px-3 pb-3">
        <div className="w-full h-9 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="relative h-[199px] w-full overflow-hidden rounded bg-gray-200 animate-pulse">
      <div className="absolute left-[-9px] bottom-[12px] w-[269px] h-[49px] bg-gray-300 rounded" />
    </div>
  );
}

export function CategoryGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="flex gap-[33px] overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm animate-pulse">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image skeleton */}
        <div className="relative h-[360px] w-full rounded bg-gray-200" />

        {/* Content skeleton */}
        <div>
          <div className="h-3 bg-gray-200 rounded w-24 mb-3" />
          <div className="h-8 bg-gray-200 rounded w-full mb-4" />

          <div className="mt-4 mb-4">
            <div className="h-7 bg-gray-200 rounded w-32" />
          </div>

          <div className="h-3 bg-gray-200 rounded w-48 mb-6" />

          <div className="space-y-3">
            <div className="h-10 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionSkeleton({
  title = true,
  children,
}: {
  title?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      {title && (
        <div className="flex items-center justify-between mb-5">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
        </div>
      )}
      {children}
    </section>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header placeholder */}
      <div className="h-[68px] bg-[#03484D] animate-pulse" />

      {/* Content area */}
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Section 1 */}
          <SectionSkeleton>
            <ProductGridSkeleton count={6} />
          </SectionSkeleton>

          {/* Section 2 */}
          <SectionSkeleton>
            <ProductGridSkeleton count={4} />
          </SectionSkeleton>
        </div>
      </main>

      {/* Footer placeholder */}
      <div className="h-[200px] bg-[#393939] animate-pulse mt-20" />
    </div>
  );
}

export function HeroBannerSkeleton() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gray-200 animate-pulse"
      style={{ minHeight: 318 }}
    />
  );
}
