/**
 * API response validators using type guards
 * Ensures API responses conform to expected types
 */

import { ApiEnvelope, Category, Product, ProductRating } from "@/lib/types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isProductRating(value: unknown): value is ProductRating {
  if (!isRecord(value)) {
    return false;
  }

  return typeof value.rate === "number" && typeof value.count === "number";
}

function isProduct(value: unknown): value is Product {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "number" &&
    typeof value.title === "string" &&
    typeof value.price === "number" &&
    typeof value.description === "string" &&
    typeof value.category === "string" &&
    typeof value.image === "string" &&
    isProductRating(value.rating)
  );
}

function isCategory(value: unknown): value is Category {
  if (!isRecord(value)) {
    return false;
  }

  return typeof value.id === "number" && typeof value.name === "string";
}

/**
 * Type guard for categories API envelope
 */
export function isCategoriesEnvelope(
  value: unknown,
): value is ApiEnvelope<Category[]> {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.success === "boolean" &&
    typeof value.message === "string" &&
    Array.isArray(value.data) &&
    value.data.every(isCategory)
  );
}

/**
 * Type guard for products array API envelope
 */
export function isProductsEnvelope(
  value: unknown,
): value is ApiEnvelope<Product[]> {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.success === "boolean" &&
    typeof value.message === "string" &&
    Array.isArray(value.data) &&
    value.data.every(isProduct)
  );
}

/**
 * Type guard for single product API envelope
 */
export function isProductEnvelope(
  value: unknown,
): value is ApiEnvelope<Product> {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.success === "boolean" &&
    typeof value.message === "string" &&
    isProduct(value.data)
  );
}
