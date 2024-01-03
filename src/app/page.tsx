"use client";
import React, { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
} from "./components/Steps";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface StepperProps {
  number: number;
  label: string;
  content: string;
  hasNext: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  number,
  label,
  content,
  hasNext,
}) => (
  <div className="flex items-center mb-4">
    <div className="bg-[#747272] rounded-full h-8 w-8 flex items-center justify-center text-white relative z-10">
      {hasNext ? (
        <div className="absolute h-10 w-[2px] bg-[#747272] top-8"></div>
      ) : null}
      {number}
    </div>
    <div>
      <div className="ml-4 text-lg text-[#000000]">{label}</div>
      <div className="ml-4 text-sm text-slate-600">{content}</div>
    </div>
  </div>
);

const steps = [
  {
    number: 1,
    label: "Step 1",
    content: "Fill out application form",
    hasNext: true,
  },
  { number: 2, label: "Step 2", content: "Upload resume", hasNext: true },
  {
    number: 3,
    label: "Step 3",
    content: "Complete skills assessment",
    hasNext: true,
  },
  {
    number: 4,
    label: "Step 4",
    content: "Schedule interview",
    hasNext: true,
  },
  { number: 5, label: "Step 5", content: "Attend interview", hasNext: true },
  { number: 6, label: "Step 6", content: "Receive job offer", hasNext: true },
  {
    number: 7,
    label: "Step 7",
    content: "Submit required documents",
    hasNext: false,
  },
];

const Home = () => {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (step === 9) {
    }
  }, [step]);

  const nextStep = () => {
    if (step >= 8) {
      setStep(8);
    } else {
      setStep(step + 1);
    }
  };

  const backStep = () => {
    if (step <= 1) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 100 },
            }}
          >
            <Step1 />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step2 />
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step3 />
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step4 />
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step5 />
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            key="step6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step6 />
          </motion.div>
        );
      case 7:
        return (
          <motion.div
            key="step7"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step7 />
          </motion.div>
        );
      case 8:
        return (
          <motion.div
            key="step7"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -100 },
            }}
          >
            <Step8 />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-row gap-5 my-10">
      <div className="w-1/3 h-full">
        <div className="bg-white border border-[#de9005] rounded-lg shadow-lg px-5 py-5 mb-4">
          {steps.map((step, index) => (
            <div key={index}>
              <Stepper
                number={step.number}
                label={step.label}
                content={step.content}
                hasNext={step.hasNext}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 h-full">
        <div className="bg-[#fefefe] rounded-lg shadow-lg px-5 py-5">
          <AnimatePresence>{renderStep()}</AnimatePresence>
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={backStep}
            className="flex items-center justify-center px-4 py-2 text-white bg-[#747272] rounded-lg shadow-lg"
          >
            <ArrowBackIcon className="mr-2 h-5 w-5" />
            Previous
          </button>
          <button
            onClick={nextStep}
            className="flex items-center justify-center px-4 py-2 text-white bg-[#de9005] rounded-lg shadow-lg"
          >
            Next
            <ArrowForwardIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
