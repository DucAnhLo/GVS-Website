'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const Services = () => {
  // Client data - add logos later
  const clients = [
    { id: 1, name: 'Client 1', logo: '/clients/vnc.avif' },
    { id: 2, name: 'Client 2', logo: '/clients/sgeduvn.webp' },
    { id: 3, name: 'Client 3', logo: '/clients/tpduk.jpg' },
  ];

  const services = [
    {
      icon: 'vscode-icons:file-type-reactjs',
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies for optimal performance and user experience.',
      color: 'azure-blue',
      bgColor: 'bg-azure-blue/5',
      borderColor: 'border-azure-blue'
    },
    {
      icon: 'flat-color-icons:template',
      title: 'CMS Solutions',
      description: 'Powerful content management platforms that give you full control over your digital content with ease.',
      color: 'azure-cloud',
      bgColor: 'bg-azure-cloud/5',
      borderColor: 'border-azure-cloud'
    },
    {
      icon: 'flat-color-icons:workflow',
      title: 'CRM Systems',
      description: 'Intelligent customer relationship management tools designed to boost conversions and streamline operations.',
      color: 'azure-green',
      bgColor: 'bg-azure-green/5',
      borderColor: 'border-azure-green'
    },
    {
      icon: 'flat-color-icons:smartphone-tablet',
      title: 'Web UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences that delight users and drive engagement.',
      color: 'azure-blue',
      bgColor: 'bg-azure-blue/5',
      borderColor: 'border-azure-blue'
    },
    {
      icon: 'flat-color-icons:file',
      title: 'Digital Document Storage',
      description: 'Secure, cloud-based document management systems for easy access, organization, and collaboration.',
      color: 'azure-cloud',
      bgColor: 'bg-azure-cloud/5',
      borderColor: 'border-azure-cloud'
    },
    {
      icon: 'flat-color-icons:signature',
      title: 'Digital Signature',
      description: 'Legally binding electronic signature solutions that streamline document signing and approval workflows.',
      color: 'azure-green',
      bgColor: 'bg-azure-green/5',
      borderColor: 'border-azure-green'
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white tracking-wider uppercase px-4 py-2 bg-azure-blue rounded-full">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business
          </p>
        </div>

        {/* Services Grid - Equal Height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex"
            >
              {/* Card */}
              <div className="relative flex flex-col w-full bg-white p-8 border-2 border-gray-200/50 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-2xl">
                {/* Colored border on hover */}
                <div className={`absolute inset-0 border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-azure-blue to-azure-dark text-white flex items-center justify-center font-bold text-xl shadow-lg`}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon with background */}
                <div className={`inline-flex p-4  mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon icon={service.icon} className="w-12 h-12" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-azure-blue to-azure-green group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-white tracking-wider uppercase px-4 py-2 bg-gradient-to-r from-azure-cloud to-azure-green rounded-full">
                Trusted By
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with leading companies and organizations
            </p>
          </div>

          {/* Clients Grid */}
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group relative bg-white border-2 border-gray-200 hover:border-azure-blue transition-all duration-300 p-4 flex items-center justify-center shadow-sm hover:shadow-xl h-20"
              >
                {/* Placeholder for logo */}
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-auto h-auto max-w-[140px] max-h-16 object-contain group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <Icon
                      icon="fluent:building-24-filled"
                      className="w-12 h-12 text-gray-300 group-hover:text-azure-blue transition-colors duration-300"
                    />
                    <span className="mt-2 text-xs text-gray-400 group-hover:text-azure-blue transition-colors duration-300">
                      {client.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group hover:text-azure-blue transition-colors"
          >
            Explore All Services
            <Icon
              icon="iconamoon:arrow-right-2-duotone"
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
