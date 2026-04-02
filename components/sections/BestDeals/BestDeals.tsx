"use client";

/**
 * BestDeals Component
 * Tabbed section for category-specific product deals
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard, SectionNotice } from "@/components/ui";
import { type Category, type Product } from "@/lib/types";

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
      <div className="mb-5 border-b border-gray-200 pb-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="pb-2 pr-0 text-2xl font-extrabold text-gray-900 md:pb-3 md:pr-6">
            <span className="text-[#00b4b4]">Best</span> <span>Deals</span>
          </h2>

          {/* Scroll arrows + Tabs (right aligned) */}
          <div className="w-full md:ml-auto md:w-auto">
            <div className="flex items-center justify-end gap-2">
              <div className="hidden items-center gap-1 pb-2 md:flex">
                <button className="rounded border border-gray-300 p-1 transition-colors hover:bg-gray-100">
                  <ChevronLeft size={14} />
                </button>
                <button className="rounded border border-gray-300 p-1 transition-colors hover:bg-gray-100">
                  <ChevronRight size={14} />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 md:flex-nowrap md:gap-0">
                {categories.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.name)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-3 py-2 text-center text-xs leading-tight font-semibold normal-case transition-colors sm:px-4 sm:py-3 sm:text-sm md:shrink-0 md:whitespace-nowrap md:uppercase ${
                      activeTab === tab.name
                        ? "text-[#00b4b4] border-b-2 border-[#00b4b4]"
                        : "text-gray-600 hover:text-[#00b4b4] border-b-2 border-transparent"
                    }`}
                  >
                    {tab.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
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
