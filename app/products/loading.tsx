import { ProductGridSkeleton, SectionSkeleton } from "@/components/loading";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="h-[68px] bg-[#03484D]" />

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Page title */}
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
        </div>

        {/* Products grid loading */}
        <SectionSkeleton title={false}>
          <ProductGridSkeleton count={12} />
        </SectionSkeleton>

        {/* Second row */}
        <SectionSkeleton title={false}>
          <ProductGridSkeleton count={12} />
        </SectionSkeleton>
      </main>

      {/* Footer */}
      <div className="h-[200px] bg-[#393939]" />
    </div>
  );
}
