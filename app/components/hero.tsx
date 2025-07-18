import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const Hero = () => {
  return (
    <section className="relative bg-[#121212] min-h-screen">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <Image
          src="/hero/bg-wave-hero.png"
          alt="Hero Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </div>
      <div className="absolute bottom-0 right-80 opacity-50 z-10 pointer-events-none">
        <Image
          src="/hero/growth.png"
          alt="Growth Background"
          width={1000}
          height={1000}
          className="w-[1000px] h-[1000px] object-cover opacity-20"
        />
      </div>
      <Image
        src="/hero/orange-pattern-bg.png"
        alt="Rocket Man Shape"
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 opacity-30 z-0 w-[1200px] h-[1000px] "
      />
      <div className="relative z-20 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen items-center px-6">
        {/* Left: Main Content */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-[#FF6300] text-2xl font-semibold">
            WE ARE ADWELLO
          </h2>
          <h1 className="text-white text-[5.5rem] font-bold leading-tight max-w-3xl">
            A digital partner built for growth.
          </h1>
          <p className="text-white max-w-xl text-[1.5rem]">
            We design high-performance websites and strategic marketing systems
            that help startups and growing businesses scale faster and win
            online.
          </p>
          <div className="flex justify-start mt-6 text-white font-bold text-2xl relative">
            <button className="relative inline-flex items-center hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="relative z-10">
                <span className="relative">
                  <span className="absolute -left-2 -top-3 w-14 h-14 bg-[#FF6300] rounded-full z-0 opacity-50"></span>
                  <span className="relative z-10">GET</span>
                </span>
                &nbsp;TO KNOW US +
              </span>
            </button>
          </div>
        </div>

        {/* Right: Rocket Man + Behind Shape */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          {/* Decorative Shape Behind Rocket Man */}

          {/* Rocket Man Image */}
          <Image
            src="/hero/rocket-man.png"
            alt="Rocket Man"
            width={1000}
            height={1000}
            className="relative z-10 w-[800px] h-[800px] object-contain left-15 top-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
