import React from 'react';
import { Icon } from '@iconify/react';

const services = [
  {
    title: 'Website App',
    description: 'Custom web applications tailored to your business needs.',
    icon: <Icon icon="vscode-icons:file-type-reactjs" className="w-6 h-6" />,
    href: '#',
  },
  {
    title: 'CMS Solutions',
    description: 'Robust Content Management Systems for easy content updates.',
    icon: <Icon icon="flat-color-icons:template" className="w-6 h-6" />,
    href: '#',
  },
  {
    title: 'CRM Systems',
    description: 'Customer Relationship Management tools to grow your business.',
    icon: <Icon icon="flat-color-icons:workflow" className="w-6 h-6" />,
    href: '#',
  },
];

const MegaMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="flex flex-col p-4 hover:bg-azure-sky/30 transition-colors duration-200 group/item"
          >
            <div className="mb-4 p-3 bg-azure-sky w-fit group-hover/item:scale-110 transition-transform duration-200">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover/item:text-azure-blue transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
