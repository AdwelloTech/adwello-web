import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTechProjectBySlug, TechProject } from "@/sanity/lib/techProjects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  let project: TechProject | null = null;

  try {
    project = await getTechProjectBySlug(slug);
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Project Top Background"
            fill
            className="object-cover object-top opacity-30"
          />
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Project Bottom Background"
            fill
            className="object-cover object-bottom opacity-30"
          />
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
                  {project.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Team Members */}
              {project.teamMembers && project.teamMembers.length > 0 && (
                <div className="flex justify-center mb-16">
                  {project.teamMembers.map((member, index) => (
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
              )}
            </div>
          </div>

          {/* Project Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-20">
              <div className="max-w-6xl mx-auto px-4 relative">
                {/* Screenshots Layout - Large left, 2 small right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                  {/* Large Image 1 - Takes 3/5 of the width */}
                  <div className="lg:col-span-3">
                    <div className="w-full h-96 rounded-lg overflow-hidden">
                      <Image
                        src={project.screenshots[0].image}
                        alt={project.screenshots[0].title}
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
                  {project.screenshots.length > 1 && (
                    <div className="lg:col-span-2 space-y-4">
                      {/* Small Image 2 */}
                      <div className="w-full h-46 rounded-lg overflow-hidden">
                        <Image
                          src={project.screenshots[1].image}
                          alt={project.screenshots[1].title}
                          width={400}
                          height={184}
                          className="w-full h-full object-cover"
                          quality={100}
                          priority={true}
                          unoptimized={true}
                        />
                      </div>

                      {/* Small Image 3 */}
                      {project.screenshots.length > 2 && (
                        <div className="w-full h-46 rounded-lg overflow-hidden">
                          <Image
                            src={project.screenshots[2].image}
                            alt={project.screenshots[2].title}
                            width={400}
                            height={184}
                            className="w-full h-full object-cover"
                            quality={100}
                            priority={true}
                            unoptimized={true}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="text-left mb-8">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {project.projectName || project.title}
                </h2>

                <div className="space-y-2 mb-6">
                  {project.uiDesign && (
                    <p className="text-white">
                      <span className="font-bold">UI/UX Design</span> -{" "}
                      {project.uiDesign}
                    </p>
                  )}
                  {project.developmentTeam && (
                    <p className="text-white">
                      <span className="font-bold">Development Team</span> -{" "}
                      {project.developmentTeam}
                    </p>
                  )}
                  {project.dateCompleted && (
                    <p className="text-white">
                      <span className="font-bold">Date Completed</span> -{" "}
                      {project.dateCompleted}
                    </p>
                  )}
                </div>

                {project.projectDescription && (
                  <div className="mb-8">
                    <p className="text-gray-300 leading-relaxed">
                      {project.projectDescription}
                    </p>
                  </div>
                )}

                {/* Call to Action */}
                {project.projectUrl && (
                  <div>
                    <button
                      onClick={() => window.open(project.projectUrl, "_blank")}
                      className="w-170 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform"
                    >
                      Visit Website
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
