import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section className="relative bg-[#0C0C0C] min-h-screen py-12 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/contact/contact-bg.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 md:py-20 gap-4 md:gap-6 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center max-w-4xl">
          Ready to grow your business?
        </h1>
        <p className="text-[#9F9999] text-lg md:text-xl lg:text-2xl font-bold text-center max-w-2xl px-2">
          Let's talk about your project.
        </p>
        <div className="flex justify-center mt-2">
          <svg
            width="150"
            height="2"
            viewBox="0 0 150 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[200px]"
          >
            <rect
              width="150"
              height="2"
              fill="#FF6300"
              className="md:w-[200px]"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
