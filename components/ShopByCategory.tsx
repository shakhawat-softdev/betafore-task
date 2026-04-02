"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Category } from "@/lib/api-types";
import SectionNotice from "./SectionNotice";

interface ShopByCategoryProps {
  categories: Category[];
}

const categoryCardClasses = [
  "from-sky-500 to-cyan-400",
  "from-rose-500 to-orange-400",
  "from-indigo-500 to-violet-500",
  "from-emerald-500 to-lime-400",
  "from-fuchsia-500 to-pink-500",
];

export default function ShopByCategory({ categories }: ShopByCategoryProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;
  const maxStart = Math.max(0, categories.length - visible);

  const prev = () => setStartIndex((p) => Math.max(0, p - 1));
  const next = () => setStartIndex((p) => Math.min(maxStart, p + 1));

  const visibleCats = categories.slice(startIndex, startIndex + visible);

  if (categories.length === 0) {
    return (
      <div className="bg-white border-t border-gray-200 py-3">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionNotice message="Categories are unavailable at the moment." />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-t border-gray-200 py-1">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-2">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        <div className="flex-1 grid grid-cols-4 gap-3 py-3">
          {visibleCats.map((cat, index) => (
            <div
              key={cat.id}
              className={`relative overflow-hidden rounded group bg-gradient-to-br ${
                categoryCardClasses[
                  (startIndex + index) % categoryCardClasses.length
                ]
              }`}
              style={{ height: 180 }}
            >
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="text-white font-bold text-sm md:text-base leading-tight">
                  {cat.name}
                </span>
                <Link
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="text-white text-sm font-semibold underline underline-offset-2"
                >
                  Shop
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          disabled={startIndex >= maxStart}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
