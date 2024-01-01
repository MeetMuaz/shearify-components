import React from "react";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <div className="bg-[#F3CCF3] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg my-10 w-full grid grid-cols-2 gap-4">
        <div className="bg-white flex justify-center items-center rounded-lg w-full h-60">
          <p className="text-center">
            Black/African
            <br /> Ameriacan
          </p>
        </div>
        <div className="bg-white flex justify-center items-center rounded-lg w-full h-60">
          <p className="text-center">
            White
            <br /> Causcasian
          </p>
        </div>
        <div className="bg-white flex justify-center items-center rounded-lg w-full h-60">
          <p className="text-center">Arab</p>
        </div>
        <div className="bg-white flex justify-center items-center rounded-lg w-full h-60">
          <p className="text-center">
            Hispanic
            <br /> Latinous
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
