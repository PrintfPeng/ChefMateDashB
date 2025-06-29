
import React from 'react';

interface StatCardProps {
  title: string;
  subtitle: string;
  percentage: string;
  description: string;
  gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  subtitle,
  percentage,
  description,
  gradient = "from-purple-600/30 to-pink-600/20"
}) => {
  return (
    <div className={`cyber-card p-6 bg-gradient-to-br ${gradient}`}>
      <div className="mb-2">
        <h3 className="text-yellow-400 font-bold text-lg">{title}</h3>
        <p className="text-yellow-300 text-sm">{subtitle}</p>
      </div>
      <div className="mb-4">
        <span className="text-5xl font-bold text-cyan-400 glow-text">{percentage}</span>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default StatCard;
