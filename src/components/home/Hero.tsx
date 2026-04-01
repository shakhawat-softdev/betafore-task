import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[240px] overflow-hidden sm:h-[280px] lg:h-[318px]">
      <Image
        src="/figma/node-0-13.png"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-x-0 -top-2 h-[260px] sm:h-[300px] lg:-top-[13px] lg:h-[344px]">
        <Image
          src="/figma/node-0-15.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-start justify-between px-5 pt-5 sm:px-8 sm:pt-7 lg:px-[61px] lg:pt-[39px]">
        <div className="flex h-full max-w-[490px] flex-col justify-center gap-2 lg:px-6">
          <div className="max-w-[457px] text-left text-[32px] leading-[0.95] sm:text-[44px] lg:text-[57px]">
            Shop Computer &amp; experience
          </div>
          <div className="max-w-[393px] text-left text-[12px] leading-[1.25] sm:text-[15px] lg:text-[19px]">
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions.
          </div>
          <div className="mt-1 lg:mt-[7px]">
            <button
              type="button"
              className="h-[36px] w-[136px] rounded-[5px] bg-[#14B1F0] text-[14px] tracking-[0.013em] text-white sm:h-[38px] sm:w-[146px] lg:h-[40px] lg:w-[152px] lg:text-[15px]"
            >
              View More
            </button>
          </div>
        </div>

        <div className="mt-1 hidden sm:block lg:mt-0">
          <div className="flex h-[130px] w-[130px] items-center justify-center rounded-full bg-[linear-gradient(90deg,rgba(253,200,48,1)_0%,rgba(243,115,53,1)_100%)] lg:h-[159px] lg:w-[165px]">
            <div className="w-[90px] whitespace-pre-line text-center text-[34px] leading-[1.15] text-white lg:w-[111px] lg:text-[47px]">
              {"40%\nOff"}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:bottom-3">
        <div className="h-1.5 w-9 rounded-full bg-[#0E666E]" />
        <div className="h-1.5 w-9 rounded-full bg-[#A791A8]" />
        <div className="h-1.5 w-9 rounded-full bg-[#A791A8]" />
      </div>
    </section>
  );
}
