import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ">
        <Image
          src="/images/app.png"
          alt="app"
          width={800}
          height={800} data-aos="zoom-in" data-aos-anchor-placement="top-center" 
          className="object-cover"
        />
        <div>
            {/* Heading */}
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Connecting our user with iOS & Android apps, Download from iTune &
            Play store
          </h1>
          {/* Description */}
          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            voluptates error consequuntur corporis, iure id assumenda
            necessitatibus, ducimus veritatis minima provident repellendus omnis
            distinctio, a eos cumque exercitationem. Amet, odit.
          </p>
          {/* download buttons */}
          <div className="sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8">
            {/* App store button */}
            <a href="#_" className="flex w-fit items-center border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300 ">
                <FaApple className="text-2xl mr-2 text-white transition-all duration-300 " />
                <div>
                    <p className="text-xs text-white transition-all duration-300">Download on the</p>
                    <p className="text-sm font-semibold text-white transition-all duration-300">App Store</p>
                </div>
            </a>
            {/* Google play button */}
            <a href="#_" className="flex w-fit items-center border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300 ">
                <FaGooglePlay className="text-2xl mr-2 text-white transition-all duration-300 " />
                <div>
                    <p className="text-xs text-white transition-all duration-300">Download on the</p>
                    <p className="text-sm font-semibold text-white transition-all duration-300">GooglePlay</p>
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
