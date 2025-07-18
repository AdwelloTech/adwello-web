"use client";
import React from "react";
import Image from "next/image";

import CardCarousel from "@/components/card-carousel";
import TestimonialCarousel from "@/components/testimonial-carousel";

const OurResults = () => {
  return (
    <>
      <section className="relative bg-[#0C0C0C] min-h-screen">
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
          <Image
            src="/results/top-wave.png"
            alt="Gradient Background"
            width={1000}
            height={1000}
            className="w-full h-[100vh] object-cover opacity-20"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 min-h-screen flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#FF6300] text-3xl font-bold text-center mt-16">
              OUR RESULTS
            </h2>
            <h1 className="text-white text-6xl font-bold text-center mt-6">
              Proven work that drives growth
            </h1>
            <div className="flex justify-center mt-8">
              <svg
                width="280"
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="280" height="2" fill="#FF6300" />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image
                src="/results/man-1.png"
                alt="man-1"
                width={600}
                height={600}
              />
            </div>
            <div>
              <CardCarousel />
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-[#0C0C0C] py-30">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/results/upside-down.png"
            alt="Gradient Background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <TestimonialCarousel />
      </div>
    </>
  );
};

export default OurResults;
