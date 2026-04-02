import {
  HeroBannerSkeleton,
  ProductGridSkeleton,
  CategoryGridSkeleton,
  SectionSkeleton,
} from "@/components/loading";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="h-[68px] bg-[#03484D]" />

      {/* Hero Banner */}
      <HeroBannerSkeleton />

      {/* Shop by Category */}
      <section className="relative bg-white py-8">
        <div className="mx-auto w-full max-w-[1400px] px-4">
          <div className="mb-5">
            <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
          </div>
          <CategoryGridSkeleton count={4} />
        </div>
      </section>

      {/* Best Deals Section */}
      <SectionSkeleton title={true}>
        <ProductGridSkeleton count={6} />
      </SectionSkeleton>

      {/* New Arrivals Section */}
      <SectionSkeleton title={true}>
        <ProductGridSkeleton count={6} />
      </SectionSkeleton>

      {/* Footer */}
      <div className="h-[200px] bg-[#393939]" />
    </div>
  );
}
