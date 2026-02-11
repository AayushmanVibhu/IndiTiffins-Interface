import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-brand-red hover:bg-brand-red2 text-white focus:ring-brand-red shadow-sm',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary shadow-sm',
    ghost: 'bg-transparent hover:bg-gray-200 text-text border-2 border-border focus:ring-gray-300',
    accent: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent shadow-sm',
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-sm min-h-[44px]',
    md: 'px-8 py-4 text-base min-h-[48px]',
    lg: 'px-10 py-5 text-lg min-h-[52px]',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
