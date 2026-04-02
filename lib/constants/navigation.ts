/**
 * Navigation configuration constants
 */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Easy Monthly Installments", href: "/emi" },
  { label: "Shop by Brands", href: "/brands" },
  { label: "Become a Vendor", href: "/vendor" },
] as const;

export const TOP_BAR_PHONE = "1-900-SMART-BUY";

export type NavLink = (typeof NAV_LINKS)[number];
