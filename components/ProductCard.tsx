"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/data";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="bg-white border border-gray-200 rounded flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Brand */}
      <div className="px-3 pt-3 pb-1">
        <p className="text-xs text-gray-500 truncate">{product.brand}</p>
        <p className="text-sm font-semibold text-gray-800 truncate leading-snug">
          {product.name}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-36 mx-3 my-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          sizes="200px"
        />
      </div>

      {/* Pricing */}
      <div className="px-3 pb-2 flex items-center gap-2">
        <span className="text-xs text-gray-400 line-through">
          RS {product.originalPrice.toLocaleString()}
        </span>
        <span className="text-sm font-bold text-[#00b4b4]">
          RS {product.price.toLocaleString()}
        </span>
      </div>

      {/* Add to Cart */}
      <div className="px-3 pb-3">
        <button
          onClick={handleAdd}
          className={`w-full py-2 rounded text-sm font-semibold transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-[#00b4b4] text-white hover:bg-[#009090]"
          }`}
        >
          {added ? "Added!" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
