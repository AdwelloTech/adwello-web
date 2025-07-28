import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getMarketingProjectBySlug,
  MarketingProject,
} from "@/sanity/lib/marketingProjects";

interface MarketingProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MarketingProjectDetailPage({
  params,
}: MarketingProjectDetailPageProps) {
  const { slug } = await params;
  let project: MarketingProject | null = null;

  try {
    project = await getMarketingProjectBySlug(slug);
  } catch (error) {
    console.error("Error fetching marketing project:", error);
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
            alt="Marketing Project Top Background"
            fill
            className="object-cover object-top opacity-30"
          />
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[655px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Marketing Project Bottom Background"
            fill
            className="object-cover object-bottom opacity-30"
          />
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Project Header */}
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

              {/* Project Title */}
              <div className="text-center mb-12">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Project Hero Image */}
              <div className="mb-16">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={400}
                    className="w-full h-full object-cover"
                    quality={100}
                    priority={true}
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto px-4 relative">
              {/* Project Overview */}
              <div className="mb-16">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Challenge Section */}
              {project.challenge && (
                <div className="mb-16">
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                    The Challenge
                  </h2>
                  <div className="bg-[#262626] rounded-xl p-8">
                    <p className="text-gray-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              )}

              {/* Strategy Section */}
              {(project.researchAnalysis || project.campaignDevelopment) && (
                <div className="mb-16">
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                    Our Strategy
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.researchAnalysis && (
                      <div className="bg-[#262626] rounded-xl p-6">
                        <h3 className="text-[#FF6300] font-bold text-xl mb-4">
                          Research & Analysis
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {project.researchAnalysis}
                        </p>
                      </div>
                    )}
                    {project.campaignDevelopment && (
                      <div className="bg-[#262626] rounded-xl p-6">
                        <h3 className="text-[#FF6300] font-bold text-xl mb-4">
                          Campaign Development
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {project.campaignDevelopment}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Results Section */}
              {project.results && (
                <div className="mb-16">
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                    Results & Impact
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.results.metric1 && (
                      <div className="text-center">
                        <div className="text-[#FF6300] text-4xl font-bold mb-2">
                          {project.results.metric1}
                        </div>
                        <p className="text-gray-300">
                          {project.results.metric1Label ||
                            "Key Performance Indicator"}
                        </p>
                      </div>
                    )}
                    {project.results.metric2 && (
                      <div className="text-center">
                        <div className="text-[#FF6300] text-4xl font-bold mb-2">
                          {project.results.metric2}
                        </div>
                        <p className="text-gray-300">
                          {project.results.metric2Label || "Success Metric"}
                        </p>
                      </div>
                    )}
                    {project.results.metric3 && (
                      <div className="text-center">
                        <div className="text-[#FF6300] text-4xl font-bold mb-2">
                          {project.results.metric3}
                        </div>
                        <p className="text-gray-300">
                          {project.results.metric3Label || "Growth Indicator"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {project.keyTakeaways && project.keyTakeaways.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                    Key Takeaways
                  </h2>
                  <div className="bg-[#262626] rounded-xl p-8">
                    <ul className="text-gray-300 leading-relaxed space-y-3">
                      {project.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#FF6300] mr-3">•</span>
                          {takeaway}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="text-center">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                  Ready to Start Your Campaign?
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Let's create a marketing strategy that drives real results for
                  your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
