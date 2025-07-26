"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Adeste Group Case Study Data
const adesteGroupData = {
  title: "Adeste Group - Case Study Detail Page",
  projectName: "Adeste Group - Digital Marketing Campaign",
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
      "A comprehensive digital marketing campaign designed for Adeste Group, a leading real estate development company. The strategy focused on increasing brand awareness, generating qualified leads, and driving property sales through targeted digital channels. The campaign utilized social media advertising, content marketing, email campaigns, and SEO optimization to reach high-value prospects in the real estate market. Results included significant increases in website traffic, lead generation, and ultimately property sales, demonstrating the effectiveness of integrated digital marketing approaches in the competitive real estate sector.",
  },
  campaignResults: [
    {
      id: 1,
      title: "Lead Generation",
      description: "300% increase in qualified leads",
      image: "/results/adeste-group.png",
    },
    {
      id: 2,
      title: "Brand Awareness",
      description: "250% growth in social media engagement",
      image: "/results/adeste-group.png",
    },
    {
      id: 3,
      title: "Sales Growth",
      description: "400% increase in property inquiries",
      image: "/results/adeste-group.png",
    },
  ],
  projectUrl: "https://adestegroup.com",
};

export default function AdesteGroupCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Adeste Group Case Study Top Background"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Adeste Group Case Study Bottom Background"
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
                  {adesteGroupData.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Team Members */}
              <div className="flex justify-center mb-16">
                {adesteGroupData.teamMembers.map((member, index) => (
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
                {/* Large Result 1 (Lead Generation) - Takes 3/5 of the width */}
                <div className="lg:col-span-3">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={adesteGroupData.campaignResults[0].image}
                      alt={adesteGroupData.campaignResults[0].title}
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
                  {/* Small Result 2 (Brand Awareness) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={adesteGroupData.campaignResults[1].image}
                      alt={adesteGroupData.campaignResults[1].title}
                      width={400}
                      height={184}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>

                  {/* Small Result 3 (Sales Growth) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={adesteGroupData.campaignResults[2].image}
                      alt={adesteGroupData.campaignResults[2].title}
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
                  {adesteGroupData.projectName}
                </h2>

                <div className="space-y-2 mb-6">
                  <p className="text-white">
                    <span className="font-bold">Strategy Lead</span> -{" "}
                    {adesteGroupData.projectDetails.strategyLead}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Marketing Team</span> -{" "}
                    {adesteGroupData.projectDetails.marketingTeam}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Date Completed</span> -{" "}
                    {adesteGroupData.projectDetails.dateCompleted}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {adesteGroupData.projectDetails.description}
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
