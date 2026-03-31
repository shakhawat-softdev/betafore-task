"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

interface DisplayCategory {
  id: number;
  name: string;
  image: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const API_BASE = "https://mm-assesment-server.vercel.app/api/v1";

const categoryImageMap: Record<string, string> = {
  electronics:
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=280&q=80",
  jewelery:
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=280&q=80",
  "men's clothing":
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=280&q=80",
  "women's clothing":
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=280&q=80",
};

const fallbackCategoryImage =
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=280&q=80";

export default function ShopByCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/products/categories`);

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const body: ApiResponse<Category[]> = await response.json();
        if (isMounted) {
          setCategories(body.data || []);
        }
      } catch (error) {
        console.error("Failed to load categories:", error);
        if (isMounted) {
          setCategories([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  const shopCategories = useMemo<DisplayCategory[]>(
    () =>
      categories.map((category, index) => ({
        id: category.id ?? index + 1,
        name: category.name,
        image: categoryImageMap[category.name] || fallbackCategoryImage,
      })),
    [categories],
  );

  useEffect(() => {
    setStartIndex(0);
  }, [shopCategories.length]);

  const prev = () => setStartIndex((p) => Math.max(0, p - 1));
  const next = () =>
    setStartIndex((p) => Math.min(shopCategories.length - visible, p + 1));

  const visibleCats = shopCategories.slice(startIndex, startIndex + visible);

  if (loading) {
    return (
      <div className="bg-white border-t border-gray-200 py-1">
        <div className="max-w-[1200px] mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          Loading categories...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-t border-gray-200 py-1">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center gap-2">
        {/* Prev Arrow */}
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
          aria-label="Previous categories"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        {/* Category Cards */}
        <div className="flex-1 grid grid-cols-4 gap-3 py-3">
          {visibleCats.map((cat) => (
            <div
              key={cat.id}
              className="relative overflow-hidden rounded cursor-pointer group"
              style={{ height: 180 }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm drop-shadow">
                  {cat.name}
                </span>
                <Link
                  href={`/category/${encodeURIComponent(cat.name)}`}
                  className="text-[#00b4b4] text-sm font-semibold hover:underline"
                >
                  Shop
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={next}
          disabled={startIndex >= shopCategories.length - visible}
          className="flex-shrink-0 border border-gray-300 rounded p-2 hover:bg-gray-100 disabled:opacity-30 transition-colors"
          aria-label="Next categories"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
