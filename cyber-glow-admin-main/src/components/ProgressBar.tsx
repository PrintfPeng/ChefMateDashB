
import React from 'react';

interface ProgressBarData {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

interface ProgressBarProps {
  data: ProgressBarData[];
  title: string;
  subtitle: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ data, title, subtitle }) => {
  return (
    <div className="cyber-card p-6">
      <div className="mb-6">
        <h3 className="text-cyan-400 font-bold text-lg mb-1">{title}</h3>
        <p className="text-cyan-300 text-sm">{subtitle}</p>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-sm">{item.label}</span>
              <span className="text-cyan-400 text-sm">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(item.value / item.maxValue) * 100}%`,
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                  boxShadow: `0 0 10px ${item.color}40`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
