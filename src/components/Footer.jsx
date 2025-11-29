import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-azure-sky border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img src='/gsvlogo.png' alt="GSV Logo" className="h-40 w-40" />
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              Global Soft Vietnam - Delivering innovative software solutions for your business needs.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-azure-sky transition-all"
                aria-label="Facebook"
              >
                <Icon icon="logos:facebook" className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-azure-sky transition-all"
                aria-label="Twitter"
              >
                <Icon icon="logos:twitter" className="w-5 h-5" />
              </a> */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-azure-sky transition-all"
                aria-label="LinkedIn"
              >
                <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white hover:bg-azure-sky transition-all"
                aria-label="GitHub"
              >
                <Icon icon="logos:github-icon" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Excel → Platform
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Educational Sites
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors flex items-center gap-2 group">
                  <Icon icon="fluent-color:chevron-right-16" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Data Migration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600">
                <Icon icon="fluent:location-24-filled" className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue" />
                <span className="text-sm">671 Hoang Hoa Tham, Hanoi, Vietnam</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Icon icon="fluent:call-24-filled" className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue" />
                <span className="text-sm">+84 962062999</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Icon icon="fluent:mail-24-filled" className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue" />
                <span className="text-sm">info@globalsoftvietnam.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Icon icon="fluent:clock-24-filled" className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue" />
                <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              &copy; {currentYear} Global Soft Vietnam. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-azure-blue transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
