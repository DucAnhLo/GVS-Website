'use client'
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex items-start justify-center overflow-hidden  pt-20 pb-40">
      {/* Decorative flowing waves - Enhanced Azure Blue Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Pattern */}
        <div 
          className="absolute top-0 right-0 opacity-60 w-full h-full"
          style={{
            backgroundImage: `url('/101.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Large Azure Blue gradient blob */}
        {/* <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-azure-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> */}

        {/* Azure Blue flowing lines (left side) */}
        {/* <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="azureGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#0EA5E9', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: '#0EA5E9', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <path
              key={`azure-1-${i}`}
              d={`M ${-300 + i * 80} ${200 + i * 60} Q ${500 + i * 120} ${400 + i * 70}, ${1200 + i * 150} ${700 + i * 80}`}
              stroke="url(#azureGradient1)"
              strokeWidth="3"
              fill="none"
              opacity={0.8 - i * 0.07}
            />
          ))}
        </svg> */}

        {/* Cyan flowing lines (right side) */}
        {/* <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cyanGradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#06B6D4', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <path
              key={`cyan-${i}`}
              d={`M ${2220 - i * 80} ${150 + i * 55} Q ${1620 - i * 120} ${350 + i * 75}, ${920 - i * 150} ${750 + i * 85}`}
              stroke="url(#cyanGradient)"
              strokeWidth="3"
              fill="none"
              opacity={0.75 - i * 0.07}
            />
          ))}
        </svg> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          {/* Main Content */}
          <div className="space-y-8 max-w-4xl">
            {/* Headline */}
            <h1 className="text-[50px] font-normal text-brand-black">
              We build digital solutions.
              <br />
              <span className="text-[50px] font-bold">Tailored for you.</span>
            </h1>

            {/* Description */}
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering small businesses through <span className="font-semibold text-brand-black">tailored websites, custom web applications,</span> and <span className="font-semibold text-brand-black">integrated systems</span> that drive digital transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="px-10 py-4 bg-brand-black text-white text-sm font-semibold rounded-full hover:bg-brand-black/90 transition-all shadow-lg hover:shadow-xl"
              >
                Contact sales
              </a>
              <Link
                href="/projects"
                className="px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
