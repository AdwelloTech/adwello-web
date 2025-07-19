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
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post._id}
                    className="group"
                  >
                    <article className="bg-[#1A1A1A] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer mx-4 md:mx-0">
                      {/* Featured Image */}
                      <div className="relative h-48 md:h-64 overflow-hidden">
                        {post.mainImage ? (
                          <Image
                            src={post.mainImage}
                            alt={post.mainImageAlt || post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[#FF6300] text-sm font-medium">
                            {post.publishedAt
                              ? formatDate(post.publishedAt)
                              : "Draft"}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {post.body
                              ? calculateReadTime(
                                  extractTextFromPortableText(post.body)
                                )
                              : post.excerpt
                                ? calculateReadTime(post.excerpt)
                                : "5 min read"}
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
                ))
              ) : (
                <div className="col-span-2 text-center text-white py-12">
                  <p className="text-lg mb-4">No blog posts available yet.</p>
                  <p className="text-gray-400">
                    Create blog posts in Sanity Studio to see them here.
                  </p>
                </div>
              )}
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
