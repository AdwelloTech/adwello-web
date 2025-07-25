"use client";

import React, { useState } from "react";
import Image from "next/image";

// Team member data
const teamData = {
  tecTeam: [
    {
      id: 1,
      name: "Sajad Ahamed",
      role: "UI/UX Designer",
      image: "/results/sajad.jpg", // Placeholder - will be updated later
    },
    {
      id: 2,
      name: "Mohamed Farhath",
      role: "Software Engineer",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
    {
      id: 3,
      name: "Imaadh Ifthikar",
      role: "Software Engineer",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
    {
      id: 4,
      name: "Gaurava",
      role: "Software Engineer",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
  ],
  marketingTeam: [
    {
      id: 5,
      name: "Madushani",
      role: "Marketing",
      image: "/results/sarah.jpg", // Placeholder - will be updated later
    },
    {
      id: 6,
      name: "Sachin",
      role: "Marketing",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
    {
      id: 7,
      name: "Savith",
      role: "Marketing",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
  ],
  hrOperations: [
    {
      id: 8,
      name: "Sansuka Gamage",
      role: "Manager",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
    {
      id: 9,
      name: "Upeksha Lakmali",
      role: "HR Manager",
      image: "/results/sarah.jpg", // Placeholder - will be updated later
    },
  ],
  designVideoTeam: [
    {
      id: 10,
      name: "N.Fernando",
      role: "Designer",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
    {
      id: 11,
      name: "Praneeth",
      role: "Designer",
      image: "/results/man-1.png", // Placeholder - will be updated later
    },
  ],
};

// Project data
const projectData = {
  tecProjects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Custom e-commerce solution with advanced features",
      image: "/services/custom-sites.png",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile App",
      description: "Cross-platform mobile application",
      image: "/services/digital-marketing.png",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "CRM System",
      description: "Customer relationship management platform",
      image: "/services/brand-strategy.png",
      category: "Software Development",
    },
  ],
  marketingProjects: [
    {
      id: 4,
      title: "Digital Campaign",
      description: "Multi-channel marketing campaign",
      image: "/services/digital-marketing.png",
      category: "Digital Marketing",
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Search engine optimization project",
      image: "/services/digital-analytics.png",
      category: "SEO",
    },
  ],
};

export default function OurTeamPage() {
  const [showTecProjects, setShowTecProjects] = useState(false);
  const [showMarketingProjects, setShowMarketingProjects] = useState(false);

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

      {/* Middle Section - Black Background */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tech Team Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mb-12 text-center relative">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                  Tech Team
                </h2>
                <button
                  onClick={() => setShowTecProjects(!showTecProjects)}
                  className="text-white underline hover:text-[#FF6300] transition-colors text-lg sm:absolute sm:right-0"
                >
                  View Projects
                </button>
              </div>

              {/* Team Members or Projects */}
              {!showTecProjects ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamData.tecTeam.map((member) => (
                    <div
                      key={member.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-transform duration-300 hover:scale-105 h-80"
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
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectData.tecProjects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#262626] rounded-t-xl p-8 transition-transform duration-300 hover:scale-105 h-80"
                      style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                    >
                      <div className="flex flex-col h-full justify-center">
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          {project.description}
                        </p>
                        <span className="text-[#FF6300] text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Marketing Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Marketing Team
              </h2>
            </div>

            {/* Team Members */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-12">
              {teamData.marketingTeam.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 min-h-[20rem] w-72"
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

          {/* HR & Operations Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                HR & Operations
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {teamData.hrOperations.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 h-80 w-[250px]"
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

          {/* Design & Video Team Section */}
          <div>
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center mb-12 text-center relative">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                  Design & Video Team
                </h2>
                <button className="text-white underline hover:text-[#FF6300] transition-colors text-lg sm:absolute sm:right-0">
                  View Projects
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {teamData.designVideoTeam.map((member) => (
                  <div
                    key={member.id}
                    className="bg-[#262626] rounded-t-xl p-8 transition-all duration-300 hover:scale-105 h-80 w-[250px]"
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

      {/* Bottom Background Image */}
      <div className="relative h-64 md:h-screen overflow-hidden">
        <Image
          src="/our-team/our-team-bottom.png"
          alt="Our Team Bottom Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Fading black tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80"></div>
      </div>
    </div>
  );
}
