import {
  BestDeals,
  Footer,
  Header,
  HeroBanner,
  NewArrivals,
  Reveal,
  SectionNotice,
  ShopByCategory,
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
            <Reveal delay={0.05}>
              <ShopByCategory categories={homeDataResult.data.categories} />
            </Reveal>
            <div className="bg-[#f9f9f9]">
              <Reveal delay={0.08}>
                <NewArrivals
                  products={homeDataResult.data.allProducts.slice(0, 12)}
                />
              </Reveal>
              <Reveal delay={0.12}>
                <BestDeals
                  categories={homeDataResult.data.categories}
                  categoryProducts={homeDataResult.data.categoryProducts}
                />
              </Reveal>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
