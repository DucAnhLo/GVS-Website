"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CRMService() {
  const [activeService, setActiveService] = useState(0);
  const { t } = useLanguage();

  const features = [
    {
      title: t("servicePages.crmSystems.features.leadManagement.title"),
      description: t("servicePages.crmSystems.features.leadManagement.description"),
      icon: "lucide:user-plus",
    },
    {
      title: t("servicePages.crmSystems.features.salesPipeline.title"),
      description: t("servicePages.crmSystems.features.salesPipeline.description"),
      icon: "lucide:trending-up",
    },
    {
      title: t("servicePages.crmSystems.features.customerInsights.title"),
      description: t("servicePages.crmSystems.features.customerInsights.description"),
      icon: "lucide:chart-bar",
    },
    {
      title: t("servicePages.crmSystems.features.automation.title"),
      description: t("servicePages.crmSystems.features.automation.description"),
      icon: "lucide:zap",
    },
  ];

  const services = [
    {
      title: t("servicePages.crmSystems.services.custom.title"),
      description: t("servicePages.crmSystems.services.custom.description"),
      icon: "lucide:users",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("servicePages.crmSystems.services.automation.title"),
      description: t("servicePages.crmSystems.services.automation.description"),
      icon: "lucide:rocket",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: t("servicePages.crmSystems.services.integration.title"),
      description: t("servicePages.crmSystems.services.integration.description"),
      icon: "lucide:link",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: t("servicePages.crmSystems.services.analytics.title"),
      description: t("servicePages.crmSystems.services.analytics.description"),
      icon: "lucide:line-chart",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  const approach = [
    {
      title: t("servicePages.crmSystems.steps.mapping.title"),
      description: t("servicePages.crmSystems.steps.mapping.description"),
      icon: "lucide:map",
      step: "01",
    },
    {
      title: t("servicePages.crmSystems.steps.design.title"),
      description: t("servicePages.crmSystems.steps.design.description"),
      icon: "lucide:layout-dashboard",
      step: "02",
    },
    {
      title: t("servicePages.crmSystems.steps.development.title"),
      description: t("servicePages.crmSystems.steps.development.description"),
      icon: "lucide:code",
      step: "03",
    },
    {
      title: t("servicePages.crmSystems.steps.migration.title"),
      description: t("servicePages.crmSystems.steps.migration.description"),
      icon: "lucide:database",
      step: "04",
    },
    {
      title: t("servicePages.crmSystems.steps.training.title"),
      description: t("servicePages.crmSystems.steps.training.description"),
      icon: "lucide:users-2",
      step: "05",
    },
    {
      title: t("servicePages.crmSystems.steps.improvement.title"),
      description: t("servicePages.crmSystems.steps.improvement.description"),
      icon: "lucide:settings",
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
              {t("servicePages.breadcrumb.home")}
            </Link>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <Link
              href="/#services"
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("servicePages.breadcrumb.services")}
            </Link>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <span className="text-white font-medium">{t("servicePages.crmSystems.badge")}</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 lg:mb-6 opacity-0 animate-fade-in text-xs sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">
                {t("servicePages.crmSystems.badge")}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {t("servicePages.crmSystems.title")}
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                {t("servicePages.crmSystems.titleHighlight")}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {t("servicePages.crmSystems.description")}
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
                  {t("servicePages.getStarted")}
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
                {t("servicePages.scheduleConsultation")}
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
              Powerful CRM Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Data-driven solutions that turn prospects into loyal customers.
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

      {/* CRM Solutions Section - Enterprise Minimal (Horizontal List) */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0078D4] uppercase tracking-wider mb-4">
                {t("servicePages.crmSystems.ourServices.badge")}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                {t("servicePages.crmSystems.ourServices.title")}
              </h2>
            </div>
            <p className="text-lg text-gray-500 max-w-md lg:text-right">
              {t("servicePages.crmSystems.ourServices.description")}
            </p>
          </div>

          {/* Horizontal List Layout */}
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {services.map((service, index) => (
              <div key={index} className="group py-8 lg:py-12">
                <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="text-sm font-medium text-gray-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 lg:col-span-3">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-[#0078D4] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 lg:col-span-5 lg:col-start-5">
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="col-span-12 lg:col-span-2 lg:col-start-11 lg:text-right mt-4 lg:mt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#0078D4] transition-colors duration-300 group/link"
                    >
                      <span className="hidden lg:inline">{t("servicePages.learnMore")}</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
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
              {t("servicePages.crmSystems.process.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t("servicePages.crmSystems.process.description")}
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
            {t("servicePages.crmSystems.cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t("servicePages.crmSystems.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0078D4] text-sm font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("servicePages.cta.contactUs")}
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
              {t("servicePages.cta.viewWork")}
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
