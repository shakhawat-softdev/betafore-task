"use client";

/**
 * ShopByCategory Component
 * Carousel of category cards with shop links
 */

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Category } from "@/lib/types";
import { OptimizedImage, SectionNotice } from "@/components/ui";

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

const figmaCategoryImages = [
  "/images/figma/shop-cat-electronics.png",
  "/images/figma/shop-cat-fashion.png",
  "/images/figma/shop-cat-appliances.png",
  "/images/figma/shop-cat-babies.png",
];

const categoryImageByName: Record<string, string> = {
  electronics: "/images/figma/shop-cat-electronics.png",
  jewelery: "/images/figma/shop-cat-fashion.png",
  "men's clothing": "/images/figma/shop-cat-appliances.png",
  "women's clothing": "/images/figma/shop-cat-babies.png",
};

const figmaArrowButtonClass =
  "h-[66px] w-[66px] items-center justify-center bg-transparent disabled:opacity-30";

/**
 * Left arrow SVG icon
 */
function FigmaLeftArrowIcon() {
  return (
    <svg width="17" height="33" viewBox="0 0 17 33" fill="none" aria-hidden>
      <path
        d="M16.5 33L0 16.5L16.5 0"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Right arrow SVG icon
 */
function FigmaRightArrowIcon() {
  return (
    <svg width="17" height="33" viewBox="0 0 17 33" fill="none" aria-hidden>
      <path
        d="M0.5 33L17 16.5L0.5 0"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Convert category name to display format with capitalization
 */
function toDisplayName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ShopByCategory({ categories }: ShopByCategoryProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;
  const maxStart = Math.max(0, categories.length - visible);

  const prev = () => setStartIndex((p) => Math.max(0, p - 1));
  const next = () => setStartIndex((p) => Math.min(maxStart, p + 1));

  const visibleCats = categories.slice(startIndex, startIndex + visible);

  if (categories.length === 0) {
    return (
      <div className="bg-white py-3">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionNotice message="Categories are unavailable at the moment." />
        </div>
      </div>
    );
  }

  return (
    <section className="relative bg-[linear-gradient(180deg,#F3EDC9_0%,rgba(255,255,255,0)_100%)] py-[2px]">
      <button
        onClick={prev}
        disabled={startIndex === 0}
        aria-label="Previous categories"
        className={`hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 ${figmaArrowButtonClass}`}
      >
        <FigmaLeftArrowIcon />
      </button>

      <button
        onClick={next}
        disabled={startIndex >= maxStart}
        aria-label="Next categories"
        className={`hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 ${figmaArrowButtonClass}`}
      >
        <FigmaRightArrowIcon />
      </button>

      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4">
        <div className="flex w-full max-w-[1262px] gap-[33px] overflow-hidden p-[15px]">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            aria-label="Previous categories"
            className={`xl:hidden flex flex-shrink-0 ${figmaArrowButtonClass}`}
          >
            <FigmaLeftArrowIcon />
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[33px]">
            {visibleCats.map((cat, index) => {
              const imageSrc =
                categoryImageByName[cat.name] ??
                figmaCategoryImages[
                  (startIndex + index) % figmaCategoryImages.length
                ];
              const displayName = toDisplayName(cat.name);
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`relative h-[199px] w-full overflow-hidden bg-gradient-to-br ${
                    categoryCardClasses[
                      (startIndex + index) % categoryCardClasses.length
                    ]
                  }`}
                >
                  {imageSrc && (
                    <OptimizedImage
                      src={imageSrc}
                      alt={displayName}
                      fill
                      loading="lazy"
                      quality={82}
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 272px"
                    />
                  )}

                  <div className="absolute left-[-9px] bottom-[12px] flex h-[49px] w-[269px] items-center gap-[10px] bg-[rgba(254,249,249,0.95)] px-[15px] shadow-[0_1px_7px_rgba(0,0,0,0.57)]">
                    <span className="min-w-0 flex-1 whitespace-nowrap text-[clamp(14px,1.3vw,23px)] leading-none tracking-tight text-black">
                      {displayName}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/products?category=${encodeURIComponent(cat.name)}`}
                        className="ml-auto flex h-[38px] w-[96px] items-center justify-center bg-[#0AAEB9] text-[17px] text-white"
                      >
                        Shop
                      </Link>
                    </motion.div>
                  </div>

                  <div className="absolute left-[-9px] bottom-[60px] h-0 w-0 border-r-[11px] border-r-transparent border-t-[8px] border-t-[#220F0F]" />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={next}
            disabled={startIndex >= maxStart}
            aria-label="Next categories"
            className={`xl:hidden flex flex-shrink-0 ${figmaArrowButtonClass}`}
          >
            <FigmaRightArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
