// src/pages/SatelliteScan.jsx
import React from 'react';

const SatelliteScan = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Satellite Scan</h1>
        <iframe
          src="https://luminocity3d.org/WorldPopDen/#3/20.00/10.00"
          title="Satellite Scan"
          className="w-full h-screen border-none rounded-lg"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SatelliteScan;
