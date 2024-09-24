import React from 'react';

const WalletPopup: React.FC = () => {
  const handleGetStarted = () => {
    // Logic for starting the wallet setup process
    console.log('Get started clicked');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1e1e2d] p-6 rounded-lg text-center relative max-w-sm w-full">
        {/* Close button */}
        <button className="absolute top-3 right-3 bg-transparent text-gray-400 hover:text-white">
          <span className="text-xl">&times;</span>
        </button>

        {/* Heading */}
        <h1 className="text-white text-lg mb-4">You'll need a wallet on Solana to continue</h1>

        {/* Wallet icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-700 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12 text-indigo-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M9 16h11M4 14h.01M4 18h.01M5 16h.01"
              />
            </svg>
          </div>
        </div>

        {/* Get started button */}
        <button
          onClick={handleGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default WalletPopup;
