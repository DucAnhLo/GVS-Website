"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function DigitalSignatureService() {
  const [activeService, setActiveService] = useState(0);

  const features = [
    {
      title: "E-Signature",
      description:
        "Legally binding electronic signatures with full audit trails and compliance.",
      icon: "lucide:pen-tool",
    },
    {
      title: "Workflow Automation",
      description:
        "Automated routing, reminders, and notifications to speed up your signing process.",
      icon: "lucide:workflow",
    },
    {
      title: "Multi-Party Signing",
      description:
        "Support for multiple signers with customizable signing orders and roles.",
      icon: "lucide:users",
    },
    {
      title: "Compliance",
      description:
        "Full compliance with eIDAS, ESIGN, UETA, and other international regulations.",
      icon: "lucide:shield-check",
    },
  ];

  const services = [
    {
      title: "Document Signing Platform",
      description:
        "Complete e-signature solution for securely signing documents online. Streamline approvals with automated workflows, tracking, and legally binding signatures.",
      icon: "lucide:file-signature",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Contract Management",
      description:
        "End-to-end contract lifecycle management with e-signatures, templates, automated reminders, and centralized storage for all your agreements.",
      icon: "lucide:file-text",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Approval Workflows",
      description:
        "Custom approval chains with sequential or parallel signing. Route documents automatically based on business rules and get real-time status updates.",
      icon: "lucide:git-branch",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Audit & Compliance",
      description:
        "Complete audit trails with timestamp verification, IP tracking, and certificate of completion. Meet regulatory requirements with confidence.",
      icon: "lucide:file-check",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  const approach = [
    {
      title: "Process Assessment",
      description:
        "Analyzing your current signature and approval workflows.",
      icon: "lucide:clipboard-list",
      step: "01",
    },
    {
      title: "Solution Design",
      description:
        "Designing signature flows and automation rules.",
      icon: "lucide:layout",
      step: "02",
    },
    {
      title: "System Development",
      description:
        "Building your custom e-signature platform.",
      icon: "lucide:code",
      step: "03",
    },
    {
      title: "Integration Setup",
      description: "Connecting with your existing business systems.",
      icon: "lucide:plug",
      step: "04",
    },
    {
      title: "User Training",
      description: "Training teams on the e-signature workflow.",
      icon: "lucide:users",
      step: "05",
    },
    {
      title: "Support & Updates",
      description: "Ongoing support and compliance updates.",
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
            <span className="text-white font-medium">Digital Signature</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 lg:mb-6 opacity-0 animate-fade-in text-xs sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">
                Electronic Signature Solutions
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Digital Signature Solutions
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                That Accelerate Workflows
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Streamline document approvals with secure, legally binding
              electronic signatures that eliminate paper and accelerate business
              processes.
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

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Signature Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Complete digital signature workflow from request to audit.
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
              E-Signature Solutions We Provide
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              From simple document signing to comprehensive contract management
              systems.
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
              Our Implementation Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              A proven approach to implementing digital signature solutions.
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
            Ready to Go Digital?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's build a digital signature solution that accelerates your
            business processes.
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
