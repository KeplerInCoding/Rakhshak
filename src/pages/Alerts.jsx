// import React from 'react';

const alerts = [
    {
      id: 1,
      name: 'Cyclone Alert',
      place: 'West Bengal',
      predictedTime: '2024-09-01 14:00',
      percentage: 85,
      detailsUrl: 'https://example.com/cyclone-details'
    },
    {
      id: 2,
      name: 'Flood Warning',
      place: 'Assam',
      predictedTime: '2024-09-01 16:00',
      percentage: 70,
      detailsUrl: 'https://example.com/flood-details'
    },
    {
      id: 3,
      name: 'Wildfire Alert',
      place: 'Madhya Pradesh',
      predictedTime: '2024-09-01 18:00',
      percentage: 90,
      detailsUrl: 'https://example.com/wildfire-details'
    },
    {
      id: 4,
      name: 'Earthquake Warning',
      place: 'Gujarat',
      predictedTime: '2024-09-02 08:00',
      percentage: 60,
      detailsUrl: 'https://example.com/earthquake-details'
    },
    {
      id: 5,
      name: 'Landslide Alert',
      place: 'Himachal Pradesh',
      predictedTime: '2024-09-02 12:00',
      percentage: 75,
      detailsUrl: 'https://example.com/landslide-details'
    }
  ];
  

const Alerts = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Disaster Alerts</h1>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900">{alert.name}</h2>
            <p className="text-gray-600 mt-1"><strong>Place:</strong> {alert.place}</p>
            <p className="text-gray-600"><strong>Predicted Time:</strong> {alert.predictedTime}</p>
            <p className="text-gray-600"><strong>Likelihood:</strong> {alert.percentage}%</p>
            <a
              href={alert.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              More Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
