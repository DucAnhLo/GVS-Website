import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    href: '/services/web-development',
  },
  {
    title: 'CMS Solutions',
    description: 'Powerful content management platforms for easy content control.',
    href: '/services/cms-solutions',
  },
  {
    title: 'CRM Systems',
    description: 'Customer relationship management tools that boost conversions.',
    href: '/services/crm-systems',
  },
  {
    title: 'Web UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users.',
    href: '/services/ui-ux-design',
  },
  {
    title: 'Digital Document Storage',
    description: 'Secure, cloud-based document management systems.',
    href: '/services/digital-document-storage',
  },
  {
    title: 'Digital Signature',
    description: 'Legally binding electronic signature solutions.',
    href: '/services/digital-signature',
  },
];

const MegaMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="group/item py-3 border-b border-gray-200 hover:border-[#0078D4] transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover/item:text-[#0078D4] transition-colors">
              {service.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed group-hover/item:text-gray-700">
              {service.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
