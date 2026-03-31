import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { fetchProductsByCategory } from "@/app/actions/productActions";
import { normalizeProduct } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = decodeURIComponent(params.slug);
  return {
    title: `${category} | WIN Store`,
    description: `Shop ${category} products at WIN Store`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const category = decodeURIComponent(params.slug);
    const products = await fetchProductsByCategory(category);
    const normalizedProducts = products.map(normalizeProduct);

    return (
      <div className="min-h-screen bg-[#f9f9f9]">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 capitalize">
            {category}
          </h1>
          <p className="text-gray-600 mb-6">
            {normalizedProducts.length} products found
          </p>

          {normalizedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {normalizedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found in this category
              </p>
            </div>
          )}
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
            Failed to Load Category
          </h1>
          <p className="text-gray-600">Please try again later.</p>
        </main>
        <Footer />
      </div>
    );
  }
}
