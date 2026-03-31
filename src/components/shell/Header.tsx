import Link from "next/link";
import { searchProducts } from "@/actions/search";

function Icon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  // Using <img> for SVGs exported from Figma.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

export function Header() {
  return (
    <header className="w-full bg-[#03484D] text-white">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <Link href="/" className="flex items-center">
            <Icon src="/figma/icons/node-0-475.svg" alt="" className="h-6 w-auto" />
            <span className="ml-1.5 text-lg font-normal">
            store
          </span>
        </Link>

          <form
            action={searchProducts}
            className="relative h-10 w-full lg:max-w-[560px]"
          >
            <input
              name="q"
              placeholder="Search for products"
              className="h-full w-full rounded-md bg-white pl-[158px] pr-12 text-sm text-black placeholder:text-[#ABA3A3]"
            />
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#ABA3A3]">
              All categories
            </div>
            <div className="pointer-events-none absolute left-[122px] top-1/2 h-6 w-px -translate-y-1/2 bg-[#AEAEAE]" />
            <Icon
              src="/figma/icons/chevron-down.svg"
              alt=""
              className="pointer-events-none absolute left-[97px] top-1/2 h-5 w-5 -translate-y-1/2"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-r-md bg-[#B6B6B6]"
            >
              <Icon src="/figma/icons/search.svg" alt="Search" className="h-5 w-5" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:flex sm:items-center sm:gap-5 lg:ml-auto">
            <div className="col-span-2 flex flex-col gap-1 text-xs sm:col-span-1">
              <div>Call Us Now</div>
              <div className="flex items-center gap-2 text-sm">
                <Icon src="/figma/icons/headphones.svg" alt="" className="h-4 w-4" />
                <div>+011 5827918</div>
              </div>
              <Link href="/signin" className="text-sm">
                Sign In
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <Icon src="/figma/icons/user.svg" alt="User" className="h-5 w-5" />
              <Icon src="/figma/icons/heart.svg" alt="Wishlist" className="h-5 w-5" />

              <Link href="/cart" className="flex items-center gap-1.5">
                <div className="relative flex h-8 w-6 items-center justify-center">
                  <div className="absolute right-0 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#FDDE3B]">
                    <span className="text-[10px] leading-none text-black">3</span>
                  </div>
                  <Icon
                    src="/figma/icons/shopping-cart.svg"
                    alt="Cart"
                    className="h-5 w-5"
                  />
                </div>
                <span className="text-sm">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E3B3E] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.39)]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-2">
          <button
            type="button"
            className="flex h-9 w-fit items-center gap-2 rounded-md px-2 py-1"
          >
            <Icon src="/figma/icons/browse.svg" alt="" className="h-3.5 w-3.5" />
            <span className="text-sm sm:text-base">
              Brouse By Category
            </span>
          </button>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm lg:gap-x-8">
            <Link href="/">Home</Link>
            <Link href="/installments">Easy Monthly Installments</Link>
            <Link href="/brands">Shop by Brands</Link>
            <Link href="/vendor">Become a Vendor</Link>
          </nav>

          <Icon src="/figma/icons/node-0-686.svg" alt="" className="ml-auto hidden h-14 w-14 lg:block" />
        </div>
      </div>
    </header>
  );
}

