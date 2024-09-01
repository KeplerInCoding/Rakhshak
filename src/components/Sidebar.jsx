import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  CloudIcon,
  ExclamationTriangleIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PhoneIcon,
  LifebuoyIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline';

const sidebarLinks = [
  { name: 'Dashboard Analysis', path: '/dashboard-1', icon: ChartBarIcon },
  { name: 'Current Conditions', path: '/dashboard-2', icon: CloudIcon },
  { name: 'Manage Alerts', path: '/manage-alerts', icon: ExclamationTriangleIcon },
  { name: 'Manage Guidelines and Announcements', path: '/manage-guidelines', icon: MegaphoneIcon },
  { name: 'Manage Lost and Found', path: '/manage-lost-found', icon: MagnifyingGlassIcon },
  { name: 'Red Zones Management', path: '/red-zones', icon: MapIcon },
  { name: 'Manage Emergency Contacts', path: '/emergency-contacts', icon: PhoneIcon },
  { name: 'Manage Emergency Services', path: '/emergency-services', icon: LifebuoyIcon },
  { name: 'Social Media Scan', path: '/social-media-scan', icon: HashtagIcon },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed top-5 left-0 bg-white border-r border-gray-200 shadow-sm overflow-y-auto">
      <nav className="mt-10">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 transition ${
                isActive ? 'bg-gray-100 text-primary font-medium' : 'hover:bg-gray-100 hover:text-primary'
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
