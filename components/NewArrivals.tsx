import { fetchAllProducts } from "@/app/actions/productActions";
import { normalizeProduct } from "@/lib/utils";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function NewArrivals() {
  try {
    const products = await fetchAllProducts();
    const arrivals = products.slice(0, 12).map(normalizeProduct);

    return (
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-extrabold text-gray-900">
            <span className="text-[#00b4b4]">New</span> <span>Arrivals</span>
          </h2>
          <Link
            href="/products"
            className="text-sm text-[#00b4b4] hover:underline font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to load arrivals:", error);
    return (
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="text-center text-gray-500">
          <p>Failed to load arrivals. Please try again later.</p>
        </div>
      </section>
    );
  }
}
