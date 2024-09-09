import { useState } from 'react';

const initialAlerts = [
  {
    id: 1,
    name: 'Cyclone Alert',
    place: 'West Bengal',
    predictedTime: '2024-09-01 12:00',
    percentage: 80,
    detailsUrl: 'https://example.com/cyclone-details',
    status: 'sent', // added status field
    dateAdded: new Date().toLocaleDateString(), // current date as date added
  },
  {
    id: 2,
    name: 'Flood Warning',
    place: 'Kerala',
    predictedTime: '2024-09-01 15:00',
    percentage: 70,
    detailsUrl: 'https://example.com/flood-details',
    status: 'sent', // added status field
    dateAdded: new Date().toLocaleDateString(), // current date as date added
  },
  // ... other initial alerts
];

const ManageAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(null);
  const [form, setForm] = useState({
    name: '',
    place: '',
    predictedTime: '',
    percentage: '',
    detailsUrl: '',
  });
  const [viewHistory, setViewHistory] = useState(false);

  const handleSendClick = () => {
    setForm({
      name: '',
      place: '',
      predictedTime: '',
      percentage: '',
      detailsUrl: '',
    });
    setCurrentAlert(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (alert) => {
    setForm({
      name: alert.name,
      place: alert.place,
      predictedTime: alert.predictedTime,
      percentage: alert.percentage,
      detailsUrl: alert.detailsUrl,
    });
    setCurrentAlert(alert);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentAlert) {
      // Edit existing alert
      setAlerts(alerts.map(alert =>
        alert.id === currentAlert.id
          ? { ...currentAlert, ...form }
          : alert
      ));
    } else {
      // Add new alert
      const newAlert = {
        id: Date.now(),
        ...form,
        status: 'sent',
        dateAdded: new Date().toLocaleDateString(), // set date added
      };
      setAlerts([...alerts, newAlert]);
    }
    setIsModalOpen(false);
  };

  const handleViewHistoryToggle = () => {
    setViewHistory(!viewHistory);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Alerts</h1>

        <button
          onClick={handleSendClick}
          className="px-4 py-2 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg ml-0 m-6"
        >
          Send New Alert
        </button>

        <button
          onClick={handleViewHistoryToggle}
          className="px-4 py-2 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg m-6"
        >
          {viewHistory ? 'View Current Alerts' : 'View Alert History'}
        </button>

        <div>
          {alerts.length > 0 ? (
            <ul className="space-y-4">
              {alerts
                .filter(alert => viewHistory || alert.status === 'pending')
                .map(alert => (
                  <li key={alert.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col">
                    <h3 className="text-xl font-medium text-gray-800">{alert.name}</h3>
                    <p className="text-gray-600"><strong>Place:</strong> {alert.place}</p>
                    <p className="text-gray-600"><strong>Predicted Time:</strong> {alert.predictedTime}</p>
                    <p className="text-gray-600"><strong>Likelihood:</strong> {alert.percentage}%</p>
                    <p className="text-gray-600"><strong>Date Added:</strong> {alert.dateAdded}</p>
                    <a href={alert.detailsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2">More Details</a>
                    <div className="mt-4 flex space-x-2">
                      {/* Disable edit and delete for sent alerts */}
                      {alert.status !== 'sent' && (
                        <>
                          <button
                            onClick={() => handleEditClick(alert)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(alert.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-600">No alerts available.</p>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4">{currentAlert ? 'Edit Alert' : 'Send Alert'}</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Alert Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="place" className="block text-gray-700">Place</label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={form.place}
                    onChange={handleFormChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="predictedTime" className="block text-gray-700">Predicted Time</label>
                  <input
                    type="datetime-local"
                    id="predictedTime"
                    name="predictedTime"
                    value={form.predictedTime}
                    onChange={handleFormChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="percentage" className="block text-gray-700">Percentage</label>
                  <input
                    type="number"
                    id="percentage"
                    name="percentage"
                    value={form.percentage}
                    onChange={handleFormChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                    min="0"
                    max="100"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="detailsUrl" className="block text-gray-700">Details URL</label>
                  <input
                    type="url"
                    id="detailsUrl"
                    name="detailsUrl"
                    value={form.detailsUrl}
                    onChange={handleFormChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    {currentAlert ? 'Update Alert' : 'Send Alert'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAlerts;
