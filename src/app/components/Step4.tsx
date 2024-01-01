"use client";
import React from "react";
import { TextField } from "@mui/material";

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
}

const Step4: React.FC<Step4Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        What's your social media handles
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="fullName"
            label="Instagram"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="location"
            label="Facebook"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="country"
            label="Tiktok"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="phoneNumber"
            label="Twitter"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
