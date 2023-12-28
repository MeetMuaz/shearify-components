import React, { FC } from "react";

interface GuidanceProps {
  title: string;
  content: string;
}

const Guidance: FC<GuidanceProps> = ({ title, content }) => {
  return (
    <div className="mb-5">
      <h1 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
        {title}
      </h1>
      <p className="text-center mt-3 text-base md:text-lg lg:text-xl xl:text-2xl">
        {content}
      </p>
    </div>
  );
};

export default Guidance;
