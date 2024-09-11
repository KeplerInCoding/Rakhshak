// import React from 'react';

const Dashboard1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Data Analysis Dashboard of All Disasters (Past 40 Years)
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Explore detailed data and insights on various disasters from the last 40 years. 
        Use the interactive dashboard below to visualize patterns, trends, and critical 
        statistics on Indian disasters.
      </p>
      <iframe
        src="https://garvitsinghal47.github.io/temp/explore/"
        title="Disaster Analysis Dashboard"
        className="w-full h-full max-h-[80vh] border-2 border-gray-300 rounded-lg"
        allowFullScreen
      />
    </div>
  );
};

export default Dashboard1;
