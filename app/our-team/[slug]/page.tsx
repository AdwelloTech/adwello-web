import { notFound } from "next/navigation";
import { getTeamMemberBySlug } from "@/sanity/lib/team";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const revalidate = 0;

export default async function TeamMemberPortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);
  if (!member) return notFound();

  // Choose layout based on teamCategory
  let layoutClass = "";
  switch (member.teamCategory) {
    case "techTeam":
      layoutClass = "bg-gradient-to-br from-gray-900 to-black text-white";
      break;
    case "marketingTeam":
      layoutClass =
        "bg-gradient-to-br from-orange-100 to-orange-400 text-black";
      break;
    case "designVideoTeam":
      layoutClass = "bg-gradient-to-br from-pink-200 to-purple-400 text-black";
      break;
    case "leadershipTeam":
      layoutClass =
        "bg-gradient-to-br from-yellow-100 to-yellow-300 text-black";
      break;
    case "hrOperations":
      layoutClass = "bg-gradient-to-br from-green-100 to-green-300 text-black";
      break;
    default:
      layoutClass = "bg-white text-black";
  }

  return (
    <div className={`min-h-screen ${layoutClass} py-12 px-4`}>
      <div className="max-w-5xl mx-auto bg-white/10 rounded-xl shadow-lg p-8 pt-20">
        {/* Portfolio Content by Type */}
        {member.portfolioType === "uiuxDesigner" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 mx-auto border-4 border-purple-500/20 shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                {member.name}
              </h1>
              <p className="text-xl text-gray-400 mb-2">{member.role}</p>
              <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                UI/UX Designer
              </div>
            </div>

            {/* About Section */}
            {member.portfolioDescription && (
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-4"></span>
                  About
                </h2>
                <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                  {member.portfolioDescription}
                </div>
              </div>
            )}

            {/* UI/UX Projects */}
            {member.uiuxProjects && member.uiuxProjects.length > 0 && (
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-4"></span>
                  UI/UX Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {member.uiuxProjects.map((proj: any, i: number) => (
                    <div
                      key={i}
                      className="bg-gray-800/60 rounded-xl border border-purple-700/30 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      {proj.image?.asset?.url && (
                        <div className="relative overflow-hidden">
                          <Image
                            src={proj.image.asset.url}
                            alt={proj.name}
                            width={400}
                            height={200}
                            className="object-cover h-48 w-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                          {proj.name}
                        </h4>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {proj.description}
                        </p>
                        {proj.tools && proj.tools.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm text-purple-400 font-medium mb-2">
                              Tools Used:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {proj.tools.map((tool: string, j: number) => (
                                <span
                                  key={j}
                                  className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-xs"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300 text-sm font-medium"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Gallery */}
            {member.portfolioGallery && member.portfolioGallery.length > 0 && (
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-4"></span>
                  Portfolio Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {member.portfolioGallery.map((img: any, i: number) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-purple-700/30 bg-gray-800/60 shadow-lg hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <Image
                        src={img.asset.url}
                        alt={member.name + " work " + (i + 1)}
                        width={400}
                        height={300}
                        className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Links */}
            {member.portfolioLinks && member.portfolioLinks.length > 0 && (
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-4"></span>
                  Links
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {member.portfolioLinks.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-800/80 border border-purple-700/50 text-purple-400 rounded-xl hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {member.portfolioType === "developer" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 mx-auto border-4 border-[#FF6300]/20 shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {member.name}
              </h1>
              <p className="text-xl text-gray-400 mb-2">{member.role}</p>
              <div className="inline-block px-4 py-2 bg-[#FF6300]/10 border border-[#FF6300]/30 rounded-full text-[#FF6300] text-sm font-medium">
                {member.teamCategory}
              </div>
            </div>

            {/* About Section */}
            {member.portfolioDescription && (
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-[#FF6300] rounded-full mr-4"></span>
                  About
                </h2>
                <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                  {member.portfolioDescription}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {member.techStack && member.techStack.length > 0 && (
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                  <span className="w-8 h-1 bg-[#FF6300] rounded-full mr-4"></span>
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {member.techStack.map((tech: any, i: number) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="w-16 h-16 rounded-xl bg-gray-800/80 border border-gray-700/50 p-3 mb-3 group-hover:border-[#FF6300]/50 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                        {tech.image?.asset?.url && (
                          <Image
                            src={tech.image.asset.url}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-300 text-center font-medium group-hover:text-[#FF6300] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Socials */}
            {(member.github || member.linkedin || member.website) && (
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-[#FF6300] rounded-full mr-4"></span>
                  Socials
                </h3>
                <div className="flex gap-6 items-center justify-center">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gray-800/80 border border-gray-700/50 hover:border-[#FF6300]/50 hover:bg-gray-800 transition-all duration-300 group"
                      title="GitHub"
                    >
                      <GithubIcon
                        size={32}
                        className="group-hover:text-[#FF6300] transition-colors"
                      />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gray-800/80 border border-gray-700/50 hover:border-[#FF6300]/50 hover:bg-gray-800 transition-all duration-300 group"
                      title="LinkedIn"
                    >
                      <LinkedInIcon
                        size={32}
                        className="group-hover:text-[#FF6300] transition-colors"
                      />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gray-800/80 border border-gray-700/50 hover:border-[#FF6300]/50 hover:bg-gray-800 text-white hover:text-[#FF6300] transition-all duration-300 font-medium"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Projects */}
            {member.portfolioProjects &&
              member.portfolioProjects.length > 0 && (
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                    <span className="w-8 h-1 bg-[#FF6300] rounded-full mr-4"></span>
                    Projects
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {member.portfolioProjects.map((proj: any, i: number) => (
                      <div
                        key={i}
                        className="bg-gray-800/60 rounded-xl border border-gray-700/50 overflow-hidden hover:border-[#FF6300]/30 transition-all duration-300 group"
                      >
                        {proj.image?.asset?.url && (
                          <div className="relative overflow-hidden">
                            <Image
                              src={proj.image.asset.url}
                              alt={proj.name}
                              width={400}
                              height={200}
                              className="object-contain h-48 w-full bg-gray-900 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6300] transition-colors">
                            {proj.name}
                          </h4>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="flex gap-3">
                            {proj.link && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-[#FF6300]/10 border border-[#FF6300]/30 text-[#FF6300] rounded-lg hover:bg-[#FF6300]/20 transition-all duration-300 text-sm font-medium"
                              >
                                View Project
                              </a>
                            )}
                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 text-sm font-medium"
                              >
                                Project URL
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        )}
        {member.portfolioType === "marketer" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <div className="prose max-w-none mb-4">
              {member.portfolioDescription}
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Campaigns</h3>
            <ul className="list-disc ml-6">
              {member.portfolioCampaigns?.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}
        {!member.portfolioType && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={member.portfolio} />
          </div>
        )}
      </div>
    </div>
  );
}
