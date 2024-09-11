import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineSend, AiOutlineQuestionCircle } from 'react-icons/ai'; // Icons for status and send button

const sentAlerts = [
  {
    id: 1,
    name: 'Cyclone Alert',
    place: 'West Bengal',
    predictedTime: '2024-09-01 14:00',
    percentage: 85,
    severity: 'Medium',
    detailsUrl: 'https://example.com/cyclone-details',
    status: 'Right',
  },
  {
    id: 2,
    name: 'Flood Warning',
    place: 'Assam',
    predictedTime: '2024-09-01 16:00',
    percentage: 70,
    severity: 'Low',
    detailsUrl: 'https://example.com/flood-details',
    status: 'Wrong',
  },
  {
    id: 3,
    name: 'Tsunami Alert',
    place: 'Tamil Nadu',
    predictedTime: '2024-09-02 10:00',
    percentage: 90,
    severity: 'High',
    detailsUrl: 'https://example.com/tsunami-details',
    status: 'Not Reviewed Yet',
  },
];

const unsentAlerts = [
  {
    id: 4,
    name: 'Wildfire Alert',
    place: 'Madhya Pradesh',
    predictedTime: '2024-09-01 18:00',
    percentage: 90,
    severity: 'Medium',
    detailsUrl: 'https://example.com/wildfire-details',
  },
  {
    id: 5,
    name: 'Earthquake Warning',
    place: 'Gujarat',
    predictedTime: '2024-09-02 08:00',
    percentage: 60,
    severity: 'High',
    detailsUrl: 'https://example.com/earthquake-details',
  },
  {
    id: 6,
    name: 'Landslide Alert',
    place: 'Himachal Pradesh',
    predictedTime: '2024-09-02 12:00',
    percentage: 75,
    severity: 'Low',
    detailsUrl: 'https://example.com/landslide-details',
  },
];

const VerifyMLAlerts = () => {
  const [activeTab, setActiveTab] = useState('Sent');

  const handleSendAlert = (id) => {
    // Logic to send the alert (e.g., API call)
    console.log(`Alert ${id} sent to authorities!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify Machine Learning Alerts</h1>
        <p className="text-gray-600 mb-4">
        Get the predicted alerts from ML reviewed and manually verified local authorities. Check the status from them here.
      </p>

        {/* Tab Navigation */}
        <div className="flex border-b mb-4">
          <button
            className={`mr-4 py-2 px-6 font-semibold ${activeTab === 'Sent' ? 'text-orange-600 border-orange-600 border-b-2' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Sent')}
          >
            Sent Alerts
          </button>
          <button
            className={`py-2 px-6 font-semibold ${activeTab === 'Unsent' ? 'text-orange-600 border-orange-600 border-b-2' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Unsent')}
          >
            Unsent Alerts
          </button>
        </div>

        {/* Sent Alerts */}
        {activeTab === 'Sent' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Sent Alerts</h2>
            <ul className="space-y-4">
              {sentAlerts.map((alert) => (
                <li
                  key={alert.id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{alert.name} - {alert.place}</h3>
                    <p className="text-gray-600">Predicted Time: {alert.predictedTime}</p>
                    <p className="text-gray-600">Likelyhood: {alert.percentage}%</p>
                    <p className="text-gray-600">Severity: {alert.severity}</p>
                    <a
                      href={alert.detailsUrl}
                      className="text-orange-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="flex items-center">
                    {alert.status === 'Right' && (
                      <>
                        <AiOutlineCheckCircle className="text-green-500 text-2xl mr-2" />
                        <span className="font-semibold text-green-600 bg-green-200 rounded-full p-2 px-4">
                          {alert.status}
                        </span>
                      </>
                    )}
                    {alert.status === 'Wrong' && (
                      <>
                        <AiOutlineCloseCircle className=" text-red-500 text-2xl mr-2" />
                        <span className="font-semibold text-red-600 bg-red-200 rounded-full p-2 px-4">
                          {alert.status}
                        </span>
                      </>
                    )}
                    {alert.status === 'Not Reviewed Yet' && (
                      <>
                        <AiOutlineQuestionCircle className="text-gray-500 text-2xl mr-2" />
                        <span className="font-semibold text-gray-600 bg-gray-200 rounded-full p-2 px-4">
                          {alert.status}
                        </span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Unsent Alerts */}
        {activeTab === 'Unsent' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Unsent Alerts</h2>
            <ul className="space-y-4">
              {unsentAlerts.map((alert) => (
                <li
                  key={alert.id}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{alert.name} - {alert.place}</h3>
                    <p className="text-gray-600">Predicted Time: {alert.predictedTime}</p>
                    <p className="text-gray-600">Likelyhood: {alert.percentage}%</p>
                    <p className="text-gray-600">Severity: {alert.severity}</p>
                    <a
                      href={alert.detailsUrl}
                      className="text-orange-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                  <button
                    className="flex items-center bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
                    onClick={() => handleSendAlert(alert.id)}
                  >
                    <AiOutlineSend className="mr-2" />
                    Send Alert
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyMLAlerts;
