// src/pages/UploadData.jsx
import React, { useState } from 'react';

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('File selected:', selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Upload Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="file-upload"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Choose a file
            </label>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="w-full text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload
          </button>
        </form>
        {selectedFile && (
          <div className="mt-4 text-gray-600">
            <p>Selected File: {selectedFile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadData;
