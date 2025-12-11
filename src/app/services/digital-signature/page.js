'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function DigitalSignatureService() {
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
    { name: 'AWS', icon: 'logos:aws', color: '#FF9900' },
    { name: 'Redis', icon: 'logos:redis', color: '#DC382D' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248' },
  ];

  const features = [
    {
      title: 'E-Signature',
      description: 'Legally binding electronic signatures with full audit trails and compliance.',
      icon: 'carbon:pen',
      accent: '#06B6D4'
    },
    {
      title: 'Workflow Automation',
      description: 'Automated routing, reminders, and notifications to speed up your signing process.',
      icon: 'carbon:flow',
      accent: '#8B5CF6'
    },
    {
      title: 'Multi-Party Signing',
      description: 'Support for multiple signers with customizable signing orders and roles.',
      icon: 'carbon:user-multiple',
      accent: '#10B981'
    },
    {
      title: 'Compliance',
      description: 'Full compliance with eIDAS, ESIGN, UETA, and other international regulations.',
      icon: 'carbon:certificate-check',
      accent: '#F59E0B'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3 text-sm" style={{ animation: 'fadeInLeft 0.8s ease-out both' }}>
                <Link href="/" className="text-gray-500 hover:text-cyan-600 transition-colors">Home</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <Link href="/#services" className="text-gray-500 hover:text-cyan-600 transition-colors">Services</Link>
                <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <span className="text-cyan-600 font-medium">Digital Signature</span>
              </div>

              <div className="space-y-4">
                <div className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold text-sm tracking-widest" style={{ animation: 'fadeInLeft 0.8s ease-out 0.1s both' }}>
                  DIGITAL SIGNATURE
                </div>

                <h1 className="text-4xl lg:text-[40px] font-semibold leading-none" style={{ fontFamily: '"Space Grotesk", system-ui, -apple-system, sans-serif', animation: 'fadeInLeft 0.8s ease-out 0.2s both', letterSpacing: '-0.03em' }}>
                  <span className="block text-gray-900">SIGN</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600">
                    DOCUMENTS
                  </span>
                  <span className="block text-gray-900">INSTANTLY</span>
                </h1>
              </div>

              <p className="text-base text-gray-600 max-w-xl leading-relaxed" style={{ animation: 'fadeInLeft 0.8s ease-out 0.3s both', fontFamily: '"Inter", system-ui, sans-serif' }}>
                We build custom digital signature solutions that streamline approvals with secure, legally binding electronic signatures that eliminate paper and accelerate workflows.
              </p>

              <div className="flex flex-wrap gap-4" style={{ animation: 'fadeInLeft 0.8s ease-out 0.4s both' }}>
                <Link href="/contact" className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-sm tracking-wider overflow-hidden">
                  <span className="relative z-10">START A PROJECT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/contact" className="group px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300">
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* Signature Interface */}
            <div className="lg:col-span-5" style={{ animation: 'fadeInRight 0.8s ease-out 0.3s both' }}>
              <div className="relative">
                <div className="bg-white border-2 border-gray-200 shadow-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <h3 className="font-medium text-lg">Sign Document</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">Ready to Sign</span>
                      </div>
                    </div>

                    {/* Document Preview */}
                    <div className="bg-gray-50 border border-gray-200 p-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon="carbon:document" className="w-5 h-5" />
                        <span className="font-medium">Contract_Agreement.pdf</span>
                      </div>
                      <div className="aspect-[4/3] bg-white border border-gray-200 p-4">
                        <div className="space-y-2 mb-8">
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-full"></div>
                          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                        </div>

                        {/* Signature Field */}
                        <div className="border-2 border-dashed border-cyan-400 bg-cyan-50 p-4 rounded">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-cyan-700">SIGN HERE</span>
                            <Icon icon="carbon:pen" className="w-4 h-4 text-cyan-600" />
                          </div>
                          <div className="h-12 flex items-center justify-center">
                            <div className="text-2xl font-signature text-cyan-700" style={{ fontFamily: 'cursive' }}>
                              John Doe
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Signers */}
                    <div className="space-y-2">
                      {[
                        { name: 'John Doe (You)', status: 'pending', color: 'cyan' },
                        { name: 'Jane Smith', status: 'signed', color: 'green' },
                        { name: 'Mike Johnson', status: 'waiting', color: 'gray' },
                      ].map((signer, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded">
                          <div className={`w-8 h-8 rounded-full bg-${signer.color}-100 flex items-center justify-center`}>
                            <Icon
                              icon={signer.status === 'signed' ? 'carbon:checkmark' : 'carbon:user'}
                              className={`w-4 h-4 text-${signer.color}-600`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{signer.name}</div>
                            <div className="text-xs text-gray-500 capitalize">{signer.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-3 rounded hover:from-teal-600 hover:to-blue-600 transition-all">
                      SIGN DOCUMENT
                    </button>
                  </div>
                </div>

                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500 animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-teal-600"></div> */}
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
                  SIGNATURE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                    SOLUTIONS
                  </span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Complete digital signature workflow from request to audit.
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
            <div className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold text-sm tracking-widest mb-6">
              TECHNOLOGY STACK
            </div>
            <h2 className="text-3xl lg:text-[36px] font-semibold" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
              BUILT WITH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                TRUSTED TECH
              </span>
            </h2>
            <p className="text-base text-gray-600 mt-6 max-w-2xl mx-auto">
              We use secure, proven technologies to build compliant digital signature systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-gray-200">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative aspect-square bg-white border border-gray-200 hover:border-cyan-600 transition-all duration-300 overflow-hidden hover:shadow-xl" style={{ animation: `fadeInScale 0.6s ease-out ${0.05 * index}s both` }}>
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
      <section className="relative py-20 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[36px] font-semibold mb-6 leading-tight" style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.03em' }}>
            DITCH THE
            <span className="block">INK & PAPER</span>
          </h2>
          <p className="text-lg mb-10 text-white/90">
            Let's build your digital signature solution
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
