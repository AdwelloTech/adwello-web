import React from "react";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import { Calendar, Clock, Globe } from "lucide-react";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <>
      <section className="relative bg-[#121212] min-h-screen">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/results/upside-down.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
          <Image
            src="/results/top-wave.png"
            alt="Hero Background"
            width={1000}
            height={1000}
            className="w-full h-[100vh] object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col items-center text-center px-4 sm:px-0">
          <h1 className="text-4xl sm:text-6xl max-w-4xl font-bold leading-tight text-white mt-20 sm:mt-34 px-4 sm:px-0">
            Let's Build the Next Big Thing Together
          </h1>
          <p className="text-[#9F9999] text-lg sm:text-2xl max-w-2xl mt-6 sm:mt-10 font-semibold px-4 sm:px-0">
            Get in touch to discuss your project, explore ideas, or just say
            hello. We'll respond within 24 hours.
          </p>
          <div className="flex justify-center mt-6 sm:mt-8">
            <svg
              width="240"
              height="2"
              viewBox="0 0 240 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 sm:w-auto"
            >
              <rect width="240" height="2" fill="#FF6300" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 sm:mt-10 px-4 sm:px-0">
            <Chip
              startContent={<Calendar className="text-[#FF6300] gap-2" />}
              variant="flat"
              radius="full"
              className="p-4 sm:p-6"
            >
              <span className="text-[#E3E3E3CC] font-semibold text-sm sm:text-base">
                Available 7 Days
              </span>
            </Chip>
            <Chip
              startContent={<Clock className="text-[#FF6300] gap-2" />}
              variant="flat"
              radius="full"
              className="p-4 sm:p-6"
            >
              <span className="text-[#E3E3E3CC] font-semibold text-sm sm:text-base">
                24 Hours Support
              </span>
            </Chip>
            <Chip
              startContent={<Globe className="text-[#FF6300] gap-2" />}
              variant="flat"
              radius="full"
              className="p-4 sm:p-6"
            >
              <span className="text-[#E3E3E3CC] font-semibold text-sm sm:text-base">
                Global Support
              </span>
            </Chip>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-30 mt-8 sm:mt-10 max-w-2xl px-4 sm:px-0">
            {/* Prefer to chat - WhatsApp */}
            <a
              href="https://wa.me/358468011376"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200 cursor-pointer p-2 sm:p-0"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/contact/contact-whatsapp.png"
                  alt="WhatsApp"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold text-lg sm:text-xl text-start">
                  Prefer to chat?
                </p>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold">
                  Message us on whatsapp
                </p>
              </div>
            </a>

            {/* Prefer to call */}
            <a
              href="tel:+358468011376"
              className="flex items-center space-x-3 sm:space-x-4 hover:scale-105 transition-transform duration-200 cursor-pointer p-2 sm:p-0"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/contact/contact-call.png"
                  alt="Call"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold text-lg sm:text-xl text-start">
                  Prefer to call?
                </p>
                <p className="text-gray-400 text-xs sm:text-sm font-semibold">
                  We're happy to talk
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4 sm:p-14">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
