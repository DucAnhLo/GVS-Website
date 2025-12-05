'use client'
import React from 'react';
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Split Design */}
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left - Black Section */}
          <div className="bg-gray-900 text-white p-12 lg:p-20 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 text-sm font-medium uppercase tracking-widest">
                About Us
              </div>
              <h1 className="text-5xl lg:text-7xl font-semibold leading-tight">
                We Turn
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Data Into
                </span>
                Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                A fresh Vietnamese tech team specializing in transforming traditional business processes into modern digital platforms.
              </p>
            </div>
          </div>

          {/* Right - White Section with Focus Areas */}
          <div className="bg-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl font-semibold text-gray-50 leading-none select-none">
              GVS
            </div>
            <div className="relative z-10 space-y-8">
              <div>
                <div className="text-2xl font-medium text-gray-900 mb-4">Our Focus</div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're a new company focused on quality over quantity, building tailored solutions for each client.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-blue-500"></div>
                  <span className="text-gray-700 font-medium">Educational Platforms</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-1 bg-purple-500"></div>
                  <span className="text-gray-700 font-medium">Small Business Sites</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-1 bg-green-500"></div>
                  <span className="text-gray-700 font-medium">Excel → Web Migration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section - Asymmetric Layout */}
        <div className="px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  We're a newly established tech team in Vietnam with a clear vision: helping small businesses escape the limitations of Excel spreadsheets.
                </p>
                <p>
                  Starting fresh means we can focus entirely on quality and client satisfaction. Every project gets our full attention, and we build lasting relationships with each client.
                </p>
                <p className="font-medium text-gray-900">
                  Small but dedicated, we're committed to delivering professional solutions that actually work for small businesses and educational institutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative">
                {/* Large decorative element */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-gray-50 p-12 border-l-8 border-blue-500">
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-2">Our Mission</div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-3">Democratize Digital Transformation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Make professional web platforms accessible and affordable for small businesses and educational institutions.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Icon icon="fluent:people-team-24-filled" className="w-8 h-8 text-purple-500" />
                        <div className="text-sm font-medium text-gray-900">Client-First Approach</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:rocket-24-filled" className="w-8 h-8 text-blue-500" />
                        <div className="text-sm font-medium text-gray-900">Fast Delivery</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:shield-checkmark-24-filled" className="w-8 h-8 text-green-500" />
                        <div className="text-sm font-medium text-gray-900">Quality Code</div>
                      </div>
                      <div className="space-y-2">
                        <Icon icon="fluent:handshake-24-filled" className="w-8 h-8 text-orange-500" />
                        <div className="text-sm font-medium text-gray-900">Long-term Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do - Bento Grid Style */}
        <div className="bg-gray-50 px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-600">Three core services that transform businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                title: 'Excel → Platform',
                description: 'Transform your spreadsheets into powerful web platforms',
                icon: 'fluent:database-arrow-right-24-filled',
                numberColor: 'text-blue-100',
                iconColor: 'text-blue-500',
                dotColor: 'bg-blue-500',
                features: ['Data Migration', 'Custom Dashboards', 'Real-time Updates', 'Role Management']
              },
              {
                number: '02',
                title: 'Educational Sites',
                description: 'Learning platforms for schools and institutes',
                icon: 'fluent:book-open-globe-24-filled',
                numberColor: 'text-purple-100',
                iconColor: 'text-purple-500',
                dotColor: 'bg-purple-500',
                features: ['Student Portals', 'Course Management', 'Grade Tracking', 'Online Enrollment']
              },
              {
                number: '03',
                title: 'Business Websites',
                description: 'Professional web presence for local businesses',
                icon: 'fluent:globe-search-24-filled',
                numberColor: 'text-green-100',
                iconColor: 'text-green-500',
                dotColor: 'bg-green-500',
                features: ['Modern Design', 'Mobile First', 'SEO Ready', 'Easy Updates']
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gray-900">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`text-6xl font-semibold ${service.numberColor}`}>{service.number}</div>
                    <Icon icon={service.icon} className={`w-12 h-12 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 ${service.dotColor}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-4">Our Approach</div>
              <h2 className="text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Quality Over Quantity
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                As a new company, we take a personalized approach to every project. You're not just a number to us—you're a partner in building something great.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'fluent-color:people-chat-24',
                  title: 'Personal Touch',
                  description: 'Direct communication with the developers building your solution',
                  iconColor: 'text-blue-500'
                },
                {
                  icon: 'fluent:timer-24-filled',
                  title: 'Full Attention',
                  description: 'We limit our client load to ensure quality work on every project',
                  iconColor: 'text-purple-500'
                },
                {
                  icon: 'fluent:learning-app-24-filled',
                  title: 'Training Included',
                  description: 'We teach you how to use and maintain your new platform',
                  iconColor: 'text-green-500'
                },
                {
                  icon: 'fluent:phone-chat-24-filled',
                  title: 'Always Available',
                  description: 'Quick responses and ongoing support after launch',
                  iconColor: 'text-orange-500'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Icon icon={item.icon} className={`w-12 h-12 ${item.iconColor} mx-auto mb-4`} />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Split Layout */}
        <div className="grid lg:grid-cols-2">
          {/* Left - Black */}
          <div className="bg-gray-900 text-white p-12 lg:p-20">
            <h2 className="text-4xl font-semibold mb-12">Why Work With Us</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'We Speak Your Language',
                  description: 'No tech jargon. We explain everything in plain terms and focus on solving your business problems.',
                  icon: 'fluent:chat-bubbles-question-24-filled'
                },
                {
                  title: 'Affordable & Transparent',
                  description: 'Fixed pricing, no hidden fees. Quality solutions tailored for small business budgets.',
                  icon: 'fluent:money-hand-24-filled'
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Most projects delivered in 4-8 weeks. We value your time and move quickly.',
                  icon: 'fluent:top-speed-24-filled'
                },
                {
                  title: 'Ongoing Support',
                  description: "We don't disappear after launch. Training, updates, and support included.",
                  icon: 'fluent:headset-24-filled'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Icon icon={item.icon} className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Creative Badge Design */}
          <div className="bg-white p-12 lg:p-20 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 w-full max-w-md">
              {/* Large Badge/Stamp Design */}
              <div className="relative">
                {/* Main circular badge */}
                <div className="w-64 h-64 mx-auto relative">
                  {/* Outer decorative circle */}
                  <div className="absolute inset-0 border-8 border-gray-900 rounded-full"></div>
                  <div className="absolute inset-4 border-4 border-dashed border-gray-300 rounded-full"></div>

                  {/* Inner content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Icon icon="fluent:shield-checkmark-24-filled" className="w-20 h-20 text-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-semibold text-gray-900">Quality</div>
                      <div className="text-sm font-medium text-gray-600">Guaranteed</div>
                    </div>
                  </div>
                </div>

                {/* Side text decorations */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">Built With Care</div>
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">Since 2024</div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                {[
                  { icon: 'fluent:code-24-filled', label: 'Clean Code', iconColor: 'text-blue-500' },
                  { icon: 'fluent:design-ideas-24-filled', label: 'Modern', iconColor: 'text-purple-500' },
                  { icon: 'fluent:shield-24-filled', label: 'Secure', iconColor: 'text-green-500' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Icon icon={item.icon} className={`w-8 h-8 ${item.iconColor} mx-auto mb-2`} />
                    <div className="text-xs font-medium text-gray-900">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 italic">
                  "Every project deserves our best work"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Full Width */}
        <div className="bg-white px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              Ready to Go Digital?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let's chat about your project. Free consultation, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-12 py-5 bg-gray-900 text-white font-medium text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-3"
              >
                Start Your Project
                <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="px-12 py-5 border-2 border-gray-900 text-gray-900 font-medium text-sm tracking-wider uppercase hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-3"
              >
                View Our Work
                <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
