import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-200 text-gray-900',
    success: 'bg-green-200 text-green-900',
    warning: 'bg-yellow-200 text-yellow-900',
    danger: 'bg-red-200 text-red-900',
    info: 'bg-blue-200 text-blue-900',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
