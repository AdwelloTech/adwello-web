import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const Hero = () => {
  return (
    <section className="relative bg-[#121212] min-h-screen lg:min-h-screen overflow-hidden py-12 sm:py-16 lg:py-0">
      {/* Background Images */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <Image
          src="/hero/bg-wave-hero.png"
          alt="Hero Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </div>

      {/* Growth background - hidden on mobile */}
      <div className="absolute bottom-0 right-80 opacity-50 z-10 pointer-events-none hidden lg:block">
        <Image
          src="/hero/growth.png"
          alt="Growth Background"
          width={1000}
          height={1000}
          className="w-[1000px] h-[1000px] object-cover opacity-20"
        />
      </div>

      {/* Orange pattern - hidden on mobile */}
      <Image
        src="/hero/orange-pattern-bg.png"
        alt="Rocket Man Shape"
        width={1000}
        height={1000}
        className="absolute bottom-0 right-0 opacity-30 z-0 w-[1200px] h-[1000px] hidden lg:block"
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-screen-2xl mx-auto lg:min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout: Stack vertically */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:min-h-screen">
          {/* Left: Main Content */}
          <div className="flex flex-col justify-center gap-4 py-8 lg:pt-0 order-2 lg:order-1">
            <h2 className="text-[#FF6300] text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left">
              WE ARE ADWELLO
            </h2>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-bold leading-tight max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              A digital partner built for growth.
            </h1>

            <p className="text-white max-w-xl text-base sm:text-lg lg:text-[1.5rem] text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0">
              We design high-performance websites and strategic marketing
              systems that help startups and growing businesses scale faster and
              win online.
            </p>

            <div className="flex justify-center lg:justify-start mt-6 text-white font-bold text-lg sm:text-xl lg:text-2xl relative">
              <button className="relative inline-flex items-center hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="relative z-10">
                  <span className="relative">
                    <span className="absolute -left-2 -top-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#FF6300] rounded-full z-0 opacity-50"></span>
                    <span className="relative z-10">GET</span>
                  </span>
                  &nbsp;TO KNOW US +
                </span>
              </button>
            </div>
          </div>

          {/* Right: Rocket Man */}
          <div className="relative w-full flex items-center justify-center z-10 order-1 lg:order-2 pt-10 lg:pt-0">
            <Image
              src="/hero/rocket-man.png"
              alt="Rocket Man"
              width={1000}
              height={1000}
              className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
