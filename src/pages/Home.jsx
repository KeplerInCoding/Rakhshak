// import React from 'react';

const Home = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to the Admin Panel</h2>
        <p className="text-gray-600 mt-2">
          Monitor and manage all aspects of the system from here.
        </p>
      </div>
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://rsoe-edis.org/eventMap"
          title="Real-time Weather Information"
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
