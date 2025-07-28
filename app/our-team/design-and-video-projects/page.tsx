import React from "react";
import Image from "next/image";
import {
  getAllDesignVideoProjects,
  DesignVideoProject,
} from "@/sanity/lib/designVideoProjects";

export default async function DesignAndVideoProjectsPage() {
  let designVideoProjects: DesignVideoProject[] = [];

  try {
    designVideoProjects = await getAllDesignVideoProjects();
  } catch (error) {
    console.error("Error fetching design and video projects:", error);
    designVideoProjects = [];
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Overlapping Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Design and Video Projects Top Background"
            fill
            className="object-cover object-top opacity-30"
          />
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Design and Video Projects Bottom Background"
            fill
            className="object-cover object-bottom opacity-30"
          />
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Projects Section */}
          <div className="mb-220">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-16 mt-16">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Our Creative Design Works
                </h2>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Images Grid */}
              {designVideoProjects.length > 0 ? (
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {designVideoProjects.map((project) => (
                      <div key={project._id} className="w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={400}
                          className="w-full h-auto rounded-lg"
                          quality={100}
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-white py-12">
                  <p className="text-lg mb-4">
                    No design and video projects available yet.
                  </p>
                  <p className="text-gray-400">
                    Create design and video projects in Sanity Studio to see
                    them here.
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
