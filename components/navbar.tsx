"use client";

import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const chatImage = {
    src: "/chat-button.png",
    alt: "Chat",
    width: 24,
    height: 24,
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 mt-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-transparent">
          {/* Logo */}
          <div className="flex-shrink-0 mt-4 ">
            <Image
              src="/adwello-logo.png"
              alt="Adwello"
              width={120}
              height={32}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block border-1 border-[#FF6300] rounded-3xl px-8 py-2 bg-[#111111] mt-4">
            <div className="px-14 flex items-center space-x-10">
              <a
                href="#"
                className="text-gray-900 px-3 py-2 text-md font-bold text-white hover:text-[#FF6300] rounded-md transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 px-3 py-2 text-md font-bold text-white hover:text-[#FF6300] rounded-md transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/about-us"
                className="text-gray-900 px-3 py-2 text-md font-bold text-white hover:text-[#FF6300] rounded-md transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/blog"
                className="text-gray-900 px-3 py-2 text-md font-bold text-white hover:text-[#FF6300] rounded-md transition-colors duration-200"
              >
                Blog
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block mt-4">
            <Button
              variant="light"
              href="/contact"
              as={Link}
              startContent={
                <Image
                  src={chatImage.src}
                  alt={chatImage.alt}
                  width={chatImage.width}
                  height={chatImage.height}
                  className="w-8 h-8 hover:scale-110 transition-all duration-300"
                />
              }
            >
              <span className="text-md font-bold underline underline-offset-6 mb-1">
                Let's Talk
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-[#FF6300] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#"
              className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-[#FF6300] hover:text-white rounded-md transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-[#FF6300] hover:text-white rounded-md transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/about-us"
              className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-[#FF6300] hover:text-white rounded-md transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/blog"
              className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-[#FF6300] hover:text-white rounded-md transition-colors duration-200"
            >
              Blog
            </a>
            <div className="px-3 py-2">
              <button className="w-full bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
