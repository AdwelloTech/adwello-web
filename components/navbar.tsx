import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const navbarY = useTransform(scrollY, [0, 100], [0, -20]);
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const chatImage = {
    src: "/chat-button.png",
    alt: "Chat",
    width: 24,
    height: 24,
  };

  // Check if link is active - only after component is mounted
  const isActive = (href: string) => {
    if (!mounted) return false;

    if (href === "/#home" || href === "#home") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname === href;
  };

  // Animation variants
  const navItemVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const scrollNavbarVariants = {
    initial: { y: 0, opacity: 1, scale: 1 },
    scrolled: {
      y: -10,
      opacity: 0.95,
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const isHomePage =
      window.location.pathname === "/" || window.location.pathname === "/home";

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(element, { offset: -100 });
        } else {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      // Use router.push for hash navigation to avoid full reload and lag
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 mt-4 bg-transparent"
      style={{ y: navbarY, opacity: navbarOpacity, scale: navbarScale }}
      variants={scrollNavbarVariants}
      animate={isScrolled ? "scrolled" : "initial"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-transparent">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 mt-4"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            animate={isScrolled ? { scale: 0.95 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/adwello-logo.png"
              alt="Adwello"
              width={120}
              height={32}
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:block border-1 border-[#FF6300] rounded-3xl px-8 py-2 bg-[#111111] mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: isScrolled ? 0.95 : 1,
              // y: isScrolled ? -5 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              scale: { duration: 0.3 },
              y: { duration: 0.3 },
            }}
          >
            <div className="px-14 flex items-center space-x-10">
              <motion.a
                href="/#home"
                className={`px-3 py-2 text-md font-bold rounded-md transition-colors duration-200 relative ${
                  isActive("/#home")
                    ? "text-[#FF6300]"
                    : "text-white hover:text-[#FF6300]"
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isScrolled ? { y: -1 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6300]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                Home
              </motion.a>
              <motion.a
                href="#services"
                className={`px-3 py-2 text-md font-bold rounded-md transition-colors duration-200 relative ${
                  isActive("#services")
                    ? "text-[#FF6300]"
                    : "text-white hover:text-[#FF6300]"
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isScrolled ? { y: -1 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6300]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                Services
              </motion.a>
              <motion.a
                href="/about-us"
                className={`px-3 py-2 text-md font-bold rounded-md transition-colors duration-200 relative ${
                  isActive("/about-us")
                    ? "text-[#FF6300]"
                    : "text-white hover:text-[#FF6300]"
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isScrolled ? { y: -1 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6300]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                About Us
              </motion.a>
              <motion.a
                href="/blog"
                className={`px-3 py-2 text-md font-bold rounded-md transition-colors duration-200 relative ${
                  isActive("/blog")
                    ? "text-[#FF6300]"
                    : "text-white hover:text-[#FF6300]"
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isScrolled ? { y: -1 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6300]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                Blog
              </motion.a>
              <motion.a
                href="/our-team"
                className={`px-3 py-2 text-md font-bold rounded-md transition-colors duration-200 relative ${
                  isActive("/our-team")
                    ? "text-[#FF6300]"
                    : "text-white hover:text-[#FF6300]"
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isScrolled ? { y: -1 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6300]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                Our Team
              </motion.a>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block mt-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: isScrolled ? 0.95 : 1,
              y: isScrolled ? -5 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              scale: { duration: 0.3 },
              y: { duration: 0.3 },
            }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="light"
                href="/contact"
                as={Link}
                startContent={
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    animate={isScrolled ? { rotate: 2 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={chatImage.src}
                      alt={chatImage.alt}
                      width={chatImage.width}
                      height={chatImage.height}
                      className="w-8 h-8 hover:scale-110 transition-all duration-300"
                    />
                  </motion.div>
                }
              >
                <span className="text-md font-bold underline underline-offset-6 mb-1">
                  Let's Talk
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isScrolled ? { scale: 0.95 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FF6300] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <motion.a
              href="#home"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive("/#home")
                  ? "bg-[#FF6300] text-white"
                  : "text-gray-900 hover:bg-[#FF6300] hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                setIsMenuOpen(false); // Close mobile menu after clicking
              }}
            >
              Home
            </motion.a>
            <motion.a
              href="#services"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive("#services")
                  ? "bg-[#FF6300] text-white"
                  : "text-gray-900 hover:bg-[#FF6300] hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
                setIsMenuOpen(false); // Close mobile menu after clicking
              }}
            >
              Services
            </motion.a>
            <motion.a
              href="/about-us"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive("/about-us")
                  ? "bg-[#FF6300] text-white"
                  : "text-gray-900 hover:bg-[#FF6300] hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="/blog"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive("/blog")
                  ? "bg-[#FF6300] text-white"
                  : "text-gray-900 hover:bg-[#FF6300] hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.a>
            <motion.a
              href="/our-team"
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                isActive("/our-team")
                  ? "bg-[#FF6300] text-white"
                  : "text-gray-900 hover:bg-[#FF6300] hover:text-white"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Team
            </motion.a>
            <motion.div
              className="px-3 py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Let's Talk</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default AppNavbar;
