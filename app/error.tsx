"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          {/* Error Illustration */}
          <div className="mb-8">
            <div className="text-7xl mb-6">⚠️</div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Something Went Wrong
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            We encountered an unexpected error.
          </p>
          <p className="text-gray-500 mb-8">
            Please try again or contact our support team if the problem
            persists.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded text-left">
              <p className="text-sm text-red-600 font-mono break-words">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-[#00b4b4] text-white font-semibold py-3 px-8 rounded hover:bg-[#009090] transition-colors inline-block"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded hover:bg-gray-300 transition-colors inline-block"
            >
              Back to Home
            </Link>
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
                href="/contact"
                className="text-[#00b4b4] hover:underline font-medium"
              >
                Contact Support
              </Link>
              <Link
                href="/about"
                className="text-[#00b4b4] hover:underline font-medium"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
