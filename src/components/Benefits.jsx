"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      stat: t("benefits.items.tailored.stat"),
      title: t("benefits.items.tailored.title"),
      description: t("benefits.items.tailored.description"),
      image: "/benefits/tailored.jpg",
      gradient: "from-azure-blue/20 to-cyan-500/10",
    },
    {
      stat: t("benefits.items.dedicated.stat"),
      title: t("benefits.items.dedicated.title"),
      description: t("benefits.items.dedicated.description"),
      image: "/benefits/629.jpg",
      gradient: "from-emerald-500/20 to-green-500/10",
    },
    {
      stat: t("benefits.items.modern.stat"),
      title: t("benefits.items.modern.title"),
      description: t("benefits.items.modern.description"),
      image: "/benefits/628.jpg",
      gradient: "from-violet-500/20 to-purple-500/10",
    },
  ];

  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Minimalist Style */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="font-normal">{t("benefits.pillarsPrefix")}</span>{" "}
            <span className="font-bold">{t("benefits.pillarsBold")}</span>{" "}
            <span className="font-normal">{t("benefits.pillarsSuffix")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
            {t("benefits.description")}
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group"
          >
            <span>{t("benefits.cta")}</span>
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Card with image background */}
              <div className="relative h-[400px] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                {/* Background Image */}
                {benefit.image ? (
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
                  ></div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  {/* Large Statistic */}
                  <div className="text-6xl lg:text-7xl font-bold mb-3">
                    {benefit.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-azure-blue/0 group-hover:bg-azure-blue/10 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
