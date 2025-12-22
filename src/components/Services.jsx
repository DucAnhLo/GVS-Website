"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const clients = [
    { id: 1, name: "Client 1", logo: "/clients/vnc.avif" },
    { id: 2, name: "Client 2", logo: "/clients/AIG/aiglogo.png" },
    { id: 3, name: "Client 3", logo: "/clients/sgeduvn.webp" },
    { id: 4, name: "Client 4", logo: "/clients/tpduk.jpg" },
  ];

  const services = [
    {
      title: t("services.items.webDevelopment.title"),
      description: t("services.items.webDevelopment.description"),
      slug: "web-development",
    },
    {
      title: t("services.items.cmsSolutions.title"),
      description: t("services.items.cmsSolutions.description"),
      slug: "cms-solutions",
    },
    {
      title: t("services.items.crmSystems.title"),
      description: t("services.items.crmSystems.description"),
      slug: "crm-systems",
    },
    {
      title: t("services.items.uiuxDesign.title"),
      description: t("services.items.uiuxDesign.description"),
      slug: "ui-ux-design",
    },
    {
      title: t("services.items.digitalStorage.title"),
      description: t("services.items.digitalStorage.description"),
      slug: "digital-document-storage",
    },
    {
      title: t("services.items.digitalSignature.title"),
      description: t("services.items.digitalSignature.description"),
      slug: "digital-signature",
    },
  ];

  return (
    <section className="relative py-20 dark:from-gray-900 dark:to-slate-900 overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Minimalist Style */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
                <span className="font-normal">
                  {t("services.sectionTitle")}
                </span>{" "}
                <span className="font-bold">
                  {t("services.sectionTitleBold")}
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                {t("services.sectionDescription")}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group whitespace-nowrap"
              >
                <span>{t("services.getStarted")}</span>
                <Icon
                  icon="fluent:arrow-right-24-filled"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid - Simple */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {services.map((service, index) => {
            const CardContent = (
              <div className="group/item py-4 border-b border-gray-200 hover:border-[#0078D4] transition-all duration-300">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover/item:text-[#0078D4] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );

            return (
              <div key={index}>
                {service.slug ? (
                  <Link href={`/services/${service.slug}`} className="block">
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>

        {/* Clients Section */}
        <div className="mt-20">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
              <span className="font-normal">{t("services.trustedBy")}</span>{" "}
              <span className="font-bold">{t("services.trustedByBold")}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              {t("services.trustedByDescription")}
            </p>
          </div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden py-8">
            {/* Marquee Content */}
            <div className="flex gap-16 animate-marquee">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="w-64 h-32 flex items-center justify-center transition-all duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-auto h-auto object-contain transition-all duration-300 group-hover:scale-110 ${
                          client.logo.includes("AIG")
                            ? "max-w-[400px] max-h-48"
                            : "max-w-[200px] max-h-24"
                        }`}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <Icon
                          icon="fluent:building-24-filled"
                          className="w-12 h-12 text-gray-300 group-hover:text-azure-blue transition-colors duration-300"
                        />
                        <span className="mt-2 text-xs text-gray-400 font-medium">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group"
          >
            <span>{t("services.exploreAll")}</span>
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Services;
