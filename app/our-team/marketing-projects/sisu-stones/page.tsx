"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Sisu Stones Marketing Case Study Data
const sisuStonesMarketingData = {
  title: "Sisu Stones - Marketing Case Study Detail Page",
  projectName: "Sisu Stones - Luxury Marketing Strategy",
  teamMembers: [
    {
      name: "Sarah Johnson",
      role: "Marketing Strategy",
      image: "/results/sarah.jpg",
    },
    {
      name: "Mira Silva",
      role: "Digital Marketing",
      image: "/results/mira.jpg",
    },
    {
      name: "Alex Chen",
      role: "Content Creation",
      image: "/results/man-1.png",
    },
    { name: "Emma Davis", role: "Analytics", image: "/results/man-1.png" },
  ],
  projectDetails: {
    strategyLead: "Sarah Johnson",
    marketingTeam: "Mira, Alex, Emma",
    dateCompleted: "June 2024",
    description:
      "A premium luxury marketing strategy designed for Sisu Stones, a high-end gemstone business. The campaign focused on positioning the brand as the ultimate destination for luxury gemstones, targeting affluent collectors and jewelry enthusiasts. The strategy utilized sophisticated digital marketing channels, influencer partnerships with luxury lifestyle creators, premium content marketing, and targeted advertising to reach high-net-worth individuals. The campaign successfully increased brand prestige, generated significant sales growth, and established Sisu Stones as a leading luxury gemstone brand in the market.",
  },
  campaignResults: [
    {
      id: 1,
      title: "Sales Growth",
      description: "400% increase in sales revenue",
      image: "/results/man-1.png",
    },
    {
      id: 2,
      title: "Brand Prestige",
      description: "350% growth in luxury market share",
      image: "/results/man-1.png",
    },
    {
      id: 3,
      title: "Customer Value",
      description: "500% increase in average order value",
      image: "/results/man-1.png",
    },
  ],
  projectUrl: "https://sisustones.com",
};

export default function SisuStonesMarketingCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Sisu Stones Marketing Case Study Top Background"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Sisu Stones Marketing Case Study Bottom Background"
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
                  href="/our-team/marketing-projects"
                  className="text-gray-400 hover:text-[#FF6300] transition-colors"
                >
                  ← Back to Marketing Projects
                </Link>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  {sisuStonesMarketingData.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Team Members */}
              <div className="flex justify-center mb-16">
                {sisuStonesMarketingData.teamMembers.map((member, index) => (
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

          {/* Campaign Results */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Results Layout - Large left, 2 small right */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                {/* Large Result 1 (Sales Growth) - Takes 3/5 of the width */}
                <div className="lg:col-span-3">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={sisuStonesMarketingData.campaignResults[0].image}
                      alt={sisuStonesMarketingData.campaignResults[0].title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>
                </div>

                {/* Right Column - 2 small results stacked */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Small Result 2 (Brand Prestige) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={sisuStonesMarketingData.campaignResults[1].image}
                      alt={sisuStonesMarketingData.campaignResults[1].title}
                      width={400}
                      height={184}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>

                  {/* Small Result 3 (Customer Value) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={sisuStonesMarketingData.campaignResults[2].image}
                      alt={sisuStonesMarketingData.campaignResults[2].title}
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

          {/* Case Study Details */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="text-left mb-8">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {sisuStonesMarketingData.projectName}
                </h2>

                <div className="space-y-2 mb-6">
                  <p className="text-white">
                    <span className="font-bold">Strategy Lead</span> -{" "}
                    {sisuStonesMarketingData.projectDetails.strategyLead}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Marketing Team</span> -{" "}
                    {sisuStonesMarketingData.projectDetails.marketingTeam}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Date Completed</span> -{" "}
                    {sisuStonesMarketingData.projectDetails.dateCompleted}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {sisuStonesMarketingData.projectDetails.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
