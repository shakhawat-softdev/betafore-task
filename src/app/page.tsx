import { CategoryStrip } from "@/components/home/CategoryStrip";
import { BestDeals } from "@/components/home/BestDeals";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
        <Hero />
        <CategoryStrip />
        <NewArrivals />
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <BestDeals />
        </div>
      </div>
    </main>
  );
}
