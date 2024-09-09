// import React from 'react';
import dash from "../images/Dashboard1.png"

const Dashboard1 = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src={dash}
        alt="Map"
        className="absolute inset-0 object-cover w-full h-full blur-sm"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <a
          href="https://garvitsinghal47.github.io/temp/explore/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          View Analysis
        </a>
      </div>
    </div>
  );
};

export default Dashboard1;
