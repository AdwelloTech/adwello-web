import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      slug: "what-is-api-simple-version",
      title: "What's an API? Here's the simple version",
      image: "/blogs/blogsimage1.jpg",
    },
    {
      slug: "from-idea-to-interface",
      title: "From Idea To Interface.........!!",
      image: "/blogs/blogsimage2.jpg",
    },
    {
      slug: "no-website-red-zone",
      title: "No Website? You're in the RED ZONE!",
      image: "/blogs/blogsimage3.jpg",
    },
    {
      slug: "erp-crm-hrm-difference",
      title: "ERP • CRM • HRM What does it all mean?",
      image: "/blogs/blogsimage4.jpg",
    },
  ];

  return (
    <section className="relative bg-[#0C0C0C] min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/blogs/blogs1.png"
          alt="Blog Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20 items-center w-full">
          {/* Left Column: Title and Description */}
          <div className="md:col-span-1">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">
              Insights from Adwello
            </h2>
            <div className="h-[2px] w-20 bg-[#FF6300] mb-6"></div>
            <p className="text-white text-lg leading-relaxed">
              Stay ahead with smart digital strategy, web design tips, and
              marketing insights to help your business grow.
            </p>
          </div>

          {/* Right Column: Blog Cards Grid */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className="relative rounded-xl overflow-hidden h-60 mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-white font-bold text-base text-center group-hover:text-[#FF6300] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
