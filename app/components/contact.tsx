import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section className="relative bg-[#121212] min-h-screen py-12 md:py-20">
      {/* Background Images */}
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

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl font-bold leading-tight text-white mt-20 md:mt-34">
          Let's Build the Next Big Thing Together
        </h1>
        <p className="text-[#9F9999] text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 md:mt-10 font-semibold">
          Get in touch to discuss your project, explore ideas, or just say
          hello. We'll respond within 24 hours.
        </p>
        <div className="flex justify-center mt-6 md:mt-8">
          <svg
            width="240"
            height="2"
            viewBox="0 0 240 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="240" height="2" fill="#FF6300" />
          </svg>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 lg:px-14 mt-12 md:mt-16">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
