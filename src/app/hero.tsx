"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from 'react';
import { FaEthereum, FaBitcoin, FaLinkedin, FaGithub } from 'react-icons/fa'; // Placeholder icons
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si'; // Web3 specific icons

export const JoinWaitlist = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="mb-2 p-2 border border-gray-100 rounded mr-2 text-black"
          required
        />
        <button
          type="submit"
          className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
        >
          {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
          Join Waitlist
        </button>
      </form>
    </div>
  );
};


export const TrustedCompanies = () => {
  const companies = [
    { name: "Ethereum", icon: <FaEthereum />, link: '#ethereum' },
    { name: "Solana", icon: <SiSolana />, link: '#solana' },
    { name: "Polkadot", icon: <SiPolkadot />, link: '#polkadot' },
    { name: "Chainlink", icon: <SiChainlink />, link: '#chainlink' },
    { name: "Bitcoin", icon: <FaBitcoin />, link: '#bitcoin' },
    // Add more Web3 companies as needed
  ];

  return (
    <section>
        <div className="mt-10 flex justify-center space-x-6"> 
          {companies.map((company, index) => (
            <div key={index} className="company-card flex flex-col items-center">
              <div className="company-icon text-5xl text-white w-[130px] h-[60px] flex items-center justify-center mb-2p-4 border border-green-500 rounded-lg hover:bg-green-400 transition-all">
                {company.icon}
                <p className="company-name text-sm font-semibold">{company.name}</p>
              </div>
             
            </div>
          ))}
        </div>
    </section>
  );
};


function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white h-screen">
      <header className="grid !min-h-[49rem] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="text-5xl font-bold mb-4">
            Your Gateway to Seamless <br />
            Web3 Integration
            </Typography>
            <Typography
              variant="lead"
              className="text-lg mb-8"
            >
              Accelerate Your Web3 Journey: <br />Explore, Build, and Scale With Our API Directory
            </Typography>
        
            <div className="">
              <JoinWaitlist/>

            
             
            </div>
               <p className="mt-6 text-sm">Trusted by 100+ B2B companies</p>
               <TrustedCompanies />
            </div>
          
        </div>
      </header>
      
    </div>
  );
}
export default Hero;
