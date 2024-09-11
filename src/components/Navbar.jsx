import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BellIcon, ExclamationTriangleIcon, DocumentTextIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Function to handle toggling the profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prevState => !prevState);
  };

  // Function to handle logout
  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30 border-b border-gray-200 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            </NavLink>
          </div>
          <div className="flex space-x-4 items-center">
            <NavLink
              to="/sos"
              className={({ isActive }) =>
                `flex items-center text-gray-700 hover:text-primary transition ${
                  isActive ? 'font-bold text-primary text-orange-600' : ''
                }`
              }
            >
              <ExclamationTriangleIcon className="h-6 w-6 mr-1" />
              SOS Requests
            </NavLink>
            <NavLink
              to="/admin-log"
              className={({ isActive }) =>
                `flex items-center text-gray-700 hover:text-primary transition ${
                  isActive ? 'font-bold text-primary text-orange-600' : ''
                }`
              }
            >
              <DocumentTextIcon className="h-6 w-6 mr-1" />
              Admin Log
            </NavLink>
            <NavLink
              to="/alerts"
              className={({ isActive }) =>
                `flex items-center text-gray-700 hover:text-primary transition ${
                  isActive ? 'font-bold text-primary text-orange-600' : ''
                }`
              }
            >
              <BellIcon className="h-6 w-6 mr-1" />
              Alert Predictions
            </NavLink>
            {/* Profile section */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                aria-haspopup="true"
                aria-expanded={isProfileDropdownOpen}
                className="flex items-center text-gray-700 hover:text-primary transition focus:outline-none"
              >
                <UserCircleIcon className="h-6 w-6 mr-1" />
                Profile
              </button>
              {/* Dropdown menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
