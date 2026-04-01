import { CategoryStrip } from "@/components/home/CategoryStrip";
import { BestDeals } from "@/components/home/BestDeals";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <div className="site-shell pb-12">
        <Hero />
        <CategoryStrip />
        <NewArrivals />
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <BestDeals />
        </div>
      </div>
    </main>
  );
}
