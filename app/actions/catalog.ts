"use server";

import { ActionResult, Category, Product } from "@/lib/types";
import {
  isCategoriesEnvelope,
  isProductEnvelope,
  isProductsEnvelope,
} from "@/lib/api/validators";
import { API_BASE_URL } from "@/lib/env";

async function fetchAndValidate<T>(params: {
  endpoint: string;
  revalidate: number;
  tags: string[];
  validate: (value: unknown) => value is { data: T };
  errorContext: string;
}): Promise<ActionResult<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${params.endpoint}`, {
      method: "GET",
      next: {
        revalidate: params.revalidate,
        tags: params.tags,
      },
    });

    if (!response.ok) {
      return {
        ok: false,
        error: `Failed to fetch ${params.errorContext}: ${response.status}`,
      };
    }

    const json: unknown = await response.json();

    if (!params.validate(json)) {
      return {
        ok: false,
        error: `Invalid API response format for ${params.errorContext}.`,
      };
    }

    return { ok: true, data: json.data };
  } catch {
    return {
      ok: false,
      error: `Unexpected error while loading ${params.errorContext}.`,
    };
  }
}

export async function getCategoriesAction(): Promise<ActionResult<Category[]>> {
  return fetchAndValidate({
    endpoint: "/products/categories",
    revalidate: 3600,
    tags: ["categories"],
    validate: isCategoriesEnvelope,
    errorContext: "categories",
  });
}

export async function getAllProductsAction(): Promise<ActionResult<Product[]>> {
  return fetchAndValidate({
    endpoint: "/products",
    revalidate: 300,
    tags: ["products"],
    validate: isProductsEnvelope,
    errorContext: "products",
  });
}

export async function getProductsByCategoryAction(
  category: string,
): Promise<ActionResult<Product[]>> {
  return fetchAndValidate({
    endpoint: `/products/category/${encodeURIComponent(category)}`,
    revalidate: 300,
    tags: [`products:category:${category}`],
    validate: isProductsEnvelope,
    errorContext: `products for category ${category}`,
  });
}

export async function getProductByIdAction(
  productId: number,
): Promise<ActionResult<Product>> {
  return fetchAndValidate({
    endpoint: `/products/${productId}`,
    revalidate: 300,
    tags: [`product:${productId}`],
    validate: isProductEnvelope,
    errorContext: `product ${productId}`,
  });
}

export async function getHomePageDataAction(): Promise<
  ActionResult<{
    categories: Category[];
    allProducts: Product[];
    categoryProducts: Record<string, Product[]>;
  }>
> {
  const [categoriesResult, allProductsResult] = await Promise.all([
    getCategoriesAction(),
    getAllProductsAction(),
  ]);

  if (!categoriesResult.ok) {
    return categoriesResult;
  }

  if (!allProductsResult.ok) {
    return allProductsResult;
  }

  const categoryPairs = await Promise.all(
    categoriesResult.data.map(async (category) => {
      const productsResult = await getProductsByCategoryAction(category.name);
      return [
        category.name,
        productsResult.ok ? productsResult.data : [],
      ] as const;
    }),
  );

  return {
    ok: true,
    data: {
      categories: categoriesResult.data,
      allProducts: allProductsResult.data,
      categoryProducts: Object.fromEntries(categoryPairs),
    },
  };
}
