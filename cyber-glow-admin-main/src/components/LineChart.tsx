
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'เมื่อวาน', value: 30, color: '#f59e0b' },
  { name: 'วานนี้', value: 50, color: '#ec4899' },
  { name: 'พรุ่งนี้', value: 70, color: '#06b6d4' },
];

const CustomLineChart = () => {
  return (
    <div className="cyber-card p-6 col-span-2">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#f59e0b', strokeWidth: 2, fill: '#f59e0b' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ec4899"
              strokeWidth={3}
              dot={false}
              strokeDasharray="5 5"
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#06b6d4"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomLineChart;
