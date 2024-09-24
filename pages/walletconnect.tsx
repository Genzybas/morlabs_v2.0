import React from 'react';

const WalletConnectPopup: React.FC = () => {
  const wallets = [
    { name: 'MetaMask', recommended: true, icon: '/path/to/metamask-icon.png' },
    { name: 'Coinbase Wallet', recommended: false, icon: '/path/to/coinbase-icon.png' },
    { name: 'Wallet Connect', recommended: false, icon: '/path/to/walletconnect-icon.png' },
    { name: 'Trust Wallet', recommended: false, icon: '/path/to/trustwallet-icon.png' },
    { name: 'Zerion Wallet', recommended: false, icon: '/path/to/zerion-icon.png' },
    { name: 'Rainbow', recommended: false, icon: '/path/to/rainbow-icon.png' }
  ];

  const handleWalletSelect = (walletName: string) => {
    console.log(`Selected Wallet: ${walletName}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#1e1e2d] p-6 rounded-lg relative w-full max-w-lg text-white">
        {/* Close button */}
        <button className="absolute top-3 right-3 bg-transparent text-gray-400 hover:text-white">
          <span className="text-xl">&times;</span>
        </button>

        {/* Header */}
        <div className="flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 10h16M9 16h11M4 14h.01M4 18h.01M5 16h.01"
            />
          </svg>
          <h1 className="text-xl font-bold">Connect a Wallet</h1>
        </div>

        {/* Popular section */}
        <h2 className="text-gray-400 mb-4">Popular</h2>
        <div className="space-y-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-700 rounded-md"
              onClick={() => handleWalletSelect(wallet.name)}
            >
              <div className="flex items-center space-x-4">
                {/* Wallet Icon */}
                <img src={wallet.icon} alt={`${wallet.name} logo`} className="w-10 h-10" />
                {/* Wallet Name */}
                <div>
                  <p className="font-medium">{wallet.name}</p>
                  {wallet.recommended && <p className="text-sm text-gray-400">Recommended</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletConnectPopup;
