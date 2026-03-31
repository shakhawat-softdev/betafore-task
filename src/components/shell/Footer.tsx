import Link from "next/link";

function Icon({ src, alt, className }: { src: string; alt: string; className: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

export function Footer() {
  return (
    <footer className="w-full bg-[#393939] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <Icon src="/figma/icons/node-0-475.svg" alt="" className="h-6 w-auto" />
              <span className="ml-1.5 text-lg font-normal">
                store
              </span>
            </div>
            <div className="text-sm">
              Got questions? Call us 24/7!
            </div>
            <div className="whitespace-pre-line text-sm">
              {"03 111 666 144\n0317 1777015."}
            </div>
            <div className="whitespace-pre-line text-sm">
              {"Contact info\ninfo@winstore.pk"}
            </div>
            <Icon src="/figma/icons/node-0-686.svg" alt="" className="h-14 w-14" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg text-[#00CAD7]">
              Trending
            </div>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/installments">Installments</Link>
              <Link href="/category/electronics">Electronics</Link>
              <Link href="/category/grocery">Grocery</Link>
              <Link href="/category/health-beauty">Health &amp; Beauty</Link>
              <Link href="/category/home-appliances">Home Appliances</Link>
              <Link href="/category/mobile-accessories">Mobile Accessories</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg text-[#00CAD7]">
              Information
            </div>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/shipping-returns">Shipping &amp; Return</Link>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg text-[#00CAD7]">
              Customer Care
            </div>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/account">My Account</Link>
              <Link href="/track-order">Track your Order</Link>
              <Link href="/returns">Returns / Exchange</Link>
              <Link href="/support">Customer Services</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/specials">Specials</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161616]">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-4 text-center text-sm sm:px-6 sm:text-left lg:px-8">
          Copyright 2021 Winstore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

