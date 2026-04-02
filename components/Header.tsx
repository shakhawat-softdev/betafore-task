"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Phone } from "lucide-react";

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
      <div className="bg-[#03484D] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-4 xl:h-[68px] xl:flex-row xl:items-center xl:gap-[41px] xl:px-[61px] xl:py-0">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 no-underline transition-transform duration-200 hover:scale-[1.02]"
            aria-label="WIN store home"
          >
            <Image
              src="/images/figma/win-logo.svg"
              alt="WIN store"
              width={135}
              height={48}
              priority
              className="h-auto w-[132.5px] xl:w-[132.5px]"
            />
          </Link>

          {/* Search */}
          <div className="w-full max-w-[534px] xl:w-[534px] xl:flex-none">
            <div className="flex h-[39px] w-full overflow-hidden rounded-[6px] bg-white">
              <button
                type="button"
                className="group flex h-full w-[157px] items-center justify-between border-r border-[#AEAEAE] px-[17.5px] text-left text-[13px] leading-[16px] text-[#ABA3A3] transition-colors duration-200 hover:bg-gray-50"
                aria-label="All categories"
              >
                <span>All categories</span>
                <Image
                  src="/images/figma/topbar-chevron-down.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-y-[1px]"
                />
              </button>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products"
                className="h-full flex-1 px-[18px] text-[13px] leading-[16px] text-[#ABA3A3] outline-none placeholder:text-[#ABA3A3] transition-colors duration-200 focus:text-[#5F5F5F]"
              />
              <button
                type="button"
                className="h-full w-[43px] shrink-0 overflow-hidden rounded-r-[6px] transition duration-200 hover:brightness-95 active:scale-[0.98]"
                aria-label="Search"
              >
                <Image
                  src="/images/figma/topbar-search-button.svg"
                  alt=""
                  width={43}
                  height={38}
                  aria-hidden="true"
                  className="h-full w-full"
                />
              </button>
            </div>
          </div>

          {/* Right: call + icons */}
          <div className="flex w-full items-center justify-between gap-4 text-sm xl:ml-auto xl:w-auto xl:justify-end xl:gap-5">
            <div className="text-right">
              <div className="flex items-center gap-1 text-[13px] leading-none text-white xl:text-xs xl:text-[#E6E6E6]">
                <Phone size={11} />
                <span>Call Us Now</span>
              </div>
              <div className="text-[19px] leading-none font-normal text-white">
                +011 5827918
              </div>
              <button className="text-[13px] leading-none text-[#00CAD7] transition-colors duration-200 hover:text-[#3DE2EC] hover:underline">
                Sign In
              </button>
            </div>

            <button className="flex flex-col items-center text-white transition-all duration-200 hover:-translate-y-0.5 hover:text-white/90">
              <User size={20} />
            </button>

            <button className="flex flex-col items-center text-white transition-all duration-200 hover:-translate-y-0.5 hover:text-white/90">
              <Heart size={20} />
            </button>

            <button className="relative flex items-center gap-1 text-white transition-all duration-200 hover:-translate-y-0.5 hover:text-white/90">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-[#00b4b4] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <span className="text-[19px] leading-none">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Nav Bar ── */}
      <div className="bg-[#0E3B3E] text-white shadow-[0px_4px_9px_0px_rgba(0,0,0,0.39)]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-3 lg:h-[49px] lg:flex-row lg:items-center lg:justify-between lg:px-[51px] lg:py-0">
          {/* Left nav */}
          <div className="flex w-full items-center gap-3 overflow-x-auto lg:w-auto lg:gap-[36px] lg:overflow-visible lg:p-[5px]">
            <button className="flex h-[31px] w-[179px] shrink-0 items-center gap-3 rounded-[8px] px-[7px] py-[7px] text-[#FFFFFF] transition-colors duration-200 ">
              <Image
                src="/images/figma/nav-browse-icon.svg"
                alt=""
                width={14}
                height={13}
                aria-hidden="true"
                className="h-[12.27px] w-[13.24px] shrink-0"
              />
              <span className="whitespace-nowrap text-[17px] leading-[22px] text-[#FFFFFF]">
                Brouse By Category
              </span>
            </button>

            <nav className="flex items-center gap-6 lg:gap-[36px]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-[13px] leading-[16px] text-[#FFFFFF] no-underline transition-colors duration-200 hover:text-[#7DE9F0]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right icons */}
          <div className="flex shrink-0 items-center justify-end lg:w-[149px] lg:pr-0">
            <Image
              src="/images/figma/nav-right-icon.svg"
              alt=""
              width={149}
              height={22}
              aria-hidden="true"
              className="h-[22px] w-[149px] transition-opacity duration-200 hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
