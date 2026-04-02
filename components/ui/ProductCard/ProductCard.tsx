"use client";

/**
 * ProductCard Component
 * Displays a single product with image, price, rating, and add to cart action
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [added, setAdded] = useState(false);
  const originalPrice = Number((product.price * 1.15).toFixed(2));
  const productHref = `/products/${product.id}`;

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="bg-white border border-gray-200 rounded flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      <Link href={productHref} className="block">
        <div className="px-3 pt-3 pb-1">
          <p className="text-xs text-gray-500 truncate uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-sm font-semibold text-gray-800 truncate leading-snug hover:text-[#00b4b4]">
            {product.title}
          </p>
        </div>

        <div className="relative h-36 mx-3 my-2">
          <Image
            src={product.image}
            alt={product.title}
            fill
            loading="lazy"
            quality={80}
            className="object-contain"
            sizes="200px"
          />
        </div>

        <div className="px-3 pb-2 flex items-center gap-2">
          <span className="text-xs text-gray-400 line-through">
            ${originalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-bold text-[#00b4b4]">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <div className="px-3 pb-2 text-xs text-gray-500">
          Rating {product.rating.rate} ({product.rating.count})
        </div>
      </Link>

      <div className="px-3 pb-3">
        <motion.button
          onClick={handleAdd}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-2 rounded text-sm font-semibold transition-colors ${
            added
              ? "bg-green-500 text-white"
              : "bg-[#00b4b4] text-white hover:bg-[#009090]"
          }`}
        >
          {added ? "Added!" : "Add to cart"}
        </motion.button>
      </div>
    </motion.div>
  );
}
