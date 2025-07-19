import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, formatDate, getAllPostSlugs } from "@/sanity/lib/blog";
import { PortableText } from "@portabletext/react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post = null;

  try {
    post = await getPostBySlug(params.slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }

  if (!post) {
    notFound();
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
          <div className="max-w-4xl mx-auto px-6 pt-32 pb-16 w-full">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-gray-400 hover:text-[#FF6300] transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <div className="flex items-center gap-6">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold flex-1">
                    {post.title}
                  </h1>
                  <span className="text-gray-400 text-lg whitespace-nowrap">
                    {post.publishedAt ? formatDate(post.publishedAt) : "Draft"}
                  </span>
                </div>
                {post.author && (
                  <div className="mt-4">
                    <p className="text-gray-400 text-lg">
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
                <div className="relative h-96 rounded-xl overflow-hidden mb-8">
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
            <article className="prose prose-invert prose-lg max-w-none">
              {post.excerpt && (
                <p className="text-white text-xl leading-relaxed mb-8">
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
                          <h1 className="text-white text-3xl font-bold mb-8 mt-10">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-white text-2xl font-bold mb-6 mt-8">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-white text-xl font-bold mb-4 mt-6">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-white text-lg font-bold mb-3 mt-5">
                            {children}
                          </h4>
                        ),
                        normal: ({ children }) => (
                          <p className="text-white leading-relaxed mb-6">
                            {children}
                          </p>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-[#FF6300] pl-4 italic text-gray-300 mb-6">
                            {children}
                          </blockquote>
                        ),
                      },
                      list: {
                        bullet: ({ children }) => (
                          <ul className="space-y-3 mb-6">{children}</ul>
                        ),
                      },
                      listItem: {
                        bullet: ({ children }) => (
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-[#FF6300] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                            <span className="text-white">{children}</span>
                          </li>
                        ),
                      },
                    }}
                  />
                </div>
              )}
            </article>

            {/* CTA Section */}
            <div className="mt-16 mb-32">
              <button className="w-170 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:scale-105 transition-transform">
                Book a Consultation
              </button>
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
