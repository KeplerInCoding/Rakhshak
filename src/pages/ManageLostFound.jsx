// import React from 'react';

const lostPeople = [
    {
      id: 'lost1',
      name: 'Amit Sharma',
      lastSeen: '2024-09-01 10:00',
      place: 'Connaught Place, Delhi',
      description: 'Wearing a blue shirt and jeans, approximately 5\'8", last seen near the metro station.',
      contact: '9876543210',
    },
    {
      id: 'lost2',
      name: 'Neha Patel',
      lastSeen: '2024-09-01 11:30',
      place: 'MG Road, Bangalore',
      description: 'Wearing a red dress, approximately 5\'5", last seen near the shopping mall.',
      contact: '9123456789',
    },
    // Add more lost people as needed
  ];
  
  const foundPeople = [
    {
      id: 'found1',
      name: 'Ravi Kumar',
      foundAt: '2024-09-01 12:00',
      place: 'Sector 15, Gurgaon',
      description: 'Found near the local park, wearing a green jacket and khakis.',
      contact: '9654321098',
    },
    {
      id: 'found2',
      name: 'Sita Singh',
      foundAt: '2024-09-01 13:30',
      place: 'Marine Drive, Mumbai',
      description: 'Found near the beach, wearing a yellow top and shorts.',
      contact: '9876123456',
    },
    // Add more found people as needed
  ];
  
  const ManageLostFound = () => {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Lost and Found</h1>
  
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lost People</h2>
            {lostPeople.length > 0 ? (
              <ul className="space-y-4">
                {lostPeople.map(person => (
                  <li key={person.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-800">{person.name}</h3>
                    <p className="text-gray-600">Last Seen: {person.lastSeen}</p>
                    <p className="text-gray-600">Place: {person.place}</p>
                    <p className="text-gray-600">Description: {person.description}</p>
                    <p className="text-gray-600">Contact: {person.contact}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No lost people reported.</p>
            )}
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Found People</h2>
            {foundPeople.length > 0 ? (
              <ul className="space-y-4">
                {foundPeople.map(person => (
                  <li key={person.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-800">{person.name}</h3>
                    <p className="text-gray-600">Found At: {person.foundAt}</p>
                    <p className="text-gray-600">Place: {person.place}</p>
                    <p className="text-gray-600">Description: {person.description}</p>
                    <p className="text-gray-600">Contact: {person.contact}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No found people reported.</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ManageLostFound;
  