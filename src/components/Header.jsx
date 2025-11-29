'use client'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1">
            <a href="/" className="flex items-center gap-2">
              <img src='/gsvlogo.png' alt="GSV Logo" className="h-40 w-40" />
              {/* <span className="text-3xl font-bold bg-gradient-to-r from-azure-blue to-azure-cloud bg-clip-text text-transparent">
                GSV
              </span> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center h-full flex-1 justify-center">
            <a href="/" className="text-gray-600 hover:text-azure-blue font-medium transition-colors">
              Home
            </a>

            {/* Mega Menu Trigger */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 text-gray-600 group-hover:text-azure-blue font-medium transition-colors focus:outline-none">
                Services
                <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <MegaMenu />
            </div>

            <a href="/about" className="text-gray-600 hover:text-azure-blue font-medium transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 hover:text-azure-blue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="#"
              className="px-6 py-2.5 border border-azure-blue text-azure-blue font-medium hover:bg-azure-blue hover:text-white transition-all shadow-lg shadow-azure-blue/10"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-azure-blue hover:bg-azure-sky/50 focus:outline-none"
            >
              {isMobileMenuOpen ? <Icon icon="lucide:x" className="w-6 h-6" /> : <Icon icon="lucide:menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Basic Implementation) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-azure-blue hover:bg-azure-sky/30">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-azure-blue hover:bg-azure-sky/30">
              Services
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-azure-blue hover:bg-azure-sky/30">
              About Us
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-azure-blue hover:bg-azure-sky/30">
              Contact
            </a>
            <div className="pt-4">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 border border-azure-blue text-azure-blue font-medium hover:bg-azure-blue hover:text-white transition-all"
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
