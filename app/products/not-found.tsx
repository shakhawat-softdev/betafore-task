import Link from "next/link";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "Product Not Found - WIN Store",
  description: "The product you're looking for doesn't exist.",
};

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[600px] text-center">
          {/* 404 Heading */}
          <div className="mb-8">
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4b4] to-[#00d9d9] mb-4">
              404
            </h1>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              Product Not Found
            </p>
            <p className="text-lg text-gray-600">
              The product you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-10 py-8">
            <div className="inline-block">
              <svg
                className="w-48 h-48 text-[#00b4b4] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 5.23 11.08 5 12 5c3.04 0 5.71 2.36 5.93 5.36l2.14-2.14c.44-.44.68-1.04.68-1.68 0-.59-.24-1.19-.68-1.63L12 2 2 12l10 10 1.27-1.27c-.67.52-1.42.93-2.27 1.1.16.64.16 1.34 0 2-.77-.17-1.52-.58-2.2-1.1L12 22l-10-10z" />
              </svg>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-col sm:flex-row mb-8">
            <Link
              href="/products"
              className="px-8 py-3 bg-[#00b4b4] text-white font-semibold rounded-lg hover:bg-[#009090] transition-colors duration-200"
            >
              View All Products
            </Link>
            <Link
              href="/"
              className="px-8 py-3 bg-white text-[#00b4b4] font-semibold rounded-lg border-2 border-[#00b4b4] hover:bg-gray-50 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>

          {/* Suggestions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              What you can do:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Browse our complete product catalog</li>
              <li>✓ Use the search function to find items</li>
              <li>✓ Explore products by category</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
