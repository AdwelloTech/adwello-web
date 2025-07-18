import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Type definitions
interface BlogSection {
  title: string;
  content: string;
  examples?: string[];
}

interface BlogContent {
  intro: string;
  sections: BlogSection[];
}

interface BlogPost {
  title: string;
  date: string;
  featuredImage: string;
  content: BlogContent;
}

// Blog data - this will be replaced with Sanity CMS later
const blogPosts: Record<string, BlogPost> = {
  "what-is-api-simple-version": {
    title: "What's an API? Here's the simple version",
    date: "July 5, 2025",
    featuredImage: "/blogs/blogsimage1.jpg",
    content: {
      intro:
        'Have you ever wondered how apps, websites, or tools "talk" to each other behind the scenes? That\'s where APIs come in. An API (Application Programming Interface) is like a digital messenger that allows different software applications to communicate and share data seamlessly.',
      sections: [
        {
          title: "An API Connects Two Apps",
          content:
            "Think of an API as a waiter in a restaurant. You (the customer) don't go directly into the kitchen to order food. Instead, you tell the waiter what you want, and they communicate with the kitchen on your behalf. The waiter brings your order to the kitchen and then brings your food back to you. An API works the same way - it acts as a messenger between two applications that need to share information.",
          examples: [
            "When your website lets users log in using Google or Facebook, that's using their login API.",
            "When you pay online with a card, that form talks to a secure payment gateway — via an API.",
          ],
        },
        {
          title: "We Build Powerful, Secure APIs",
          content:
            "At Adwello, we create smart, scalable API solutions for websites, apps, CRMs, and eCommerce platforms — no tech jargon needed. Whether you're starting from scratch or want to connect your tools better — we can help.",
        },
      ],
    },
  },
  "from-idea-to-interface": {
    title: "From Idea To Interface.........!!",
    date: "July 3, 2025",
    featuredImage: "/blogs/blogsimage2.jpg",
    content: {
      intro:
        "Every successful digital product starts with a great idea, but the journey from concept to a polished interface is where the magic happens. At Adwello, we've perfected a design process that transforms your business vision into user-friendly, conversion-focused experiences.",
      sections: [
        {
          title: "We Research Your Audience Behavior",
          content:
            "Before we design anything, we dive deep into understanding your target audience. What are their pain points? How do they currently solve problems? What motivates them to take action? This research forms the foundation of everything we build.",
        },
        {
          title: "Wireframes, Prototypes, Real Designs",
          content:
            "We start with low-fidelity wireframes to map out the user journey, then create interactive prototypes to test the flow. Only after thorough testing do we move to high-fidelity designs that bring your brand to life.",
        },
        {
          title: "Every Click is Designed for Clarity",
          content:
            "Every button, link, and interaction is strategically placed to guide users toward their goals. We eliminate confusion and create intuitive experiences that feel natural and effortless.",
        },
        {
          title: "Smooth User Flow = Higher Conversion",
          content:
            "When users can easily find what they're looking for and complete their desired actions without friction, conversion rates naturally increase. Our designs are built with conversion optimization in mind.",
        },
      ],
    },
  },
  "no-website-red-zone": {
    title: "No Website? You're in the RED ZONE!",
    date: "July 1, 2025",
    featuredImage: "/blogs/blogsimage3.jpg",
    content: {
      intro:
        "In today's digital-first world, not having a website is like going to war without armor. Your competitors are online, your customers are online, and if you're not there, you're missing out on massive opportunities while putting your business at serious risk.",
      sections: [
        {
          title: "The Digital Battlefield",
          content:
            "Think of the internet as a battlefield where businesses compete for attention, trust, and sales. Every day, millions of people search for products and services online. If you don't have a website, you're essentially invisible to these potential customers.",
        },
        {
          title: "What You're Missing Without a Website",
          content:
            "A professional website gives you 24/7 visibility, builds credibility, generates leads, and provides a platform to showcase your expertise. It's your digital storefront that never closes.",
          examples: [
            "Potential customers can't find you when they search online",
            "You lose credibility compared to competitors with websites",
            "No way to capture leads or contact information",
            "Missing out on local search traffic and Google My Business benefits",
          ],
        },
        {
          title: "We Build Websites. You Build Safety.",
          content:
            "Don't let your business fall behind. We create professional, mobile-friendly websites that convert visitors into customers. Starting at €500, we make it easy to get online and start winning the digital war.",
        },
      ],
    },
  },
  "erp-crm-hrm-difference": {
    title: "ERP • CRM • HRM What does it all mean?",
    date: "June 28, 2025",
    featuredImage: "/blogs/blogsimage4.jpg",
    content: {
      intro:
        "Business software can be confusing with all its acronyms and technical jargon. Let's break down three of the most important business systems: ERP, CRM, and HRM. Understanding these can help you choose the right tools for your business.",
      sections: [
        {
          title: "ERP (Enterprise Resource Planning)",
          content:
            "ERP systems are like the central nervous system of your business. They manage everything from sales and inventory to finance and operations. Think of ERP as the big picture manager that keeps all your business processes organized and efficient.",
          examples: [
            "Track inventory levels and automate reordering",
            "Manage financial records and generate reports",
            "Coordinate production schedules and resource allocation",
            "Integrate all departments into one unified system",
          ],
        },
        {
          title: "CRM (Customer Relationship Management)",
          content:
            "CRM systems focus on your customers and sales process. They help you track customer interactions, manage leads, and close more sales. A good CRM is like having a perfect memory of every customer conversation and opportunity.",
          examples: [
            "Store customer contact information and interaction history",
            "Track sales opportunities and pipeline progress",
            "Automate follow-up emails and reminders",
            "Generate sales reports and performance analytics",
          ],
        },
        {
          title: "HRM (Human Resource Management)",
          content:
            "HRM systems handle all things related to your employees. From hiring and onboarding to payroll and performance management, HRM software streamlines the entire employee lifecycle.",
          examples: [
            "Manage employee records and personal information",
            "Process payroll and handle tax calculations",
            "Track time off requests and attendance",
            "Manage performance reviews and training programs",
          ],
        },
      ],
    },
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug];

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
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-white text-4xl lg:text-5xl font-bold">
                  {post.title}
                </h1>
                <span className="text-gray-400 text-lg">{post.date}</span>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              <p className="text-white text-xl leading-relaxed mb-8">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, index) => (
                <section key={index} className="mb-12">
                  <h2 className="text-white text-2xl font-bold mb-6">
                    {section.title}
                  </h2>
                  <p className="text-white leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {section.examples && (
                    <ul className="space-y-3">
                      {section.examples.map(
                        (example: string, exampleIndex: number) => (
                          <li key={exampleIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#FF6300] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                            <span className="text-white">{example}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </section>
              ))}
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
      <div className="relative h-screen overflow-hidden">
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
