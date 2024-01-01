import Image from "next/image";
import Link from "next/link";
import FAQ from "./components/Faq";
import Guidance from "./components/Guidance";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-700 flex items-center justify-center">
      <div className="px-5 max-w-7xl mx-auto text-center">
        <h1 className="text-white text-lg md:text-4xl mt-2 md:mt-5 font-semibold">
          Shearify Membership Plan
        </h1>
        <div className="flex flex-col md:flex-row md:justify-start">
          <span className="backdrop-blur-sm bg-white/30 rounded-lg mb-2 md:mb-0 md:mr-2 px-4">
            <span className="text-white">Free</span>
          </span>
          <span className="backdrop-blur-sm bg-white/30 rounded-lg px-4">
            <span className="text-white">Premium</span>
          </span>
        </div>
      </div>
    </div>
  );
}
