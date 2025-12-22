"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0078D4] via-[#0078D4] to-[#005A9E]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-[15%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

        {/* Accent Lines */}
        <div className="absolute top-40 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-40 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">
                {t("hero.badge")}
              </span>
            </div>

            {/* Headline with Creative Typography */}
            <h1
              className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.125rem)" }}
            >
              {t("hero.title")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  {t("hero.titleHighlight")}
                </span>
                {/* Decorative underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q 75 2, 150 6 T 298 6"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              {t("hero.titleEnd")}
            </h1>

            {/* Description with Icon */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0 w-1 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Icon
                  icon="lucide:check-circle"
                  className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("hero.features.customDev.title")}
                  </div>
                  <div className="text-xs text-white/70">
                    {t("hero.features.customDev.subtitle")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  icon="lucide:zap"
                  className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("hero.features.fastDelivery.title")}
                  </div>
                  <div className="text-xs text-white/70">
                    {t("hero.features.fastDelivery.subtitle")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  icon="lucide:shield-check"
                  className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("hero.features.qualityAssured.title")}
                  </div>
                  <div className="text-xs text-white/70">
                    {t("hero.features.qualityAssured.subtitle")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  icon="lucide:headset"
                  className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5"
                />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("hero.features.ongoingSupport.title")}
                  </div>
                  <div className="text-xs text-white/70">
                    {t("hero.features.ongoingSupport.subtitle")}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-white text-[#0078D4] text-sm font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/20 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta.primary")}
                  <Icon
                    icon="lucide:arrow-right"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/projects"
                className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all flex items-center gap-2"
              >
                {t("hero.cta.secondary")}
                <Icon
                  icon="lucide:external-link"
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right Image with Frame */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-cyan-400/20 rounded-2xl blur-xl"></div>

              {/* Image Container */}
              <div className="relative w-[680px] h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="/hero-2.jpg"
                  alt="Digital solutions"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0078D4]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
