// import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const sosRequests = [
    {
      id: 'user1',
      time: '2024-09-01 14:30',
      place: 'Connaught Place, Delhi',
      detailsUrl: 'https://example.com/details/user1',
    },
    {
      id: 'user2',
      time: '2024-09-01 15:00',
      place: 'Marine Drive, Mumbai',
      detailsUrl: 'https://example.com/details/user2',
    },
    {
      id: 'user3',
      time: '2024-09-01 15:30',
      place: 'Hosur Road, Bengaluru',
      detailsUrl: 'https://example.com/details/user3',
    },
    {
      id: 'user4',
      time: '2024-09-01 16:00',
      place: 'Gachibowli, Hyderabad',
      detailsUrl: 'https://example.com/details/user4',
    },
    {
      id: 'user5',
      time: '2024-09-01 16:30',
      place: 'Chandni Chowk, Delhi',
      detailsUrl: 'https://example.com/details/user5',
    },
  ];
  

const SOSlog = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">SOS Requests</h1>
      <div className="space-y-4">
        {sosRequests.map((request) => (
          <div
            key={request.id}
            className="flex items-center p-4 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <MapPinIcon className="h-6 w-6 text-gray-600 mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{`User ID: ${request.id}`}</h2>
              <p className="text-gray-600">{`Time: ${request.time}`}</p>
              <p className="text-gray-600">{`Place: ${request.place}`}</p>
            </div>
            <a
              href={request.detailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SOSlog;
