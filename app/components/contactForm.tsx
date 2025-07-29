"use client";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import React, { useState } from "react";

const contactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        console.log("Form submitted successfully:", result);
      } else {
        setError("Failed to submit form. Please try again.");
        console.error("Form submission failed:", result);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-4 md:px-8">
      {submitted ? (
        <div className="max-w-2xl w-full mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF6300] mb-4">
            Thank you!
          </h2>
          <p className="text-white text-lg mb-4">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl w-full mx-auto py-4 flex flex-col gap-4 md:gap-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="68265397-3085-4dee-8693-c29c308ff467"
          />
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
              {error}
            </div>
          )}

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
          <Input
            name="subject"
            placeholder="Subject (optional)"
            size="lg"
            className="w-full"
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
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold text-lg md:text-xl py-6 md:py-7 mt-2 md:mt-4 w-full md:self-center hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            radius="sm"
          >
            {isSubmitting ? "Sending..." : "Get A Quote"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default contactForm;
