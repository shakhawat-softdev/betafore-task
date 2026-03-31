"use server";

const API_BASE = "https://mm-assesment-server.vercel.app/api/v1";

// Types
export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  rating: number | { rate: number; count?: number };
  stock?: number;
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy?: string;
  category: string;
  brand?: string;
  thumbnail?: string;
  image?: string;
  images?: string[];
}

export interface Category {
  id?: string;
  name: string;
  slug?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ProductsResponse extends Array<Product> {}

// Fetch all products
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const body: ApiResponse<Product[]> = await response.json();
    return body.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
}

// Fetch categories
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE}/products/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const body: ApiResponse<Category[]> = await response.json();
    return body.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Failed to fetch categories");
  }
}

// Fetch products by category
export async function fetchProductsByCategory(
  category: string,
): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API_BASE}/products/category/${encodeURIComponent(category)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const body: ApiResponse<Product[]> = await response.json();
    return body.data;
  } catch (error) {
    console.error(`Failed to fetch products for category ${category}:`, error);
    throw new Error(`Failed to fetch products for ${category}`);
  }
}

// Fetch single product by ID
export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const body: ApiResponse<Product> = await response.json();
    return body.data;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    throw new Error("Failed to fetch product");
  }
}
