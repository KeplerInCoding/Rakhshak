import { useState } from 'react';
import { AiOutlineHistory, AiOutlineCheckCircle } from 'react-icons/ai';

const AlertsToPeople = () => {
  const [alertHistory, setAlertHistory] = useState([
    {
      id: 1,
      name: 'Cyclone Warning',
      place: 'West Bengal',
      time: '2024-09-01 14:00',
      predictedTime: '2024-09-02 12:00',
      severity: 'High',
      detailsUrl: 'https://example.com/cyclone-details',
    },
    {
      id: 2,
      name: 'Flood Alert',
      place: 'Assam',
      time: '2024-09-02 10:00',
      predictedTime: '2024-09-03 15:00',
      severity: 'Medium',
      detailsUrl: 'https://example.com/flood-details',
    },
  ]);

  const [newAlert, setNewAlert] = useState({
    name: '',
    place: '',
    predictedTime: '',
    severity: '',
    detailsUrl: '',
  });

  const handleSendNewAlert = (e) => {
    e.preventDefault();
    const newAlertData = {
      ...newAlert,
      id: alertHistory.length + 1,
      time: new Date().toLocaleString(),
    };
    setAlertHistory([...alertHistory, newAlertData]);
    setNewAlert({ name: '', place: '', predictedTime: '', severity: '', detailsUrl: '' }); // Reset form after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Alerts Management</h1>

        {/* Send New Alert Form */}
        <div className="mb-6 w-full">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Send New Alert</h2>
          <form onSubmit={handleSendNewAlert} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow-inner">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Alert Name</label>
              <input
                type="text"
                value={newAlert.name}
                onChange={(e) => setNewAlert({ ...newAlert, name: e.target.value })}
                placeholder="E.g. Cyclone Warning"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Place</label>
              <input
                type="text"
                value={newAlert.place}
                onChange={(e) => setNewAlert({ ...newAlert, place: e.target.value })}
                placeholder="E.g. West Bengal"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Predicted Time</label>
              <input
                type="datetime-local"
                value={newAlert.predictedTime}
                onChange={(e) => setNewAlert({ ...newAlert, predictedTime: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Severity</label>
              <select
                value={newAlert.severity}
                onChange={(e) => setNewAlert({ ...newAlert, severity: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select severity</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">More Details URL</label>
              <input
                type="url"
                value={newAlert.detailsUrl}
                onChange={(e) => setNewAlert({ ...newAlert, detailsUrl: e.target.value })}
                placeholder="E.g. https://example.com/details"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
            >
              Send Alert
            </button>
          </form>
        </div>

        {/* Alert History */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner w-full">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <AiOutlineHistory className="mr-2 text-orange-600" /> Alert History
          </h2>
          {alertHistory.length > 0 ? (
            <ul className="space-y-4">
              {alertHistory.map((alert) => (
                <li
                  key={alert.id}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{alert.name}</h3>
                    <p className="text-gray-600">Location: {alert.place}</p>
                    <p className="text-gray-600">Time Sent: {alert.time}</p>
                    <p className="text-gray-600">Predicted Time: {alert.predictedTime}</p>
                    <p className="text-gray-600">Severity: {alert.severity}</p>
                    {alert.detailsUrl && (
                      <a
                        href={alert.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 underline"
                      >
                        More Details
                      </a>
                    )}
                  </div>
                  <AiOutlineCheckCircle className="text-green-500 text-2xl" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No alerts have been sent yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertsToPeople;
