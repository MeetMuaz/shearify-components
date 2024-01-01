import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

interface Step5Props {
  onNext: () => void;
  onBack: () => void;
}

const Step5: React.FC<Step5Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        What is your work availability
      </h1>

      <div className="mb-4">
        <p>Are you open to work now?</p>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="mb-4">
        <p>Do you accept home service?</p>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="mb-4">
        <p>What's your Home service fee</p>
        <p>An extra fee added when a customer books you for a home service.</p>
        <TextField
          autoFocus={false}
          autoComplete="off"
          id="location"
          label="ORM"
        />
      </div>
    </div>
  );
};

export default Step5;
