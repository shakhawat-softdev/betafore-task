"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AddToCartButton } from "@/components/home/AddToCartButton";

export type DealTab = {
  label: string;
  widthPx: number;
};

export type DealProduct = {
  id: string;
  vendor: string;
  title: string;
  oldPrice: string;
  price: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
  imageBox: { w: number; h: number };
};

function ArrowIcon() {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/figma/icons/node-0-272.svg"
      alt=""
      className="w-[44px] h-[14px]"
    />
  );
}

function BestDealCard(p: DealProduct) {
  return (
    <div className="shrink-0 border border-[rgba(0,0,0,0.13)] bg-white px-[14px] py-[14px] flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[11px]">
        <div className="font-normal text-[12px] leading-[1.2260742188em] text-black">
          {p.vendor}
        </div>
        <div className="font-normal text-[15px] leading-[1.2260742188em] text-[#034E53]">
          {p.title}
        </div>
      </div>

      <div
        className="relative mx-auto"
        style={{ width: `${p.imageBox.w}px`, height: `${p.imageBox.h}px` }}
      >
        <Image
          src={p.imageSrc}
          alt=""
          fill
          sizes={`${p.imageBox.w}px`}
          className={p.imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>

      <div className="flex items-end gap-[8px]">
        <div className="font-normal text-[13px] leading-[1.2260742188em] text-[#697475] line-through">
          {p.oldPrice}
        </div>
        <div className="font-normal text-[15px] leading-[1.2260742188em] text-[#0AAEB9]">
          {p.price}
        </div>
      </div>

      <AddToCartButton
        productId={p.id}
        className="w-[158px] h-[35px] bg-[#15ADB7] text-white font-normal text-[15px] leading-[1.2260742188em] self-center"
      >
        Add to cart
      </AddToCartButton>
    </div>
  );
}

function BestDealsProductsGrid({ products }: { products: DealProduct[] }) {
  const row1 = products.slice(0, 6);
  const row2 = products.slice(6, 12);

  return (
    <div className="w-[1219px] flex flex-col gap-[25px]">
      <div className="w-[1219px] h-[287px] flex items-center justify-center gap-[31px]">
        {row1.map((p) => (
          <BestDealCard key={p.id} {...p} />
        ))}
      </div>
      <div className="w-[1219px] h-[287px] flex items-center justify-center gap-[31px]">
        {row2.map((p) => (
          <BestDealCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export function BestDealsClient({
  tabs,
  productsByTab,
  initialTab,
}: {
  tabs: DealTab[];
  productsByTab: Record<string, DealProduct[]>;
  initialTab: string;
}) {
  const [active, setActive] = useState<string>(initialTab);

  const products = useMemo(() => {
    const list = productsByTab[active] ?? [];
    // Ensure Figma layout: always 12 cards (2 rows x 6).
    if (list.length >= 12) return list.slice(0, 12);
    const padded = [...list];
    while (padded.length < 12) {
      const src = list[padded.length % Math.max(list.length, 1)];
      padded.push(
        src
          ? { ...src, id: `${src.id}-dup-${padded.length}` }
          : {
              id: `placeholder-${padded.length}`,
              vendor: "Bin Bakar Electronics",
              title: "—",
              oldPrice: "RS 0.000",
              price: "RS 0.000",
              imageSrc: "/figma/node-0-100.png",
              imageFit: "cover",
              imageBox: { w: 158, h: 129 },
            },
      );
    }
    return padded;
  }, [active, productsByTab]);

  return (
    <section className="w-[1242px]">
      <div className="w-[1242px] h-[59px] flex items-center">
        <div className="w-[380px] h-[35px] font-normal text-[28px] leading-[1.171875em] text-[#00CAD7]">
          Best Deals
        </div>

        <div className="ml-auto w-[837px] h-[59px] flex items-center gap-[11px]">
          {tabs.map((t) => {
            const isActive = t.label === active;
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(t.label)}
                className="flex flex-col gap-[11px] h-[35px] text-left"
                style={{ width: `${t.widthPx}px` }}
              >
                <div
                  className={[
                    "h-[35px] font-normal text-[19px] leading-[2.7894736842em] uppercase flex items-center",
                    isActive ? "text-[#00CAD7]" : "text-black",
                  ].join(" ")}
                >
                  {t.label}
                </div>
                {isActive ? (
                  <div className="w-[203px] h-0 border-t-[3px] border-[#0AAEB9]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="ml-[12px]">
          <ArrowIcon />
        </div>
      </div>

      <div className="mt-[78px] flex justify-center">
        <BestDealsProductsGrid products={products} />
      </div>
    </section>
  );
}

