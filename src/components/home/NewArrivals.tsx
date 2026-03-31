import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";

type Product = {
  id: string;
  vendor: string;
  title: string;
  oldPrice: string;
  price: string;
  imageSrc: string;
};

const products: Product[] = [
  {
    id: "p1",
    vendor: "Bin Bakar Electronics",
    title: "Samsung 40N5300 S..",
    oldPrice: "RS 60.000",
    price: "RS 56.000",
    imageSrc: "/figma/node-0-100.png",
  },
  {
    id: "p2",
    vendor: "Bin Bakar Electronics",
    title: "Samsung Automatic..",
    oldPrice: "RS 110.000",
    price: "RS101.000",
    imageSrc: "/figma/node-0-110.png",
  },
  {
    id: "p3",
    vendor: "Bin Bakar Electronics",
    title: "Haier HSU-12HFMAC ..",
    oldPrice: "RS 56.000",
    price: "RS 70.000",
    imageSrc: "/figma/node-0-120.png",
  },
  {
    id: "p4",
    vendor: "Bin Bakar Electronics",
    title: "Anex Roti Maker ..",
    oldPrice: "RS 56.000",
    price: "RS 70.000",
    imageSrc: "/figma/node-0-130.png",
  },
  {
    id: "p5",
    vendor: "Bin Bakar Electronics",
    title: "Gree GS-12FITH..",
    oldPrice: "RS 56.000",
    price: "RS 86.000",
    imageSrc: "/figma/node-0-140.png",
  },
  {
    id: "p6",
    vendor: "Bin Bakar Electronics",
    title: "Gree Air Conditioner..",
    oldPrice: "RS 56.000",
    price: "RS 171.000",
    imageSrc: "/figma/node-0-151.png",
  },
];

function ProductCard(p: Product) {
  return (
    <div className="w-[203px] shrink-0 border border-[rgba(20,177,240,0.35)] bg-white">
      <div className="px-[10px] pt-[10px]">
        <div className="font-normal text-[14px] leading-[1.2260742188em] text-black">
          {p.vendor}
        </div>
        <div className="mt-[4px] font-normal text-[14px] leading-[1.2260742188em] text-[rgba(0,0,0,0.6)]">
          {p.title}
        </div>
      </div>

      <div className="relative mx-auto mt-[8px] w-[180px] h-[180px]">
        <Image
          src={p.imageSrc}
          alt=""
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>

      <div className="mt-[10px] flex items-center gap-[10px] px-[10px]">
        <div className="font-normal text-[14px] leading-[1.2260742188em] text-[rgba(0,0,0,0.6)] line-through">
          {p.oldPrice}
        </div>
        <div className="font-normal text-[14px] leading-[1.2260742188em] text-[#0AAEB9]">
          {p.price}
        </div>
      </div>

      <div className="px-[10px] pb-[10px] pt-[10px]">
        <AddToCartButton
          productId={p.id}
          className="w-full h-[33px] bg-[#14B1F0] text-white text-[14px] leading-[1.2260742188em]"
        >
          Add to cart
        </AddToCartButton>
      </div>
    </div>
  );
}

export function NewArrivals() {
  return (
    <section className="w-[1400px]">
      <div className="pt-[18px]">
        <div className="w-[1400px] h-[53px] flex items-center justify-center">
          <div className="font-normal text-[40px] leading-[1.2260742188em] text-[#0E3B3E]">
            New&nbsp;&nbsp;Arrivals
          </div>
        </div>
      </div>

      <div className="mt-[18px] flex items-start justify-center">
        <div className="flex flex-row gap-[18px] w-[1262px] overflow-x-auto px-[6px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

