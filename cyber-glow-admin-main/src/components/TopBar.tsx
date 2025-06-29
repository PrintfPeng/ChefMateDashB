//บาร์ด้านบนของแอปพลิเคชันที่มีการค้นหา การแจ้งเตือน การตั้งค่า อีเมล และปุ่มเข้าสู่ระบบ
import React from 'react';
import { Search, Bell, Settings, Mail, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="h-16 bg-gradient-to-r from-purple-900/60 to-indigo-900/40 border-b border-purple-500/30 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            <span className="text-cyan-400">CHEFMATE</span> / <span>HOME</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="SEARCH"
              className="w-80 pl-10 pr-4 py-2 bg-purple-900/40 border border-purple-500/40 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Settings size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </button>
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg">
              <span className="text-sm text-cyan-400">LOGIN</span>
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <User size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
