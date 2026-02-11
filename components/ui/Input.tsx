import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export default function Input({ label, error, helperText, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-button border min-h-[48px] ${
          error ? 'border-accent focus:ring-accent' : 'border-border focus:ring-primary'
        } focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-accent">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-text-muted">{helperText}</p>
      )}
    </div>
  );
}
