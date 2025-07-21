"use client";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import React, { useState } from "react";

const contactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex justify-center items-center px-4 md:px-8">
      {submitted ? (
        <div className="max-w-2xl w-full mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF6300] mb-4">
            Thank you!
          </h2>
          <p className="text-white text-lg">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-4xl w-full mx-auto py-4 flex flex-col gap-4 md:gap-6"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <Input
            name="name"
            placeholder="Name"
            size="lg"
            className="w-full"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            size="lg"
            className="w-full"
            required
          />
          <Textarea
            name="message"
            radius="sm"
            placeholder="Message"
            size="lg"
            className="w-full min-h-[120px] md:min-h-[150px]"
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold text-lg md:text-xl py-6 md:py-7 mt-2 md:mt-4 w-full  md:self-center hover:scale-105 transition-transform duration-300"
            radius="sm"
          >
            Get A Quote
          </Button>
        </form>
      )}
    </div>
  );
};

export default contactForm;
