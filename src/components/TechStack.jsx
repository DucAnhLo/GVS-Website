'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const TechStack = () => {
  // First row of technologies
  const techStackRow1 = [
    { name: 'React', icon: 'logos:react' },
    { name: 'Next.js', icon: 'logos:nextjs-icon' },
    { name: 'Vue.js', icon: 'logos:vue' },
    { name: 'Node.js', icon: 'logos:nodejs-icon' },
    { name: 'TypeScript', icon: 'logos:typescript-icon' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'Python', icon: 'logos:python' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  ];

  // Second row of technologies
  const techStackRow2 = [
    { name: 'PostgreSQL', icon: 'logos:postgresql' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    { name: 'Docker', icon: 'logos:docker-icon' },
    { name: 'AWS', icon: 'logos:aws' },
    { name: 'Git', icon: 'logos:git-icon' },
    { name: 'GitHub', icon: 'logos:github-icon' },
    { name: 'Figma', icon: 'logos:figma' },
    { name: 'VS Code', icon: 'logos:visual-studio-code' },
  ];

  // Triple arrays for truly seamless infinite scroll
  const row1Items = [...techStackRow1, ...techStackRow1, ...techStackRow1];
  const row2Items = [...techStackRow2, ...techStackRow2, ...techStackRow2];

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white tracking-wider uppercase px-4 py-2 bg-gradient-to-r from-azure-blue to-azure-cloud rounded-full">
              Technologies
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Row 1 - Scrolling Left to Right */}
        <div className="overflow-hidden py-8">
          <div className="flex animate-scroll-left">
            {row1Items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 hover:border-azure-blue transition-all duration-300 shadow-md hover:shadow-xl group-hover:scale-110">
                  <Icon icon={tech.icon} className="w-12 h-12" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700 dark:text-slate-300 group-hover:text-azure-blue transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right to Left */}
        <div className="overflow-hidden py-8">
          <div className="flex animate-scroll-right">
            {row2Items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center justify-center group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 hover:border-azure-blue transition-all duration-300 shadow-md hover:shadow-xl group-hover:scale-110">
                  <Icon icon={tech.icon} className="w-12 h-12" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-700 dark:text-slate-300 group-hover:text-azure-blue transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
