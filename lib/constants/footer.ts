/**
 * Footer configuration and links
 */

export const FOOTER_LINKS = {
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
} as const;

export const PAYMENT_METHODS = [
  {
    name: "VISA",
    src: "/images/figma/footer-visa.png",
    width: 50,
    height: 32,
  },
  {
    name: "MasterCard",
    src: "/images/figma/footer-mastercard.png",
    width: 50,
    height: 32,
  },
  {
    name: "CASH",
    src: "/images/figma/footer-cash.png",
    width: 50,
    height: 32,
  },
  {
    name: "Easy Install",
    src: "/images/figma/footer-easy-install.png",
    width: 50,
    height: 32,
  },
] as const;

export const COMPANY_INFO = {
  name: "WIN Store",
  phone: "1-900-SMART-BUY",
  email: "support@winstore.com",
  address: "123 E-Commerce Street, Tech City, TC 12345",
} as const;

export type FooterSection = keyof typeof FOOTER_LINKS;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
