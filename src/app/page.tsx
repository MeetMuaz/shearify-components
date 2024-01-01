"use client";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function Home() {
  const [firstBtn, setFirstBtn] = useState(true);

  return (
    <div className="bg-white mx-auto max-w-7xl px-5 py-10">
      <h1 className="text-center text-4xl md:text-6xl text-[#000000]">
        Find Your Perfect Plan
      </h1>
      <p className="text-center text-base max-w-2xl mx-auto mt-6 text-[#797878]">
        Discover the ideal plan to fuel your business growth. Our pricing
        options are carefully crafted to cater to businesses.
      </p>
      <div className="flex justify-center">
        <div className="border border-[#de9005] bg-[#FBFBFB] rounded-lg mt-4 p-1 shadow-lg">
          <button
            onClick={() => {
              setFirstBtn(true);
            }}
            className={
              firstBtn
                ? "bg-[#de9005] text-[#FFFFFF] py-2 px-4 md:py-3 md:px-6 rounded-lg text-base md:text-2xl"
                : "py-2 px-4 md:py-3 md:px-6 rounded text-[#797878] text-base md:text-2xl"
            }
          >
            Monthly
          </button>
          <button
            onClick={() => {
              setFirstBtn(false);
            }}
            className={
              firstBtn
                ? "py-2 px-4 md:py-3 md:px-6 rounded text-[#797878] text-base md:text-2xl"
                : "bg-[#de9005] text-[#FFFFFF] py-2 px-4 md:py-3 md:px-6 rounded-lg text-base md:text-2xl"
            }
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center gap-5">
        {/* card 1 */}
        <div className="border border-[#de9005] w-full md:w-[488px] shadow-lg rounded-lg flex justify-between flex-col p-4 md:p-6">
          <div className="shadow-sm h-[56px] w-[56px] bg-[#de9005] mb-4 rounded-lg flex justify-center items-center">
            <RocketLaunchIcon style={{ color: "#FFFFFF" }} />
          </div>
          <h1 className="text-[#1B223C] text-xl md:text-5xl pb-2 md:pb-4">
            Community
          </h1>
          <p className="text-[#797878] text-base md:text-2xl pb-2 md:pb-4">
            Unleash the Power of Your Business with Pro Plan.
          </p>
          <span className="text-[#1B223C] text-2xl md:text-6xl pb-2 md:pb-4">
            FREE{" "}
            <span className="text-[#797878] text-base md:text-2xl">
              per month
            </span>
          </span>
          <hr className="pb-2 md:pb-4" />
          <div>
            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon />
              <p className="ml-2 md:ml-4">Enhanced Analytics</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon />
              <p className="ml-2 md:ml-4">Custom Domain</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon />
              <p className="ml-2 md:ml-4">E-commerce Integration</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon />
              <p className="ml-2 md:ml-4">Priority Support</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon />
              <p className="ml-2 md:ml-4">Advanced Security</p>
            </div>
          </div>
          <button className="text-[#de9005] border border-[#de9005] py-1.5 md:py-2 rounded shadow-sm">
            Get Started
          </button>
        </div>

        {/* card 2 */}
        <div className="border border-[#0553DE] bg-[#0553DE] w-full md:w-[488px] shadow-lg rounded-lg flex justify-between flex-col p-4 md:p-6">
          <div className="shadow-sm h-[56px] w-[56px] bg-[#de9005] mb-4 rounded-lg flex justify-center items-center">
            <DiamondIcon style={{ color: "#FFFFFF" }} />
          </div>
          <h1 className="text-white text-xl md:text-5xl pb-2 md:pb-4">
            Professional
          </h1>
          <p className="text-white text-base md:text-2xl pb-2 md:pb-4">
            Unleash the Power of Your Business with Pro Plan.
          </p>
          <span className="text-white text-2xl md:text-6xl pb-2 md:pb-4">
            {firstBtn ? 20 : 240}{" "}
            <span className="text-base md:text-2xl">per month</span>
          </span>
          <hr className="pb-2 md:pb-4" />
          <div>
            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon style={{ color: "#FFFFFF" }} />
              <p className="ml-2 md:ml-4 text-white">Enhanced Analytics</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon style={{ color: "#FFFFFF" }} />
              <p className="ml-2 md:ml-4 text-white">Custom Domain</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon style={{ color: "#FFFFFF" }} />
              <p className="ml-2 md:ml-4 text-white">E-commerce Integration</p>
            </div>

            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon style={{ color: "#FFFFFF" }} />
              <p className="ml-2 md:ml-4 text-white">Priority Support</p>
            </div>
            <div className="flex items-center pb-2 md:pb-4">
              <CheckIcon style={{ color: "#FFFFFF" }} />
              <p className="ml-2 md:ml-4 text-white">Advanced Security</p>
            </div>
          </div>
          <button className="text-white bg-[#de9005] border border-[#de9005] py-1.5 md:py-2 rounded shadow-sm">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
