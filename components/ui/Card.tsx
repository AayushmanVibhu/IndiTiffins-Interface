import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-md transition-shadow duration-200 cursor-pointer' : '';
  
  return (
    <div className={`bg-surface rounded-2xl shadow-sm border border-border p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
