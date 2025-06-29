
import React from 'react';

interface CircularProgressProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  title: string;
  subtitle: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  maxValue,
  size = 120,
  strokeWidth = 8,
  color,
  title,
  subtitle
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (value / maxValue) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="cyber-card p-6 text-center">
      <div className="relative inline-flex items-center justify-center mb-4">
        <svg
          className="progress-ring"
          width={size}
          height={size}
        >
          <circle
            className="opacity-20"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="transition-all duration-1000 ease-in-out"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 10px ${color})`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white glow-text">{value.toLocaleString()}</span>
        </div>
      </div>
      <div>
        <h3 className="text-cyan-400 font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default CircularProgress;
