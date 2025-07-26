"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Adwello Project Data
const adwelloData = {
  title: "Adwello - Project Detail Page",
  projectName: "Adwello - Digital Agency Portfolio Website",
  teamMembers: [
    {
      name: "Sajad Ahamed",
      role: "UI/UX Design",
      image: "/our-team/sajad-ahamed-profile.jpg",
    },
    {
      name: "Mohamed Farhat",
      role: "Development",
      image: "/our-team/mohamed-farhat-profile.jpg",
    },
    {
      name: "Gaurava",
      role: "Development",
      image: "/our-team/gaurava-profile.jpg",
    },
    {
      name: "Imaadh Ifthikar",
      role: "Development",
      image: "/our-team/imaadh-ifthikar-profile.jpg",
    },
  ],
  projectDetails: {
    uiDesign: "Sajad Ahamed",
    developmentTeam: "Farhath, Gaurava, Imaadh",
    dateCompleted: "June 2024",
    description:
      "A sleek, scroll-driven one-page website crafted for Adwello, a premium digital agency. The design emphasizes luxury, clarity, and storytelling, using smooth transitions, parallax scrolling, and high-resolution imagery to elevate the brand's digital presence. Built with performance in mind, the site delivers a cinematic experience across both desktop and mobile — allowing visitors to explore our services with elegance and ease. Every section was thoughtfully designed to balance visual richness with clean navigation, making it ideal for showcasing high-value digital services. From UI/UX to code, the project reflects Adwello's commitment to premium design, functionality, and conversion-focused strategy.",
  },
  screenshots: [
    {
      id: 1,
      title: "Homepage",
      description: "Landing page with digital agency showcase",
      image: "/our-team/tech-team/adwello-logo.png",
    },
    {
      id: 2,
      title: "Services",
      description: "Digital services overview page",
      image: "/our-team/tech-team/adwello-logo.png",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Project portfolio showcase",
      image: "/our-team/tech-team/adwello-logo.png",
    },
  ],
  projectUrl: "https://adwello.com",
};

export default function AdwelloProjectPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Adwello Project Top Background"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Adwello Project Bottom Background"
            fill
            className="object-contain object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-black/70"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Project Title and Team */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Breadcrumb */}
              <div className="text-left mb-8">
                <Link
                  href="/our-team/tech-projects"
                  className="text-gray-400 hover:text-[#FF6300] transition-colors"
                >
                  ← Back to Projects
                </Link>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  {adwelloData.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Team Members */}
              <div className="flex justify-center mb-16">
                {adwelloData.teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 rounded-full overflow-hidden border-2 border-white ${
                      index > 0 ? "-ml-4" : ""
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Screenshots */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Screenshots Layout - Large left, 2 small right */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                {/* Large Image 1 (Homepage) - Takes 3/5 of the width */}
                <div className="lg:col-span-3">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={adwelloData.screenshots[0].image}
                      alt={adwelloData.screenshots[0].title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                </div>

                {/* Right Column - 2 small images stacked */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Small Image 2 (Services) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={adwelloData.screenshots[1].image}
                      alt={adwelloData.screenshots[1].title}
                      width={400}
                      height={184}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>

                  {/* Small Image 3 (Portfolio) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={adwelloData.screenshots[2].image}
                      alt={adwelloData.screenshots[2].title}
                      width={400}
                      height={184}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="text-left mb-8">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {adwelloData.projectName}
                </h2>

                <div className="space-y-2 mb-6">
                  <p className="text-white">
                    <span className="font-bold">UI/UX Design</span> -{" "}
                    {adwelloData.projectDetails.uiDesign}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Development Team</span> -{" "}
                    {adwelloData.projectDetails.developmentTeam}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Date Completed</span> -{" "}
                    {adwelloData.projectDetails.dateCompleted}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {adwelloData.projectDetails.description}
                  </p>
                </div>

                {/* Call to Action */}
                <div>
                  <button
                    onClick={() =>
                      window.open(adwelloData.projectUrl, "_blank")
                    }
                    className="w-170 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform"
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
