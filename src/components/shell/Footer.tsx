import Image from "next/image";
import Link from "next/link";

function Icon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

export function Footer() {
  return (
    <footer className="w-full bg-[#393939] text-white">
      <div className="site-shell py-10 lg:px-[106px] lg:py-[97px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[auto_auto_auto_auto] lg:gap-[71px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center">
              <Icon
                src="/figma/icons/node-0-475.svg"
                alt=""
                className="h-[44px] w-auto"
              />
            </div>
            <div className="text-[18px] leading-[0.9444444444] tracking-[0.0111111113em] text-[#00CAD7]">
              Got questions? Call us 24/7!
            </div>
            <div className="whitespace-pre-line text-[13px] leading-[1.3076923077] tracking-[0.0153846156em]">
              {"03 111 666 144\n0317 1777015."}
            </div>
            <div className="whitespace-pre-line text-[18px] leading-[0.9444444444] tracking-[0.0111111113em] text-[#00CAD7]">
              {"Contact info\ninfo@winstore.pk"}
            </div>
            <Icon
              src="/figma/icons/node-0-686.svg"
              alt=""
              className="h-[22px] w-auto"
            />
          </div>

          <div className="flex flex-col gap-[21px]">
            <div className="text-[20px] leading-[1.2260742188] text-[#00CAD7]">
              Trending
            </div>
            <div className="flex flex-col gap-3 text-[13px] leading-[1.2260742188] text-[#f5f5f5]">
              <Link href="/installments">Installments</Link>
              <Link href="/category/electronics">Electronics</Link>
              <Link href="/category/grocery">Grocery</Link>
              <Link href="/category/health-beauty">Health &amp; Beauty</Link>
              <Link href="/category/home-appliances">Home Appliances</Link>
              <Link href="/category/mobile-accessories">
                Mobile Accessories
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[21px]">
            <div className="text-[20px] leading-[1.2260742188] text-[#00CAD7]">
              Information
            </div>
            <div className="flex flex-col gap-3 text-[13px] leading-[1.2260742188] text-[#f5f5f5]">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/shipping-returns">Shipping &amp; Return</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[21px]">
            <div className="text-[20px] leading-[1.2260742188] text-[#00CAD7]">
              Customer Care
            </div>
            <div className="flex flex-col gap-3 text-[13px] leading-[1.2260742188] text-[#f5f5f5]">
              <Link href="/account">My Account</Link>
              <Link href="/track-order">Track your Order</Link>
              <Link href="/returns">Recently Viewed</Link>
              <Link href="/support">Wishlist</Link>
              <Link href="/wishlist">Compare</Link>
              <Link href="/specials">Become a Vendor</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-start gap-[11px] lg:justify-end">
          <Image
            src="/figma/node-0-524.png"
            alt="Visa"
            width={97}
            height={55}
            className="h-[55px] w-auto bg-white"
          />
          <Image
            src="/figma/node-0-527.png"
            alt="Mastercard"
            width={97}
            height={55}
            className="h-[55px] w-auto bg-white"
          />
          <Image
            src="/figma/node-0-530.png"
            alt="Cash on delivery"
            width={97}
            height={55}
            className="h-[55px] w-auto bg-white"
          />
          <Image
            src="/figma/node-0-533.png"
            alt="Easy installment plans"
            width={97}
            height={55}
            className="h-[55px] w-auto bg-white"
          />
        </div>
      </div>

      <div className="bg-[#161616]">
        <div className="site-shell py-5 text-center text-[14px] leading-[0.9444444444] tracking-[0.0111111113em] sm:text-left lg:px-[124px] lg:text-[18px]">
          Copyright 2021 Winstore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
