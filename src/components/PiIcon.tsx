import React from 'react';

interface PiIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PiIcon: React.FC<PiIconProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#piGradient)"
          className="drop-shadow-lg"
        />
        <path
          d="M30 35h25c8.284 0 15 6.716 15 15s-6.716 15-15 15H40v10h-10V35z"
          fill="currentColor"
          className="text-primary-foreground"
        />
        <path
          d="M40 45h15c2.761 0 5 2.239 5 5s-2.239 5-5 5H40V45z"
          fill="currentColor"
          className="text-background opacity-50"
        />
        <defs>
          <linearGradient id="piGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};