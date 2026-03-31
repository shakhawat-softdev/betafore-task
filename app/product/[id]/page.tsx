import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  fetchProductById,
  fetchAllProducts,
} from "@/app/actions/productActions";
import { normalizeProduct, getNumericRating } from "@/lib/utils";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const product = await fetchProductById(parseInt(params.id));
    return {
      title: `${product.title} | WIN Store`,
      description: product.title,
    };
  } catch {
    return {
      title: "Product | WIN Store",
    };
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const productId = parseInt(params.id);
    const product = await fetchProductById(productId);
    const normalized = normalizeProduct(product);
    const ratingValue = getNumericRating(product.rating);
    const stockCount = product.stock ?? 0;

    // Fetch related products
    const allProducts = await fetchAllProducts();
    const relatedProducts = allProducts
      .filter((p) => p.category === product.category && p.id !== productId)
      .slice(0, 6)
      .map(normalizeProduct);

    const discountPercent = Math.round(
      ((product.price - normalized.price) / product.price) * 100,
    );

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8">
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-96">
              <Image
                src={
                  product.thumbnail || product.images?.[0] || "/fallback.jpg"
                }
                alt={product.title}
                width={400}
                height={400}
                className="object-contain max-h-96"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="text-yellow-500">★★★★★</div>
                <span className="text-gray-600">({ratingValue})</span>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-[#00b4b4]">
                    Rs {normalized.price.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    Rs {product.price.toLocaleString()}
                  </span>
                  {discountPercent > 0 && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Stock */}
              <p className="text-sm text-gray-600 mb-6">
                <span
                  className={stockCount > 0 ? "text-green-600" : "text-red-600"}
                >
                  {stockCount > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              {/* Add to Cart / Buy Now */}
              <div className="flex gap-4 mb-8">
                <button
                  disabled={product.stock === 0}
                  className="flex-1 bg-[#00b4b4] text-white font-bold py-3 rounded hover:bg-[#009090] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  disabled={product.stock === 0}
                  className="flex-1 border-2 border-[#00b4b4] text-[#00b4b4] font-bold py-3 rounded hover:bg-[#00b4b4] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* More info */}
              <div className="border-t pt-6 space-y-3 text-sm">
                <p>
                  <span className="text-gray-600">SKU:</span>{" "}
                  <span className="font-semibold">{product.sku}</span>
                </p>
                <p>
                  <span className="text-gray-600">Category:</span>{" "}
                  <span className="font-semibold capitalize">
                    {product.category}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Warranty:</span>{" "}
                  <span className="font-semibold">
                    {product.warrantyInformation}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Shipping:</span>{" "}
                  <span className="font-semibold">
                    {product.shippingInformation}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Return Policy:</span>{" "}
                  <span className="font-semibold">{product.returnPolicy}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Customer Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.reviews.slice(0, 4).map((review, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {review.reviewerName}
                      </span>
                      <span className="text-yellow-500">
                        {"★".repeat(review.rating)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-2">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#00b4b4]">Related</span> Products
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            Please check the product ID and try again.
          </p>
        </main>
        <Footer />
      </div>
    );
  }
}
