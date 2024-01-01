import React from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        Let us fill in your business profile details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="fullName"
            label="Full Name / Business Name"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="location"
            label="Location / Business Location"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="country"
            label="Country of Residence"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="phoneNumber"
            label="Phone Number"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="email"
            label="Email / Business Email"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="whatsappNumber"
            label="WhatsApp Number"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="businessAddress"
            label="Shop / Business Address"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <TextField
            autoFocus={false}
            autoComplete="off"
            id="services"
            label="About Services"
            fullWidth
          />
        </div>

        <div className="mb-4">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Step2;
