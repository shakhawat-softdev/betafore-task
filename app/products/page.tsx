import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { fetchAllProducts } from "@/app/actions/productActions";
import { normalizeProduct } from "@/lib/utils";

export const metadata = {
  title: "All Products | WIN Store",
  description: "Browse all products at WIN Store",
};

export default async function ProductsPage() {
  try {
    const products = await fetchAllProducts();
    const allProducts = products.map(normalizeProduct);

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
  } catch (error) {
    return (
      <div className="min-h-screen bg-[#f9f9f9]">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Failed to Load Products
          </h1>
          <p className="text-gray-600">Please try again later.</p>
        </main>
        <Footer />
      </div>
    );
  }
}
