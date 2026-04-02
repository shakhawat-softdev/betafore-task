/**
 * Footer Component
 * Contains brand info, links, payment methods, and copyright
 */

import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, PAYMENT_METHODS } from "@/lib/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-[#393939] text-white">
      <div className="mx-auto w-full max-w-[1403px] px-4 py-10 lg:px-[106px] lg:py-[97px]">
        <div className="flex flex-col gap-10 lg:items-end">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_auto_auto_auto] md:gap-16 lg:w-[1105px]">
            {/* Brand Column */}
            <div className="flex flex-col gap-[14px]">
              {/* Logo */}
              <div className="mb-3 transition-transform duration-200 hover:scale-[1.02]">
                <Image
                  src="/images/figma/win-logo.svg"
                  alt="WIN store"
                  width={133}
                  height={48}
                />
              </div>

              <p className="text-[18px] leading-[17px] tracking-[0.011em] text-white">
                Got questions? Call us 24/7!
              </p>
              <p className="whitespace-pre-line text-[13px] leading-[17px] tracking-[0.015em] text-white">
                {"03 111 666 144\n0317 1777015."}
              </p>

              <p className="whitespace-pre-line text-[18px] leading-[17px] tracking-[0.011em] text-white">
                {"Contact info\ninfo@winstore.pk"}
              </p>

              {/* Social */}
              <div className="mt-1">
                <Image
                  src="/images/figma/nav-right-icon.svg"
                  alt="Social links"
                  width={149}
                  height={22}
                  className="h-[22px] w-[149px] transition-opacity duration-200 hover:opacity-80"
                />
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-[21px]">
                <h3 className="text-[20px] leading-[25px] text-[#00CAD7]">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] leading-[16px] text-white no-underline transition-colors duration-200 hover:text-[#7DE9F0]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex w-full flex-wrap items-center gap-[11px] lg:w-auto lg:flex-nowrap lg:justify-end lg:self-end">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.name}
                className="relative h-[55px] w-[97px] overflow-hidden rounded-[5px] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
                aria-label={method.name}
                title={method.name}
              >
                <Image
                  src={method.src}
                  alt={method.name}
                  width={method.width}
                  height={method.height}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="h-[60px] bg-[#161616]">
        <div className="relative mx-auto h-full w-full max-w-[1404px]">
          <p className="absolute left-1/2 top-[21px] w-[322px] -translate-x-1/2 text-center text-[18px] leading-[17px] tracking-[0.011em] text-white md:left-[124px] md:translate-x-0">
            © 2021 Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
