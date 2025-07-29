import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAllPosts,
  formatDate,
  calculateReadTime,
  extractTextFromPortableText,
  BlogPost,
} from "@/sanity/lib/blog";

// Add ISR revalidation
export const revalidate = 0; // Instant revalidation

export default async function BlogPage() {
  let blogPosts: BlogPost[] = [];

  try {
    blogPosts = await getAllPosts();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Return empty array if Sanity is not available
    blogPosts = [];
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Top Background Image - Outside content flow */}
      <div className="absolute top-0 left-0 w-full h-64 sm:h-80 md:h-96 lg:h-screen pointer-events-none z-0">
        <Image
          src="/blogs/blogs-top.png"
          alt="Blog Top Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Fading black tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
      </div>

      {/* Bottom Background Image - Outside content flow */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-48 md:h-64 pointer-events-none z-0">
        <Image
          src="/blogs/blogs-bottom.png"
          alt="Blog Bottom Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Fading black tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80"></div>
      </div>

      {/* Main Content - Separate from backgrounds */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-4">
              Insights from Adwello
            </h1>
            <div className="h-[2px] w-16 sm:w-20 md:w-24 lg:w-32 bg-[#FF6300] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Stay ahead with smart digital strategy, web design tips, and
              marketing insights to help your business grow.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post._id}
                  className="group"
                >
                  <article className="bg-[#1A1A1A] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer mx-2 sm:mx-4 md:mx-0 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col">
                    {/* Featured Image */}
                    <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden flex-shrink-0">
                      {post.mainImage ? (
                        <Image
                          src={post.mainImage}
                          alt={post.mainImageAlt || post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            No image
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[#FF6300] text-xs sm:text-sm font-medium">
                          {post.publishedAt
                            ? formatDate(post.publishedAt)
                            : "Draft"}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          {post.body
                            ? calculateReadTime(
                                extractTextFromPortableText(post.body)
                              )
                            : post.excerpt
                              ? calculateReadTime(post.excerpt)
                              : "5 min read"}
                        </span>
                      </div>

                      <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#FF6300] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-3 sm:mt-4 flex items-center text-[#FF6300] font-medium text-xs sm:text-sm md:text-base">
                        Read More
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform"
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
              ))
            ) : (
              <div className="col-span-full text-center text-white py-8 sm:py-12">
                <p className="text-base sm:text-lg mb-3 sm:mb-4">
                  No blog posts available yet.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Create blog posts in Sanity Studio to see them here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
