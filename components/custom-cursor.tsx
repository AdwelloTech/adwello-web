"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button'], [tabindex]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        /* Show default cursor for touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
          transition: isHovering ? "all 0.1s ease" : "all 0.15s ease",
        }}
      >
        {/* Main cursor dot */}
        <div
          className={`w-4 h-4 bg-white rounded-full ${
            isHovering ? "scale-150" : "scale-100"
          } transition-transform duration-200`}
        />

        {/* Outer ring */}
        <div
          className={`absolute top-1/2 left-1/2 w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? "scale-75 opacity-50" : "scale-100 opacity-30"
          } transition-all duration-300`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
