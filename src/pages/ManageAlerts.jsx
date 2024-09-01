import { useState } from 'react';

const initialAlerts = [
    {
      id: 1,
      name: 'Cyclone Alert',
      place: 'West Bengal',
      predictedTime: '2024-09-01 12:00',
      percentage: 80,
      detailsUrl: 'https://example.com/cyclone-details',
    },
    {
      id: 2,
      name: 'Flood Warning',
      place: 'Kerala',
      predictedTime: '2024-09-01 15:00',
      percentage: 70,
      detailsUrl: 'https://example.com/flood-details',
    },
    {
      id: 3,
      name: 'Heatwave Warning',
      place: 'Rajasthan',
      predictedTime: '2024-09-01 18:00',
      percentage: 90,
      detailsUrl: 'https://example.com/heatwave-details',
    },
    {
      id: 4,
      name: 'Earthquake Alert',
      place: 'Gujarat',
      predictedTime: '2024-09-02 08:00',
      percentage: 60,
      detailsUrl: 'https://example.com/earthquake-details',
    },
    {
      id: 5,
      name: 'Landslide Warning',
      place: 'Himachal Pradesh',
      predictedTime: '2024-09-02 12:00',
      percentage: 75,
      detailsUrl: 'https://example.com/landslide-details',
    }
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
  
    const handleAddClick = () => {
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
      setAlerts(alerts.filter(a => a.id !== id));
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
        setAlerts(alerts.map(a => 
          a.id === currentAlert.id
            ? { ...a, ...form }
            : a
        ));
      } else {
        setAlerts([
          ...alerts,
          { id: Date.now(), ...form }
        ]);
      }
      setIsModalOpen(false);
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Alerts</h1>
  
          <button
            onClick={handleAddClick}
            className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg mb-6"
          >
            Add New Alert
          </button>
  
          <div>
            {alerts.length > 0 ? (
              <ul className="space-y-4">
                {alerts.map(alert => (
                  <li key={alert.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col">
                    <h3 className="text-xl font-medium text-gray-800">{alert.name}</h3>
                    <p className="text-gray-600"><strong>Place:</strong> {alert.place}</p>
                    <p className="text-gray-600"><strong>Predicted Time:</strong> {alert.predictedTime}</p>
                    <p className="text-gray-600"><strong>Percentage:</strong> {alert.percentage}%</p>
                    <a href={alert.detailsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">More Details</a>
                    <div className="mt-4 flex space-x-2">
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
                <h2 className="text-2xl font-semibold mb-4">{currentAlert ? 'Edit Alert' : 'Add Alert'}</h2>
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
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      {currentAlert ? 'Save Changes' : 'Add Alert'}
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
  