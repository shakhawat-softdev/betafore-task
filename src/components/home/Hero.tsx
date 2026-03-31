import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-[1400px] h-[318px]">
      <Image
        src="/figma/node-0-13.png"
        alt=""
        fill
        sizes="1400px"
        priority
        className="object-cover"
      />
      <div className="absolute left-0 top-[-13px] w-[1400px] h-[344px]">
        <Image
          src="/figma/node-0-15.png"
          alt=""
          fill
          sizes="1400px"
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute left-[61px] top-[39px] flex flex-row gap-[538px]">
        <div className="flex flex-col justify-center gap-[1px] px-[24px] w-[490px] h-[240px]">
          <div className="w-[457px] h-[112px] text-left align-top font-normal text-[57px] leading-[0.9298245614em]">
            Shop Computer &amp; experience
          </div>
          <div className="w-[393px] h-[67px] text-left align-top font-normal text-[19px] leading-[1.2260742188em]">
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions.
          </div>
          <div className="mt-[7px]">
            <button
              type="button"
              className="w-[152px] h-[40px] rounded-[5px] bg-[#14B1F0] text-white text-[15px] leading-[1.4666666667em] tracking-[0.0133333335em]"
            >
              View More
            </button>
          </div>
        </div>

        <div className="w-[165px] h-[159px]">
          <div className="w-[165px] h-[159px] rounded-[83px] bg-[linear-gradient(90deg,rgba(253,200,48,1)_0%,rgba(243,115,53,1)_100%)] flex items-center justify-center">
            <div className="w-[111px] font-normal text-[47px] leading-[1.2260742188em] text-white text-center whitespace-pre-line">
              {"40%\nOff"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

