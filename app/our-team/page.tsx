"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Team member data
const teamData = {
  leadershipTeam: [
    {
      id: 1,
      name: "Diyan Pabasara",
      role: "Founder & Team Lead",
      image: "/our-team/diyan-pabasara-profile.jpg",
    },
    {
      id: 2,
      name: "Alex Fernando",
      role: "Co-Founder",
      image: "/results/man-1.png", // No profile image available yet
    },
  ],
  tecTeam: [
    {
      id: 3,
      name: "Sajad Ahamed",
      role: "UI/UX Designer",
      image: "/our-team/sajad-ahamed-profile.jpg",
    },
    {
      id: 4,
      name: "Mohamed Farhat",
      role: "Software Engineer",
      image: "/our-team/mohamed-farhat-profile.jpg",
    },
    {
      id: 5,
      name: "Imaadh Ifthikar",
      role: "Software Engineer",
      image: "/our-team/imaadh-ifthikar-profile.jpg",
    },
    {
      id: 6,
      name: "Gaurava",
      role: "Software Engineer",
      image: "/our-team/gaurava-profile.jpg",
    },
  ],
  marketingTeam: [
    {
      id: 7,
      name: "Madushani",
      role: "Marketing",
      image: "/results/sarah.jpg", // No profile image available yet
    },
    {
      id: 8,
      name: "Sachin",
      role: "Marketing",
      image: "/results/man-1.png", // No profile image available yet
    },
    {
      id: 9,
      name: "Savith",
      role: "Marketing",
      image: "/our-team/savith-profile.png",
    },
  ],
  hrOperations: [
    {
      id: 10,
      name: "Sansuka Gamage",
      role: "Manager",
      image: "/our-team/sansuka-gamage-profile.jpg",
    },
    {
      id: 11,
      name: "Upeksha Lakmali",
      role: "HR Manager",
      image: "/results/sarah.jpg", // No profile image available yet
    },
  ],
  designVideoTeam: [
    {
      id: 12,
      name: "N.Fernando",
      role: "Designer",
      image: "/our-team/n-fernando-profile.png",
    },
    {
      id: 13,
      name: "Praneeth",
      role: "Designer",
      image: "/results/man-1.png", // No profile image available yet
    },
  ],
};

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Background Image */}
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/our-team/our-team-top.png"
          alt="Our Team Top Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Fading black tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#FF6300] font-bold text-lg sm:text-xl lg:text-2xl mb-4">
              MEET OUR TEAM
            </p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Smart solutions start with a smart team.
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              At Adwello, our strength lies in our people. From strategists to
              designers and developers, every team member brings passion, skill,
              and a commitment to delivering real results for your business.
            </p>
            <div className="h-[2px] w-60 bg-[#FF6300] mt-8 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content Section with Bottom Background */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Our Team Bottom Background"
            fill
            className="object-contain object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-black/70"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Leadership Team Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Leadership Team
                </h2>
              </div>

              {/* Team Members - Centered for 2 members */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                  {teamData.leadershipTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 w-80 h-80"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-600 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Team Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mb-12 text-center relative">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                  Tech Team
                </h2>
                <Link
                  href="/our-team/tech-projects"
                  className="text-white underline hover:text-[#FF6300] transition-colors text-lg sm:absolute sm:right-0"
                >
                  View Projects
                </Link>
              </div>

              {/* Team Members */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamData.tecTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-6 transition-transform duration-300 hover:scale-105 w-64 h-72"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-600 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Team Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mb-12 text-center relative">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                  Marketing Team
                </h2>
                <Link
                  href="/our-team/marketing-projects"
                  className="text-white underline hover:text-[#FF6300] transition-colors text-lg sm:absolute sm:right-0"
                >
                  View Projects
                </Link>
              </div>

              {/* Team Members */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamData.marketingTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 w-80 h-80"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-600 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* HR & Operations Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  HR & Operations
                </h2>
              </div>

              {/* Team Members - Centered for 2 members */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                  {teamData.hrOperations.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 w-80 h-80"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-600 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Design & Video Team Section */}
          <div className="mb-12">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mb-12 text-center relative">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                  Design & Video Team
                </h2>
                <Link
                  href="/our-team/design-and-video-projects"
                  className="text-white underline hover:text-[#FF6300] transition-colors text-lg sm:absolute sm:right-0"
                >
                  View Projects
                </Link>
              </div>

              {/* Team Members - Centered for 2 members */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                  {teamData.designVideoTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 w-80 h-80"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-600 flex items-center justify-center">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                        <h3 className="text-white font-bold text-2xl mb-2">
                          {member.name}
                        </h3>
                        <p className="text-gray-400 text-lg">{member.role}</p>
                      </div>
                    </div>
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
