"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setMousePosition({ x: 0, y: 0 });
  };

  // Animation variants
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const rocketVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" },
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

  return (
    <section
      id="home"
      className="relative bg-[#121212] min-h-screen lg:min-h-screen overflow-hidden py-12 sm:py-16 lg:py-0"
    >
      {/* Background Images */}
      <motion.div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/hero/bg-wave-hero.png"
          alt="Hero Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </motion.div>

      {/* Growth background - hidden on mobile */}
      <motion.div
        className="absolute bottom-0 right-80 opacity-50 z-10 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Image
          src="/hero/growth.png"
          alt="Growth Background"
          width={1000}
          height={1000}
          className="w-[1000px] h-[1000px] object-cover opacity-20"
        />
      </motion.div>

      {/* Orange pattern - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <Image
          src="/hero/orange-pattern-bg.png"
          alt="Rocket Man Shape"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0 opacity-30 z-0 w-[1200px] h-[1000px] hidden lg:block"
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-20 max-w-screen-2xl mx-auto lg:min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 lg:min-h-screen">
          {/* Left: Main Content */}
          <div className="flex flex-col justify-center gap-4 py-8 lg:pt-0 order-2 lg:order-1">
            <h2 className="text-[#FF6300] text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left">
              WE ARE ADWELLO
            </h2>

            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-[5rem] font-bold leading-tight max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              Your Digital Partner In Growth
            </h1>

            <p className="text-white max-w-xl text-base sm:text-lg lg:text-[1.5rem] text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0">
              We design high-performance websites and strategic marketing
              systems that help startups and growing businesses scale faster and
              win online.
            </p>

            <motion.div
              className="flex justify-center lg:justify-start mt-6 text-white font-bold text-lg sm:text-xl lg:text-2xl relative"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                className="relative inline-flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    <motion.span
                      className="absolute -left-2 -top-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#FF6300] rounded-full z-0 opacity-50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <a
                      href="https://calendly.com/adwellomarketing/adwello-book-a-free-consultation"
                      className="relative z-10"
                    >
                      <span className="relative z-10">
                        BOOK &nbsp;A FREE CONSULTATION +
                      </span>
                    </a>
                  </span>
                </motion.span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Rocket Man with Stats Cards */}
          <motion.div
            className="relative w-full flex items-center justify-center z-10 order-1 lg:order-2 pt-10 lg:pt-0"
            variants={rocketVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${mouseXSpring}deg) rotateX(${-mouseYSpring}deg)`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stats Cards */}
            <motion.div
              className="absolute top-80 left-0 z-20"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-12 py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-2xl font-bold">150+</div>
                  <div className="text-white text-sm font-medium">Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-10 transform -translate-y-1/2 -translate-x-1/2 z-20"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
              style={{ animationDelay: "1s" }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-12 py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-2xl font-bold">12+</div>
                  <div className="text-white text-sm font-medium">
                    Countries
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-50 left-30 transform -translate-x-1/2 z-20"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
              style={{ animationDelay: "2s" }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-12 py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-2xl font-bold">98%</div>
                  <div className="text-white text-sm font-medium">
                    Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/hero/rocket-man.png"
                alt="Rocket Man"
                width={1000}
                height={1000}
                className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
