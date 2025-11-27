'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-slate-800 pt-16">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure-cloud/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        {/* Main Content - Centered */}
        <div className="text-center space-y-12">
          {/* Headline with creative accent */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-azure-blue"></div>
                <span className="text-sm font-medium text-azure-blue tracking-wider uppercase">Global Soft Vietnam</span>
                <div className="h-px w-12 bg-azure-blue"></div>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-white">We Build</span>
              <span className="block relative inline-block mt-2">
                <span className="text-azure-blue">Digital Excellence</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C40 3.33333 120 -2 298 10" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting modern web applications, CMS platforms, and CRM systems that transform businesses
          </p>

          {/* Services - Simple List */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-azure-blue"></div>
              Web Development
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-azure-cloud"></div>
              CMS Solutions
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-azure-green"></div>
              CRM Systems
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-azure-blue text-white font-semibold text-lg hover:bg-azure-dark transition-all"
            >
              Start Your Project
              <Icon icon="iconamoon:arrow-right-2-duotone" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-5 border border-white/20 text-white font-semibold text-lg hover:border-azure-blue hover:text-azure-blue transition-all"
            >
              View Portfolio
            </a>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 border-t border-gray-300">
            <div>
              <div className="text-4xl font-bold text-azure-blue mb-2">50+</div>
              <div className="text-sm text-gray-700">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-azure-cloud mb-2">100%</div>
              <div className="text-sm text-gray-700">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-azure-green mb-2">24/7</div>
              <div className="text-sm text-gray-700">Support Available</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
