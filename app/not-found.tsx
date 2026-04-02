import Link from "next/link";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "Page Not Found - WIN Store",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[600px] text-center">
          {/* 404 Heading */}
          <div className="mb-8">
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b4b4] to-[#00d9d9] mb-4">
              404
            </h1>
            <p className="text-4xl font-bold text-gray-900 mb-2">
              Oops! Page Not Found
            </p>
            <p className="text-lg text-gray-600">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          {/* Illustration Area */}
          <div className="mb-10 py-8">
            <div className="inline-block">
              <svg
                className="w-48 h-48 text-[#00b4b4] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-col sm:flex-row mb-8">
            <Link
              href="/"
              className="px-8 py-3 bg-[#00b4b4] text-white font-semibold rounded-lg hover:bg-[#009090] transition-colors duration-200"
            >
              Go Back Home
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-[#00b4b4] font-semibold rounded-lg border-2 border-[#00b4b4] hover:bg-gray-50 transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>

          {/* Help Text */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              What can you do?
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Return to the homepage</li>
              <li>✓ Browse our product catalog</li>
              <li>✓ Contact our support team for help</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
