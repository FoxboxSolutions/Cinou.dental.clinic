import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#9b00ff]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://i.ibb.co/3mhGg4tx/Logo.jpg" 
        alt="Cinou Dental Clinic Logo" 
        className="h-12 w-auto rounded-lg shadow-sm"
      />
      <span className={`font-bold text-xl tracking-tight ${textColor}`}>
        CINOU<span className="font-light">CLINIC</span>
      </span>
    </div>
  );
};

export default Logo;