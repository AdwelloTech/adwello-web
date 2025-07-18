import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative bg-[#0C0C0C] lg:min-h-screen py-12 sm:py-16 lg:py-0">
      {/* Background - hidden on mobile */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 hidden lg:block">
        <Image
          src="/services/gradient-bg.png"
          alt="Gradient Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-center w-full">
          {/* Mobile: Headings First */}
          <div className="flex flex-col justify-center gap-4 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="mb-4 text-center lg:text-left">
              <p className="text-[#FF6300] font-bold text-lg sm:text-xl lg:text-2xl">
                WHY CHOOSE ADWELLO
              </p>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                Our Core Services
              </h2>
              <div className="h-[2px] w-60 bg-[#FF6300] mt-2 mx-auto lg:mx-0"></div>
            </div>
            <p className="text-white max-w-md text-lg sm:text-xl leading-tight text-center lg:text-left mx-auto lg:mx-0">
              Smart digital solutions built to scale your business.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <button className="relative inline-flex items-center text-white font-bold text-lg sm:text-xl lg:text-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="relative z-10">
                  <span className="relative">
                    <span className="absolute -left-2 -top-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#FF6300] rounded-full z-0 opacity-50"></span>
                    <span className="relative z-10">BOOK</span>
                  </span>
                  &nbsp;A FREE CONSULTATION +
                </span>
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="order-2 lg:order-1">
            {/* Desktop: Positioned Cards */}
            <div className="hidden lg:block relative w-full h-[600px] max-w-2xl mx-auto">
              {/* Card 1 - Custom Websites (Top Left) */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/custom-sites.png"
                    alt="Web Design"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-white font-bold text-xl text-center">
                  Custom Websites
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Mobile-first websites built to convert and scale
                </p>
              </div>

              {/* Card 2 - Digital Marketing (Top Right) */}
              <div className="absolute top-16 right-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/digital-marketing.png"
                    alt="Digital Marketing"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-white font-bold text-xl text-center">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  SEO, ads, and funnels that drive real results
                </p>
              </div>

              {/* Card 3 - Brand Strategy (Bottom Left) */}
              <div className="absolute bottom-16 left-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/brand-strategy.png"
                    alt="Brand Strategy"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-white font-bold text-xl text-center">
                  Brand Strategy
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Stand-out branding through strategy and messaging
                </p>
              </div>

              {/* Card 4 - Digital Analytics (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/digital-analytics.png"
                    alt="Digital Analytics"
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-white font-bold text-xl text-center">
                  Digital Analytics
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Optimize performance with real-time data
                </p>
              </div>
            </div>

            {/* Mobile: Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
              {/* Card 1 - Custom Websites */}
              <div className="bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-6 flex flex-col gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/custom-sites.png"
                    alt="Web Design"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="text-white font-bold text-lg text-center">
                  Custom Websites
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Mobile-first websites built to convert and scale
                </p>
              </div>

              {/* Card 2 - Digital Marketing */}
              <div className="bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-6 flex flex-col gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/digital-marketing.png"
                    alt="Digital Marketing"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="text-white font-bold text-lg text-center">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  SEO, ads, and funnels that drive real results
                </p>
              </div>

              {/* Card 3 - Brand Strategy */}
              <div className="bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-6 flex flex-col gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/brand-strategy.png"
                    alt="Brand Strategy"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="text-white font-bold text-lg text-center">
                  Brand Strategy
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Stand-out branding through strategy and messaging
                </p>
              </div>

              {/* Card 4 - Digital Analytics */}
              <div className="bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-6 flex flex-col gap-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/services/digital-analytics.png"
                    alt="Digital Analytics"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="text-white font-bold text-lg text-center">
                  Digital Analytics
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Optimize performance with real-time data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
