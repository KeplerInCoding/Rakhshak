// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Slider />
      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Avalanche Alert</h1>
          <p className="text-lg text-gray-700">
            Our platform is dedicated to providing real-time avalanche alerts and safety measures. We utilize advanced technologies and data analytics to forecast potential avalanche threats and ensure the safety of mountaineers and local residents.
          </p>
        </section>

        {/* Detection Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Detection</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Data Analytics</h3>
              <p className="text-gray-600">
                Analyzing data based on previous trends to provide detailed documentation or reports.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">ML Model</h3>
              <p className="text-gray-600">
                Forecast avalanches 3-4 hours in advance using:
                <ul className="list-disc list-inside ml-5">
                  <li>Temperature</li>
                  <li>Wind Speed</li>
                  <li>Snowfall Rate and Depth</li>
                  <li>Elevation Threshold</li>
                </ul>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Notifications</h3>
              <p className="text-gray-600">
                Notify local stations of high-risk zones for physical verification and alert users via the app with guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Additional Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Evacuation Routes</h3>
              <p className="text-gray-600">
                Share possible evacuation routes through the app, available offline for emergencies.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Tracking Mountaineers</h3>
              <p className="text-gray-600">
                Users carry an IoT device (RECCO reflector) to facilitate rescue operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Geographical Satellite Imaging</h3>
              <p className="text-gray-600">
                Capture images and report the possible number of victims to local stations by limiting the search area.
              </p>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Add-Ons</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Educational Content</h3>
              <p className="text-gray-600">
                Both the app and web platforms provide educational content in text, AR/VR, and 3D videos.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Lost and Found</h3>
              <p className="text-gray-600">
                Display details of lost or found victims, kids, and essentials publicly on the site.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Camp Registrations</h3>
              <p className="text-gray-600">
                Register routes with local authorities to ensure safety and facilitate emergency responses.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
