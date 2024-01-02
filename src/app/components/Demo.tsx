import React from "react";

export default function Demo() {
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
        <input
          type="text"
          placeholder="About Service"
          id="aboutService"
          className="block border text-slate-600 py-1 px-2 outline-gray-700 rounded w-full md:max-w-md"
        />
      </div>
    </div>
  );
}
