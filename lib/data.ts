// lib/data.ts

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export const heroSlides = [
  {
    id: 1,
    headline1: "Shop Computer",
    headline2: "& experience",
    body: "You Cannot Inspect Quality Into The Product; It Is Already There. I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.",
    cta: "View More",
    badge: "40% Off",
    bg: "#f0f0e8",
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=220&q=80",
    image2: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=220&q=80",
  },
  {
    id: 2,
    headline1: "Latest Smartphones",
    headline2: "& Gadgets",
    body: "Discover the best deals on smartphones, tablets, and the latest tech accessories at unbeatable prices.",
    cta: "View More",
    badge: "30% Off",
    bg: "#eaf0f5",
    image1: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=220&q=80",
    image2: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=220&q=80",
  },
  {
    id: 3,
    headline1: "Home Appliances",
    headline2: "Big Sale",
    body: "Save big on washing machines, refrigerators, air conditioners, and all major home appliances.",
    cta: "View More",
    badge: "50% Off",
    bg: "#f0f5ea",
    image1: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=220&q=80",
    image2: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=220&q=80",
  },
];

export const shopCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=280&q=80",
    slug: "electronics",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=280&q=80",
    slug: "fashion",
  },
  {
    id: 3,
    name: "Appliances",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=280&q=80",
    slug: "appliances",
  },
  {
    id: 4,
    name: "Babies Store",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=280&q=80",
    slug: "babies",
  },
  {
    id: 5,
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=280&q=80",
    slug: "groceries",
  },
];

const sampleProducts: Product[] = [
  {
    id: 1,
    brand: "Bin Bakar Electronics",
    name: "Samsung 40N5300 Smart LED TV",
    price: 56000,
    originalPrice: 60000,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&q=70",
    category: "tv",
  },
  {
    id: 2,
    brand: "Bin Bakar Electronics",
    name: "Samsung Automatic Washing Machine",
    price: 101000,
    originalPrice: 110000,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&q=70",
    category: "appliances",
  },
  {
    id: 3,
    brand: "Bin Bakar Electronics",
    name: "Haier HSU-12HFMAC Air Conditioner",
    price: 70000,
    originalPrice: 86000,
    image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
    category: "appliances",
  },
  {
    id: 4,
    brand: "Bin Bakar Electronics",
    name: "Anex Roti Maker AG-2019",
    price: 70000,
    originalPrice: 86000,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&q=70",
    category: "kitchen",
  },
  {
    id: 5,
    brand: "Bin Bakar Electronics",
    name: "Gree GS-12FITH Inverter AC",
    price: 86000,
    originalPrice: 96000,
    image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
    category: "appliances",
  },
  {
    id: 6,
    brand: "Bin Bakar Electronics",
    name: "Gree Air Conditioner 1.5 Ton",
    price: 171000,
    originalPrice: 190000,
    image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
    category: "appliances",
  },
];

export const newArrivals: Product[] = sampleProducts;

export const bestDealsCategories = [
  "KITCHEN APPLIANCES",
  "CONSOLES",
  "TV & VIDEOS",
  "CELL PHONES",
  "GROCERY",
];

