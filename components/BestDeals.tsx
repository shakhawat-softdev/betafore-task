"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Category, Product } from "@/lib/api-types";
import SectionNotice from "./SectionNotice";

interface BestDealsProps {
  categories: Category[];
  categoryProducts: Record<string, Product[]>;
}

export default function BestDeals({
  categories,
  categoryProducts,
}: BestDealsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]?.name ?? "");

  const products = activeTab ? (categoryProducts[activeTab] ?? []) : [];

  const row1 = products.slice(0, 6);
  const row2 = products.slice(6, 12);

  return (
    <section className="max-w-[1200px] mx-auto px-4 pb-10">
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-5 pb-0">
        <h2 className="text-2xl font-extrabold text-gray-900 pb-3 pr-6 border-b-0">
          <span className="text-[#00b4b4]">Best</span> <span>Deals</span>
        </h2>

        <div className="flex items-center gap-0 flex-1">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                activeTab === tab.name
                  ? "text-[#00b4b4] border-b-2 border-[#00b4b4]"
                  : "text-gray-600 hover:text-[#00b4b4] border-b-2 border-transparent"
              }`}
            >
              {tab.name}
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

      {categories.length === 0 ? (
        <SectionNotice message="Categories are not available right now." />
      ) : (
        <>
          {row1.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-3">
              {row1.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {row2.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {row2.map((product) => (
                <ProductCard key={`r2-${product.id}`} product={product} />
              ))}
            </div>
          )}

          {products.length === 0 && (
            <SectionNotice message="No products found for this category." />
          )}
        </>
      )}
    </section>
  );
}
