'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function UIUXService() {
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

  const tools = [
    { name: 'Figma', icon: 'logos:figma', color: '#F24E1E' },
    { name: 'Adobe XD', icon: 'logos:adobe-xd', color: '#FF61F6' },
    { name: 'Sketch', icon: 'logos:sketch', color: '#F7B500' },
    { name: 'Framer', icon: 'logos:framer', color: '#0055FF' },
    { name: 'Photoshop', icon: 'logos:adobe-photoshop', color: '#31A8FF' },
    { name: 'Illustrator', icon: 'logos:adobe-illustrator', color: '#FF9A00' },
    { name: 'InVision', icon: 'simple-icons:invision', color: '#FF3366' },
    { name: 'Miro', icon: 'simple-icons:miro', color: '#FFD02F' },
  ];

  const features = [
    {
      title: 'User Research',
      description: 'In-depth user interviews, personas, and journey mapping to understand your audience deeply.',
      icon: 'carbon:user-avatar',
      accent: '#F59E0B'
    },
    {
      title: 'Wireframing',
      description: 'Low and high-fidelity wireframes that establish solid information architecture.',
      icon: 'carbon:template',
      accent: '#06B6D4'
    },
    {
      title: 'Visual Design',
      description: 'Beautiful, on-brand interfaces with attention to typography, color, and composition.',
      icon: 'carbon:palette',
      accent: '#EC4899'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes that bring designs to life before development begins.',
      icon: 'carbon:presentation-file',
      accent: '#8B5CF6'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3 text-sm" style={{ animation: 'fadeInLeft 0.8s ease-out both' }}>
                <Link href="/" className="text-gray-500 hover:text-amber-600 transition-colors">Home</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <Link href="/#services" className="text-gray-500 hover:text-amber-600 transition-colors">Services</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <span className="text-amber-600 font-medium">UI/UX Design</span>
              </div>

              <div className="space-y-4">
                <div className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 font-black text-sm tracking-widest" style={{ animation: 'fadeInLeft 0.8s ease-out 0.1s both' }}>
                  UI/UX DESIGN
                </div>

                <h1 className="text-7xl lg:text-8xl font-black leading-none" style={{ fontFamily: '"Space Grotesk", system-ui, -apple-system, sans-serif', animation: 'fadeInLeft 0.8s ease-out 0.2s both', letterSpacing: '-0.03em' }}>
                  <span className="block text-gray-900">DESIGN</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                    EXPERIENCES
                  </span>
                  <span className="block text-gray-900">THAT DELIGHT</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed" style={{ animation: 'fadeInLeft 0.8s ease-out 0.3s both', fontFamily: '"Inter", system-ui, sans-serif' }}>
                We design beautiful, intuitive user interfaces and experiences that delight users and drive engagement through research-driven, user-centered design.
              </p>

              <div className="flex flex-wrap gap-4" style={{ animation: 'fadeInLeft 0.8s ease-out 0.4s both' }}>
                <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-sm tracking-wider overflow-hidden">
                  <span className="relative z-10">START A PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/contact" className="group px-8 py-4 border-2 border-gray-900 text-gray-900 font-black text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300">
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* Design Tool Interface Mockup */}
            <div className="lg:col-span-5" style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}>
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 shadow-2xl overflow-hidden">
                  {/* Tool Header */}
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon icon="logos:figma" className="w-5 h-5" />
                      <span className="text-sm font-bold text-gray-700">Design Tool</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <Icon icon="carbon:view" className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <Icon icon="carbon:share" className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* Canvas Area */}
                  <div className="bg-gray-100 p-8 min-h-[400px] flex items-center justify-center gap-6">
                    {/* Mobile Frame */}
                    <div className="bg-white rounded-lg shadow-lg p-4 w-40 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div className="bg-gray-200 rounded w-8 h-1 mx-auto mb-3"></div>
                      <div className="space-y-2">
                        <div className="bg-amber-100 border border-amber-300 h-12 rounded flex items-center justify-center">
                          <Icon icon="carbon:user-avatar" className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="bg-gray-200 h-3 rounded"></div>
                        <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="bg-amber-500 h-8 rounded"></div>
                          <div className="bg-gray-300 h-8 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Frame */}
                    <div className="bg-white rounded-lg shadow-xl p-3 w-56 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <div className="flex gap-1 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3 space-y-2">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                          <div className="bg-amber-500 w-8 h-8 rounded"></div>
                          <div className="flex-1">
                            <div className="bg-gray-200 h-2 rounded mb-1"></div>
                            <div className="bg-gray-200 h-2 rounded w-2/3"></div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="bg-amber-100 h-6 rounded"></div>
                          <div className="bg-gray-200 h-6 rounded"></div>
                          <div className="bg-gray-200 h-6 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500 mr-2">COLORS:</span>
                    <div className="w-6 h-6 rounded bg-amber-500 border border-gray-300"></div>
                    <div className="w-6 h-6 rounded bg-orange-500 border border-gray-300"></div>
                    <div className="w-6 h-6 rounded bg-gray-900 border border-gray-300"></div>
                    <div className="w-6 h-6 rounded bg-gray-100 border border-gray-300"></div>
                  </div>
                </div>

                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-orange-600"></div> */}
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
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-sm font-black tracking-widest text-gray-400 mb-6">WHAT WE DELIVER</div>
                <h2 className="text-6xl lg:text-7xl font-black leading-none mb-8" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
                  DESIGN
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    EXCELLENCE
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  User-centered design that puts your customers first.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative p-8 bg-white border-l-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ borderColor: feature.accent, animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both` }}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center" style={{ backgroundColor: feature.accent }}>
                      <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-3 text-gray-900" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
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

      {/* Tools */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 font-black text-sm tracking-widest mb-6">
              DESIGN TOOLS
            </div>
            <h2 className="text-6xl lg:text-7xl font-black" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
              INDUSTRY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                STANDARD TOOLS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-200">
            {tools.map((tool, index) => (
              <div key={index} className="group relative aspect-square bg-white border border-gray-200 hover:border-amber-600 transition-all duration-300 overflow-hidden hover:shadow-xl" style={{ animation: `fadeInScale 0.6s ease-out ${0.05 * index}s both` }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <Icon icon={tool.icon} className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-sm font-black text-gray-600 group-hover:text-gray-900 transition-colors">
                    {tool.name}
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: tool.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
            READY TO
            <span className="block">DESIGN BETTER?</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90">
            Let's create experiences your users will love
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="group px-12 py-6 bg-black text-white font-black text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300">
              GET STARTED →
            </Link>
            <Link href="/#projects" className="group px-12 py-6 border-4 border-black text-black font-black text-lg tracking-wider hover:bg-black hover:text-white transition-all duration-300">
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
