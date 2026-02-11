'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/plans', label: 'Plans' },
    { href: '/how', label: 'How It Works' },
  ];
  
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-brand-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <BrandLogo variant="nav" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-charcoal hover:text-brand-red font-semibold transition-all duration-200 hover:scale-105 relative group py-2 px-3 min-h-[44px] flex items-center"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/signin" className="inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent hover:bg-gray-200 text-text border-2 border-border focus:ring-gray-300 px-6 py-3 text-sm min-h-[44px]">
              Sign In
            </Link>
            <Link href="/plans" className="inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-red hover:bg-brand-red2 text-white focus:ring-brand-red shadow-sm px-6 py-3 text-sm min-h-[44px]">
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-brand-saffron/10 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brand-charcoal"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-border bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-charcoal hover:text-brand-red transition-colors font-semibold py-3 hover:bg-brand-saffron/5 px-3 rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <Link href="/signin" className="inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent hover:bg-gray-200 text-text border-2 border-border focus:ring-gray-300 px-8 py-4 text-base min-h-[48px] w-full">
                  Sign In
                </Link>
                <Link href="/plans" className="inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-brand-red hover:bg-brand-red2 text-white focus:ring-brand-red shadow-sm px-8 py-4 text-base min-h-[48px] w-full">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
