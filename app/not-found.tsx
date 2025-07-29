"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF6300]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#C23732]/20 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-[#FF6300] rounded-full opacity-30"
        {...floatingAnimation}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-[#C23732] rounded-full opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-[#FF6300] rounded-full opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div className="mb-8 mt-20" variants={itemVariants}>
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-[#FF6300] to-[#C23732] bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have taken a detour. Don't
              worry, we'll help you get back on track.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="relative w-64 h-64 mx-auto">
              {/* Rocket Man Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#FF6300]/20 to-[#C23732]/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#FF6300]/30 to-[#C23732]/30 rounded-full flex items-center justify-center">
                    <Image
                      src="/hero/rocket-man.png"
                      alt="Rocket Man"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-[#FF6300] rounded-full"
                animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-8 right-8 w-2 h-2 bg-[#C23732] rounded-full"
                animate={{ y: [0, -3, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-6 left-8 w-2 h-2 bg-[#FF6300] rounded-full"
                animate={{ y: [0, -4, 0], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#FF6300]/25 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 border-2 border-[#FF6300] text-[#FF6300] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#FF6300] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div className="mt-12" variants={itemVariants}>
            <p className="text-gray-500 mb-4">Or try these helpful links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about-us"
                className="text-[#FF6300] hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                className="text-[#FF6300] hover:text-white transition-colors duration-300"
              >
                Our Team
              </Link>
              <Link
                href="/contact"
                className="text-[#FF6300] hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-[#FF6300] hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </div>
  );
}
