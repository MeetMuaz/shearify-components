"use client";
import React, { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="border-b border-gray-300 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="p-4 md:p-6 lg:p-8 flex items-center justify-between">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {question}
          </h2>
          <span
            className={`transform ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
          >
            &#9660;
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 md:p-6 lg:p-8">
          <p className="mt-2">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
