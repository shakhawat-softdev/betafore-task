import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ShopByCategory from "@/components/ShopByCategory";
import NewArrivals from "@/components/NewArrivals";
import BestDeals from "@/components/BestDeals";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <ShopByCategory />
        <div className="bg-[#f9f9f9]">
          <NewArrivals />
          <BestDeals />
        </div>
      </main>
      <Footer />
    </div>
  );
}
