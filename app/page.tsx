import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ShopByCategory from "@/components/ShopByCategory";
import NewArrivals from "@/components/NewArrivals";
import BestDeals from "@/components/BestDeals";
import Footer from "@/components/Footer";
import SectionNotice from "@/components/SectionNotice";
import { getHomePageDataAction } from "@/app/actions/catalog";

export default async function HomePage() {
  const homeDataResult = await getHomePageDataAction();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        {!homeDataResult.ok ? (
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <SectionNotice message={homeDataResult.error} />
          </div>
        ) : (
          <>
            <ShopByCategory categories={homeDataResult.data.categories} />
            <div className="bg-[#f9f9f9]">
              <NewArrivals
                products={homeDataResult.data.allProducts.slice(0, 12)}
              />
              <BestDeals
                categories={homeDataResult.data.categories}
                categoryProducts={homeDataResult.data.categoryProducts}
              />
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
