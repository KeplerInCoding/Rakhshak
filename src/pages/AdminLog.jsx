// src/pages/AdminLog.jsx
import React from 'react';

const logs = [
  { id: 1, timestamp: '2024-09-09 14:32:00', user: 'Admin1', action: 'Login', details: 'Successful login' },
  { id: 2, timestamp: '2024-09-09 14:45:12', user: 'Admin2', action: 'Update', details: 'Updated alert settings' },
  { id: 3, timestamp: '2024-09-09 15:10:25', user: 'Admin1', action: 'Logout', details: 'User logged out' },
  // Add more log data as needed
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
