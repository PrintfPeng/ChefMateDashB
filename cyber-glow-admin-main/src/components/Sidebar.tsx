
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart, 
  Grid3X3, 
  MessageSquare, 
  Mail, 
  Settings,
  ChevronDown,
  Home
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BarChart, label: 'Chart', path: '/chart' },
  { icon: Grid3X3, label: 'Apps', path: '/apps' },
  { icon: MessageSquare, label: 'Forum', path: '/forum' },
  { icon: Mail, label: 'Email', path: '/email' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const projectItems = [
  { label: 'Option', path: '/projects/option' },
  { label: 'Case', path: '/projects/case' },
  { label: 'Local', path: '/projects/local' },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-purple-900/40 to-indigo-900/40 border-r border-purple-500/30 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
          <h1 className="text-xl font-bold text-cyan-400 glow-text">Dashboard</h1>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/50 to-cyan-600/30 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:bg-purple-800/30 hover:text-cyan-300'
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        
        <div className="mt-8">
          <div className="flex items-center gap-2 px-4 py-2 text-purple-300 text-sm font-semibold">
            <span>PROJECTS</span>
            <ChevronDown size={16} />
          </div>
          <div className="mt-2 space-y-1">
            {projectItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block px-8 py-2 text-gray-400 hover:text-cyan-300 hover:bg-purple-800/20 rounded-lg transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
