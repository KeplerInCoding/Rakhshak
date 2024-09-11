// src/pages/AdminLog.jsx
// import React from 'react';

const logs = [
  { id: 15, timestamp: '2024-09-09 16:15:20', user: 'NDRF', action: 'Deploy', details: 'Evacuation teams deployed to coastal regions of Odisha' },
  { id: 14, timestamp: '2024-09-09 15:32:40', user: 'IMD', action: 'Update', details: 'Severe weather warning updated for Odisha' },
  { id: 13, timestamp: '2024-09-09 15:10:25', user: 'NDMA', action: 'Logout', details: 'User logged out after reviewing alerts' },
  { id: 12, timestamp: '2024-09-09 14:45:12', user: 'MoEFCC', action: 'Update', details: 'Updated wildfire risk for Madhya Pradesh region' },
  { id: 11, timestamp: '2024-09-09 14:32:00', user: 'NDMA', action: 'Login', details: 'Successful login to the disaster management dashboard' },
  { id: 10, timestamp: '2024-09-09 14:10:00', user: 'IMD', action: 'Send Alert', details: 'Tsunami alert sent to coastal Tamil Nadu following earthquake' },
  { id: 9, timestamp: '2024-09-09 13:45:15', user: 'NDRF', action: 'Deploy', details: 'Search and rescue teams sent to landslide-affected areas in Himachal Pradesh' },
  { id: 8, timestamp: '2024-09-09 13:00:50', user: 'MoES', action: 'Update', details: 'Earthquake risk assessment report updated for Gujarat' },
  { id: 7, timestamp: '2024-09-09 12:45:33', user: 'NDMA', action: 'Send Alert', details: 'Heatwave alert sent to Rajasthan authorities' },
  { id: 6, timestamp: '2024-09-09 12:12:00', user: 'IMD', action: 'Update', details: 'Updated heatwave alert for Rajasthan region' },
  { id: 5, timestamp: '2024-09-09 11:30:45', user: 'NDRF', action: 'Deploy', details: 'NDRF teams deployed to flood-affected areas in Assam' },
  { id: 4, timestamp: '2024-09-09 10:45:00', user: 'CWC', action: 'Update', details: 'Issued flood warning for Assam due to heavy rainfall' },
  { id: 3, timestamp: '2024-09-09 10:10:12', user: 'NDMA', action: 'Send Alert', details: 'Cyclone alert sent to West Bengal local authorities' },
  { id: 2, timestamp: '2024-09-09 09:15:30', user: 'IMD', action: 'Update', details: 'Updated cyclone forecast for Bay of Bengal region' },
  { id: 1, timestamp: '2024-09-09 08:45:00', user: 'NDMA', action: 'Login', details: 'Successful login to alert management system' },
];



const AdminLog = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Log</h1>
        <p className="text-gray-600 mb-4">
          This page displays the administrative log of actions performed within the system. Review the logs below for detailed information on user activities.
        </p>
        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Log Overview</h2>
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4 text-left text-gray-600">Timestamp</th>
                <th className="p-4 text-left text-gray-600">User</th>
                <th className="p-4 text-left text-gray-600">Action</th>
                <th className="p-4 text-left text-gray-600">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b">
                  <td className="p-4 text-gray-700">{log.timestamp}</td>
                  <td className="p-4 text-gray-700">{log.user}</td>
                  <td className="p-4 text-gray-700">{log.action}</td>
                  <td className="p-4 text-gray-700">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLog;
