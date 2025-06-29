
import React from 'react';

const ColorBarChart = () => {
  const colors = [
    '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#8b5cf6', 
    '#ef4444', '#f97316', '#84cc16', '#06d6a0', '#0ea5e9'
  ];

  return (
    <div className="cyber-card p-6">
      <div className="mb-4">
        <h3 className="text-cyan-400 font-bold text-lg mb-1">ChefMate</h3>
        <p className="text-gray-400 text-sm">ระบบกำลังวิเคราะห์ข้อมูลการสั่งซื้อ...</p>
      </div>
      <div className="space-y-2">
        {Array.from({ length: 8 }, (_, row) => (
          <div key={row} className="flex gap-1">
            {colors.map((color, col) => (
              <div
                key={col}
                className="w-4 h-6 rounded-sm"
                style={{
                  backgroundColor: color,
                  opacity: Math.random() * 0.8 + 0.2,
                  boxShadow: `0 0 5px ${color}40`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBarChart;