export const bestDeals: { [key: string]: Product[] } = {
  "KITCHEN APPLIANCES": [
    ...sampleProducts,
    {
      id: 7,
      brand: "Bin Bakar Electronics",
      name: "Samsung 40N5300 Smart LED TV",
      price: 56000,
      originalPrice: 60000,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200&q=70",
      category: "tv",
    },
    {
      id: 8,
      brand: "Bin Bakar Electronics",
      name: "Samsung Automatic Washing Machine",
      price: 101000,
      originalPrice: 110000,
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200&q=70",
      category: "appliances",
    },
    {
      id: 9,
      brand: "Bin Bakar Electronics",
      name: "Haier HSU-12HFMAC Air Conditioner",
      price: 70000,
      originalPrice: 86000,
      image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
      category: "appliances",
    },
    {
      id: 10,
      brand: "Bin Bakar Electronics",
      name: "Anex Roti Maker AG-2019",
      price: 70000,
      originalPrice: 86000,
      image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&q=70",
      category: "kitchen",
    },
    {
      id: 11,
      brand: "Bin Bakar Electronics",
      name: "Gree GS-12FITH Inverter AC",
      price: 86000,
      originalPrice: 96000,
      image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
      category: "appliances",
    },
    {
      id: 12,
      brand: "Bin Bakar Electronics",
      name: "Gree Air Conditioner 1.5 Ton",
      price: 171000,
      originalPrice: 190000,
      image: "https://images.unsplash.com/photo-1631285271316-b0f7baeb1c2a?w=200&q=70",
      category: "appliances",
    },
  ],
  CONSOLES: [
    {
      id: 13,
      brand: "Sony",
      name: "PlayStation 5 Console",
      price: 150000,
      originalPrice: 175000,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&q=70",
      category: "consoles",
    },
    {
      id: 14,
      brand: "Microsoft",
      name: "Xbox Series X",
      price: 130000,
      originalPrice: 155000,
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=200&q=70",
      category: "consoles",
    },
    {
      id: 15,
      brand: "Nintendo",
      name: "Nintendo Switch OLED",
      price: 55000,
      originalPrice: 65000,
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=200&q=70",
      category: "consoles",
    },
    {
      id: 16,
      brand: "Sony",
      name: "PS5 DualSense Controller",
      price: 18000,
      originalPrice: 22000,
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=200&q=70",
      category: "consoles",
    },
    {
      id: 17,
      brand: "Razer",
      name: "Razer Kishi Mobile Controller",
      price: 12000,
      originalPrice: 15000,
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=200&q=70",
      category: "consoles",
    },
    {
      id: 18,
      brand: "Logitech",
      name: "Logitech G923 Racing Wheel",
      price: 45000,
      originalPrice: 55000,
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=200&q=70",
      category: "consoles",
    },
  ],
  "TV & VIDEOS": sampleProducts.slice(0, 6),
  "CELL PHONES": [
    {
      id: 19,
      brand: "Samsung",
      name: "Samsung Galaxy S24 Ultra",
      price: 295000,
      originalPrice: 320000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&q=70",
      category: "phones",
    },
    {
      id: 20,
      brand: "Apple",
      name: "Apple iPhone 15 Pro Max",
      price: 350000,
      originalPrice: 380000,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=70",
      category: "phones",
    },
    {
      id: 21,
      brand: "Xiaomi",
      name: "Xiaomi 14 Ultra 512GB",
      price: 180000,
      originalPrice: 210000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=70",
      category: "phones",
    },
    {
      id: 22,
      brand: "OnePlus",
      name: "OnePlus 12 Pro 256GB",
      price: 145000,
      originalPrice: 165000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=70",
      category: "phones",
    },
    {
      id: 23,
      brand: "Google",
      name: "Google Pixel 8 Pro",
      price: 220000,
      originalPrice: 250000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=70",
      category: "phones",
    },
    {
      id: 24,
      brand: "Oppo",
      name: "Oppo Find X7 Ultra",
      price: 170000,
      originalPrice: 195000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=70",
      category: "phones",
    },
  ],
  GROCERY: sampleProducts.slice(0, 6),
};

export const footerLinks = {
  Trending: [
    "Installments",
    "Electronics",
    "Grocery",
    "Health & Beauty",
    "Home Appliances",
    "Mobile Accessories",
  ],
  Information: [
    "About Us",
    "Contact Us",
    "FAQs",
    "Shipping & Return",
    "Privacy policy",
    "Terms & Conditions",
  ],
  "Customer Care": [
    "My Account",
    "Track Your Order",
    "Recently Viewed",
    "Wishlist",
    "Compare",
    "Become a Vendor",
  ],
};
