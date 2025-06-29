
import React from 'react';

interface TimelineItem {
  percentage: number;
  label: string;
  color: string;
}

const ProgressTimeline = () => {
  const timelineData: TimelineItem[] = [
    {
      percentage: 40,
      label: 'ยอดขายเพิ่มขึ้นจากสัปดาห์ก่อน',
      color: '#ec4899', // ชมพู
    },
    {
      percentage: 75,
      label: 'สต็อกวัตถุดิบพร้อมใช้งาน',
      color: '#10b981', // เขียว
    },
    {
      percentage: 20,
      label: 'เมนูใหม่ที่ลูกค้าลองสั่ง',
      color: '#06b6d4', // ฟ้า
    },
    {
      percentage: 80,
      label: 'ความพึงพอใจลูกค้า (จากรีวิว/สั่งซ้ำ)',
      color: '#f59e0b', // ส้ม
    },
    {
      percentage: 60,
      label: 'จำนวนลูกค้าประจำในระบบ',
      color: '#8b5cf6', // ม่วง
    },
  ];


  return (
    <div className="cyber-card p-6 col-span-2">
      <div className="flex items-center justify-between mb-8">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-4">
              <svg width="80" height="80" className="transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke={item.color}
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 35}`}
                  strokeDashoffset={`${2 * Math.PI * 35 * (1 - item.percentage / 100)}`}
                  strokeLinecap="round"
                  style={{
                    filter: `drop-shadow(0 0 10px ${item.color})`,
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold">{item.percentage}%</span>
              </div>
            </div>
            <span className="text-gray-400 text-sm">{item.label}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        {timelineData.map((_, index) => (
          <React.Fragment key={index}>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            {index < timelineData.length - 1 && (
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressTimeline;
