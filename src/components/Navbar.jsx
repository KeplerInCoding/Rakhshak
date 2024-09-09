import { Link } from 'react-router-dom';
import { BellIcon, ExclamationTriangleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30 border-b border-gray-200 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/"><h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1></Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/sos" className="flex items-center text-gray-700 hover:text-primary transition">
              <ExclamationTriangleIcon className="h-6 w-6 mr-1" />
              SOS Requests
            </Link>
            <Link to="/admin-log" className="flex items-center text-gray-700 hover:text-primary transition">
              <DocumentTextIcon className="h-6 w-6 mr-1" />
              Admin Log
            </Link>
            <Link to="/alerts" className="flex items-center text-gray-700 hover:text-primary transition">
              <BellIcon className="h-6 w-6 mr-1" />
              Alerts from ML
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
