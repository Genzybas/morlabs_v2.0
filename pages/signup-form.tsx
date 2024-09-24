import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className="bg-white p-6 max-w-md mx-auto border rounded-lg shadow-lg">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="/morlab-logo.png" // replace with your actual logo path
          alt="Morlabs logo"
          className="h-12"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mt-4">Join our journey and get early access</h1>
      <p className="text-center text-gray-500 mt-2">
        Join our extensive waitlist today and get notified when we launch 🎉
      </p>

      {/* Profile images */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        {/* Array of images (you can replace these with actual image URLs) */}
        {['/user1.jpg', '/user2.jpg', '/user3.jpg', '/user4.jpg', '/user5.jpg', '/user6.jpg'].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`User ${index + 1}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        ))}
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-200 text-gray-800">
          +10
        </div>
      </div>

      {/* Form */}
      <form className="mt-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tell us your name..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
