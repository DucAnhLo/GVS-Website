'use client'
import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const orbitals = heroRef.current.querySelectorAll('.orbital');
      orbitals.forEach((orbital, index) => {
        const speed = (index + 1) * 0.3;
        orbital.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.05}px) rotate(${scrolled * 0.05}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-16">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital 1 */}
        <div className="orbital absolute top-20 right-[10%] w-32 h-32 border-2 border-azure-blue/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite' }}></div>

        {/* Orbital 2 */}
        <div className="orbital absolute bottom-32 left-[15%] w-24 h-24 bg-gradient-to-br from-azure-cloud/20 to-transparent backdrop-blur-sm" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s', transform: 'rotate(45deg)' }}></div>

        {/* Orbital 3 */}
        <div className="orbital absolute top-1/3 left-[8%] w-16 h-16 border-2 border-azure-green/40" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>

        {/* Orbital 4 - Circle with gradient */}
        <div className="orbital absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-azure-blue/10 to-azure-cloud/10 blur-2xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>

        {/* Accent Lines */}
        <div className="absolute top-1/4 right-0 w-64 h-[2px] bg-gradient-to-l from-azure-blue/50 to-transparent" style={{ animation: 'slideInRight 1.5s ease-out 0.5s both' }}></div>
        <div className="absolute bottom-1/3 left-0 w-48 h-[2px] bg-gradient-to-r from-azure-green/50 to-transparent" style={{ animation: 'slideInLeft 1.5s ease-out 0.8s both' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="space-y-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-azure-blue/10 border border-azure-blue/30" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-azure-blue">Global Soft Vietnam</span>
            </div>

            {/* Kinetic Headline */}
            <h1 className="space-y-2">
              <div className="overflow-hidden">
                <span className="block text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter" style={{
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  animation: 'slideInUp 0.8s ease-out 0.3s both'
                }}>
                  WE BUILD
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="block text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter" style={{
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'slideInUp 0.8s ease-out 0.5s both, gradientShift 8s ease infinite',
                  backgroundSize: '200% 200%'
                }}>
                  DIGITAL
                </span>
              </div>

              <div className="overflow-hidden relative">
                <span className="block text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter" style={{
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  animation: 'slideInUp 0.8s ease-out 0.7s both'
                }}>
                  SOLUTIONS
                </span>
                {/* Accent Block */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-azure-blue/20 -z-10 blur-2xl" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
              </div>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.9s both' }}>
              Transforming businesses through cutting-edge web applications, intelligent CMS platforms, and enterprise CRM systems built for scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4" style={{ animation: 'fadeInUp 0.8s ease-out 1.1s both' }}>
              <a
                href="#"
                className="group relative px-10 py-5 bg-azure-blue text-white font-bold text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-azure-blue/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <Icon icon="iconamoon:arrow-right-2-duotone" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Hover Slide Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-azure-blue to-azure-cloud translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </a>

              <a
                href="#"
                className="group px-10 py-5 border-2 border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-azure-blue hover:bg-azure-blue/10 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  View Portfolio
                  <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-3 pt-4" style={{ animation: 'fadeInUp 0.8s ease-out 1.3s both' }}>
              {['Web Development', 'CMS Solutions', 'CRM Systems', 'Cloud Integration'].map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-medium text-slate-300 uppercase tracking-wider hover:bg-white/10 hover:border-azure-blue/50 transition-all duration-300 cursor-default"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Software UI Showcase */}
          <div className="relative hidden lg:block" style={{ animation: 'fadeInRight 1s ease-out 0.8s both' }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dashboard</span>
                  </div>
                  <Icon icon="fluent:more-horizontal-24-filled" className="w-5 h-5 text-slate-500" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Active Users', value: '2.4K', trend: '+12%', color: '#0EA5E9' },
                    { label: 'Revenue', value: '$48K', trend: '+8%', color: '#10B981' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="text-xs text-slate-400 mb-1 uppercase tracking-wide">{stat.label}</div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-xs font-bold" style={{ color: stat.color }}>{stat.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gradient-to-br from-azure-blue/10 to-azure-cloud/10 rounded-lg p-4 border border-white/10 h-32 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-azure-blue to-azure-cloud rounded-sm transition-all duration-500 hover:opacity-80"
                      style={{
                        height: `${height}%`,
                        animation: `barGrow 0.8s ease-out ${1.2 + index * 0.1}s both`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -right-6 top-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl max-w-[200px]" style={{ animation: 'floatIn 1s ease-out 1.5s both' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azure-blue to-azure-cloud flex items-center justify-center flex-shrink-0">
                    <Icon icon="fluent:checkmark-24-filled" className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white mb-1">Deploy Success</div>
                    <div className="text-xs text-slate-400">App deployed to production</div>
                  </div>
                </div>
              </div>

              {/* Floating User Card */}
              <div className="absolute -left-8 bottom-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl" style={{ animation: 'floatIn 1s ease-out 1.8s both' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    JD
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">John Doe</div>
                    <div className="text-xs text-slate-400">Product Manager</div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="absolute -right-12 bottom-8 bg-gray-900/90 backdrop-blur-xl border border-white/20 rounded-lg p-3 shadow-xl font-mono text-xs max-w-[180px]" style={{ animation: 'floatIn 1s ease-out 2s both' }}>
                <div className="text-green-400 mb-1">{'> npm run build'}</div>
                <div className="text-slate-400">Building...</div>
                <div className="flex items-center gap-2 text-azure-blue">
                  <Icon icon="fluent:checkmark-circle-24-filled" className="w-3 h-3" />
                  <span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(80px, 80px);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          to {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
