import React from 'react';
import { Icon } from '@iconify/react';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    icon: 'fluent:box-multiple-24-filled',
    href: '/services/web-development',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100'
  },
  {
    title: 'CMS Solutions',
    description: 'Powerful content management platforms for easy content control.',
    icon: 'fluent:content-settings-24-filled',
    href: '/services/cms-solutions',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  },
  {
    title: 'CRM Systems',
    description: 'Customer relationship management tools that boost conversions.',
    icon: 'fluent:people-community-24-filled',
    href: '/services/crm-systems',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  {
    title: 'Web UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users.',
    icon: 'fluent:design-ideas-24-filled',
    href: '/services/ui-ux-design',
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-100'
  },
  {
    title: 'Digital Document Storage',
    description: 'Secure, cloud-based document management systems.',
    icon: 'fluent:document-24-filled',
    href: '/services/digital-document-storage',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100'
  },
  {
    title: 'Digital Signature',
    description: 'Legally binding electronic signature solutions.',
    icon: 'fluent:signature-24-filled',
    href: '/services/digital-signature',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
];

const MegaMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group/item"
          >
            {/* Icon Box */}
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${service.bgColor} ${service.color} border ${service.borderColor} group-hover/item:scale-105 transition-transform duration-200`}>
              <Icon icon={service.icon} className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-0.5">
              <h3 className="text-[15px] font-bold text-gray-900 mb-1 group-hover/item:text-brand-black transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 group-hover/item:text-gray-600">
                {service.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
