'use client'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-azure-blue to-azure-cloud bg-clip-text text-transparent">
                GSV
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            <a href="#" className="text-slate-300 hover:text-azure-blue font-medium transition-colors">
              Home
            </a>

            {/* Mega Menu Trigger */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 text-slate-300 group-hover:text-azure-blue font-medium transition-colors focus:outline-none">
                Services
                <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <MegaMenu />
            </div>

            <a href="#" className="text-slate-300 hover:text-azure-blue font-medium transition-colors">
              About Us
            </a>
            <a href="#" className="text-slate-300 hover:text-azure-blue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="px-6 py-2.5 bg-azure-blue text-white font-medium hover:bg-azure-dark transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-azure-blue hover:bg-white/5 focus:outline-none"
            >
              {isMobileMenuOpen ? <Icon icon="lucide:x" className="w-6 h-6" /> : <Icon icon="lucide:menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Basic Implementation) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-white/10 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-azure-blue hover:bg-white/5">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-azure-blue hover:bg-white/5">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-azure-blue hover:bg-white/5">
              About Us
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-azure-blue hover:bg-white/5">
              Contact
            </a>
            <div className="pt-4">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 bg-azure-blue text-white font-medium hover:bg-azure-dark transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
