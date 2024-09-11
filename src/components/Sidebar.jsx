import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  CloudIcon,
  ExclamationTriangleIcon,
  DocumentChartBarIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  ArrowUpTrayIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

const sidebarLinks = [
  { name: 'Dashboard Analysis', path: '/dashboard-1', icon: ChartBarIcon },
  { name: 'Current Conditions', path: '/dashboard-2', icon: CloudIcon },
  { name: 'Alerts to Public', path: '/alert-to-public', icon: ExclamationTriangleIcon },
  { name: 'Verify ML Alerts', path: '/verify-ml-alerts', icon: DocumentChartBarIcon },
  { name: 'Manage Guidelines and Announcements', path: '/manage-guidelines', icon: MegaphoneIcon },
  { name: 'Manage Lost and Found', path: '/manage-lost-found', icon: PuzzlePieceIcon },
  { name: 'Manage Emergency Contacts', path: '/emergency-contacts', icon: ShieldCheckIcon },
  { name: 'Upload Data - After Disaster', path: '/upload-data', icon: ArrowUpTrayIcon },
  { name: 'Satellite Scan', path: '/satellite-scan', icon: GlobeAltIcon },
  { name: 'Red Zones Management', path: '/red-zones-management', icon: MapIcon }
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed top-8 left-0 bg-white border-r pb-20 border-gray-200 shadow-sm overflow-y-auto">
      <nav className="mt-10 space-y-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 transition ${
                isActive ? 'bg-gray-100 text-primary text-orange-600 font-medium' : 'hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <link.icon className="h-5 w-5 mr-3" />
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
