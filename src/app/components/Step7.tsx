import React from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";

interface Step7Props {
  onNext: () => void;
  onBack: () => void;
}

const Step7: React.FC<Step7Props> = ({ onNext, onBack }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        Let's add your services
      </h1>

      <div className="flex justify-center mb-4">
        <Image
          alt="folder"
          src="/folder.gif"
          width={90}
          height={90}
          className=""
        />
      </div>

      <p className="text-center mb-4">
        Click the button below to add services you offer
      </p>

      <div className="flex justify-center">
        <button className="border border-[#de9005] rounded text-[#de9005] px-4 py-2 md:px-6 md:py-3 cursor-pointer">
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Step7;
