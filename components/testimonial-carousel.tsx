"use client";
import React, { useState } from "react";
import Image from "next/image";

// Star icon component
const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 1L12.2451 6.90983L18.5106 7.2918L13.7553 11.8402L15.4906 18.0082L10 14.9098L4.50938 18.0082L6.24472 11.8402L1.48944 7.2918L7.75492 6.90983L10 1Z"
      fill="#FF6300"
    />
  </svg>
);

// Arrow icons
const ArrowLeft = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    text: "We went from 3 to 47 orders a day after Adwello rebuilt our website. It was a complete game changer for our small business",
    name: "Sarah",
    title: "Founder, BakeBloom Bakery",
    image: "/results/sarah.jpg", // Using existing image as placeholder
  },
  {
    id: 2,
    text: "Our leads jumped 5x in just a few weeks. Their funnel redesign and ad strategy made a huge impact",
    name: "Sajad Ahamed",
    title: "Marketing Manager, Gym Co",
    image: "/results/sajad.jpg", // Using existing image as placeholder
  },
  {
    id: 3,
    text: "Adwello helped us scale fast. Website traffic exploded and their team felt like an extension of ours",
    name: "Mira",
    title: "CTO, TechStart Solutions",
    image: "/results/mira.jpg", // Using existing image as placeholder
  },
  {
    id: 4,
    text: "The website redesign increased our conversion rate by 300%. Adwello's attention to detail is unmatched",
    name: "Alex Chen",
    title: "CEO, TechFlow Inc",
    image: "/results/man-1.png", // Using existing image as placeholder
  },
  {
    id: 5,
    text: "Our online sales tripled within the first month. The new e-commerce platform is exactly what we needed",
    name: "Emma Rodriguez",
    title: "Founder, EcoStyle Boutique",
    image: "/results/man-1.png", // Using existing image as placeholder
  },
  {
    id: 6,
    text: "Adwello transformed our digital presence completely. The new website perfectly represents our brand",
    name: "David Kim",
    title: "Marketing Director, InnovateCorp",
    image: "/results/man-1.png", // Using existing image as placeholder
  },
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * cardsPerView;
    return testimonials.slice(startIndex, startIndex + cardsPerView);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6">
      {/* Main Container with Flexbox */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="flex-shrink-0 bg-transparent border-2 border-white hover:bg-[#FF6300]/80 rounded-full p-2 transition-colors"
          aria-label="Previous testimonials"
        >
          <ArrowLeft />
        </button>

        {/* Testimonial Cards Container */}
        <div className="flex gap-6 overflow-hidden flex-1 justify-center">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className=" w-full max-w-[400px] overflow-hidden shadow shadow-lg shadow-white/10"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 h-full border border-white/10 hover:border-[#FF6300]/30 transition-colors">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg leading-relaxed mb-8 min-h-[120px]">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#FF6300] to-[#FF8A00]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="flex-shrink-0 bg-transparent border-2 border-white hover:bg-[#FF6300]/80 rounded-full p-2 transition-colors"
          aria-label="Next testimonials"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
