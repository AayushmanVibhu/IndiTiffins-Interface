import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'nav' | 'full';
  className?: string;
}

export default function BrandLogo({ variant = 'nav', className = '' }: BrandLogoProps) {
  if (variant === 'nav') {
    return (
      <Link href="/" className={`flex items-center ${className}`}>
        <Image
          src="/photos/logo.jpeg"
          alt="IndiTiffins"
          width={44}
          height={44}
          className="h-11 w-auto object-contain"
          priority
        />
      </Link>
    );
  }
  
  // variant === 'full'
  return (
    <div className={`${className}`}>
      <Image
        src="/photos/logo.jpeg"
        alt="IndiTiffins"
        width={280}
        height={280}
        className="w-full max-w-[180px] md:max-w-[280px] h-auto object-contain shadow-lg rounded-2xl"
        priority
      />
    </div>
  );
}
