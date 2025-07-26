"use client";

import React from "react";
import Image from "next/image";

const designAndVideoImages = [
  {
    id: 1,
    title: "Adwello Social Media Post 1",
    image: "/our-team/design-and-video-team/adwello-social-media-post-1.jpg",
  },
  {
    id: 2,
    title: "Adwello Social Media Post 2",
    image: "/our-team/design-and-video-team/adwello-social-media-post-2.jpg",
  },
  {
    id: 3,
    title: "Adwello Social Media Post 3",
    image: "/our-team/design-and-video-team/adwello-social-media-post-3.jpg",
  },
  {
    id: 4,
    title: "Adwello Social Media Post 4",
    image: "/our-team/design-and-video-team/adwello-social-media-post-4.jpg",
  },
  {
    id: 5,
    title: "Adwello Social Media Post 5",
    image: "/our-team/design-and-video-team/adwello-social-media-post-5.jpg",
  },
  {
    id: 6,
    title: "Adwello Social Media Post 6",
    image: "/our-team/design-and-video-team/adwello-social-media-post-6.jpg",
  },
];

export default function DesignAndVideoProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Content Section with Overlapping Backgrounds */}
      <div className="relative z-10 bg-black py-16 md:py-24">
        {/* Top Background Image Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-top.png"
            alt="Design and Video Projects Top Background"
            fill
            className="object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70"></div>
        </div>

        {/* Bottom Background Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] md:h-[800px] overflow-hidden pointer-events-none">
          <Image
            src="/our-team/our-team-bottom.png"
            alt="Design and Video Projects Bottom Background"
            fill
            className="object-contain object-bottom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-black/70"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Projects Section */}
          <div className="mb-20">
            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Header Section */}
              <div className="text-center mb-16 mt-16">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Our Creative Design Works
                </h2>
                <div className="h-[2px] w-60 bg-[#FF6300] mx-auto"></div>
              </div>

              {/* Images Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {designAndVideoImages.map((item) => (
                    <div key={item.id} className="w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-lg"
                        quality={100}
                        priority={true}
                        unoptimized={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
