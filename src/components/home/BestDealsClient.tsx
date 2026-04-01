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
  return (
    <Image
      src="/figma/icons/node-0-272.svg"
      alt=""
      width={44}
      height={14}
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
          className={
            p.imageFit === "contain" ? "object-contain" : "object-cover"
          }
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
    <div className="flex w-full flex-col gap-[18px] lg:w-[1219px] lg:gap-[25px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:h-[287px] lg:items-center lg:justify-center lg:gap-[31px]">
        {row1.map((p) => (
          <BestDealCard key={p.id} {...p} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:h-[287px] lg:items-center lg:justify-center lg:gap-[31px]">
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
    <section>
      <div className="flex flex-col gap-4 lg:h-[59px] lg:flex-row lg:items-center">
        <div className="h-[35px] w-[380px] text-[26px] leading-[1.171875em] lg:text-[28px]">
          <span className="text-[#00CAD7]">Best</span>
          <span className="text-[#1c1c1c]"> Deals</span>
        </div>

        <div className="flex h-[59px] w-full items-center gap-[11px] overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] lg:ml-auto lg:w-[837px]">
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
                    "font-roboto flex h-[35px] items-center text-[19px] leading-[2.7894736842em] uppercase",
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

        <div className="ml-[12px] hidden lg:block">
          <ArrowIcon />
        </div>
      </div>

      <div className="mt-[24px] flex justify-center lg:mt-[54px]">
        <BestDealsProductsGrid products={products} />
      </div>
    </section>
  );
}
