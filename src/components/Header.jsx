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
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <Link href="/" className="flex items-center">
              <img src='/gsvlogo1.png' alt="GSV Logo" className="h-28 w-auto relative z-10" style={{marginTop: '-8px', marginBottom: '-8px'}} />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[15px] font-medium text-gray-700 hover:text-brand-black transition-colors">
              Home
            </Link>

            {/* Mega Menu Trigger */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-brand-black transition-colors focus:outline-none">
                Services
                <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <MegaMenu />
            </div>

            <a href="/about" className="text-[15px] font-medium text-gray-700 hover:text-brand-black transition-colors">
              About
            </a>
            <a href="/contact" className="text-[15px] font-medium text-gray-700 hover:text-brand-black transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          {/* <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="px-5 py-2.5 text-[15px] font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Login
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 bg-azure-blue text-white text-sm font-semibold rounded-md hover:bg-azure-blue/90 transition-all shadow-sm"
            >
              Start 7-day free trial
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-black focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <Icon icon="lucide:x" className="w-6 h-6" /> : <Icon icon="lucide:menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-white/10 absolute w-full left-0 shadow-lg transition-colors">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/30 dark:hover:bg-white/10 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/30 dark:hover:bg-white/10 transition-colors"
              >
                Services
                <Icon
                  icon="lucide:chevron-down"
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-azure-blue hover:bg-azure-sky/20 dark:hover:bg-white/5 transition-colors"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/30 dark:hover:bg-white/10 transition-colors">
              About Us
            </a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/30 dark:hover:bg-white/10 transition-colors">
              Contact
            </a>
            <div className="pt-4">
              <a
                href="/contact"
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
