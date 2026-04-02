"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Phone,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Easy Monthly Installments", href: "/emi" },
  { label: "Shop by Brands", href: "/brands" },
  { label: "Become a Vendor", href: "/vendor" },
];

export default function Header() {
  const [cartCount] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <header>
      {/* ── Top Bar ── */}
      <div className="bg-[#222831] text-white py-2 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="no-underline" aria-label="WIN store home">
            <Image
              src="/images/figma/win-logo.svg"
              alt="WIN store"
              width={135}
              height={48}
              priority
            />
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="flex border border-gray-500 rounded overflow-hidden bg-white">
              <div className="flex items-center gap-1 px-3 bg-white border-r border-gray-300 cursor-pointer text-gray-600 text-sm whitespace-nowrap">
                All categories
                <ChevronDown size={12} />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products"
                className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none"
              />
              <button className="bg-[#00b4b4] px-4 hover:bg-[#009090] transition-colors">
                <Search size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right: call + icons */}
          <div className="flex items-center gap-5 text-sm">
            <div className="text-right">
              <div className="flex items-center gap-1 text-xs text-gray-300">
                <Phone size={11} /> Call Us Now
              </div>
              <div className="font-semibold text-sm">+011 5827918</div>
              <div className="text-xs text-[#00b4b4] cursor-pointer">
                Sign In
              </div>
            </div>

            <button className="flex flex-col items-center text-gray-300 hover:text-white">
              <User size={20} />
            </button>

            <button className="flex flex-col items-center text-gray-300 hover:text-white">
              <Heart size={20} />
            </button>

            <button className="relative flex items-center gap-1 text-gray-300 hover:text-white">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#00b4b4] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <span className="text-sm">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Nav Bar ── */}
      <div className="bg-[#2d3541] text-white py-0">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Left nav */}
          <div className="flex items-center">
            {/* Browse By Category */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#00b4b4] text-white font-semibold text-sm cursor-pointer hover:bg-[#009090] transition-colors">
              <Menu size={16} />
              <span>Browse By Category</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-gray-300 hover:text-[#00b4b4] text-sm transition-colors no-underline block"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pr-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-gray-400 hover:text-[#00b4b4] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
