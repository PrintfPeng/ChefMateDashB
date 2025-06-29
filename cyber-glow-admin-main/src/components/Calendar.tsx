
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const currentDate = new Date();
  const month = 'January';
  const year = 2024;

  const daysInMonth = new Date(year, 0, 0).getDate();
  const firstDayOfMonth = new Date(year, 0, 1).getDay();

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null);
  }

  // Add all days of the month
  for (let day = 1; day <= 31; day++) {
    dates.push(day);
  }

  return (
    <div className="cyber-card p-6">
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className="text-yellow-400 cursor-pointer hover:text-yellow-300" size={20} />
        <h3 className="text-cyan-400 font-bold">{month}</h3>
        <ChevronRight className="text-yellow-400 cursor-pointer hover:text-yellow-300" size={20} />
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-gray-400 text-sm font-medium p-1">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`text-center p-2 text-sm cursor-pointer rounded transition-colors ${
              date === null
                ? ''
                : date === 13
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold'
                : date === 20 || date === 27
                ? 'text-orange-400 font-semibold'
                : 'text-gray-300 hover:text-cyan-400 hover:bg-purple-800/30'
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
