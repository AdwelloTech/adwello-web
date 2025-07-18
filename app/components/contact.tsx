import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section className="relative bg-[#121212] min-h-screen py-20">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <Image
          src="/contact/contact-bg.png"
          alt="Contact Background"
          width={1000}
          height={1000}
          className="w-full h-[100vh] object-cover opacity-20"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-20 gap-6">
        <h1 className="text-5xl font-bold text-white">
          Ready to grow your business?
        </h1>
        <p className="text-[#9F9999] text-2xl font-bold text-center ">
          Let’s talk about your project.
        </p>
        <div className="flex justify-center">
          <svg
            width="200"
            height="2"
            viewBox="0 0 200 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="2" fill="#FF6300" />
          </svg>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
