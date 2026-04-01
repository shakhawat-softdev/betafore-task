import Image from "next/image";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
};

function CategoryCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <div className="relative h-[199px] w-[272px] shrink-0">
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="272px"
        className="object-cover"
      />
      <div className="absolute left-[-9px] top-[138px] flex h-[49px] w-[269px] items-center bg-[rgba(254,249,249,0.95)] px-[15px] shadow-[0px_1px_7px_0px_rgba(0,0,0,0.57)]">
        <div className="flex h-[48px] w-[224px] items-center">
          <div className="h-[58px] w-[136px] text-[20px] leading-[1.45] lg:text-[25px]">
            {title}
          </div>
          <div className="ml-auto flex h-[38px] w-[96px] items-center justify-center bg-[#E8F8FA]">
            <div className="text-[17px] leading-none text-[#14B1F0] lg:text-[21px]">
              Shop
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[240px] top-[151px] w-[18px] h-[18px] bg-black/0" />
    </div>
  );
}

export function CategoryStrip() {
  return (
    <section className="relative flex h-[231px] items-center justify-center gap-[14px] bg-[linear-gradient(180deg,rgba(243,237,201,1)_0%,rgba(255,255,255,0)_100%)] px-[2px]">
      <button
        type="button"
        aria-label="Previous categories"
        className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#d9d9d9] bg-white/75 lg:flex"
      >
        <span className="text-xl leading-none">&lsaquo;</span>
      </button>
      <div className="flex w-full gap-[20px] overflow-x-auto px-[8px] lg:w-[1262px] lg:gap-[33px] lg:px-[15px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <CategoryCard title="Electronics" imageSrc="/figma/node-0-28.png" />
        <CategoryCard title="Fashion" imageSrc="/figma/node-0-36.png" />
        <CategoryCard title="Appliances" imageSrc="/figma/node-0-44.png" />
        <CategoryCard title="Babies Store" imageSrc="/figma/node-0-52.png" />
      </div>
      <button
        type="button"
        aria-label="Next categories"
        className="hidden h-8 w-8 items-center justify-center rounded-full border border-[#d9d9d9] bg-white/75 lg:flex"
      >
        <span className="text-xl leading-none">&rsaquo;</span>
      </button>
      <div className="absolute bottom-[-8px] left-0 right-0 h-px bg-[#cfcfcf]" />
    </section>
  );
}
