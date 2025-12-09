'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isClientsVisible, setIsClientsVisible] = useState(false);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    // Observer for header
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Observer for clients section
    const clientsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsClientsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (clientsRef.current) {
      clientsObserver.observe(clientsRef.current);
    }

    // Observers for cards
    const cardObservers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      headerObserver.disconnect();
      clientsObserver.disconnect();
      cardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Client data - add logos later
  const clients = [
    { id: 1, name: 'Client 1', logo: '/clients/vnc.avif' },
    { id: 2, name: 'Client 2', logo: '/clients/AIG/aiglogo.png' },
    { id: 3, name: 'Client 3', logo: '/clients/sgeduvn.webp' },
    { id: 4, name: 'Client 4', logo: '/clients/tpduk.jpg' },
  ];

  const azureBlue = '#0078D4';
  
  const services = [
    {
      icon: 'vscode-icons:file-type-reactjs',
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies for optimal performance and user experience.',
      slug: 'web-development'
    },
    {
      icon: 'fluent-color:content-view-32',
      title: 'CMS Solutions',
      description: 'Powerful content management platforms that give you full control over your digital content with ease.',
      slug: 'cms-solutions'
    },
    {
      icon: 'flat-color-icons:workflow',
      title: 'CRM Systems',
      description: 'Intelligent customer relationship management tools designed to boost conversions and streamline operations.',
      slug: 'crm-systems'
    },
    {
      icon: 'fluent-color:design-ideas-32',
      title: 'Web UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences that delight users and drive engagement.',
      slug: 'ui-ux-design'
    },
    {
      icon: 'fluent-color:document-24',
      title: 'Digital Document Storage',
      description: 'Secure, cloud-based document management systems for easy access, organization, and collaboration.',
      slug: 'digital-document-storage'
    },
    {
      icon: 'flat-color-icons:signature',
      title: 'Digital Signature',
      description: 'Legally binding electronic signature solutions that streamline document signing and approval workflows.',
      slug: 'digital-signature'
    }
  ];


  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-slate-900 overflow-hidden transition-colors duration-300">
      {/* Background Elements - Light Theme */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure-cloud/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Minimalist Style */}
        <div 
          ref={headerRef}
          className={`mb-24 transition-all duration-700 ${
            isHeaderVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
                <span className="font-normal">Transform your</span>{' '}
                <span className="font-bold">business</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                From web development to digital signatures, our comprehensive solutions help you build, manage, and scale your digital presence with confidence.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group whitespace-nowrap"
              >
                <span>Get started</span>
                <Icon
                  icon="fluent:arrow-right-24-filled"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid - Staggered Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const CardContent = (
              <>
                {/* Card with Deep Shadow - Rounded */}
                <div className="relative h-full bg-white dark:bg-white/5 border-2 border-gray-200/50 dark:border-white/10 p-8 rounded-2xl transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-azure-blue/20 hover:-translate-y-2">

                {/* Accent Corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 rounded-tr-2xl"
                  style={{
                    background: `radial-gradient(circle at top right, ${azureBlue}, transparent 70%)`
                  }}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative inline-flex p-4 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 border border-gray-100 dark:border-white/10">
                    <Icon icon={service.icon} className="w-12 h-12" />

                    {/* Icon Glow */}
                    <div
                      className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: azureBlue }}
                    ></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300" style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300" style={{ color: azureBlue }}>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Learn More</span>
                  <Icon
                    icon="fluent:arrow-right-24-filled"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full rounded-bl-2xl"
                  style={{ backgroundColor: azureBlue }}
                ></div>
              </div>
              </>
            );

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group transition-all duration-700 ${
                  visibleCards.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {service.slug ? (
                  <Link href={`/services/${service.slug}`}>
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>

        {/* Clients Section */}
        <div 
          ref={clientsRef}
          className={`mt-40 transition-all duration-700 ${
            isClientsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
              <span className="font-normal">Trusted by</span>{' '}
              <span className="font-bold">industry leaders</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Partnering with forward-thinking organizations to deliver exceptional results
            </p>
          </div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden py-8">
            {/* Marquee Content */}
            <div className="flex gap-16 animate-marquee">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="w-64 h-32 flex items-center justify-center transition-all duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-auto h-auto object-contain transition-all duration-300 group-hover:scale-110 ${
                          client.logo.includes('AIG') 
                            ? 'max-w-[400px] max-h-48' 
                            : 'max-w-[200px] max-h-24'
                        }`}
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
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group"
          >
            <span>Explore all services</span>
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
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
          animation: marquee 15s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;
