import { Suspense } from "react";
import {
  BestDeals,
  Footer,
  Header,
  HeroBanner,
  NewArrivals,
  Reveal,
  SectionNotice,
  ShopByCategory,
  CategoryGridSkeleton,
  ProductGridSkeleton,
  SectionSkeleton,
} from "@/components";
import { getHomePageDataAction } from "@/app/actions/catalog";

export default async function HomePage() {
  const homeDataResult = await getHomePageDataAction();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Reveal y={14}>
          <HeroBanner />
        </Reveal>
        {!homeDataResult.ok ? (
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <SectionNotice message={homeDataResult.error} />
          </div>
        ) : (
          <>
            <Suspense
              fallback={
                <section className="relative bg-white py-8">
                  <div className="mx-auto w-full max-w-[1400px] px-4">
                    <div className="mb-5">
                      <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
                    </div>
                    <CategoryGridSkeleton count={4} />
                  </div>
                </section>
              }
            >
              <Reveal delay={0.05}>
                <ShopByCategory categories={homeDataResult.data.categories} />
              </Reveal>
            </Suspense>

            <div className="bg-[#f9f9f9]">
              <Suspense
                fallback={
                  <SectionSkeleton title={true}>
                    <ProductGridSkeleton count={12} />
                  </SectionSkeleton>
                }
              >
                <Reveal delay={0.08}>
                  <NewArrivals
                    products={homeDataResult.data.allProducts.slice(0, 12)}
                  />
                </Reveal>
              </Suspense>

              <Suspense
                fallback={
                  <SectionSkeleton title={true}>
                    <ProductGridSkeleton count={6} />
                  </SectionSkeleton>
                }
              >
                <Reveal delay={0.12}>
                  <BestDeals
                    categories={homeDataResult.data.categories}
                    categoryProducts={homeDataResult.data.categoryProducts}
                  />
                </Reveal>
              </Suspense>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
