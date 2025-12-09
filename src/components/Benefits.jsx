'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

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
      cardObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const benefits = [
    {
      stat: '100%',
      title: 'Tailored solutions',
      description: 'Flexible outsourcing that adapts to your unique business needs and goals',
      image: '/benefits/tailored.jpg',
      gradient: 'from-azure-blue/20 to-cyan-500/10',
    },
    {
      stat: '24/7',
      title: 'Dedicated support',
      description: 'Committed team focused on your success with responsive communication',
      image: '/benefits/support.jpg',
      gradient: 'from-emerald-500/20 to-green-500/10',
    },
    {
      stat: '100%',
      title: 'Modern technology',
      description: 'Latest tools and frameworks to build cutting-edge digital solutions',
      image: '/benefits/tech.jpg',
      gradient: 'from-violet-500/20 to-purple-500/10',
    }
  ];

  return (
    <section className="relative py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Minimalist Style */}
        <div 
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            isHeaderVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="font-normal">3 pillars of</span>{' '}
            <span className="font-bold">outsourcing</span>{' '}
            <span className="font-normal">tailored for your needs</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
            Partner with us to leverage flexible, cost-effective solutions delivered by experienced professionals dedicated to your success.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group"
          >
            <span>Start your project</span>
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Card with image background */}
              <div className="relative h-[400px] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                {/* Background Image */}
                {benefit.image ? (
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}></div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {/* Large Statistic */}
                  <div className="text-6xl lg:text-7xl font-bold mb-3 transition-transform duration-300 group-hover:scale-105">
                    {benefit.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-azure-blue/0 group-hover:bg-azure-blue/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
