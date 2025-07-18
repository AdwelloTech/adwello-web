import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative bg-[#0C0C0C] min-h-screen">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <Image
          src="/services/gradient-bg.png"
          alt="Gradient Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-6 min-h-screen flex items-center justify-center">
        {/* Headings */}

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          {/* Left Column: Service Cards Container */}
          <div className="relative w-full h-[600px] max-w-2xl mx-auto">
            {/* Card 1 - Custom Websites (Top Left) */}
            <div className="absolute top-[-40] left-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6 ">
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
            <div className="absolute top-[25] right-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
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
            <div className="absolute top-65 left-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
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
            <div className="absolute top-80 right-0 w-64 h-64 bg-[#1A1A1A] rounded-xl shadow-lg shadow-[#FF6300]/30 p-8 flex flex-col gap-6">
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

          {/* Right Column: Text + CTA */}
          <div className="flex flex-col justify-center gap-4">
            <div className="mb-4">
              <p className="text-[#FF6300] font-bold text-2xl">
                WHY CHOOSE ADWELLO
              </p>
              <h2 className="text-white text-4xl lg:text-5xl font-bold mt-2">
                Our Core Services
              </h2>
              <div className="h-[2px] w-60 bg-[#FF6300] mt-2"></div>
            </div>
            <p className="text-white max-w-md text-xl leading-tight">
              Smart digital solutions built to scale your business.
            </p>
            <button className="relative inline-flex items-center text-white font-bold text-2xl hover:scale-110 transition-all duration-300 cursor-pointer mt-6">
              <span className="relative z-10">
                <span className="relative">
                  <span className="absolute -left-2 -top-3 w-14 h-14 bg-[#FF6300] rounded-full z-0 opacity-50"></span>
                  <span className="relative z-10">BOOK</span>
                </span>
                &nbsp;A FREE CONSULTATION +
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
