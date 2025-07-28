import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllTechProjects, TechProject } from "@/sanity/lib/techProjects";

export default async function TechProjectsPage() {
  let techProjects: TechProject[] = [];

  try {
    techProjects = await getAllTechProjects();
  } catch (error) {
    console.error("Error fetching tech projects:", error);
    techProjects = [];
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Overlapping Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Tech Projects Top Background"
            fill
            className="object-cover object-top opacity-30"
          />
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Tech Projects Bottom Background"
            fill
            className="object-cover object-bottom opacity-30"
          />
        </div>

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Projects Section */}
          <div className="mb-220">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-16 mt-16">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Our Latest Tech Builds
                </h2>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Projects Grid */}
              {techProjects.length > 0 ? (
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techProjects.map((project) => (
                      <Link
                        key={project._id}
                        href={`/our-team/tech-projects/${project.detailPage}`}
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
              ) : (
                <div className="text-center text-white py-12">
                  <p className="text-lg mb-4">
                    No tech projects available yet.
                  </p>
                  <p className="text-gray-400">
                    Create tech projects in Sanity Studio to see them here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
