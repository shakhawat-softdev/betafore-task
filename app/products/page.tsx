import {
  Footer,
  Header,
  ProductCard,
  Reveal,
  SectionNotice,
} from "@/components";
import Link from "next/link";
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
        <Reveal y={14}>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
            <span className="text-[#00b4b4]">
              {selectedCategory ? selectedCategory : "All"}
            </span>{" "}
            Products
          </h1>
        </Reveal>

        {categoriesResult.ok && (
          <Reveal delay={0.04}>
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
          </Reveal>
        )}

        {!productsResult.ok ? (
          <SectionNotice message={productsResult.error} />
        ) : productsResult.data.length === 0 ? (
          <SectionNotice message="No products found." />
        ) : (
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {productsResult.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Reveal>
        )}
      </main>
      <Footer />
    </div>
  );
}
