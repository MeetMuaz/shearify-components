"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";

export default function Home() {
  const [step, setStep] = useState(1);
  const style = { backgroundImage: "url('/section.webp')" };

  const nextStep = () => {
    if (step >= 7) {
      setStep(7);
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
            <Step1 onNext={nextStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step2 onNext={nextStep} onBack={backStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step3 onNext={nextStep} onBack={backStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step4 onNext={nextStep} onBack={backStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step5 onNext={nextStep} onBack={backStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step6 onNext={nextStep} onBack={backStep} />
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
              exit: { opacity: 0, y: -100 }, // Adjust y to negative for sliding out to the top
            }}
          >
            <Step7 onNext={nextStep} onBack={backStep} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left side with 30% width and gold background */}
      <div
        className="w-1/3 h-full p-4 sm:p-5 z-10 bg-gradient-to-br from-black via-[#de9005] to-black bg-cover bg-center"
        style={style}
      >
        <p>left</p>
      </div>

      {/* Right side with 70% width and blue background */}
      <div className="w-2/3 h-full bg-white p-4 sm:p-5 overflow-y-auto">
        <AnimatePresence>{renderStep()}</AnimatePresence>

        <div className="flex justify-between">
          <button
            onClick={backStep}
            className="bg-[#de9005] text-white px-3 py-2 text-base sm:px-4 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl xl:px-10 xl:py-5 xl:text-2xl rounded-lg"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="bg-[#de9005] text-white px-3 py-2 text-base sm:px-4 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-xl xl:px-10 xl:py-5 xl:text-2xl rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
