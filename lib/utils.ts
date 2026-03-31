// lib/utils.ts

import { Product } from "@/app/actions/productActions";

type ProductRating = Product["rating"];

export function getNumericRating(rating: ProductRating): number {
  if (typeof rating === "number") {
    return rating;
  }

  if (
    rating &&
    typeof rating === "object" &&
    "rate" in rating &&
    typeof rating.rate === "number"
  ) {
    return rating.rate;
  }

  return 0;
}

export function normalizeProduct(product: Product): NormalizedProduct {
  const numericRating = getNumericRating(product.rating);
  const discount =
    typeof product.discountPercentage === "number"
      ? product.discountPercentage
      : 0;

  return {
    id: product.id,
    brand: product.brand || product.category || "Generic Brand",
    name: product.title,
    price: Math.floor(product.price * (1 - discount / 100)),
    originalPrice: product.price,
    image:
      product.thumbnail ||
      product.images?.[0] ||
      product.image ||
      "/fallback.jpg",
    category: product.category,
    rating: numericRating,
    stock: product.stock || 0,
  };
}

export interface NormalizedProduct {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating?: number;
  stock?: number;
}

export function formatPrice(price: number): string {
  return price.toLocaleString("en-PK");
}

export function getDiscountPercentage(
  original: number,
  current: number,
): number {
  if (original <= 0) return 0;
  return Math.round(((original - current) / original) * 100);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
