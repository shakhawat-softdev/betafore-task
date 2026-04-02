import { newArrivals } from "@/lib/data";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function NewArrivals() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-extrabold text-gray-900">
          <span className="text-[#00b4b4]">New</span>{" "}
          <span>Arrivals</span>
        </h2>
        <Link href="/products" className="text-sm text-[#00b4b4] hover:underline font-semibold">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
