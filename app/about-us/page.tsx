"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-black">
      {/* HERO SECTION with Background Image */}
      <div className="relative flex items-center justify-center h-[500px] sm:h-[600px]">
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/about-us/about-us-top.png"
            alt="About Us Top Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 z-0"></div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-[#FF6B00] text-sm sm:text-lg font-semibold uppercase tracking-wider mb-3 sm:mb-4"
            variants={heroVariants}
          >
            WE'RE ADWELLO
          </motion.h2>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white px-2"
            variants={heroVariants}
          >
            Crafting powerful digital experiences that drive real results.
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
            variants={heroVariants}
          >
            A strategy-first digital team helping businesses grow through smart
            web design, marketing, and technology.
          </motion.p>
          <motion.div
            className="w-16 sm:w-24 h-1 bg-[#FF6B00] mx-auto"
            variants={heroVariants}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          ></motion.div>
        </motion.div>
      </div>

      {/* MISSION & VALUES SECTION */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-[#222222] rounded-xl p-6 sm:p-8 md:p-12"
            variants={cardVariants}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white"
                  variants={heroVariants}
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg text-gray-300 leading-relaxed"
                  variants={heroVariants}
                >
                  To empower ambitious brands with the strategy, technology, and
                  creative execution they need to scale online — fast and smart.
                </motion.p>
              </motion.div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white"
                  variants={heroVariants}
                >
                  What Drives Us
                </motion.h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Purpose over pixels",
                    "Strategy before design",
                    "Results, not just reports",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3"
                      variants={heroVariants}
                    >
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full flex-shrink-0"></div>
                      <span className="text-base sm:text-lg text-gray-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WHAT WE DO BEST SECTION */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
            variants={heroVariants}
          >
            What We Do Best
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🚀", text: "Growth-Focused Design" },
              { icon: "🎯", text: "Strategic Marketing Execution" },
              { icon: "🧠", text: "Honest Consultation" },
              { icon: "🔍", text: "Data-Driven Optimization" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-[#FD6101] to-[#C33831] rounded-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center space-x-3 sm:space-x-4"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* OUR IMPACT SECTION with Background Image */}
      <motion.div
        className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center py-12 sm:py-16 md:py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/about-us/about-us-bottom.png"
            alt="About Us Bottom Background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/30 to-black/80 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
            variants={heroVariants}
          >
            Our Impact
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Projects Delivered", value: "150+" },
              { title: "Clients Served", value: "12+ Countries" },
              {
                title: "Success Rate",
                value: "98% Client Satisfaction",
                fullWidth: true,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-[#2C2C2C] rounded-xl p-4 sm:p-6 ${
                  stat.fullWidth ? "sm:col-span-2" : ""
                }`}
                style={{ boxShadow: "0 4px 8px -2px #FF6300" }}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-gray-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {stat.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-center text-white">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
