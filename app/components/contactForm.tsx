import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import React from "react";

const contactForm = () => {
  return (
    <div className=" justify-center items-center">
      <div className="max-w-4xl mx-auto py-4 flex flex-col gap-4">
        <Input placeholder="Name" size="lg" />
        <Input placeholder="Email" size="lg" />
        <Textarea radius="sm" placeholder="Message" size="lg" />
        <Button
          className="bg-gradient-to-r from-[#FF6300] to-[#C23732] text-white font-bold text-xl py-7 mt-4"
          radius="sm"
        >
          Get A Quote
        </Button>
      </div>
    </div>
  );
};

export default contactForm;
