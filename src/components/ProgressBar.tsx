import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  color = 'blue', 
  height = 8
}) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.min(Math.max(value, 0), 100);
  
  let bgColor = 'bg-blue-500';
  
  if (color === 'green') bgColor = 'bg-green-500';
  if (color === 'yellow') bgColor = 'bg-yellow-500';
  if (color === 'red') bgColor = 'bg-red-500';
  if (color === 'purple') bgColor = 'bg-purple-500';
  
  return (
    <div 
      className="w-full bg-gray-200 rounded-full overflow-hidden" 
      style={{ height: `${height}px` }}
    >
      <div 
        className={`${bgColor} transition-all duration-500 ease-out`}
        style={{ width: `${safeValue}%`, height: '100%' }}
        role="progressbar"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;