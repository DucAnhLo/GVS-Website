"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MegaMenu = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.items.webDevelopment.title"),
      description: t("services.items.webDevelopment.description"),
      href: "/services/web-development",
    },
    {
      title: t("services.items.cmsSolutions.title"),
      description: t("services.items.cmsSolutions.description"),
      href: "/services/cms-solutions",
    },
    {
      title: t("services.items.crmSystems.title"),
      description: t("services.items.crmSystems.description"),
      href: "/services/crm-systems",
    },
    {
      title: t("services.items.uiuxDesign.title"),
      description: t("services.items.uiuxDesign.description"),
      href: "/services/ui-ux-design",
    },
    {
      title: t("services.items.digitalStorage.title"),
      description: t("services.items.digitalStorage.description"),
      href: "/services/digital-document-storage",
    },
    {
      title: t("services.items.digitalSignature.title"),
      description: t("services.items.digitalSignature.description"),
      href: "/services/digital-signature",
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="group/item py-3 border-b border-gray-200 hover:border-[#0078D4] transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover/item:text-[#0078D4] transition-colors">
              {service.title}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed group-hover/item:text-gray-700">
              {service.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
