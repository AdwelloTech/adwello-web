import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-black">
      {/* HERO SECTION with Background Image */}
      <div className="relative flex items-center justify-center h-[600px]">
        <div className="absolute inset-0 w-full h-screen pointer-events-none z-0">
          <Image
            src="/about-us/about-us-top.png"
            alt="About Us Top Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 z-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-[#FF6B00] text-lg font-semibold uppercase tracking-wider mb-4">
            WE'RE ADWELLO
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            Crafting powerful digital experiences that drive real results.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A strategy-first digital team helping businesses grow through smart
            web design, marketing, and technology.
          </p>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto"></div>
        </div>
      </div>

      {/* MISSION & VALUES SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#222222] rounded-xl p-12">
            <div className="grid md:grid-cols-2 gap-12 relative">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To empower ambitious brands with the strategy, technology, and
                  creative execution they need to scale online — fast and smart.
                </p>
              </div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  What Drives Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                    <span className="text-lg text-gray-300">
                      Purpose over pixels
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                    <span className="text-lg text-gray-300">
                      Strategy before design
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                    <span className="text-lg text-gray-300">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What We Do Best
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-4 px-8 flex items-center justify-center space-x-4">
              <span className="text-2xl">🚀</span>
              <span className="text-lg font-semibold text-white">
                Growth-Focused Design
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-4 px-8 flex items-center justify-center space-x-4">
              <span className="text-2xl">🎯</span>
              <span className="text-lg font-semibold text-white">
                Strategic Marketing Execution
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-4 px-8 flex items-center justify-center space-x-4">
              <span className="text-2xl">🧠</span>
              <span className="text-lg font-semibold text-white">
                Honest Consultation
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-4 px-8 flex items-center justify-center space-x-4">
              <span className="text-2xl">🔍</span>
              <span className="text-lg font-semibold text-white">
                Data-Driven Optimization
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT SECTION with Background Image */}
      <div className="relative min-h-[700px] flex items-center justify-center py-20">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/about-us/about-us-bottom.png"
            alt="About Us Bottom Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="bg-[#2C2C2C] rounded-xl p-6"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-sm font-medium mb-4">
                Projects Delivered
              </h3>
              <p className="text-3xl font-bold text-center text-white">150+</p>
            </div>
            <div
              className="bg-[#2C2C2C] rounded-xl p-6"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-sm font-medium mb-4">
                Clients Served
              </h3>
              <p className="text-3xl font-bold text-center text-white">
                12+ Countries
              </p>
            </div>
            <div
              className="bg-[#2C2C2C] rounded-xl p-6 md:col-span-2"
              style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
            >
              <h3 className="text-gray-400 text-sm font-medium mb-3">
                Success Rate
              </h3>
              <p className="text-3xl font-bold text-center text-white">
                98% Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
