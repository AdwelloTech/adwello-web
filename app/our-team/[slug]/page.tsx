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
      layoutClass = "bg-gradient-to-br from-gray-900 to-black text-white";
      break;
    case "designVideoTeam":
      layoutClass = "bg-gradient-to-br from-gray-900 to-black text-white";
      break;
    case "leadershipTeam":
      layoutClass = "bg-gradient-to-br from-gray-900 to-black text-white";
      break;
    case "hrOperations":
      layoutClass = "bg-gradient-to-br from-gray-900 to-black text-white";
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
            {/* Socials */}
            {(member.github || member.linkedin || member.website) && (
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-purple-500 rounded-full mr-4"></span>
                  Socials
                </h3>
                <div className="flex gap-6 items-center justify-center">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400"
                      title="GitHub"
                    >
                      <GithubIcon size={32} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={32} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 underline text-lg"
                    >
                      Website
                    </a>
                  )}
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
        {member.portfolioType === "designer" && (
          <div className="space-y-10">
            {/* About */}
            <div>
              <h2 className="text-3xl font-bold mb-2">About</h2>
              <div className="prose max-w-none mb-4 text-lg text-gray-200">
                {member.portfolioDescription}
              </div>
            </div>
            {/* Portfolio Gallery */}
            {member.portfolioGallery && member.portfolioGallery.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Portfolio Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.portfolioGallery.map((img: any, i: number) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden border bg-white shadow-lg"
                    >
                      <Image
                        src={img.asset.url}
                        alt={member.name + " work " + (i + 1)}
                        width={400}
                        height={300}
                        className="object-cover w-full h-64"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Portfolio Links */}
            {member.portfolioLinks && member.portfolioLinks.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Links</h3>
                <div className="flex flex-wrap gap-4">
                  {member.portfolioLinks.map((link: any, i: number) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF6300] underline text-lg"
                    >
                      {link.name}
                    </a>
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
                      className="hover:text-[#FF6300]"
                      title="GitHub"
                    >
                      <GithubIcon size={32} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF6300]"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={32} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF6300] underline text-lg"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {member.portfolioType === "marketer" && (
          <div className="space-y-10">
            {/* About */}
            <div>
              <h2 className="text-3xl font-bold mb-2">About</h2>
              <div className="prose max-w-none mb-4 text-lg text-gray-200">
                {member.portfolioDescription}
              </div>
            </div>
            {/* Campaigns */}
            {member.portfolioCampaigns &&
              member.portfolioCampaigns.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Campaigns</h3>
                  <ul className="list-disc ml-6">
                    {member.portfolioCampaigns.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            {/* Socials */}
            {(member.github || member.linkedin || member.website) && (
              <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 rounded-2xl p-8 border border-orange-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-orange-500 rounded-full mr-4"></span>
                  Socials
                </h3>
                <div className="flex gap-6 items-center justify-center">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      title="GitHub"
                    >
                      <GithubIcon size={32} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={32} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-400 underline text-lg"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {member.portfolioType === "leadership" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-44 h-44 rounded-full overflow-hidden mb-8 mx-auto border-4 border-amber-500/30 shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                {member.name}
              </h1>
              <p className="text-2xl text-amber-300 mb-3 font-medium">
                {member.role}
              </p>
              <div className="inline-block px-6 py-3 bg-amber-500/10 border border-amber-500/40 rounded-full text-amber-300 text-lg font-semibold">
                Executive Leadership
              </div>
            </div>

            {/* Leadership Vision */}
            {member.leadershipVision && (
              <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-10 border border-amber-700/50 backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-8 text-white flex items-center justify-center">
                  <span className="w-12 h-1 bg-amber-500 rounded-full mr-6"></span>
                  Leadership Vision
                  <span className="w-12 h-1 bg-amber-500 rounded-full ml-6"></span>
                </h2>
                <div className="prose prose-xl max-w-none text-gray-200 leading-relaxed text-center text-lg">
                  "{member.leadershipVision}"
                </div>
              </div>
            )}

            {/* About Section */}
            {member.portfolioDescription && (
              <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-8 border border-amber-700/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-amber-500 rounded-full mr-4"></span>
                  About
                </h2>
                <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                  {member.portfolioDescription}
                </div>
              </div>
            )}

            {/* Leadership Experience */}
            {member.leadershipExperience &&
              member.leadershipExperience.length > 0 && (
                <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-8 border border-amber-700/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                    <span className="w-8 h-1 bg-amber-500 rounded-full mr-4"></span>
                    Leadership Experience
                  </h3>
                  <div className="space-y-6">
                    {member.leadershipExperience.map((exp: any, i: number) => (
                      <div
                        key={i}
                        className="bg-gray-800/60 rounded-xl border border-amber-700/30 p-6 hover:border-amber-500/50 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h4 className="text-xl font-bold text-amber-300 mb-2 md:mb-0">
                            {exp.title}
                          </h4>
                          <span className="text-amber-200 text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-amber-400 font-semibold mb-3">
                          {exp.company}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Key Achievements */}
            {member.leadershipAchievements &&
              member.leadershipAchievements.length > 0 && (
                <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-8 border border-amber-700/50 backdrop-blur-sm">
                  <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                    <span className="w-8 h-1 bg-amber-500 rounded-full mr-4"></span>
                    Key Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {member.leadershipAchievements.map(
                      (achievement: string, i: number) => (
                        <div key={i} className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Socials */}
            {(member.github || member.linkedin || member.website) && (
              <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-8 border border-amber-700/50 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-amber-500 rounded-full mr-4"></span>
                  Connect
                </h3>
                <div className="flex gap-6 items-center justify-center">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400"
                      title="GitHub"
                    >
                      <GithubIcon size={32} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400"
                      title="LinkedIn"
                    >
                      <LinkedInIcon size={32} />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 underline text-lg"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            )}
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
