import { Footer, Header } from "@/components";

export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

        {/* Loading Spinner */}
        <div className="mt-8 flex justify-center">
          <div className="relative h-16 w-16">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#00b4b4] border-r-[#00b4b4]" />

            {/* Inner pulsing dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00b4b4]" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-gray-600">
            Loading product details...
          </p>
        </div>

        {/* Skeleton Content (shown behind spinner for context) */}
        <section className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm opacity-50">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="h-[360px] w-full animate-pulse rounded bg-gray-100" />

            <div>
              <div className="mb-3 h-4 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-9 w-4/5 animate-pulse rounded bg-gray-200" />

              <div className="mt-5 h-10 w-36 animate-pulse rounded bg-gray-200" />

              <div className="mt-4 h-4 w-52 animate-pulse rounded bg-gray-200" />

              <div className="mt-6 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-10/12 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
