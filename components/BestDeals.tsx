"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { bestDealsCategories, bestDeals } from "@/lib/data";

export default function BestDeals() {
  const [activeTab, setActiveTab] = useState(bestDealsCategories[0]);

  const products = bestDeals[activeTab] ?? [];

  // Show 2 rows of 6 = 12 max
  const row1 = products.slice(0, 6);
  const row2 = products.slice(6, 12);

  return (
    <section className="max-w-[1200px] mx-auto px-4 pb-10">
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-5 pb-0">
        <h2 className="text-2xl font-extrabold text-gray-900 pb-3 pr-6 border-b-0">
          <span className="text-[#00b4b4]">Best</span>{" "}
          <span>Deals</span>
        </h2>

        <div className="flex items-center gap-0 flex-1">
          {bestDealsCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-[#00b4b4] border-b-2 border-[#00b4b4]"
                  : "text-gray-600 hover:text-[#00b4b4] border-b-2 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scroll arrows */}
        <div className="flex items-center gap-1 pb-2">
          <button className="border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Row 1 */}
      {row1.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-3">
          {row1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Row 2 */}
      {row2.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {row2.map((product) => (
            <ProductCard key={`r2-${product.id}`} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
