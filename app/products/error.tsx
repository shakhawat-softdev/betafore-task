"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Products Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-[600px] text-center">
          {/* Error Heading */}
          <div className="mb-8">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-4">
              Products Error
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              We&apos;re having trouble loading products right now.
            </p>
          </div>

          {/* Error Details */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-4 text-left">
            <p className="text-sm font-mono text-amber-800 break-words">
              {error.message || "Failed to load products"}
            </p>
            {error.digest && (
              <p className="text-xs text-amber-700 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          {/* Illustration */}
          <div className="mb-10 py-8">
            <div className="inline-block">
              <svg
                className="w-40 h-40 text-amber-500 opacity-20"
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
            <button
              onClick={reset}
              className="px-8 py-3 bg-[#00b4b4] text-white font-semibold rounded-lg hover:bg-[#009090] transition-colors duration-200"
            >
              Retry Loading
            </button>
            <Link
              href="/"
              className="px-8 py-3 bg-white text-[#00b4b4] font-semibold rounded-lg border-2 border-[#00b4b4] hover:bg-gray-50 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>

          {/* Info Section */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Troubleshooting Tips
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Try refreshing the page</li>
              <li>• Check your internet connection</li>
              <li>• Clear your browser cache</li>
              <li>• Try again in a few moments</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
