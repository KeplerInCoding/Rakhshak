import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import ManageAlerts from './pages/ManageAlerts';
import ManageGuidelines from './pages/ManageGuidelines';
import ManageLostFound from './pages/ManageLostFound';
import EmergencyContacts from './pages/EmergencyContacts';
import SOS from './pages/SOSlog';
import AdminLog from './pages/AdminLog';
import Alerts from './pages/Alerts';
import SatelliteScan from './pages/SatelliteScan';
import UploadData from './pages/UploadData';
import VerifyMLAlerts from './pages/VerifyMLAlerts';
import Login from './pages/auth/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        {/* Show the login page if not authenticated */}
        {!isAuthenticated ? (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <>
            {/* Show Navbar and Sidebar only if authenticated */}
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
                <Route path="/emergency-contacts" element={<EmergencyContacts />} />
                <Route path="/sos" element={<SOS />} />
                <Route path="/admin-log" element={<AdminLog />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/verify-ml-alerts" element={<VerifyMLAlerts />} />
                <Route path="/upload-data" element={<UploadData />} />
                <Route path="/satellite-scan" element={<SatelliteScan />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
