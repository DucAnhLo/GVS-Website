'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const ProjectDetail = ({ project }) => {
  const { title, description, image, category, tech, accent, caseStudy, liveUrl, year } = project;

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-gray-900 text-sm font-medium transition-all hover:shadow-lg"
        >
          <Icon icon="fluent:arrow-left-24-filled" className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* STEP 1: Hero - The Vision */}
      <section className="relative bg-white">
        {/* Top Bar with Meta Info */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-700">
                <Icon icon="fluent:trophy-24-filled" className="w-4 h-4" style={{ color: accent }} />
                <span>Case Study</span>
                <span className="text-gray-300">•</span>
                <span style={{ color: accent }}>{category}</span>
              </div>
              <div className="flex items-center gap-6 text-xs font-medium text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon icon="fluent:calendar-24-filled" className="w-4 h-4" style={{ color: accent }} />
                  {year}
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="fluent:timer-24-filled" className="w-4 h-4" style={{ color: accent }} />
                  {caseStudy.duration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          {/* Large Title Section */}
          <div className="mb-16">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 mb-6 text-xs font-black uppercase tracking-widest text-white" style={{ backgroundColor: accent }}>
                {caseStudy.client}
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 max-w-4xl">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {/* Grid Layout: Image + Stats */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Main Image - Takes 8 columns */}
            {image && (
              <div className="lg:col-span-8">
                <div className="relative group">
                  {/* Decorative Corner */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 opacity-20" style={{ borderColor: accent }}></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 opacity-20" style={{ borderColor: accent }}></div>

                  <img
                    src={image}
                    alt={title}
                    className="w-full aspect-video object-cover border-4 border-gray-900 shadow-2xl group-hover:border-opacity-50 transition-all"
                  />

                  {/* Image Overlay Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm shadow-lg">
                    <div className="text-xs font-black uppercase tracking-wider text-gray-900">Live Platform</div>
                  </div>
                </div>
              </div>
            )}

            {/* Sidebar: Key Info - Takes 4 columns */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Stats */}
              <div className="bg-gray-50 p-8 border-l-4" style={{ borderColor: accent }}>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-700 mb-6">Project Overview</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="text-xl font-black text-gray-900">{caseStudy.client}</div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="text-xl font-black text-gray-900">{caseStudy.duration}</div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-sm text-gray-500 mb-1">Launch Year</div>
                    <div className="text-xl font-black text-gray-900">{year}</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {liveUrl && liveUrl !== "#" && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-5 font-black text-sm uppercase tracking-wider transition-all group text-white shadow-lg hover:shadow-2xl"
                  style={{ backgroundColor: accent }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon icon="fluent:globe-24-filled" className="w-5 h-5" />
                    <span>Visit Live Site</span>
                    <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              )}

              {/* Technology Tags */}
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-700 mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {tech.slice(0, 4).map((technology, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-bold bg-white border-2 border-gray-900 text-gray-900 uppercase tracking-wider"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t-4 border-gray-900"></div>
      </section>

      {/* STEP 2: The Problem - What Was Wrong */}
      <section className="relative py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Step Number */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-red-100 flex items-center justify-center">
              <span className="text-3xl font-black text-red-600">01</span>
            </div>
            <div>
              <div className="text-sm font-bold text-red-600 uppercase tracking-widest mb-1">The Problem</div>
              <h2 className="text-4xl font-black text-gray-900">The Old System Was Failing</h2>
            </div>
          </div>

          {/* Problem Description */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-12 mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Pain Points Grid */}
          {caseStudy.beforeAfter && (
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudy.beforeAfter.before.slice(0, 6).map((item, index) => (
                <div key={index} className="bg-white border border-red-200 p-6 relative overflow-hidden group hover:border-red-400 transition-colors">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform"></div>
                  <Icon icon="fluent:warning-24-filled" className="w-8 h-8 text-red-500 mb-4" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STEP 3: Our Approach - The Solution */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Step Number */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: accent + '20' }}>
              <span className="text-3xl font-black" style={{ color: accent }}>02</span>
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>Our Approach</div>
              <h2 className="text-4xl font-black text-gray-900">How We Rebuilt Everything</h2>
            </div>
          </div>

          {/* Solution Description */}
          <div className="bg-white border-l-8 p-12 mb-12" style={{ borderColor: accent }}>
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              {caseStudy.solution}
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {[
              { icon: 'fluent:brain-circuit-24-filled', title: 'Discovery & Planning', desc: 'Analyzed user needs and mapped out the ideal platform architecture' },
              { icon: 'fluent:database-24-filled', title: 'Database Design', desc: 'Built a robust PostgreSQL database to handle 1000+ school listings' },
              { icon: 'fluent:design-ideas-24-filled', title: 'UI/UX Design', desc: 'Created an intuitive, modern interface with focus on user experience' },
              { icon: 'fluent:code-24-filled', title: 'Development', desc: 'Built with Next.js and React for performance and scalability' },
              { icon: 'fluent:rocket-24-filled', title: 'Launch & Optimize', desc: 'Deployed on Vercel with continuous monitoring and improvements' }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 border-l-4 hover:shadow-lg transition-all" style={{ borderColor: accent }}>
                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accent + '15' }}>
                  <Icon icon={step.icon} className="w-7 h-7" style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 4: The Transformation - Before vs After */}
      {caseStudy.beforeAfter && (
        <section className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Step Number */}
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center">
                <span className="text-3xl font-black" style={{ color: accent }}>03</span>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>The Transformation</div>
                <h2 className="text-5xl font-black">Night & Day Difference</h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Before */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-red-500 flex items-center justify-center">
                    <Icon icon="fluent:dismissed-24-filled" className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-red-400 uppercase tracking-widest mb-1">Old Wix Site</div>
                    <h3 className="text-3xl font-black">Before</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {caseStudy.beforeAfter.before.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white/5 p-4 border-l-2 border-red-500">
                      <Icon icon="fluent:subtract-circle-24-filled" className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 flex items-center justify-center" style={{ backgroundColor: accent }}>
                    <Icon icon="fluent:checkmark-24-filled" className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest mb-1" style={{ color: accent }}>Custom Platform</div>
                    <h3 className="text-3xl font-black">After</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {caseStudy.beforeAfter.after.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white/5 p-4 border-l-2" style={{ borderColor: accent }}>
                      <Icon icon="fluent:checkmark-circle-24-filled" className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                      <span className="text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 5: Screenshots Gallery */}
      {caseStudy.screenshots && (
        <section className="relative py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Step Number */}
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: accent + '20' }}>
                <span className="text-3xl font-black" style={{ color: accent }}>04</span>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>Visual Showcase</div>
                <h2 className="text-5xl font-black text-gray-900">See It In Action</h2>
              </div>
            </div>

            {/* Main Hero Screenshot */}
            <div className="mb-8">
              <div className="relative group overflow-hidden bg-gray-900">
                <img
                  src={caseStudy.screenshots[0].image}
                  alt={caseStudy.screenshots[0].title}
                  className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8">
                  <h3 className="text-2xl font-black text-white mb-2">{caseStudy.screenshots[0].title}</h3>
                  <p className="text-gray-300">{caseStudy.screenshots[0].description}</p>
                </div>
              </div>
            </div>

            {/* Bento Grid of Screenshots */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.screenshots.slice(1).map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden bg-gray-900 border-2 border-gray-200 hover:border-gray-900 transition-all">
                  {/* Screenshot Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon="fluent:image-24-filled" className="w-5 h-5" style={{ color: accent }} />
                        <h3 className="text-lg font-black text-white">{screenshot.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{screenshot.description}</p>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: accent }}>
                    <Icon icon="fluent:eye-24-filled" className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* View Live Site CTA */}
            {liveUrl && liveUrl !== "#" && (
              <div className="mt-12 text-center">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black text-sm uppercase tracking-wider hover:bg-gray-800 transition-all group"
                >
                  <Icon icon="fluent:globe-24-filled" className="w-5 h-5" />
                  Explore Live Platform
                  <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* STEP 6: Features Showcase */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Step Number */}
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 flex items-center justify-center" style={{ backgroundColor: accent + '20' }}>
              <span className="text-3xl font-black" style={{ color: accent }}>05</span>
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>What We Built</div>
              <h2 className="text-5xl font-black text-gray-900">Powerful Features</h2>
            </div>
          </div>

          {/* Features Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-gray-900 p-6 border-2 border-transparent hover:border-gray-900 transition-all cursor-default"
              >
                <Icon
                  icon="fluent:sparkle-24-filled"
                  className="w-8 h-8 mb-4 group-hover:text-white transition-colors"
                  style={{ color: accent }}
                />
                <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 7: Results & Impact */}
      <section className="relative py-32" style={{ backgroundColor: accent }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Step Number */}
          <div className="flex items-center gap-6 mb-16">
            <div className="w-16 h-16 bg-white/20 flex items-center justify-center">
              <span className="text-3xl font-black text-white">06</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white/80 uppercase tracking-widest mb-1">The Impact</div>
              <h2 className="text-5xl font-black text-white">Real Results</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <div className="text-6xl font-black text-white mb-4">
                  {result.metric}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 8: Technology Stack */}
      {caseStudy.technologies && (
        <section className="relative py-32 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Step Number */}
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center">
                <span className="text-3xl font-black" style={{ color: accent }}>07</span>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>Built With</div>
                <h2 className="text-5xl font-black">Modern Tech Stack</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 border-2 border-white/10 p-8 hover:border-white/30 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: accent + '20' }}>
                      <Icon icon="fluent:code-24-filled" className="w-7 h-7" style={{ color: accent }} />
                    </div>
                    <h3 className="text-2xl font-black">{tech.name}</h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STEP 9: CTA - Your Turn */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6" style={{ backgroundColor: accent + '15' }}>
              <Icon icon="fluent:rocket-24-filled" className="w-10 h-10" style={{ color: accent }} />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-12">
              Let's turn your outdated platform into a modern, powerful solution that users love.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-gray-900 text-white font-black text-sm uppercase tracking-wider hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-3 group"
            >
              Start Your Project
              <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#projects"
              className="px-12 py-5 border-2 border-gray-900 text-gray-900 font-black text-sm uppercase tracking-wider hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-3"
            >
              View More Work
              <Icon icon="fluent:grid-24-filled" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
