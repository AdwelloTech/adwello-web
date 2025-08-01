"use client";
import React, { useState } from "react";
import Image from "next/image";
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
      transition: { duration: 0.5 },
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
      className="relative bg-[#121212] min-h-screen overflow-hidden py-8 sm:py-12 lg:py-16"
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

      {/* Growth background - hidden on mobile and smaller screens */}
      <motion.div
        className="absolute bottom-0 right-80 opacity-50 z-10 pointer-events-none hidden xl:block"
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

      {/* Orange pattern - hidden on mobile and smaller screens */}
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
          className="absolute bottom-0 right-0 opacity-30 z-0 w-[1200px] h-[1000px] hidden xl:block"
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 min-h-screen items-center">
          {/* Left: Main Content */}
          <div className="flex flex-col justify-center gap-4 py-8 lg:pt-0 order-2 lg:order-1">
            <h2 className="text-[#FF6300] text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-center lg:text-left">
              WE ARE ADWELLO
            </h2>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              Your Digital Partner In Growth
            </h1>

            <p className="text-white max-w-xl text-sm sm:text-base lg:text-lg xl:text-xl text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0 leading-relaxed">
              We design high-performance websites and strategic marketing
              systems that help startups and growing businesses scale faster and
              win online.
            </p>

            <motion.div
              className="flex justify-center lg:justify-start mt-4 sm:mt-6 relative"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button
                className="relative inline-flex items-center cursor-pointer"
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative">
                    <a
                      href="https://calendly.com/adwellomarketing/adwello-book-a-free-consultation"
                      className="relative z-10 inline-flex items-center justify-center bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-lg text-sm sm:text-base lg:text-lg xl:text-xl shadow-lg hover:shadow-xl hover:shadow-[#FF6300]/25 transition-all duration-300 border-2 border-transparent hover:border-[#FF6300]/30"
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
            className="relative w-full flex items-center justify-center z-10 order-1 lg:order-2 pt-6 lg:pt-0"
            variants={rocketVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${mouseXSpring}deg) rotateX(${-mouseYSpring}deg)`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stats Cards - Hidden on smaller screens */}
            <motion.div
              className="absolute top-60 sm:top-80 left-0 z-20 hidden xl:block"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 sm:px-12 py-3 sm:py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-xl sm:text-2xl font-bold">
                    150+
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium">
                    Projects
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-6 sm:right-10 transform -translate-y-1/2 -translate-x-1/2 z-20 hidden xl:block"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
              style={{ animationDelay: "1s" }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 sm:px-12 py-3 sm:py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-xl sm:text-2xl font-bold">
                    12+
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium">
                    Countries
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-40 sm:bottom-100 left-20 sm:left-30 transform -translate-x-1/2 z-20 hidden xl:block"
              variants={cardVariants}
              whileHover="hover"
              {...floatingAnimation}
              style={{ animationDelay: "2s" }}
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 sm:px-12 py-3 sm:py-4 shadow-xl">
                <div className="text-center">
                  <div className="text-[#FF6300] text-xl sm:text-2xl font-bold">
                    98%
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium">
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
                width={800}
                height={800}
                className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] 2xl:w-[600px] 2xl:h-[600px] object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
