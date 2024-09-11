// import React from 'react';
import img from '../images/Dashboard2.png';

const Dashboard2 = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold  my-10 mb-4">Live Disaster Monitoring</h1>
        <p className="text-lg text-gray-700 mb-6">
          This dashboard provides real-time updates and monitoring of current disasters and key parameters across India. 
          Stay informed with live data to better assess risks and manage disaster response effectively.
        </p>
        <img
          src={img}
          alt="Dashboard"
          className="object-contain max-w-full max-h-full shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Dashboard2;
