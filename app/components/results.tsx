"use client";
import React from "react";
import Image from "next/image";
import CardCarousel from "@/components/card-carousel";
import TestimonialCarousel from "@/components/testimonial-carousel";

const OurResults = () => {
  return (
    <>
      <section className="relative bg-[#0C0C0C] lg:min-h-screen py-12 sm:py-16 lg:py-0">
        {/* Background - hidden on mobile */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0 hidden lg:block">
          <Image
            src="/results/top-wave.png"
            alt="Gradient Background"
            width={1000}
            height={1000}
            className="w-full h-[100vh] object-cover opacity-20"
          />
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center pt-8 lg:pt-16">
            <h2 className="text-[#FF6300] text-xl sm:text-2xl lg:text-3xl font-bold text-center">
              OUR RESULTS
            </h2>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4 lg:mt-6 px-4 lg:px-0">
              Proven work that drives growth
            </h1>
            <div className="flex justify-center mt-6 lg:mt-8">
              <svg
                width="280"
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 sm:w-60 lg:w-[280px]"
              >
                <rect width="280" height="2" fill="#FF6300" />
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12 pb-8 lg:pb-0">
            {/* Image */}
            <div className="flex justify-center order-1 lg:order-1">
              <Image
                src="/results/man-1.png"
                alt="man-1"
                width={600}
                height={600}
                className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
              />
            </div>

            {/* Carousel */}
            <div className="order-2 lg:order-2">
              <CardCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="relative bg-[#0C0C0C] py-12 sm:py-16 lg:py-20">
        {/* Background - hidden on mobile */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block">
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
