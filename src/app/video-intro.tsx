"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { JoinWaitlist } from './hero';



export function VideoIntro() {
  return (
    <div className="flex justify-center items-center py-10 bg-gradient-to-br from-green-900 via-green-300 to-teal-200 text-black rounded-[46px] max-w-5xl mx-auto p-8">
      {/* <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl"> */}
        {/* <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <Image
          width={768}
          height={400}
          src="/image/bgd.png"
          className="w-full object-cover scale-110 rounded-xl h-full opacity-50"
          alt=""
        /> */}
        {/* <div className="absolute top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10"> */}
            <div className="flex flex-col items-center justify-center py-10 mx-8 sm:mx-6 -mt-24 rounded-xl  p-5 md:p-14 shadow-md w-[768px] h-[450px]">
              <Typography variant="h2" color="white" className="mb-3 text-center">
              Get Started with Web3 Development in Minutes
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal !text-white lg:w-5/14 m-4 text-center"
              >
              Join our developer community and start exploring our  API directory and SDK library right away. Easily publish  your own APIs and connect with other developers..
              </Typography>
              <div>
                <JoinWaitlist/>
              </div>

          </div>
        </div>
      // </div>
    // </div>
  );  
}

export default VideoIntro;