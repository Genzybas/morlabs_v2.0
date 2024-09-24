"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import Image from "next/image";


const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Samuel Bassey",
    title: "CEO Kextraco.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "John Deo",
    title: "MARKETING @ APPLE INC.",
    img: "/image/avatar2.png",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Genzy Bassey",
    title: "CFO @ APPLE INC..",
    img: "/image/avatar3.png",
  },
];

export function Testimonials() {
  return (
    <div className="bg-black text-white py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Why Devs Love Morlabs</h2>
        <p className="text-lg text-gray-400">Over 100+ Developers use Morlabs for Web3 integration</p>
      </div>

      {/* Testimonials container */}
      <div className="flex justify-center space-x-8">
        {/* First testimonial */}
        <div className="bg-[#141414] rounded-xl p-8 w-[300px]">
          <p className="text-sm text-gray-400">
            "Thanks to Morlabs, I was able to significantly accelerate the development of our new NFT marketplace on Solana."
          </p>
          <p className="font-bold mt-4">- Faith Igwe</p>
          <p className="text-sm text-gray-400">Project Manager</p>
        </div>

        {/* Highlighted testimonial */}
        <div className="bg-gradient-to-br from-green-500  via-green-300 to-teal-200 text-black p-8 rounded-xl w-[350px] max-w-md mx-auto">
        {/* className="bg-gradient-to-b from-teal-400 to-green-500 text-black rounded-xl p-8 w-[350px]"> */}
          <h3 className="text-xl font-bold mb-4">Morlabs has been a game-changer!</h3>
          <p className="text-sm mb-6">
            "I've been struggling to find high-quality APIs for my Solana-based NFT marketplace. Morlabs has been a game-changer! Their API directory is incredibly comprehensive, and the pre-built SDKs have saved me countless hours of development time."
          </p>
          <p className="text-sm mb-4">
            "The testing environment has also been invaluable for ensuring seamless integration."
          </p>
          <div className="flex items-center space-x-4">
            <Image
              width={50}
              height={50}
              src="/image/avatar1.jpg" // Placeholder image path
              alt="Samuel Basssey"
              className="rounded-full"
            />
            <div>
              <p className="font-bold">Samuel Bassey</p>
              <p className="text-sm text-black">Solana DApp Dev, CEO Kextraco</p>
            </div>
          </div>
        </div>

        {/* Third testimonial */}
        <div className="bg-[#141414] rounded-xl p-8 w-[300px]">
          <p className="text-sm text-gray-400">
            "Morlabs has been a fantastic addition to my workflow. The API documentation is clear and concise, making it easy to understand and implement."
          </p>
          <p className="font-bold mt-4">- Dandy Anonymous</p>
          <p className="text-sm text-gray-400">Lead Dev, Solana Labs</p>
        </div>
      </div>

      {/* Arrows for navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        <button className="rounded-full p-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
          &larr;
        </button>
        <button className="rounded-full p-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
          &rarr;
        </button>
      </div>
    </div>
  );
}





//   return (
//     <section className="px-10 !py-20">
//       <div className="container mx-auto">
//         <div className="mb-20 flex w-full flex-col items-center">
//           <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-green-900 text-white ">
//             <UserIcon className="h-6 w-6" />
//           </div>
//           <Typography variant="h2" color="white" className="mb-2">
//             Why Devs Love Morlabs
//           </Typography>
//           <Typography
//             variant="lead"
//             className="mb-10 max-w-3xl text-center !text-gray-100"
//           >
//             Over 100+ Developers use Morlabs <br /> for Web3 intergration
//           </Typography>
//         </div>
//         <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
//           {TESTIMONIALS.map((props, key) => (
//             <TestimonialCard key={key} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default Testimonials;
