'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function CRMService() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    { name: 'React', icon: 'logos:react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'logos:nextjs-icon', color: '#000000' },
    { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
    { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#4169E1' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248' },
    { name: 'Redis', icon: 'logos:redis', color: '#DC382D' },
    { name: 'AWS', icon: 'logos:aws', color: '#FF9900' },
  ];

  const features = [
    {
      title: 'Lead Management',
      description: 'Track, score, and nurture leads through your entire sales funnel with intelligent automation.',
      icon: 'carbon:user-follow',
      accent: '#10B981'
    },
    {
      title: 'Sales Pipeline',
      description: 'Visualize your sales process and forecast revenue with real-time pipeline analytics.',
      icon: 'carbon:chart-line-smooth',
      accent: '#3B82F6'
    },
    {
      title: 'Customer Insights',
      description: 'Unified customer profiles with interaction history, preferences, and behavioral data.',
      icon: 'carbon:analytics',
      accent: '#F59E0B'
    },
    {
      title: 'Automation',
      description: 'Automate repetitive tasks, workflows, and communications to boost team productivity.',
      icon: 'carbon:collaborate',
      accent: '#8B5CF6'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3 text-sm" style={{ animation: 'fadeInLeft 0.8s ease-out both' }}>
                <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">Home</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <Link href="/#services" className="text-gray-500 hover:text-blue-600 transition-colors">Services</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <span className="text-blue-600 font-medium">CRM Systems</span>
              </div>

              <div className="space-y-4">
                <div className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold text-sm tracking-widest" style={{ animation: 'fadeInLeft 0.8s ease-out 0.1s both' }}>
                  CRM SYSTEMS
                </div>

                <h1 className="text-4xl lg:text-[40px] font-semibold leading-none" style={{ fontFamily: '"Space Grotesk", system-ui, -apple-system, sans-serif', animation: 'fadeInLeft 0.8s ease-out 0.2s both', letterSpacing: '-0.03em' }}>
                  <span className="block text-gray-900">GROW</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600">
                    CUSTOMER
                  </span>
                  <span className="block text-gray-900">RELATIONSHIPS</span>
                </h1>
              </div>

              <p className="text-base text-gray-600 max-w-xl leading-relaxed" style={{ animation: 'fadeInLeft 0.8s ease-out 0.3s both', fontFamily: '"Inter", system-ui, sans-serif' }}>
                We build custom CRM systems that transform how you manage customers, streamline sales processes, and boost conversions with powerful automation and analytics.
              </p>

              <div className="flex flex-wrap gap-4" style={{ animation: 'fadeInLeft 0.8s ease-out 0.4s both' }}>
                <Link href="/contact" className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold text-sm tracking-wider overflow-hidden rounded-full">
                  <span className="relative z-10">START A PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/contact" className="group px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-full">
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* CRM Dashboard Visualization */}
            <div className="lg:col-span-5" style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}>
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 shadow-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-lg">Sales Pipeline</h3>
                    <div className="text-xs text-gray-500">Q4 2024</div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {['Lead', 'Qualified', 'Proposal', 'Closed'].map((stage, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-medium text-gray-600 mb-2">{stage}</div>
                        <div className="space-y-1">
                          {[...Array(4 - i)].map((_, j) => (
                            <div key={j} className="h-8 bg-blue-100 border border-blue-300 rounded flex items-center justify-center text-xs text-blue-700">
                              ${(5 + j) * 10}k
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total Value</span>
                      <span className="text-2xl font-semibold text-blue-600">$340k</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-sky-500" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>

                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-green-600"></div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-xs tracking-widest text-gray-400">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-sm font-semibold tracking-widest text-gray-400 mb-6">WHAT WE DELIVER</div>
                <h2 className="text-3xl lg:text-[36px] font-semibold leading-none mb-6" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
                  INTELLIGENT
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                    CRM TOOLS
                  </span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Data-driven solutions that turn prospects into loyal customers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative p-6 bg-white border-l-4 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl rounded-r-2xl" style={{ borderColor: feature.accent, animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both` }}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg" style={{ backgroundColor: feature.accent }}>
                      <Icon icon={feature.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: feature.accent }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold text-sm tracking-widest mb-6">
              TECHNOLOGY STACK
            </div>
            <h2 className="text-3xl lg:text-[36px] font-semibold" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
              BUILT WITH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                PROVEN TECH
              </span>
            </h2>
            <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build custom CRM systems tailored to your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-200">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative aspect-square bg-white border border-gray-200 hover:border-blue-600 transition-all duration-300 overflow-hidden hover:shadow-xl" style={{ animation: `fadeInScale 0.6s ease-out ${0.05 * index}s both` }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <Icon icon={tech.icon} className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: tech.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[36px] font-semibold mb-6 leading-tight" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
            BOOST YOUR
            <span className="block">SALES TODAY</span>
          </h2>
          <p className="text-lg mb-10 text-white/90">
            Let's build a CRM that drives real results
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="group px-8 py-4 bg-black text-white font-semibold text-base tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-full">
              GET STARTED →
            </Link>
            <Link href="/#projects" className="group px-8 py-4 border-4 border-black text-black font-semibold text-base tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-full">
              VIEW WORK
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&family=Inter:wght@400;600;700&display=swap');
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0) translateX(-50%); } 50% { transform: translateY(-10px) translateX(-50%); } }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
