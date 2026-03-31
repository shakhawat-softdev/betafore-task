"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { NormalizedProduct, normalizeProduct } from "@/lib/utils";

const API_BASE = "https://mm-assesment-server.vercel.app/api/v1";

interface Category {
  id: number;
  name: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  rating: number | { rate: number; count?: number };
  stock?: number;
  category: string;
  brand?: string;
  image?: string;
  thumbnail?: string;
  images?: string[];
}

export default function BestDeals() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState("");
  const [products, setProducts] = useState<NormalizedProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const response = await fetch(`${API_BASE}/products/categories`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const body: ApiResponse<Category[]> = await response.json();
        if (isMounted) {
          const apiCategories = body.data || [];
          setCategories(apiCategories);
          if (apiCategories.length > 0) {
            setActiveTab(apiCategories[0].name);
          }
        }
      } catch (error) {
        console.error("Failed to load best-deal categories:", error);
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!activeTab) {
      return;
    }

    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_BASE}/products/category/${encodeURIComponent(activeTab)}`,
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const body: ApiResponse<ApiProduct[]> = await response.json();
        if (isMounted) {
          setProducts(body.data.map(normalizeProduct));
        }
      } catch (error) {
        console.error("Failed to load best deals:", error);
        if (isMounted) {
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const row1 = products.slice(0, 6);
  const row2 = products.slice(6, 12);

  return (
    <section className="max-w-[1200px] mx-auto px-4 pb-10">
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-5 pb-0 overflow-x-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 pb-3 pr-6 border-b-0 whitespace-nowrap">
          <span className="text-[#00b4b4]">Best</span> <span>Deals</span>
        </h2>

        <div className="flex items-center gap-0 flex-1 overflow-x-auto">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                activeTab === tab.name
                  ? "text-[#00b4b4] border-b-2 border-[#00b4b4]"
                  : "text-gray-600 hover:text-[#00b4b4] border-b-2 border-transparent"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Scroll arrows */}
        <div className="flex items-center gap-1 pb-2 ml-2 flex-shrink-0">
          <button className="border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="border border-gray-300 p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading deals...</div>
      ) : (
        <>
          {/* Row 1 */}
          {row1.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-3">
              {row1.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Row 2 */}
          {row2.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {row2.map((product) => (
                <ProductCard key={`r2-${product.id}`} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
