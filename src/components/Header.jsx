'use client'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    { title: 'Web Development', href: '/services/web-development' },
    { title: 'CMS Solutions', href: '/services/cms-solutions' },
    { title: 'CRM Systems', href: '/services/crm-systems' },
    { title: 'UI/UX Design', href: '/services/ui-ux-design' },
    { title: 'Digital Document Storage', href: '/services/digital-document-storage' },
    { title: 'Digital Signature', href: '/services/digital-signature' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[50px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex-1">
            <a href="/" className="flex items-center gap-2">
              <img src='/gsvlogo.png' alt="GSV Logo" className="h-10 w-auto" />
              {/* <span className="text-3xl font-bold bg-gradient-to-r from-azure-blue to-azure-cloud bg-clip-text text-transparent">
                GSV
              </span> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center h-full flex-1 justify-center">
            <a href="/" className="text-gray-600 dark:text-slate-300 hover:text-azure-blue dark:hover:text-azure-blue font-medium transition-colors">
              Home
            </a>

            {/* Mega Menu Trigger */}
            <div className="group h-full flex items-center">
              <button className="flex items-center gap-1 text-gray-600 dark:text-slate-300 group-hover:text-azure-blue font-medium transition-colors focus:outline-none">
                Services
                <Icon icon="lucide:chevron-down" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <MegaMenu />
            </div>

            <a href="/about" className="text-gray-600 dark:text-slate-300 hover:text-azure-blue dark:hover:text-azure-blue font-medium transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-gray-600 dark:text-slate-300 hover:text-azure-blue dark:hover:text-azure-blue font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex flex-1 justify-end">
            <a
              href="/contact"
              className="px-6 py-2.5 border border-azure-blue text-azure-blue font-medium hover:bg-azure-blue hover:text-white transition-all shadow-lg shadow-azure-blue/10"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/50 dark:hover:bg-white/10 focus:outline-none transition-colors"
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
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-slate-300 hover:text-azure-blue hover:bg-azure-sky/30 dark:hover:bg-white/10 transition-colors">
              Home
            </a>

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
