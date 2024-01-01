import React from "react";
import Image from "next/image";

interface Step6Props {
  onNext: () => void;
  onBack: () => void;
}

const Step6: React.FC<Step6Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        Let us fill in your business profile details
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Let us get your account ready by uploading your works.
      </p>

      <div className="rounded-lg my-10 w-full grid grid-cols-2 gap-4">
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
        <div className="bg-[#F3CCF3] rounded-lg flex justify-center items-center  w-full h-60">
          <Image alt="camera" src="/camera.png" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Step6;
