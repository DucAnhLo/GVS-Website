'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import MegaMenu from './MegaMenu';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Web Development', href: '/services/web-development' },
    { title: 'CMS Solutions', href: '/services/cms-solutions' },
    { title: 'CRM Systems', href: '/services/crm-systems' },
    { title: 'UI/UX Design', href: '/services/ui-ux-design' },
    { title: 'Digital Document Storage', href: '/services/digital-document-storage' },
    { title: 'Digital Signature', href: '/services/digital-signature' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg shadow-black/5'
        : 'bg-white/80 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with subtle animation */}
          <div className="flex-shrink-0 relative group">
            <Link href="/" className="flex items-center">
              <img
                src='/gsvlogo1.png'
                alt="GSV Logo"
                className="h-28 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                style={{marginTop: '-8px', marginBottom: '-8px'}}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Modern & Spaced */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#0078D4] transition-colors group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0078D4] transition-all duration-300 group-hover:w-3/4"></span>
            </Link>

            {/* Mega Menu Trigger */}
            <div className="group h-full flex items-center">
              <button className="relative flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#0078D4] transition-colors focus:outline-none group">
                Services
                <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0078D4] transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              <MegaMenu />
            </div>

            <a
              href="/about"
              className="relative px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#0078D4] transition-colors group"
            >
              About
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0078D4] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a
              href="/contact"
              className="relative px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-[#0078D4] transition-colors group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0078D4] transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </nav>

          {/* CTA Button - Creative Design */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className="relative px-6 py-2.5 bg-[#0078D4] text-white text-sm font-semibold rounded-lg overflow-hidden group transition-all hover:shadow-lg hover:shadow-[#0078D4]/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get started
                <Icon icon="lucide:arrow-right" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#00A4EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#0078D4] focus:outline-none transition-colors rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <Icon icon="lucide:x" className="w-6 h-6" /> : <Icon icon="lucide:menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced Design */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#0078D4] hover:bg-blue-50 rounded-lg transition-all"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-[#0078D4] hover:bg-blue-50 rounded-lg transition-all"
              >
                Services
                <Icon
                  icon="lucide:chevron-down"
                  className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-2 space-y-1 mt-1">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#0078D4] hover:bg-blue-50 rounded-lg transition-all"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/about"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#0078D4] hover:bg-blue-50 rounded-lg transition-all"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#0078D4] hover:bg-blue-50 rounded-lg transition-all"
            >
              Contact
            </a>

            {/* Mobile CTA */}
            <div className="pt-4">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#0078D4] text-white font-semibold rounded-lg hover:bg-[#00A4EF] transition-all shadow-lg shadow-[#0078D4]/30"
              >
                Get started
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
