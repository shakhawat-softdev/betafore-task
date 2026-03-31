"use client";

import { useState } from "react";
import Image from "next/image";
import { NormalizedProduct } from "@/lib/utils";

interface Props {
  product: NormalizedProduct;
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
      <div className="relative h-36 mx-3 my-2 bg-gray-50 rounded">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
          sizes="200px"
          onError={(e) => {
            e.currentTarget.src = "/fallback-product.jpg";
          }}
        />
      </div>

      {/* Pricing */}
      <div className="px-3 pb-2 flex items-center gap-2">
        <span className="text-xs text-gray-400 line-through">
          Rs {product.originalPrice.toLocaleString()}
        </span>
        <span className="text-sm font-bold text-[#00b4b4]">
          Rs {product.price.toLocaleString()}
        </span>
      </div>

      {/* Rating */}
      {product.rating && (
        <div className="px-3 pb-1 text-xs text-yellow-500">
          ★★★★★ ({product.rating})
        </div>
      )}

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
