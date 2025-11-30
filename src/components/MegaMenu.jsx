import React from 'react';
import { Icon } from '@iconify/react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    icon: <Icon icon="vscode-icons:file-type-reactjs" className="w-6 h-6" />,
    href: '/services/web-development',
  },
  {
    title: 'CMS Solutions',
    description: 'Powerful content management platforms for easy content control.',
    icon: <Icon icon="fluent-color:content-view-32" className="w-6 h-6" />,
    href: '/services/cms-solutions',
  },
  {
    title: 'CRM Systems',
    description: 'Customer relationship management tools that boost conversions.',
    icon: <Icon icon="flat-color-icons:workflow" className="w-6 h-6" />,
    href: '/services/crm-systems',
  },
  {
    title: 'Web UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users.',
    icon: <Icon icon="fluent-color:design-ideas-32" className="w-6 h-6" />,
    href: '/services/ui-ux-design',
  },
  {
    title: 'Digital Document Storage',
    description: 'Secure, cloud-based document management systems.',
    icon: <Icon icon="fluent-color:document-24" className="w-6 h-6" />,
    href: '/services/digital-document-storage',
  },
  {
    title: 'Digital Signature',
    description: 'Legally binding electronic signature solutions.',
    icon: <Icon icon="flat-color-icons:signature" className="w-6 h-6" />,
    href: '/services/digital-signature',
  },
];

const MegaMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
