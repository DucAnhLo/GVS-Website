"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function WebDevelopmentService() {
  const [activeService, setActiveService] = useState(0);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" },
  ];

  const features = [
    {
      title: "Custom Development",
      description:
        "Tailored web applications built to match your exact business requirements and workflows.",
      icon: "lucide:code-2",
    },
    {
      title: "Scalable Architecture",
      description:
        "Future-proof solutions designed to grow with your business and handle increasing demand.",
      icon: "lucide:trending-up",
    },
    {
      title: "Responsive Design",
      description:
        "Seamless experiences across all devices, from mobile phones to desktop workstations.",
      icon: "lucide:monitor-smartphone",
    },
    {
      title: "Performance Optimized",
      description:
        "Fast-loading applications with optimized code and efficient resource management.",
      icon: "lucide:zap",
    },
  ];

  const services = [
    {
      title: "Business Web Applications",
      description:
        "Custom web applications that automate processes, improve efficiency, and solve specific business challenges. From customer portals to internal management systems.",
      icon: "lucide:briefcase",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete online store development with secure payment processing, inventory management, and customer account systems tailored to your business model.",
      icon: "lucide:shopping-cart",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "API Development & Integration",
      description:
        "Connect your systems seamlessly with custom API development and third-party integrations that streamline your operations and data flow.",
      icon: "lucide:plug",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, efficient web applications while preserving your valuable business logic and data.",
      icon: "lucide:refresh-cw",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  const approach = [
    {
      title: "Understanding Your Business",
      description:
        "We start by thoroughly understanding your business processes, challenges, and goals.",
      icon: "lucide:search",
      step: "01",
    },
    {
      title: "Collaborative Planning",
      description:
        "Work closely with our team to define features, workflows, and priorities.",
      icon: "lucide:users",
      step: "02",
    },
    {
      title: "Iterative Development",
      description:
        "See your application come to life through regular updates and demos.",
      icon: "lucide:repeat",
      step: "03",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing across devices, browsers, and scenarios.",
      icon: "lucide:shield-check",
      step: "04",
    },
    {
      title: "Smooth Deployment",
      description:
        "We handle all technical aspects of launching your application.",
      icon: "lucide:rocket",
      step: "05",
    },
    {
      title: "Ongoing Support",
      description:
        "Maintenance, updates, and technical support as your business grows.",
      icon: "lucide:headset",
      step: "06",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0078D4] via-[#0078D4] to-[#005A9E]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-32 left-[15%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-8 sm:mb-10 lg:mb-12 opacity-0 animate-fade-in">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <Link
              href="/#services"
              className="text-white/70 hover:text-white transition-colors"
            >
              Services
            </Link>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <span className="text-white font-medium">Web Development</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 lg:mb-6 opacity-0 animate-fade-in text-xs sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">
                Enterprise Web Development
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Custom Web Applications
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Built for Your Business
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              We develop scalable, high-performance web applications that
              streamline operations, enhance user engagement, and drive
              measurable business results.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0078D4] text-sm font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/20 transition-all text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <Icon
                    icon="lucide:arrow-right"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - With Icons */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We combine technical excellence with business understanding to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-5 sm:p-6 border border-gray-200 rounded-xl hover:border-[#0078D4] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0078D4] to-cyan-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    icon={feature.icon}
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section - Interactive Tabs */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              What We Build
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              From simple websites to complex enterprise applications, we
              deliver solutions that drive real business value.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-[#0078D4] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeService === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200">
                  <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                    {/* <div
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                    >
                      <Icon
                        icon={service.icon}
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                      />
                    </div> */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#0078D4] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                      >
                        Learn more
                        <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section - Timeline Style */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Our comprehensive approach ensures your web application is built
              right, launched successfully, and supported long-term.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0078D4] via-cyan-400 to-[#0078D4]"></div>

            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0078D4] via-cyan-400 to-[#0078D4]"></div>

            <div className="space-y-8 sm:space-y-12">
              {approach.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-4 sm:gap-8 items-start lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Mobile Step Number */}
                  <div className="lg:hidden absolute left-0 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0078D4] to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 ring-2 ring-white">
                    {item.step}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 w-full lg:w-auto ml-16 lg:ml-0">
                    <div className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-[#0078D4] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0078D4] to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon
                            icon={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                          />
                        </div> */}
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node - Desktop Only */}
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0078D4] to-cyan-500 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg z-10 ring-4 ring-white">
                    {item.step}
                  </div>

                  {/* Spacer - Desktop Only */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0078D4] via-[#0078D4] to-[#005A9E] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how we can help transform your business with custom
            web solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0078D4] text-sm font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Us
                <Icon
                  icon="lucide:arrow-right"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="/projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2"
            >
              View Our Work
              <Icon
                icon="lucide:external-link"
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
