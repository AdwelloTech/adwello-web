import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-black">
      {/* HERO SECTION with Background Image */}
      <div className="relative flex items-center justify-center h-[500px] sm:h-[600px]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/about-us/about-us-top.png"
            alt="About Us Top Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 z-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-[#FF6B00] text-sm sm:text-lg font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            WE'RE ADWELLO
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white px-2">
            Crafting powerful digital experiences that drive real results.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            A strategy-first digital team helping businesses grow through smart
            web design, marketing, and technology.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-[#FF6B00] mx-auto"></div>
        </div>
      </div>

      {/* MISSION & VALUES SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#222222] rounded-xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  To empower ambitious brands with the strategy, technology, and
                  creative execution they need to scale online — fast and smart.
                </p>
              </div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                  What Drives Us
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-300">
                      Purpose over pixels
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-300">
                      Strategy before design
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full flex-shrink-0"></div>
                    <span className="text-base sm:text-lg text-gray-300">
                      Results, not just reports
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO BEST SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white">
            What We Do Best
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🚀</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                Growth-Focused Design
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🎯</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                Strategic Marketing Execution
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🧠</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                Honest Consultation
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl flex-shrink-0">🔍</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                Data-Driven Optimization
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT SECTION with Background Image */}
      <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/about-us/about-us-bottom.png"
            alt="About Us Bottom Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div
              className="bg-[#2C2C2C] rounded-xl p-4 sm:p-6"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Projects Delivered
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-white">
                150+
              </p>
            </div>
            <div
              className="bg-[#2C2C2C] rounded-xl p-4 sm:p-6"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Clients Served
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-white">
                12+ Countries
              </p>
            </div>
            <div
              className="bg-[#2C2C2C] rounded-xl p-4 sm:p-6 sm:col-span-2"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                Success Rate
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-center text-white">
                98% Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
