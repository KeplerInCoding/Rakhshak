// import React from 'react';
import img from '../images/Dashboard2.png';

const Dashboard2 = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      <img
        src={img}
        alt="Dashboard"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* You can add any additional content here if needed */}
      </div>
    </div>
  );
};

export default Dashboard2;
