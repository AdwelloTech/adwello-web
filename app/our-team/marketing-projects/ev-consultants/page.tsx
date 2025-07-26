"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// EV Consultants Case Study Data
const evConsultantsData = {
  title: "EV Consultants - Case Study Detail Page",
  projectName: "EV Consultants - Brand Awareness Campaign",
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
      "A strategic brand awareness campaign designed for EV Consultants, a leading visa consultancy firm. The campaign focused on establishing brand credibility, increasing market visibility, and positioning the company as the go-to expert for European visa services. The strategy utilized targeted social media advertising, educational content marketing, influencer partnerships, and SEO optimization to reach potential clients seeking visa assistance. The campaign successfully increased brand recognition, improved search engine rankings, and generated a significant increase in qualified inquiries, establishing EV Consultants as a trusted authority in the visa consultancy market.",
  },
  campaignResults: [
    {
      id: 1,
      title: "Brand Recognition",
      description: "250% growth in brand awareness",
      image: "/results/ev-consultants.png",
    },
    {
      id: 2,
      title: "Lead Generation",
      description: "300% increase in qualified leads",
      image: "/results/ev-consultants.png",
    },
    {
      id: 3,
      title: "Market Position",
      description: "Top 3 search rankings achieved",
      image: "/results/ev-consultants.png",
    },
  ],
  projectUrl: "https://evconsultants.com",
};

export default function EVConsultantsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="EV Consultants Case Study Top Background"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="EV Consultants Case Study Bottom Background"
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
                  {evConsultantsData.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Team Members */}
              <div className="flex justify-center mb-16">
                {evConsultantsData.teamMembers.map((member, index) => (
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
                {/* Large Result 1 (Brand Recognition) - Takes 3/5 of the width */}
                <div className="lg:col-span-3">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <Image
                      src={evConsultantsData.campaignResults[0].image}
                      alt={evConsultantsData.campaignResults[0].title}
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
                  {/* Small Result 2 (Lead Generation) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={evConsultantsData.campaignResults[1].image}
                      alt={evConsultantsData.campaignResults[1].title}
                      width={400}
                      height={184}
                      className="w-full h-full object-cover"
                      quality={100}
                      priority={true}
                      unoptimized={true}
                    />
                  </div>

                  {/* Small Result 3 (Market Position) */}
                  <div className="w-full h-46 rounded-lg overflow-hidden">
                    <Image
                      src={evConsultantsData.campaignResults[2].image}
                      alt={evConsultantsData.campaignResults[2].title}
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
                  {evConsultantsData.projectName}
                </h2>

                <div className="space-y-2 mb-6">
                  <p className="text-white">
                    <span className="font-bold">Strategy Lead</span> -{" "}
                    {evConsultantsData.projectDetails.strategyLead}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Marketing Team</span> -{" "}
                    {evConsultantsData.projectDetails.marketingTeam}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Date Completed</span> -{" "}
                    {evConsultantsData.projectDetails.dateCompleted}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {evConsultantsData.projectDetails.description}
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
