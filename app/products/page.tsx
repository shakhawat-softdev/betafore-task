import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { newArrivals } from "@/lib/data";

export default function ProductsPage() {
  const allProducts = [...newArrivals, ...newArrivals].map((p, i) => ({
    ...p,
    id: i + 1,
  }));

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
          <span className="text-[#00b4b4]">All</span> Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
