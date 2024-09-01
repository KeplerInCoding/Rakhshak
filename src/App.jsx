// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import ManageAlerts from './pages/ManageAlerts';
import ManageGuidelines from './pages/ManageGuidelines';
import ManageLostFound from './pages/ManageLostFound';
import RedZones from './pages/RedZones';
import EmergencyContacts from './pages/EmergencyContacts';
import EmergencyServices from './pages/EmergencyServices';
import SocialMediaScan from './pages/SocialMediaScan';
import SOS from './pages/SOSlog';
import AdminLog from './pages/AdminLog';
import Alerts from './pages/Alerts';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <div className="ml-64 mt-16 p-4 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard-1" element={<Dashboard1 />} />
            <Route path="/dashboard-2" element={<Dashboard2 />} />
            <Route path="/manage-alerts" element={<ManageAlerts />} />
            <Route path="/manage-guidelines" element={<ManageGuidelines />} />
            <Route path="/manage-lost-found" element={<ManageLostFound />} />
            <Route path="/red-zones" element={<RedZones />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/emergency-services" element={<EmergencyServices />} />
            <Route path="/social-media-scan" element={<SocialMediaScan />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/admin-log" element={<AdminLog />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
