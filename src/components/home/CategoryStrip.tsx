import Image from "next/image";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
};

function CategoryCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <div className="relative w-[272px] h-[199px] shrink-0">
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="272px"
        className="object-cover"
      />
      <div className="absolute left-[-9px] top-[138px] w-[269px] h-[49px] bg-[rgba(254,249,249,0.95)] shadow-[0px_1px_7px_0px_rgba(0,0,0,0.57)] flex items-center px-[15px]">
        <div className="flex items-center w-[224px] h-[48px]">
          <div className="w-[136px] h-[58px] font-normal text-[25px] leading-[2.12em]">
            {title}
          </div>
          <div className="ml-auto w-[96px] h-[38px] bg-[#0AAEB9] flex items-center justify-center">
            <div className="font-normal text-[21px] leading-[2.5238095238em] text-[#14B1F0]">
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
    <section className="w-[1400px] h-[231px] bg-[linear-gradient(180deg,rgba(243,237,201,1)_0%,rgba(255,255,255,0)_100%)] flex items-center justify-center gap-[46px] px-[2px]">
      <div className="flex flex-row gap-[33px] px-[15px] overflow-x-auto w-[1262px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <CategoryCard title="Electronics" imageSrc="/figma/node-0-28.png" />
        <CategoryCard title="Fashion" imageSrc="/figma/node-0-36.png" />
        <CategoryCard title="Appliances" imageSrc="/figma/node-0-44.png" />
        <CategoryCard title="Beauty" imageSrc="/figma/node-0-52.png" />
      </div>
    </section>
  );
}

