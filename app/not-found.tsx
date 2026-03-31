"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-[#00b4b4] mb-4">404</h1>
            <div className="text-6xl mb-6">🔍</div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 mb-8">
            It might have been moved or deleted. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#00b4b4] text-white font-semibold py-3 px-8 rounded hover:bg-[#009090] transition-colors inline-block"
            >
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need help? Try these:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="text-[#00b4b4] hover:underline font-medium"
              >
                Shop Products
              </Link>
              <Link
                href="/categories"
                className="text-[#00b4b4] hover:underline font-medium"
              >
                Browse Categories
              </Link>
              <Link
                href="/contact"
                className="text-[#00b4b4] hover:underline font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
