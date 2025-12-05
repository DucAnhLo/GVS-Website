'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function WebDevelopmentService() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    { name: 'React', icon: 'logos:react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'logos:nextjs-icon', color: '#000000' },
    { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
    { name: 'Tailwind', icon: 'logos:tailwindcss-icon', color: '#06B6D4' },
    { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#4169E1' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248' },
    { name: 'AWS', icon: 'logos:aws', color: '#FF9900' },
  ];

  const capabilities = [
    { title: 'Lightning Fast', metric: '<100ms', detail: 'Page Load Time' },
    { title: 'Scalable', metric: '1M+', detail: 'Concurrent Users' },
    { title: 'Reliable', metric: '99.9%', detail: 'Uptime SLA' },
    { title: 'Secure', metric: 'A+', detail: 'Security Rating' },
  ];

  const features = [
    {
      title: 'Pixel-Perfect Design',
      description: 'Every pixel matters. We craft interfaces that are visually stunning and meticulously detailed.',
      icon: 'carbon:grid',
      accent: '#FF6B6B'
    },
    {
      title: 'Blazing Performance',
      description: 'Optimized code, smart caching, and CDN integration for lightning-fast experiences.',
      icon: 'carbon:flash',
      accent: '#4ECDC4'
    },
    {
      title: 'Mobile-First',
      description: 'Built from the ground up for mobile, scaling beautifully to desktop.',
      icon: 'carbon:devices',
      accent: '#FFE66D'
    },
    {
      title: 'Future-Proof',
      description: 'Modern architecture that adapts and scales with your growing business.',
      icon: 'carbon:rocket',
      accent: '#A8E6CF'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Hero Section - Bold Asymmetric */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Breadcrumb with style */}
              <div className="flex items-center gap-3 text-sm" style={{ animation: 'fadeInLeft 0.8s ease-out both' }}>
                <Link href="/" className="text-gray-500 hover:text-cyan-600 transition-colors">
                  Home
                </Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <Link href="/#services" className="text-gray-500 hover:text-cyan-600 transition-colors">
                  Services
                </Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <span className="text-cyan-600 font-medium">Web Development</span>
              </div>

              {/* Large Title */}
              <div className="space-y-4">
                <div
                  className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold text-sm tracking-widest"
                  style={{ animation: 'fadeInLeft 0.8s ease-out 0.1s both' }}
                >
                  WEB DEVELOPMENT
                </div>

                <h1
                  className="text-7xl lg:text-8xl font-semibold leading-none"
                  style={{
                    fontFamily: '"Space Grotesk", system-ui, -apple-system, sans-serif',
                    animation: 'fadeInLeft 0.8s ease-out 0.2s both',
                    letterSpacing: '-0.03em'
                  }}
                >
                  <span className="block text-gray-900">BUILD</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                    EXTRAORDINARY
                  </span>
                  <span className="block text-gray-900">WEB APPS</span>
                </h1>
              </div>

              <p
                className="text-xl text-gray-600 max-w-xl leading-relaxed"
                style={{
                  animation: 'fadeInLeft 0.8s ease-out 0.3s both',
                  fontFamily: '"Inter", system-ui, sans-serif'
                }}
              >
                We don't just code websites. We engineer digital experiences that captivate users,
                drive conversions, and scale effortlessly.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4"
                style={{ animation: 'fadeInLeft 0.8s ease-out 0.4s both' }}
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm tracking-wider overflow-hidden"
                >
                  <span className="relative z-10">START A PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact"
                  className="group px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  GET A QUOTE
                </Link>
              </div>

            </div>

            {/* Right Visual - 3D-ish Code Block (KEEP DARK) */}
            <div
              className="lg:col-span-5"
              style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}
            >
              <div className="relative">
                {/* Code Window */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 font-mono text-sm shadow-2xl">
                  {/* Window Controls */}
                  <div className="flex gap-2 mb-6 pb-4 border-b border-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Code */}
                  <div className="space-y-2 text-white">
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-400">innovation</span> <span className="text-gray-500">=</span> <span className="text-orange-400">'unlimited'</span><span className="text-gray-500">;</span></div>
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-400">performance</span> <span className="text-gray-500">=</span> <span className="text-orange-400">'blazing'</span><span className="text-gray-500">;</span></div>
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-400">quality</span> <span className="text-gray-500">=</span> <span className="text-orange-400">'exceptional'</span><span className="text-gray-500">;</span></div>
                    <div className="pt-4">
                      <span className="text-purple-400">function</span> <span className="text-green-400">buildWebApp</span><span className="text-gray-500">() {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span> <span className="text-gray-500">(</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">&lt;Future</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-green-400">scalable</span><span className="text-gray-500">=</span><span className="text-orange-400">{'{true}'}</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-green-400">beautiful</span><span className="text-gray-500">=</span><span className="text-orange-400">{'{true}'}</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-green-400">powerful</span><span className="text-gray-500">=</span><span className="text-orange-400">{'{true}'}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-cyan-400">/&gt;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-500">);</span>
                    </div>
                    <div><span className="text-gray-500">{'}'}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-xs tracking-widest text-gray-400">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </section>

      {/* Features Section - Magazine Layout */}
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Large Title */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-sm font-semibold tracking-widest text-gray-400 mb-6">WHAT WE DELIVER</div>
                <h2 className="text-6xl lg:text-7xl font-semibold leading-none mb-8" style={{
                  fontFamily: '"Space Grotesk", system-ui, sans-serif',
                  letterSpacing: '-0.03em'
                }}>
                  FEATURES THAT
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    MATTER
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Every feature is crafted with precision, tested rigorously, and optimized for real-world performance.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="lg:col-span-7 space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-white border-l-8 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl"
                  style={{
                    borderColor: feature.accent,
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
                      style={{ backgroundColor: feature.accent }}
                    >
                      <Icon icon={feature.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-semibold mb-3 text-gray-900" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: feature.accent }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Brutalist Grid */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold text-sm tracking-widest mb-6">
              TECHNOLOGY STACK
            </div>
            <h2 className="text-6xl lg:text-7xl font-semibold" style={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              letterSpacing: '-0.03em'
            }}>
              POWERED BY THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                BEST TOOLS
              </span>
            </h2>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-200">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-white border border-gray-200 hover:border-cyan-600 transition-all duration-300 overflow-hidden hover:shadow-xl"
                style={{ animation: `fadeInScale 0.6s ease-out ${0.05 * index}s both` }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <Icon
                    icon={tech.icon}
                    className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline (KEEP DARK) */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-semibold mb-6" style={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              letterSpacing: '-0.03em'
            }}>
              OUR PROCESS
            </h2>
            <p className="text-xl text-gray-400">
              From concept to launch, we've got you covered
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-24">
            {[
              { step: '01', title: 'DISCOVERY', desc: 'Deep dive into your vision, goals, and requirements', icon: 'carbon:search' },
              { step: '02', title: 'DESIGN', desc: 'Craft beautiful, intuitive interfaces that users love', icon: 'carbon:paint-brush' },
              { step: '03', title: 'DEVELOP', desc: 'Build with cutting-edge tech and best practices', icon: 'carbon:code' },
              { step: '04', title: 'DEPLOY', desc: 'Launch with confidence and ongoing support', icon: 'carbon:rocket' }
            ].map((phase, index) => (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-8 items-center"
                style={{ animation: `fadeInUp 0.8s ease-out ${0.2 * index}s both` }}
              >
                <div className={`md:col-span-3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-600">
                    {phase.step}
                  </div>
                </div>

                <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
                  <div className="w-24 h-24 border-4 border-cyan-400 flex items-center justify-center">
                    <Icon icon={phase.icon} className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>

                <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-3' : 'md:order-3'}`}>
                  <h3 className="text-4xl font-semibold mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    {phase.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="relative py-32 px-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl lg:text-7xl font-semibold mb-8 leading-tight" style={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            letterSpacing: '-0.03em'
          }}>
            LET'S BUILD
            <span className="block">SOMETHING EPIC</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90">
            Your vision. Our expertise. Unlimited possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group px-12 py-6 bg-black text-white font-semibold text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              START NOW →
            </Link>
            <Link
              href="/#projects"
              className="group px-12 py-6 border-4 border-black text-black font-semibold text-lg tracking-wider hover:bg-black hover:text-white transition-all duration-300"
            >
              VIEW WORK
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&family=Inter:wght@400;600;700&display=swap');

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
