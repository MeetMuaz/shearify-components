import React from "react";
import Image from "next/image";

interface Step1Props {
  onNext: () => void;
}

const jobData = [
  { name: "Barber", imageSrc: "/barber.png" },
  { name: "Designer", imageSrc: "/barber.png" },
  { name: "Developer", imageSrc: "/barber.png" },
  { name: "Teacher", imageSrc: "/barber.png" },
  { name: "Chef", imageSrc: "/barber.png" },
  { name: "Writer", imageSrc: "/barber.png" },
  { name: "Artist", imageSrc: "/barber.png" },
  { name: "Photographer", imageSrc: "/barber.png" },
];

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
        What's your work type?
      </h1>

      <div className="bg-[#F3CCF3] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg my-10 w-full ">
        <div className="flex flex-row w-full overflow-x-auto">
          {jobData.map((job, index) => (
            <div
              key={index}
              className="bg-white h-72 min-w-48 sm:min-w-64 rounded-lg mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center"
            >
              <div>
                <Image
                  alt={`${job.name} logo`}
                  src={job.imageSrc}
                  width={80} // Adjust as needed
                  height={80} // Adjust as needed
                />
                <p className="text-center">{job.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
