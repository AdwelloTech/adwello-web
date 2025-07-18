"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
