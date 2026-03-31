"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((p) => (p + 1) % heroSlides.length);
  const slide = heroSlides[current];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: slide.bg,
        minHeight: 320,
        transition: "background 0.5s",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-10 min-h-[320px]">
        {/* Text */}
        <div className="flex-1 max-w-sm z-10">
          <h1 className="text-4xl font-black text-gray-900 leading-tight mb-1">
            {slide.headline1}
          </h1>
          <h1
            className="text-4xl font-black leading-tight mb-4"
            style={{ color: "#00b4b4" }}
          >
            {slide.headline2}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {slide.body}
          </p>
          <button className="bg-[#1a6ff0] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#1558c0] transition-colors">
            {slide.cta}
          </button>
        </div>

        {/* Images */}
        <div className="relative flex items-center gap-4">
          {/* Orange badge */}
          <div
            className="absolute -top-4 right-0 z-20 w-24 h-24 rounded-full bg-orange-500 flex flex-col items-center justify-center text-white font-extrabold shadow-xl"
            style={{ fontSize: 22 }}
          >
            <span>{slide.badge.split(" ")[0]}</span>
            <span className="text-base font-black">
              {slide.badge.split(" ").slice(1).join(" ")}
            </span>
          </div>
          <Image
            src={slide.image1}
            alt="product"
            width={180}
            height={180}
            className="object-contain drop-shadow-lg"
            priority
          />
          <Image
            src={slide.image2}
            alt="product"
            width={200}
            height={200}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Prev/Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-all"
      >
        <ChevronLeft size={18} className="text-gray-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-all"
      >
        <ChevronRight size={18} className="text-gray-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-[#00b4b4]"
                : "w-2.5 h-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
