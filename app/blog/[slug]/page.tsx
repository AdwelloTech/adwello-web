import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, formatDate } from "@/sanity/lib/blog";
import { PortableText } from "@portabletext/react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Add ISR revalidation
export const revalidate = 0; // Instant revalidation

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post = null;

  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }

  if (!post) {
    notFound();
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/blog"
              className="text-gray-400 hover:text-[#FF6300] transition-colors text-sm sm:text-base"
            >
              ← Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex-1">
                  {post.title}
                </h1>
                <span className="text-gray-400 text-sm sm:text-base lg:text-lg whitespace-nowrap">
                  {post.publishedAt ? formatDate(post.publishedAt) : "Draft"}
                </span>
              </div>
              {post.author && (
                <div className="mt-3 sm:mt-4">
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                    By{" "}
                    <span className="text-white font-medium">
                      {post.author}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden mb-6 sm:mb-8">
                <Image
                  src={post.mainImage}
                  alt={post.mainImageAlt || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
            {post.excerpt && (
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                {post.excerpt}
              </p>
            )}

            {post.body && (
              <div className="text-white leading-relaxed">
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h1: ({ children }) => (
                        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 mt-6 sm:mt-8 md:mt-10">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 mt-5 sm:mt-6 md:mt-8">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 mt-4 sm:mt-5 md:mt-6">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-white text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 mt-3 sm:mt-4 md:mt-5">
                          {children}
                        </h4>
                      ),
                      normal: ({ children }) => (
                        <p className="text-white text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                          {children}
                        </p>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-[#FF6300] pl-3 sm:pl-4 italic text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                          {children}
                        </blockquote>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          {children}
                        </ul>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF6300] rounded-full mt-2 sm:mt-3 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="text-white text-sm sm:text-base">
                            {children}
                          </span>
                        </li>
                      ),
                    },
                  }}
                />
              </div>
            )}
          </article>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 mb-8 sm:mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
