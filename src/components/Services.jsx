'use client'
import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Services = () => {
  const marqueeRef = useRef(null);

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
      color: '#0EA5E9',
      bgGradient: 'from-sky-500/10 to-blue-500/5',
      shadowColor: 'shadow-sky-500/20'
    },
    {
      icon: 'fluent-color:content-view-32',
      title: 'CMS Solutions',
      description: 'Powerful content management platforms that give you full control over your digital content with ease.',
      color: '#8B5CF6',
      bgGradient: 'from-violet-500/10 to-purple-500/5',
      shadowColor: 'shadow-violet-500/20'
    },
    {
      icon: 'flat-color-icons:workflow',
      title: 'CRM Systems',
      description: 'Intelligent customer relationship management tools designed to boost conversions and streamline operations.',
      color: '#10B981',
      bgGradient: 'from-emerald-500/10 to-green-500/5',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      icon: 'fluent-color:design-ideas-32',
      title: 'Web UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences that delight users and drive engagement.',
      color: '#F59E0B',
      bgGradient: 'from-amber-500/10 to-orange-500/5',
      shadowColor: 'shadow-amber-500/20'
    },
    {
      icon: 'fluent-color:document-24',
      title: 'Digital Document Storage',
      description: 'Secure, cloud-based document management systems for easy access, organization, and collaboration.',
      color: '#EC4899',
      bgGradient: 'from-pink-500/10 to-rose-500/5',
      shadowColor: 'shadow-pink-500/20'
    },
    {
      icon: 'flat-color-icons:signature',
      title: 'Digital Signature',
      description: 'Legally binding electronic signature solutions that streamline document signing and approval workflows.',
      color: '#06B6D4',
      bgGradient: 'from-cyan-500/10 to-teal-500/5',
      shadowColor: 'shadow-cyan-500/20'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements - Light Theme */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure-cloud/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6" style={{ animation: 'fadeInUp 0.6s ease-out both' }}>
            <div className="h-1 w-20 bg-gradient-to-r from-azure-blue to-transparent"></div>
            <span className="text-xs font-black tracking-[0.3em] uppercase text-azure-blue">
              What We Do
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            animation: 'fadeInUp 0.6s ease-out 0.1s both'
          }}>
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            Comprehensive digital solutions engineered to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid - Staggered Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
              style={{
                animation: `cardSlideIn 0.8s ease-out ${0.1 * index}s both`
              }}
            >
              {/* Card with Deep Shadow */}
              <div className={`relative h-full bg-white border-2 border-gray-200/50 p-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl ${service.shadowColor} hover:-translate-y-2`}>

                {/* Accent Corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`
                  }}
                ></div>

                {/* Large Number Watermark */}
                {/* <div
                  className="absolute -bottom-4 -right-4 text-[120px] font-black leading-none opacity-5 pointer-events-none text-gray-900"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div> */}

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative inline-flex p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 border border-gray-100">
                    <Icon icon={service.icon} className="w-12 h-12" />

                    {/* Icon Glow */}
                    <div
                      className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: service.color }}
                    ></div>
                  </div>

                  {/* Service Number Badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 transition-colors duration-300" style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300" style={{ color: service.color }}>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
                  <Icon
                    icon="fluent:arrow-right-24-filled"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full"
                  style={{ backgroundColor: service.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="mt-40">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-azure-blue/10 border border-azure-blue/30 mb-6">
              <div className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-azure-blue">
                Trusted By Industry Leaders
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partnering with forward-thinking organizations to deliver exceptional results
            </p>
          </div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden py-8 bg-gray-50/50 backdrop-blur-sm ">
            {/* Gradient Overlays */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div> */}

            {/* Marquee Content */}
            <div className="flex gap-16 animate-marquee">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-24 flex items-center justify-center transition-all duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-auto h-auto max-w-[140px] max-h-16 object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <Icon
                          icon="fluent:building-24-filled"
                          className="w-12 h-12 text-gray-300 group-hover:text-azure-blue transition-colors duration-300"
                        />
                        <span className="mt-2 text-xs text-gray-400 font-medium">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          {/* <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Happy Clients', icon: 'fluent:people-24-filled' },
              { number: '200+', label: 'Projects Completed', icon: 'fluent:rocket-24-filled' },
              { number: '15+', label: 'Years Experience', icon: 'fluent:trophy-24-filled' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-lg hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` }}
              >
                <Icon icon={stat.icon} className="w-10 h-10 text-azure-blue mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white font-black text-sm tracking-wider uppercase transition-all duration-300 hover:bg-azure-blue hover:shadow-2xl hover:shadow-azure-blue/30 hover:-translate-y-1"
          >
            Explore All Services
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;
