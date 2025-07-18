import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "what-is-api-simple-version",
    title: "What's an API? Here's the simple version",
    excerpt:
      "Ever wondered how apps talk to each other? Learn what APIs are and why they're the backbone of modern digital experiences.",
    date: "July 5, 2025",
    featuredImage: "/blogs/blogsimage1.jpg",
    readTime: "5 min read",
  },
  {
    slug: "from-idea-to-interface",
    title: "From Idea To Interface.........!!",
    excerpt:
      "Discover our proven design process that transforms your business ideas into user-friendly, conversion-focused interfaces.",
    date: "July 3, 2025",
    featuredImage: "/blogs/blogsimage2.jpg",
    readTime: "7 min read",
  },
  {
    slug: "no-website-red-zone",
    title: "No Website? You're in the RED ZONE!",
    excerpt:
      "In today's digital war, not having a website puts your business at serious risk. Learn why you need one NOW.",
    date: "July 1, 2025",
    featuredImage: "/blogs/blogsimage3.jpg",
    readTime: "4 min read",
  },
  {
    slug: "erp-crm-hrm-difference",
    title: "ERP • CRM • HRM What does it all mean?",
    excerpt:
      "Confused by business software acronyms? We break down ERP, CRM, and HRM systems in simple terms.",
    date: "June 28, 2025",
    featuredImage: "/blogs/blogsimage4.jpg",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Image with Content Overlay */}
      <div className="relative">
        {/* Top Background Image */}
        <div className="relative h-screen overflow-hidden">
          <Image
            src="/blogs/blogs-top.png"
            alt="Blog Top Background"
            fill
            className="object-cover opacity-30"
          />
          {/* Fading black tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-32 pb-12 md:pb-16 w-full">
            {/* Page Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
                Insights from Adwello
              </h1>
              <div className="h-[2px] w-24 md:w-32 bg-[#FF6300] mx-auto mb-4 md:mb-6"></div>
              <p className="text-white text-lg md:text-xl max-w-2xl mx-auto px-4">
                Stay ahead with smart digital strategy, web design tips, and
                marketing insights to help your business grow.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-32">
              {blogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group"
                >
                  <article className="bg-[#1A1A1A] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer mx-4 md:mx-0">
                    {/* Featured Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#FF6300] text-sm font-medium">
                          {post.date}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-white text-lg md:text-xl font-bold mb-3 group-hover:text-[#FF6300] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center text-[#FF6300] font-medium text-sm md:text-base">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Background Image */}
      <div className="relative h-64 md:h-screen overflow-hidden">
        <Image
          src="/blogs/blogs-bottom.png"
          alt="Blog Bottom Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Fading black tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80"></div>
      </div>
    </div>
  );
}
