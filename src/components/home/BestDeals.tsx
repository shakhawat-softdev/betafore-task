import { BestDealsClient, type DealProduct, type DealTab } from "./BestDealsClient";

const tabs: DealTab[] = [
  { label: "Kitchen Appliances", widthPx: 216 },
  { label: "Consoles", widthPx: 126 },
  { label: "TV & Videos", widthPx: 129 },
  { label: "Cell Phones", widthPx: 150 },
  { label: "Grocery", widthPx: 104 },
];

const baseProducts: DealProduct[] = [
  {
    id: "bd1",
    vendor: "Bin Bakar Electronics",
    title: "Samsung 40N5300 S..",
    oldPrice: "RS 60.000",
    price: "RS 56.000",
    imageSrc: "/figma/node-0-100.png",
    imageFit: "cover",
    imageBox: { w: 158, h: 129 },
  },
  {
    id: "bd2",
    vendor: "Bin Bakar Electronics",
    title: "Samsung Automatic..",
    oldPrice: "RS 110.000",
    price: "RS101.000",
    imageSrc: "/figma/node-0-110.png",
    imageFit: "contain",
    imageBox: { w: 158, h: 129 },
  },
  {
    id: "bd3",
    vendor: "Bin Bakar Electronics",
    title: "Haier HSU-12HFMAC ..",
    oldPrice: "RS 56.000",
    price: "RS 70.000",
    imageSrc: "/figma/node-0-120.png",
    imageFit: "cover",
    imageBox: { w: 156, h: 129 },
  },
  {
    id: "bd4",
    vendor: "Bin Bakar Electronics",
    title: "Anex Roti Maker ..",
    oldPrice: "RS 56.000",
    price: "RS 70.000",
    imageSrc: "/figma/node-0-130.png",
    imageFit: "cover",
    imageBox: { w: 158, h: 129 },
  },
  {
    id: "bd5",
    vendor: "Bin Bakar Electronics",
    title: "Gree GS-12FITH..",
    oldPrice: "RS 56.000",
    price: "RS 86.000",
    imageSrc: "/figma/node-0-140.png",
    imageFit: "cover",
    imageBox: { w: 158, h: 129 },
  },
  {
    id: "bd6",
    vendor: "Bin Bakar Electronics",
    title: "Gree Air Conditioner..",
    oldPrice: "RS 56.000",
    price: "RS 171.000",
    imageSrc: "/figma/node-0-151.png",
    imageFit: "cover",
    imageBox: { w: 158, h: 129 },
  },
];

export function BestDeals() {
  const productsByTab: Record<string, DealProduct[]> = {
    "Kitchen Appliances": [
      ...baseProducts,
      ...baseProducts.map((p) => ({ ...p, id: `${p.id}-r2` })),
    ],
    Consoles: [
      ...baseProducts,
      ...baseProducts.map((p) => ({ ...p, id: `${p.id}-r2c` })),
    ],
    "TV & Videos": [
      ...baseProducts,
      ...baseProducts.map((p) => ({ ...p, id: `${p.id}-r2t` })),
    ],
    "Cell Phones": [
      ...baseProducts,
      ...baseProducts.map((p) => ({ ...p, id: `${p.id}-r2p` })),
    ],
    Grocery: [
      ...baseProducts,
      ...baseProducts.map((p) => ({ ...p, id: `${p.id}-r2g` })),
    ],
  };

  return (
    <BestDealsClient
      tabs={tabs}
      productsByTab={productsByTab}
      initialTab="Kitchen Appliances"
    />
  );
}

