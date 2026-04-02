import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  const paymentItems = [
    {
      key: "VISA",
      src: "/images/figma/footer-visa.png",
      width: 90,
      height: 27,
      x: 2,
      y: 13,
    },
    {
      key: "MasterCard",
      src: "/images/figma/footer-mastercard.png",
      width: 85,
      height: 49,
      x: 7,
      y: 1,
    },
    {
      key: "CASH",
      src: "/images/figma/footer-cash.png",
      width: 93,
      height: 47,
      x: 0,
      y: 4,
    },
    {
      key: "Easy Install:",
      src: "/images/figma/footer-easy-install.png",
      width: 84,
      height: 59,
      x: 7,
      y: 0,
    },
  ];

  return (
    <footer className="bg-[#393939] text-white">
      <div className="mx-auto w-full max-w-[1403px] px-4 py-10 lg:px-[106px] lg:py-[97px]">
        <div className="flex flex-col gap-10 lg:items-end">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_auto_auto_auto] md:gap-16 lg:w-[1105px]">
            {/* Brand Column */}
            <div className="flex flex-col gap-[14px]">
              {/* Logo */}
              <div className="mb-3">
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
                  className="h-[22px] w-[149px]"
                />
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-[21px]">
                <h3 className="text-[20px] leading-[25px] text-[#00CAD7]">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] leading-[16px] text-white no-underline transition-opacity hover:opacity-80"
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
            {paymentItems.map((item) => (
              <div
                key={item.key}
                className="relative h-[55px] w-[97px] overflow-hidden rounded-[5px] bg-white"
                aria-label={item.key}
                title={item.key}
              >
                <Image
                  src={item.src}
                  alt={item.key}
                  width={item.width}
                  height={item.height}
                  className="absolute"
                  style={{ left: item.x, top: item.y }}
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
