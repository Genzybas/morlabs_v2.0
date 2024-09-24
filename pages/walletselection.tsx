import React, { useState } from 'react';

// Define the wallet information
interface Wallet {
  name: string;
  icon: string;
}

const wallets: Wallet[] = [
  { name: 'MetaMask', icon: '/path/to/metamask-icon.png' }, // Update with your icon paths
  { name: 'Coinbase Wallet', icon: '/path/to/coinbase-icon.png' },
  { name: 'Wallet Connect', icon: '/path/to/walletconnect-icon.png' },
  { name: 'Trust Wallet', icon: '/path/to/trustwallet-icon.png' },
  { name: 'Zerion Wallet', icon: '/path/to/zerionwallet-icon.png' },
  { name: 'Rainbow', icon: '/path/to/rainbow-icon.png' },
  { name: 'Phantom', icon: '/path/to/phantom-icon.png' },
];

const WalletSelection = () => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  // Handle wallet selection and show the QR code
  const handleWalletClick = (walletName: string) => {
    setSelectedWallet(walletName);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Wallet icons */}
      <div>
        <h3>Popular</h3>
        {wallets.map(wallet => (
          <div
            key={wallet.name}
            onClick={() => handleWalletClick(wallet.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '10px 0',
            }}
          >
            <img
              src={wallet.icon}
              alt={wallet.name}
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            <span>{wallet.name}</span>
          </div>
        ))}
      </div>

      {/* QR code display */}
      <div style={{ marginLeft: '50px' }}>
        {selectedWallet ? (
          <div>
            <h3>{selectedWallet} QR Code</h3>
            <img
              src="/mnt/data/scanWallet.png" // Path to the QR code image
              alt={`${selectedWallet} QR Code`}
              style={{ width: '200px', height: '200px' }}
            />
          </div>
        ) : (
          <div>
            <p>Select a wallet to see the QR code</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletSelection;
