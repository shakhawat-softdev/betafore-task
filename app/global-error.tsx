"use client";

import { useEffect } from "react";
import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log error to external error reporting service
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
          {/* Error Container */}
          <div className="w-full max-w-md text-center">
            {/* Icon */}
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-red-500 opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-3">
              Critical Error
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Something went seriously wrong. Our team has been notified.
            </p>

            {/* Error Details */}
            <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-lg p-4 mb-8 text-left">
              <p className="text-sm font-mono text-red-200 break-words">
                {error.message || "An unexpected critical error occurred"}
              </p>
              {error.digest && (
                <p className="text-xs text-red-300 mt-3">
                  Error Reference: {error.digest}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <button
                onClick={reset}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                Return Home
              </Link>
            </div>

            {/* Support Info */}
            <div className="mt-12 text-slate-400 text-sm">
              <p>If the problem persists, please contact support:</p>
              <a
                href="mailto:info@winstore.pk"
                className="text-blue-400 hover:underline"
              >
                info@winstore.pk
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
