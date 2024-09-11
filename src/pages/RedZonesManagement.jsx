import { useState } from 'react';
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { FaExclamationTriangle } from 'react-icons/fa';
import earthquake from '../images/earthquake.png'

// Mock data for areas by severity
const disasterData = {
  Earthquake: {
    low: 5,
    moderate: 8,
    high: 3,
  },
  Cyclone: {
    low: 2,
    moderate: 10,
    high: 4,
  },
  Flood: {
    low: 6,
    moderate: 5,
    high: 7,
  },
  Wildfire: {
    low: 4,
    moderate: 9,
    high: 6,
  },
};

const RedZonesManagement = () => {
  const [selectedDisaster, setSelectedDisaster] = useState('Earthquake');

  const disasterTypes = Object.keys(disasterData);
  const severityLevels = ['low', 'moderate', 'high'];

  const handleDisasterChange = (e) => {
    setSelectedDisaster(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Red Zones Management</h1>

      {/* Disaster Selection */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-600 mb-2">Select Disaster Type</label>
        <select
          value={selectedDisaster}
          onChange={handleDisasterChange}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {disasterTypes.map((disaster) => (
            <option key={disaster} value={disaster}>
              {disaster}
            </option>
          ))}
        </select>
      </div>

      {/* Severity Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {severityLevels.map((level) => {
          const severityColor =
            level === 'low' ? 'bg-green-200 text-green-700' :
            level === 'moderate' ? 'bg-yellow-200 text-yellow-700' :
            'bg-red-200 text-red-700';

          return (
            <div
              key={level}
              className={`p-4 rounded-lg shadow-md flex flex-col items-center ${severityColor}`}
            >
              <FaExclamationTriangle className="h-6 w-6 mb-2" />
              <h2 className="text-xl font-bold capitalize">{level} Severity</h2>
              <p className="text-3xl font-semibold">{disasterData[selectedDisaster][level]}</p>
            </div>
          );
        })}
      </div>

      {/* Buttons for Area List and Edit */}
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
          <AiOutlineEye className="mr-2" />
          Show List of Areas
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center">
          <AiOutlineEdit className="mr-2" />
          Edit List
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-4xl">
        <img
          src={earthquake}
          alt="Red Zones Map"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RedZonesManagement;
