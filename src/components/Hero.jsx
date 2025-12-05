'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 pt-[50px] transition-colors duration-300">
      {/* Decorative flowing lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange flowing lines (top-left to bottom-right) */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff9a56', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#ff6b35', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <path
              key={`orange-${i}`}
              d={`M ${-200 + i * 100} ${100 + i * 50} Q ${400 + i * 150} ${300 + i * 80}, ${800 + i * 200} ${600 + i * 100}`}
              stroke="url(#orangeGradient)"
              strokeWidth="2"
              fill="none"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </svg>

        {/* Pink flowing lines (top-right to bottom-left) */}
        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="pinkGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e879f9', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#c084fc', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <path
              key={`pink-${i}`}
              d={`M ${2120 - i * 100} ${100 + i * 50} Q ${1520 - i * 150} ${300 + i * 80}, ${1120 - i * 200} ${700 + i * 100}`}
              stroke="url(#pinkGradient)"
              strokeWidth="2"
              fill="none"
              opacity={0.6 - i * 0.1}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Main Content - Centered */}
          <div className="space-y-6 max-w-4xl">
            {/* Kinetic Headline */}
            <h1 className="font-semibold text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-300" style={{ fontSize: '50px', fontFamily: 'var(--font-montserrat)' }}>
              WE BUILD <span style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>DIGITAL</span> SOLUTIONS
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
              Empowering small businesses through tailored websites, custom web applications, and integrated systems that drive digital transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-10 py-5 bg-azure-blue text-white font-medium text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-azure-blue/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <Icon icon="iconamoon:arrow-right-2-duotone" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Hover Slide Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-azure-blue to-azure-cloud translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
              </a>
              <a
                href="/projects"
                className="group px-10 py-5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-3">
                  View Portfolio
                  <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>

            {/* Services Tags - At Bottom */}
            <div className="flex flex-wrap gap-3 pt-8 justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-azure-blue/10 border border-azure-blue/20 rounded-full">
                <div className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-azure-blue">Global Soft Vietnam</span>
              </div>
              {['Custom Websites', 'Web Applications', 'Business Systems', 'Digital Transformation'].map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-slate-300 uppercase tracking-wider rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-azure-blue/50 transition-all duration-300 cursor-default"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Mockup - Centered Below */}
          <div className="relative mt-20 hidden lg:block max-w-5xl">
            <div className="relative flex items-center justify-center">
              {/* Main Unified Dashboard Card */}
              <div
                className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl border border-azure-blue/30 rounded-3xl shadow-2xl overflow-hidden max-w-[550px]"
                style={{
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
                        <h3 className="text-lg font-medium text-white">Active Projects</h3>
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
                      <h4 className="text-sm font-medium text-white uppercase tracking-wider">Current Sprints</h4>
                      <Icon icon="fluent:more-horizontal-24-filled" className="w-5 h-5 text-slate-500" />
                    </div>

                    <div className="space-y-3">
                      {/* Project 1 */}
                      <div className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-azure-blue/50 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-sm font-medium text-white">Student Data Management System</div>
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
                            className="bg-gradient-to-r from-azure-blue via-cyan-400 to-azure-blue h-full rounded-full"
                            style={{ width: '78%' }}
                          ></div>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-green-500/50 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-sm font-medium text-white">Online Learning Platform</div>
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
                            className="bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 h-full rounded-full"
                            style={{ width: '92%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity Timeline */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-medium text-white uppercase tracking-wider mb-3 flex items-center gap-2">
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
                          <div className={`w-8 h-8 rounded-lg ${
                            activity.color === 'green' ? 'bg-green-500/20 border-green-500/30' :
                            activity.color === 'azure-blue' ? 'bg-blue-500/20 border-blue-500/30' :
                            'bg-purple-500/20 border-purple-500/30'
                          } border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon icon={activity.icon} className={`w-4 h-4 ${
                              activity.color === 'green' ? 'text-green-400' :
                              activity.color === 'azure-blue' ? 'text-blue-400' :
                              'text-purple-400'
                            }`} />
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

              {/* Mobile Mockup positioned over laptop */}
              <div className="absolute -bottom-8 right-[-10%] w-56 bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden">
                {/* Mobile screen */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-3">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-3 text-white">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <Icon icon="ic:baseline-signal-cellular-alt" className="w-3 h-3" />
                      <Icon icon="ic:baseline-wifi" className="w-3 h-3" />
                      <Icon icon="ic:baseline-battery-full" className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-azure-blue to-purple-600 flex items-center justify-center">
                        <Icon icon="fluent:apps-24-filled" className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-medium text-white">Quick Access</h3>
                        <p className="text-[8px] text-slate-400">Mobile Dashboard</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                      <div className="text-[10px] text-slate-400 mb-1">Active</div>
                      <div className="text-lg font-bold text-white">12</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                      <div className="text-[10px] text-slate-400 mb-1">Completed</div>
                      <div className="text-lg font-bold text-green-400">47</div>
                    </div>
                  </div>

                  {/* Project list */}
                  <div className="space-y-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                          <Icon icon="fluent:code-24-filled" className="w-3 h-3 text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white truncate">Student System</div>
                          <div className="text-[8px] text-slate-400">In Progress</div>
                        </div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div className="bg-blue-400 h-full rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                          <Icon icon="fluent:book-24-filled" className="w-3 h-3 text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white truncate">Learning Portal</div>
                          <div className="text-[8px] text-slate-400">Almost Done</div>
                        </div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div className="bg-green-400 h-full rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom navigation */}
                  <div className="flex justify-around mt-4 pt-3 border-t border-white/10">
                    {['home', 'apps', 'notifications', 'person'].map((icon, i) => (
                      <div key={i} className={`p-2 rounded-lg ${i === 0 ? 'bg-azure-blue/20' : ''}`}>
                        <Icon icon={`ic:baseline-${icon}`} className={`w-4 h-4 ${i === 0 ? 'text-azure-blue' : 'text-slate-500'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
