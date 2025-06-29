
import React from 'react';

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      description: "Member ID: 12345, Name: John Doe, Last Purchase: 2023-10-01, Total Purchases: 5",
    },
    {
      id: 2,
      description: "Member ID: 67890, Name: Jane Smith, Last Purchase: 2023-10-02, Total Purchases: 3",
    },
  ];

  return (
    <div className="cyber-card p-6">
      <h3 className="text-cyan-400 font-bold text-lg mb-4">ข้อมูลลูกค้าซื้อซ้ำ</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="text-gray-300 text-sm leading-relaxed">
            {activity.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
