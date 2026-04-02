import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import SectionNotice from "@/components/SectionNotice";
import {
  getAllProductsAction,
  getCategoriesAction,
  getProductsByCategoryAction,
} from "@/app/actions/catalog";

interface ProductsPageProps {
  searchParams?: {
    category?: string;
  };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const selectedCategory = searchParams?.category;

  const [categoriesResult, productsResult] = await Promise.all([
    getCategoriesAction(),
    selectedCategory
      ? getProductsByCategoryAction(selectedCategory)
      : getAllProductsAction(),
  ]);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
          <span className="text-[#00b4b4]">
            {selectedCategory ? selectedCategory : "All"}
          </span>{" "}
          Products
        </h1>

        {categoriesResult.ok && (
          <div className="flex flex-wrap gap-2 mb-6">
            <Link
              href="/products"
              className={`px-3 py-1 rounded-full text-sm border ${
                !selectedCategory
                  ? "bg-[#00b4b4] text-white border-[#00b4b4]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              All
            </Link>
            {categoriesResult.data.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className={`px-3 py-1 rounded-full text-sm border ${
                  selectedCategory === category.name
                    ? "bg-[#00b4b4] text-white border-[#00b4b4]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}

        {!productsResult.ok ? (
          <SectionNotice message={productsResult.error} />
        ) : productsResult.data.length === 0 ? (
          <SectionNotice message="No products found." />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {productsResult.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
