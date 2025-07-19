"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CardCarousel from "@/components/card-carousel";
import TestimonialCarousel from "@/components/testimonial-carousel";

const OurResults = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
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
    <>
      <section className="relative bg-[#0C0C0C] lg:min-h-screen py-12 sm:py-16 lg:py-0">
        {/* Background - hidden on mobile */}
        <motion.div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-0 hidden lg:block"
          variants={backgroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/results/top-wave.png"
            alt="Gradient Background"
            width={1000}
            height={1000}
            className="w-full h-[100vh] object-cover"
          />
        </motion.div>

        <motion.div
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex flex-col gap-12 sm:gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <motion.div
            className="flex flex-col items-center justify-center pt-8 lg:pt-16"
            variants={headerVariants}
          >
            <motion.h2
              className="text-[#FF6300] text-xl sm:text-2xl lg:text-3xl font-bold text-center"
              variants={headerVariants}
            >
              OUR RESULTS
            </motion.h2>
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-4 lg:mt-6 px-4 lg:px-0"
              variants={headerVariants}
            >
              Proven work that drives growth
            </motion.h1>
            <motion.div
              className="flex justify-center mt-6 lg:mt-8"
              variants={headerVariants}
            >
              <motion.svg
                width="280"
                height="2"
                viewBox="0 0 280 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 sm:w-60 lg:w-[280px]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <rect width="280" height="2" fill="#FF6300" />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12 pb-8 lg:pb-0">
            {/* Image */}
            <motion.div
              className="flex justify-center order-1 lg:order-1"
              variants={imageVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src="/results/man-1.png"
                  alt="man-1"
                  width={600}
                  height={600}
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Carousel */}
            <motion.div
              className="order-2 lg:order-2"
              variants={contentVariants}
            >
              <CardCarousel />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <motion.div
        className="relative bg-[#0C0C0C] py-12 sm:py-16 lg:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background - hidden on mobile */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/results/upside-down.png"
            alt="Gradient Background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <TestimonialCarousel />
      </motion.div>
    </>
  );
};

export default OurResults;
