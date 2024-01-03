"use client";
import React, { useState } from "react";
import Image from "next/image";
import Add from "@mui/icons-material/Add";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

const jobs = [
  { title: "Barber", icon: "/barber.png" },
  { title: "Software Developer", icon: "/barber.png" },
  { title: "Chef", icon: "/barber.png" },
  { title: "Graphic Designer", icon: "/barber.png" },
];

const ethnicityTypes = [
  "Black/African American",
  "White/Caucasian",
  "Arab",
  "Hispanic/Latinous",
];

export function Step1() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">Choose Your Ideal Work Type</h1>
      </div>
      <div className="flex flex-row mb-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg h-[350px] w-[200px] flex justify-center items-center mr-5 relative ${
              selectedJob === index ? "bg-gray-800" : "bg-[#ececec]"
            }`}
            onClick={() => setSelectedJob(index)}
          >
            {selectedJob === index ? (
              <CheckBoxIcon
                sx={{
                  color: "#de9005",
                  top: "20px",
                  left: "20px",
                  position: "absolute",
                }}
              />
            ) : null}
            <div className="flex flex-col items-center">
              <img
                alt={`${job.title} icon`}
                src={job.icon}
                width={80}
                height={80}
              />
              <p
                className={`mt-2 text-center ${
                  selectedJob === index ? "text-white" : "text-slate-600"
                }`}
              >
                {job.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Step2() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">
          Let us fill in your business profile details
        </h1>
      </div>
      <div className="mb-4">
        <label htmlFor="businessName" className="text-sm text-slate-600">
          Name / Business
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter Name or Business"
          id="businessName"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="text-slate-600">
          Location
        </label>
        <input
          type="text"
          placeholder="Enter Location"
          id="location"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="businessAddress" className="text-slate-600">
          Address
        </label>
        <input
          type="text"
          placeholder="Enter Address"
          id="businessAddress"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="text-slate-600">
          Phone
        </label>
        <div className="flex w-full md:max-w-md gap-2">
          <select
            id="phoneNumberCode"
            className="border text-slate-600 py-1 px-2 outline-gray-700 rounded"
          >
            <option value="volvo">+234</option>
            <option value="saab">+91</option>
          </select>
          <input
            type="text"
            placeholder="Enter Phone"
            id="phoneNumber"
            className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="businessEmail" className="text-slate-600">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          id="businessEmail"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutService" className="text-slate-600">
          Service
        </label>
        <textarea
          id="aboutService"
          placeholder="About Service"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md h-48"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="text-slate-600">
          Gender
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            className="mr-1"
          />
          <label htmlFor="male" className="text-slate-600 mr-2">
            Male
          </label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            className="mr-1"
          />
          <label htmlFor="female" className="text-slate-600 mr-2">
            Female
          </label>

          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            className="mr-1"
          />
          <label htmlFor="other" className="text-slate-600">
            Others
          </label>
        </div>
      </div>
    </div>
  );
}

export function Step3() {
  const [selectedEtnicity, setSelectedEtnicity] = useState(null);
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">Choose your domain</h1>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {ethnicityTypes.map((ethnicity, index) => (
          <div
            key={index}
            onClick={() => setSelectedEtnicity(index)}
            className={`shadow-lg rounded-lg h-[350px] flex justify-center items-center mr-5 relative ${
              selectedEtnicity === index ? "bg-gray-800" : "bg-[#ececec]"
            }`}
          >
            {selectedEtnicity === index ? (
              <CheckBoxIcon
                sx={{
                  color: "#de9005",
                  top: "20px",
                  left: "20px",
                  position: "absolute",
                }}
              />
            ) : null}
            <p
              className={`mt-2 text-center ${
                selectedEtnicity === index ? "text-white" : "text-slate-600"
              }`}
            >
              {ethnicity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Step4() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">
          What is your social media handle
        </h1>
      </div>
      <div className="mb-4">
        <label htmlFor="aboutService" className="text-slate-600">
          Instagram
        </label>
        <input
          type="text"
          placeholder="https://instagram.com"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutService" className="text-slate-600">
          Facebook
        </label>
        <input
          type="text"
          placeholder="https://facebook.com"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutService" className="text-slate-600">
          TikTok
        </label>
        <input
          type="text"
          placeholder="https://tiktok.com"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutService" className="text-slate-600">
          Twitter
        </label>
        <input
          type="text"
          placeholder="https://twitter.com"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
    </div>
  );
}

export function Step5() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">
          Let us add your pofile picture
        </h1>
        <p className="text-slate-600 text-base">
          kindly upload your banner and profile picture for your business
        </p>
      </div>

      <div className="flex justify-center mt-24">
        <div className="bg-[#ececec] rounded-lg h-[200px] w-full flex justify-center items-center relative mb-24">
          <div className="flex flex-row items-center">
            <img alt="upload icon" src="/upload.png" width={48} height={48} />
            <span className="text-xs ml-2 text-slate-600">
              click to upload banner picture
            </span>
          </div>
          <div className="absolute h-24 w-24 bg-orange-300 rounded-full -bottom-10 left-6">
            <div className="absolute h-8 w-8 rounded-full bg-amber-500 -bottom-1 -right-1 flex justify-center items-center">
              <CameraAltIcon sx={{ fontSize: 20, color: "#FFFFFF" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Step6() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">Upload your work pictures</h1>
        <p className="text-slate-600 text-base">
          Let us get your account ready by uploading your works.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#ececec] shadow-lg rounded-lg h-[200px] flex justify-center items-center">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export function Step7() {
  return (
    <div>
      <div className="mb-2 max">
        <h1 className="text-slate-600 text-2xl">What is your availability</h1>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Monday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Tuesday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Wednesday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Tuesday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Friday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Saturday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center w-full md:max-w-md">
          <p>Sunday</p>
          <div className="flex">
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
            {"-"}
            <div className="bg-[#ececec] h-[25px] w-[150px] rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="availability-status" className="text-slate-600">
          Are you open to work now?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="yes-availability"
            name="availability-status"
            value="yes"
            className="mr-1"
          />
          <label htmlFor="yes-availability" className="text-slate-600 mr-2">
            Yes
          </label>

          <input
            type="radio"
            id="no-availability"
            name="availability-status"
            value="no"
            className="mr-1"
          />
          <label htmlFor="no-availability" className="text-slate-600 mr-2">
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="home-services" className="text-slate-600">
          Do you accept home services?
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="yes-home-services"
            name="home-services"
            value="yes"
            className="mr-1"
          />
          <label htmlFor="yes-home-services" className="text-slate-600 mr-2">
            Yes
          </label>

          <input
            type="radio"
            id="no-home-services"
            name="home-services"
            value="no"
            className="mr-1"
          />
          <label htmlFor="no-home-services" className="text-slate-600 mr-2">
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="omr-fee" className="text-slate-600 block">
          What's your Home service fee
        </label>
        <label htmlFor="omr-fee" className="text-slate-600 block text-sm">
          An extra fee added when a customer books you for a home service.
        </label>
        <input
          type="text"
          placeholder="$0"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md mt-2"
        />
      </div>
    </div>
  );
}

export function Step8() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-slate-600 text-2xl">Let's add your services</h1>
        <div className="flex justify-center mt-24">
          <img alt="" src="/folder.svg" width={100} height={100} />
        </div>
        <div className="mt-24">
          <p className="text-center text-slate-600 mb-4">
            Click the button below to add services you offer
          </p>
          <div className="flex justify-center">
            <button className="border border-[#de9005] rounded text-[#de9005] p-3 mt-3">
              <Add />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
