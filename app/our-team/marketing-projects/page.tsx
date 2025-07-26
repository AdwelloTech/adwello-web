"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const marketingProjectsData = [
  {
    id: 1,
    title: "Adeste Group - Digital Marketing Campaign",
    description:
      "Comprehensive digital marketing strategy for real estate development",
    image: "/results/adeste-group.png",
    featured: true,
    detailPage: "/our-team/marketing-projects/adeste-group",
  },
  {
    id: 2,
    title: "EV Consultants - Brand Awareness Campaign",
    description: "Strategic brand positioning and awareness campaign",
    image: "/results/ev-consultants.png",
    featured: true,
    detailPage: "/our-team/marketing-projects/ev-consultants",
  },
  {
    id: 3,
    title: "Sisu Stones - Luxury Marketing Strategy",
    description: "Premium gemstone business marketing and positioning",
    image: "/results/man-1.png",
    featured: true,
    detailPage: "/our-team/marketing-projects/sisu-stones",
  },
];

export default function MarketingProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Overlapping Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Marketing Projects Top Background"
            fill
            className="object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Marketing Projects Bottom Background"
            fill
            className="object-contain object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-black/70"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Projects Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-16 mt-16">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Our Latest Marketing Campaigns
                </h2>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Projects Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketingProjectsData.map((project) => (
                    <Link
                      key={project.id}
                      href={project.detailPage}
                      className="block"
                    >
                      <div className="bg-[#262626] rounded-xl p-6 h-80 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <div className="flex flex-col items-center text-center h-full">
                          {/* Project Image */}
                          <div className="w-full h-40 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={250}
                              height={160}
                              className="w-full h-full object-contain p-3"
                              quality={100}
                              priority={true}
                              unoptimized={true}
                            />
                          </div>

                          {/* Project Info */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-lg mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
