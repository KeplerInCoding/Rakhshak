import { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineEnvironment } from 'react-icons/ai';

const SatelliteScan = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [population, setPopulation] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const randomPopulation = Math.floor(Math.random() * 100000 + 1000); // Random population between 1000 and 100000
    setPopulation(randomPopulation);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Satellite Scan</h1>
        <p className="text-gray-600 mb-6">
          Enter the time, date, and coordinates of the area to estimate the population before the disaster. This helps predict potential casualties and identify places requiring urgent rescue operations.
        </p>



        {/* Population Result */}
        {population && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Estimated Population: <span className="text-orange-600">{population}</span>
            </h2>
          </div>
        )}

        {/* Satellite Map */}
        <iframe
          src="https://luminocity3d.org/WorldPopDen/#3/20.00/10.00"
          title="Satellite Scan"
          className="w-full h-96 border-none rounded-lg"
          allowFullScreen
        />


                {/* Form */}
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-6 my-10">
          <div className="flex items-center">
            <AiOutlineCalendar className="h-6 w-6 text-gray-500 mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <div className="flex items-center">
            <AiOutlineClockCircle className="h-6 w-6 text-gray-500 mr-2" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <div className="flex items-center">
            <AiOutlineEnvironment className="h-6 w-6 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Coordinates (e.g. 20.00, 10.00)"
              value={coordinates}
              onChange={(e) => setCoordinates(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-300"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Scan Population
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default SatelliteScan;
