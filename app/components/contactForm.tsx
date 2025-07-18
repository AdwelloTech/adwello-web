import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import React from "react";

const contactForm = () => {
  return (
    <div className="flex justify-center items-center px-4 md:px-8">
      <div className="max-w-4xl w-full mx-auto py-4 flex flex-col gap-4 md:gap-6">
        <Input placeholder="Name" size="lg" className="w-full" />
        <Input placeholder="Email" size="lg" className="w-full" />
        <Textarea
          radius="sm"
          placeholder="Message"
          size="lg"
          className="w-full min-h-[120px] md:min-h-[150px]"
        />
        <Button
          className="bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold text-lg md:text-xl py-6 md:py-7 mt-2 md:mt-4 w-full  md:self-center hover:scale-105 transition-transform duration-300"
          radius="sm"
        >
          Get A Quote
        </Button>
      </div>
    </div>
  );
};

export default contactForm;
