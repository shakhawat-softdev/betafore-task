"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { shopCategories } from "@/lib/data";

export default function ShopByCategory() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  const prev = () => setStartIndex((p) => Math.max(0, p - 1));
  const next = () =>
    setStartIndex((p) => Math.min(shopCategories.length - visible, p + 1));

  const visibleCats = shopCategories.slice(startIndex, startIndex + visible);

  return (
    <div className="bg-white border-t border-gray-200 py-1">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-2">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        {/* Category Cards */}
        <div className="flex-1 grid grid-cols-4 gap-3 py-3">
          {visibleCats.map((cat) => (
            <div
              key={cat.id}
              className="relative overflow-hidden rounded cursor-pointer group"
              style={{ height: 180 }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm drop-shadow">
                  {cat.name}
                </span>
                <a
                  href={`/category/${cat.slug}`}
                  className="text-[#00b4b4] text-sm font-semibold hover:underline"
                >
                  Shop
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={startIndex >= shopCategories.length - visible}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
