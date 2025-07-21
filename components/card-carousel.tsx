import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Adeste Group",
      subtitle: "Enterprise Consulting",
      description:
        "Adeste Group is a global enterprise consultancy. They partnered with Adwello to modernize their digital presence with a clean, responsive corporate website that aligns with their international brand standards.",
      logo: "/results/adeste-group.png",
    },
    {
      id: 2,
      title: "EV Consultants Pvt Ltd",
      subtitle: "Europe Visa Experts",
      description:
        "EV Consultants is a trusted Sri Lankan visa agency based in Ja‑Ela with a remarkable ~98‑99% approval rate. They assist students and professionals with study and work permits across Europe—including Finland, Sweden, Germany, the UK, Canada, and Latvia.",
      logo: "/results/ev-consultants.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center w-full">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200 mr-6"
          aria-label="Previous"
          style={{ alignSelf: "center" }}
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        {/* Project Card */}
        <div className="bg-[#1A1A1A] rounded-xl p-10 shadow-lg shadow-[#C2373280]/50 min-h-[350px] max-w-4xl w-full flex flex-col justify-center">
          <h2 className="text-white text-xl font-semibold tracking-wider mb-6 text-start">
            OUR LATEST PROJECTS
          </h2>
          <div className="flex items-center gap-8 min-h-[180px]">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-lg p-6 w-40 h-40 flex items-center justify-center">
                <Image
                  src={projects[currentSlide].logo}
                  alt={projects[currentSlide].title}
                  width={100}
                  height={100}
                  className="object-contain w-24 h-24"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-xl mb-2 truncate">
                {projects[currentSlide].title}
              </h3>
              <p className="text-gray-400 mb-4 truncate">
                {projects[currentSlide].subtitle}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed break-words whitespace-pre-line overflow-hidden">
                {projects[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200 ml-6"
          aria-label="Next"
          style={{ alignSelf: "center" }}
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center gap-2 mb-4 w-full">
          <button
            onClick={prevSlide}
            className="bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="flex-1">
            <div className="bg-[#1A1A1A] rounded-xl p-4 sm:p-6 md:p-8 shadow-lg shadow-[#C2373280]/50 mx-2 sm:mx-4 min-h-[320px] flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wider mb-4 sm:mb-6 text-center">
                OUR LATEST PROJECTS
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 min-h-[140px]">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="bg-white rounded-lg p-4 sm:p-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <Image
                      src={projects[currentSlide].logo}
                      alt={projects[currentSlide].title}
                      width={80}
                      height={80}
                      className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left min-w-0">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2 truncate">
                    {projects[currentSlide].title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base truncate">
                    {projects[currentSlide].subtitle}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed break-words whitespace-pre-line overflow-hidden">
                    {projects[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
