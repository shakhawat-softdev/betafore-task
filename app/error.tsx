"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error for debugging
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[600px] text-center">
          {/* Error Heading */}
          <div className="mb-8">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-4">
              Something Went Wrong
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              We encountered an unexpected error. Please try again.
            </p>

            {/* Error Message Box */}
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-left">
              <p className="text-sm font-mono text-red-700 break-words">
                {error.message || "An unexpected error occurred"}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </div>

          {/* Illustration Area */}
          <div className="mb-10 py-8">
            <div className="inline-block">
              <svg
                className="w-48 h-48 text-red-500 opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-col sm:flex-row mb-8">
            <button
              onClick={reset}
              className="px-8 py-3 bg-[#00b4b4] text-white font-semibold rounded-lg hover:bg-[#009090] transition-colors duration-200"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-3 bg-white text-[#00b4b4] font-semibold rounded-lg border-2 border-[#00b4b4] hover:bg-gray-50 transition-colors duration-200"
            >
              Go Home
            </Link>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              If this problem persists, please contact our support team.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/products"
                className="text-sm text-[#00b4b4] hover:underline"
              >
                Browse Products
              </Link>
              <span className="text-gray-300">•</span>
              <a
                href="mailto:info@winstore.pk"
                className="text-sm text-[#00b4b4] hover:underline"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
