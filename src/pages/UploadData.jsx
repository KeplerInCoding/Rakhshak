import { useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const disasters = [
  { id: 1, name: 'Cyclone', color: 'bg-blue-300' },
  { id: 2, name: 'Flood', color: 'bg-green-300' },
  { id: 3, name: 'Wildfire', color: 'bg-red-300' },
  { id: 4, name: 'Earthquake', color: 'bg-yellow-300' },
  { id: 5, name: 'Landslide', color: 'bg-purple-300' },
];

const UploadData = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [csvFile, setCsvFile] = useState(null);

  const handleDisasterClick = (disaster) => {
    setSelectedDisaster(disaster);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle file upload logic here
    console.log(`File uploaded for ${selectedDisaster.name}:`, csvFile);
    setIsModalOpen(false);
    setCsvFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Disaster Data</h1>
      <p className="text-gray-700 mb-8 text-center">
        Upload data related to recent disasters to help enhance machine learning predictions for future events. Your data will contribute to better accuracy and preparedness.
      </p>
      <div className="flex justify-center flex-wrap items-center gap-10 mb-6">
        {disasters.map((disaster) => (
          <button
            key={disaster.id}
            className={`p-10 px-16 font-extrabold text-2xl rounded-lg ${disaster.color} hover:opacity-80 transition`}
            onClick={() => handleDisasterClick(disaster)}
          >
            {disaster.name}
          </button>
        ))}
      </div>

      {/* Modal for Uploading Data */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Upload CSV for {selectedDisaster.name}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Select CSV File</label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-gray-700"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <AiOutlineUpload className="inline-block mr-2" />
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadData;
