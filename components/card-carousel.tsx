import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Adeste Group",
      subtitle: "Enterprise Consulting",
      description:
        "Adeste Group is a global enterprise consultancy. They partnered with Adwello to modernize their digital presence with a clean, responsive corporate website that aligns with their international brand standards.",
      logo: "ADÉSTE GROUP",
    },
    {
      id: 2,
      title: "TechCorp Solutions",
      subtitle: "Digital Transformation",
      description:
        "TechCorp Solutions needed a comprehensive digital overhaul. We delivered a modern, scalable platform that enhanced their customer engagement and streamlined their business processes.",
      logo: "TECHCORP",
    },
    {
      id: 3,
      title: "Innovation Labs",
      subtitle: "Startup Acceleration",
      description:
        "Innovation Labs required a cutting-edge web presence to showcase their portfolio. We created an interactive platform that highlights their innovative projects and attracts potential investors.",
      logo: "INNOVATION",
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
      {/* Project Card Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200"
        >
          <ChevronLeft size={20} className="text-white " />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-2 border-white hover:bg-[#2A2A2A] rounded-full p-2 transition-colors duration-200"
        >
          <ChevronRight size={20} className="text-white" />
        </button>

        {/* Project Card */}
        <div className="mx-16 bg-[#1A1A1A] rounded-xl p-10 shadow-lg shadow-[#C2373280]/50 h-[350px]">
          {/* Card Title */}
          <h2 className="text-white text-xl font-semibold tracking-wider mb-6 text-start">
            OUR LATEST PROJECT
          </h2>

          {/* Two Column Layout */}
          <div className="flex items-center gap-8">
            {/* Left: Logo Section */}
            <div className="flex-shrink-0">
              <div className="bg-white rounded-lg p-6 w-48 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ADÉSTE
                  </div>
                  <div className="text-xl font-bold text-orange-500">GROUP</div>
                </div>
              </div>
            </div>

            {/* Right: Content Section */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-2">
                {projects[currentSlide].title}
              </h3>
              <p className="text-gray-400 mb-4">
                {projects[currentSlide].subtitle}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {projects[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
