"use client";

/**
 * HeroBanner Component
 * Large hero section with headline, body, CTA, and discount badge
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f0f0e8]"
      style={{ minHeight: 318 }}
    >
      <div
        className="relative mx-auto w-full max-w-[1400px]"
        style={{ minHeight: 318 }}
      >
        <Image
          src="/images/figma/hero-bg-base.png"
          alt="Hero background"
          fill
          priority
          quality={88}
          className="object-cover"
          sizes="100vw"
        />
        <Image
          src="/images/figma/hero-bg-overlay.png"
          alt="Hero overlay"
          fill
          priority
          quality={85}
          className="-top-[13px] object-cover"
          sizes="100vw"
        />

        <div className="relative z-10 px-4 py-6 md:absolute md:left-[61px] md:top-[39px] md:w-[1198px] md:px-0 md:py-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-[538px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="w-full md:h-[240px] md:w-[490px]"
              style={{ padding: 24 }}
            >
              <h1
                className="mb-2 text-[42px] leading-[0.93] text-black md:text-[57px]"
                style={{
                  fontFamily: "Century Gothic, sans-serif",
                  fontWeight: 400,
                }}
              >
                Shop Computer &amp; experience
              </h1>
              <p
                className="mb-5 max-w-[393px] text-[13px] leading-[1.23] text-black"
                style={{
                  fontFamily: "Century Gothic, sans-serif",
                  fontWeight: 400,
                }}
              >
                You cannot inspect quality into the product; it is already
                there. I am not a product of my circumstances. I am a product of
                my decisions.
              </p>
              <motion.button
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="h-10 w-[152px] rounded-[5px] bg-[#14B1F0] text-center text-[15px] leading-[1.47] tracking-[0.013em] text-white transition-colors hover:bg-[#0da3df]"
                style={{
                  fontFamily: "Century Gothic, sans-serif",
                  fontWeight: 400,
                }}
              >
                View More
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="flex h-[159px] w-[165px] items-center justify-center rounded-full bg-gradient-to-r from-[#FDC830] to-[#F37335]"
            >
              <p
                className="text-center text-[47px] leading-[1.23] text-white"
                style={{
                  fontFamily: "Century Gothic, sans-serif",
                  fontWeight: 400,
                }}
              >
                40%
                <br />
                Off
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
