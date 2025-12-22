"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative dark:from-gray-900 dark:to-slate-900 border-t border-gray-200 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('/bg_control_1.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img src="/gsvlogo1.png" alt="GSV Logo" className="h-30" />
            </a>
            <p className="text-gray-600 dark:text-slate-300 dark:text-slate-300 text-sm leading-relaxed transition-colors">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/10 hover:bg-azure-sky dark:hover:bg-white/20 transition-all"
                aria-label="Facebook"
              >
                <Icon icon="logos:facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/10 hover:bg-azure-sky dark:hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/10 hover:bg-azure-sky dark:hover:bg-white/20 transition-all"
                aria-label="GitHub"
              >
                <Icon icon="logos:github-icon" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-normal mb-4 transition-colors">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("navigation.home")}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("navigation.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("navigation.projects")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("navigation.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-normal mb-4 transition-colors">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/web-development"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.webDevelopment.title")}
                </a>
              </li>
              <li>
                <a
                  href="/services/cms-solutions"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.cmsSolutions.title")}
                </a>
              </li>
              <li>
                <a
                  href="/services/crm-systems"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.crmSystems.title")}
                </a>
              </li>
              <li>
                <a
                  href="/services/ui-ux-design"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.uiuxDesign.title")}
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-document-storage"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.digitalStorage.title")}
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-signature"
                  className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    icon="fluent-color:chevron-right-16"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {t("services.items.digitalSignature.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-normal mb-4 transition-colors">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <Icon
                  icon="fluent:location-24-filled"
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue"
                />
                <span className="text-sm">
                  671 Hoang Hoa Tham, Hanoi, Vietnam
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <Icon
                  icon="fluent:call-24-filled"
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue"
                />
                <span className="text-sm">+84 962062999</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <Icon
                  icon="fluent:mail-24-filled"
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue"
                />
                <span className="text-sm">info@globalsoftvietnam.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <Icon
                  icon="fluent:clock-24-filled"
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-azure-blue"
                />
                <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-slate-300 text-sm text-center md:text-left">
              &copy; {currentYear} Global Soft Vietnam. {t("footer.copyright")}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors"
              >
                {t("footer.privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors"
              >
                {t("footer.termsOfService")}
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-slate-300 dark:text-slate-300 hover:text-azure-blue transition-colors"
              >
                {t("footer.cookiePolicy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
