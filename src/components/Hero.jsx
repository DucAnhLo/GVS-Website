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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 pt-16 transition-colors duration-300">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital 1 */}
        <div className="orbital absolute top-20 right-[10%] w-32 h-32 border-2 border-azure-blue/20 rounded-full" style={{ animation: 'float 8s ease-in-out infinite' }}></div>

        {/* Orbital 2 */}
        <div className="orbital absolute bottom-32 left-[15%] w-24 h-24 bg-gradient-to-br from-azure-blue/10 to-transparent backdrop-blur-sm" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s', transform: 'rotate(45deg)' }}></div>

        {/* Orbital 3 */}
        <div className="orbital absolute top-1/3 left-[8%] w-16 h-16 border-2 border-azure-green/20" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>

        {/* Orbital 4 - Circle with gradient */}
        <div className="orbital absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-azure-blue/5 to-azure-cloud/5 blur-2xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>

        {/* Accent Lines */}
        <div className="absolute top-1/4 right-0 w-64 h-[2px] bg-gradient-to-l from-azure-blue/30 to-transparent" style={{ animation: 'slideInRight 1.5s ease-out 0.5s both' }}></div>
        <div className="absolute bottom-1/3 left-0 w-48 h-[2px] bg-gradient-to-r from-azure-green/30 to-transparent" style={{ animation: 'slideInLeft 1.5s ease-out 0.8s both' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div className="space-y-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-azure-blue/10 border border-azure-blue/20" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-azure-blue">Global Soft Vietnam</span>
            </div>

            {/* Kinetic Headline */}
            <h1 className="space-y-2">
              <div className="overflow-hidden">
                <span className="block text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter transition-colors duration-300" style={{
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
                <span className="block text-6xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter transition-colors duration-300" style={{
                  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  animation: 'slideInUp 0.8s ease-out 0.7s both'
                }}>
                  SOLUTIONS
                </span>
                {/* Accent Block */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-azure-blue/10 -z-10 blur-2xl" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
              </div>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 dark:text-slate-300 max-w-xl leading-relaxed transition-colors duration-300" style={{ animation: 'fadeInUp 0.8s ease-out 0.9s both' }}>
              Empowering small businesses through tailored websites, custom web applications, and integrated systems that drive digital transformation.
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
                className="group px-10 py-5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  View Portfolio
                  <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-3 pt-4" style={{ animation: 'fadeInUp 0.8s ease-out 1.3s both' }}>
              {['Custom Websites', 'Web Applications', 'Business Systems', 'Digital Transformation'].map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-slate-300 uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-white/10 hover:border-azure-blue/50 transition-all duration-300 cursor-default"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Single Main Project Dashboard */}
          <div className="relative hidden lg:block" style={{ animation: 'fadeInRight 1s ease-out 0.8s both' }}>
            <div className="relative" style={{ perspective: '1200px' }}>
              {/* Main Unified Dashboard Card */}
              <div
                className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl border border-azure-blue/30 rounded-3xl shadow-2xl overflow-hidden max-w-[550px]"
                style={{
                  transform: 'rotateY(-8deg) rotateX(5deg)',
                  boxShadow: '0 30px 60px -15px rgba(14, 165, 233, 0.4), 0 0 0 1px rgba(14, 165, 233, 0.1), inset 0 0 120px rgba(14, 165, 233, 0.08)'
                }}
              >
                {/* Animated Neon Border */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-azure-blue to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-azure-blue to-transparent opacity-40"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-40"></div>
                </div>

                {/* Header */}
                <div className="relative px-6 py-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-azure-blue to-purple-600 flex items-center justify-center shadow-lg shadow-azure-blue/30">
                        <Icon icon="fluent:building-multiple-24-filled" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Active Projects</h3>
                        <p className="text-sm text-slate-400">Tailored Solutions for Small Businesses</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/40">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="text-sm font-bold text-green-400">All Systems Live</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-6">
                  {/* Active Projects */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Current Sprints</h4>
                      <Icon icon="fluent:more-horizontal-24-filled" className="w-5 h-5 text-slate-500" />
                    </div>

                    <div className="space-y-3">
                      {/* Project 1 */}
                      <div className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-azure-blue/50 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-sm font-bold text-white">Student Data Management System</div>
                              <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">Platform</span>
                            </div>
                            <div className="text-xs text-slate-400">High School • Excel migration to web-based system</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-black text-azure-blue">78%</div>
                            <div className="text-xs text-slate-500">Complete</div>
                          </div>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-azure-blue via-cyan-400 to-azure-blue bg-[length:200%_100%] h-full rounded-full"
                            style={{
                              width: '78%',
                              animation: 'progressGrow 2s ease-out 1.2s both, shimmer 4s ease-in-out infinite'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-green-500/50 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-sm font-bold text-white">Online Learning Platform</div>
                              <span className="px-2 py-0.5 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">Website</span>
                            </div>
                            <div className="text-xs text-slate-400">Language Institute • Course portal & enrollment</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-black text-green-400">92%</div>
                            <div className="text-xs text-slate-500">Complete</div>
                          </div>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-[length:200%_100%] h-full rounded-full"
                            style={{
                              width: '92%',
                              animation: 'progressGrow 2s ease-out 1.4s both, shimmer 4s ease-in-out infinite'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity Timeline */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Icon icon="fluent:clock-24-filled" className="w-4 h-4 text-azure-blue" />
                      Recent Activity
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          icon: 'fluent:checkmark-circle-24-filled',
                          color: 'green',
                          action: 'Data Migration Complete',
                          detail: '2,500+ student records imported to platform',
                          time: '2 min ago'
                        },
                        {
                          icon: 'fluent:design-ideas-24-filled',
                          color: 'azure-blue',
                          action: 'Portal Design Approved',
                          detail: 'Learning platform UI/UX finalized',
                          time: '25 min ago'
                        },
                        {
                          icon: 'fluent:database-24-filled',
                          color: 'purple',
                          action: 'Excel Processing',
                          detail: 'Converting grade sheets to database',
                          time: '1 hour ago'
                        }
                      ].map((activity, i) => (
                        <div key={i} className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
                          <div className={`w-8 h-8 rounded-lg bg-${activity.color}-500/20 border border-${activity.color}-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon icon={activity.icon} className={`w-4 h-4 text-${activity.color}-400`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-white">{activity.action}</div>
                            <div className="text-xs text-slate-400 truncate">{activity.detail}</div>
                          </div>
                          <div className="text-xs text-slate-500 flex-shrink-0">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Status Bar */}
                <div className="px-6 py-4 bg-gradient-to-r from-azure-blue/10 via-purple-500/10 to-green-500/10 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Icon icon="fluent:people-team-24-filled" className="w-4 h-4 text-azure-blue" />
                        <span className="text-slate-300">Team Online:</span>
                        <div className="flex -space-x-2">
                          {['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-green-500 to-teal-500'].map((gradient, i) => (
                            <div
                              key={i}
                              className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} border-2 border-gray-900`}
                            ></div>
                          ))}
                          <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-gray-900 flex items-center justify-center">
                            <span className="text-xs text-white font-bold">+8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Icon icon="fluent:branch-24-filled" className="w-3 h-3 text-purple-400" />
                        <span className="text-slate-400 font-mono">main</span>
                      </div>
                      <div className="h-3 w-px bg-white/20"></div>
                      <div className="flex items-center gap-1.5">
                        <Icon icon="fluent:rocket-24-filled" className="w-3 h-3 text-green-400" />
                        <span className="text-slate-400">Last deploy: 2m ago</span>
                      </div>
                    </div>
                  </div>
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

        @keyframes progressGrow {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width, 100%);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
