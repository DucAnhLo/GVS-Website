"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0078D4] to-[#005A9E] pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-[15%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Icon icon="lucide:briefcase" className="w-4 h-4 text-cyan-300" />
              <span className="text-white/90 text-sm font-medium">
                {t("projectPage.badge")}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("projectPage.title")}
            </h1>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {t("projectPage.description")}
            </p>
          </div>
        </div>

        {/* Wave Cut */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,100 600,20 900,60 C1050,80 1150,60 1200,60 L1200,120 L0,120 Z"
              className="fill-gray-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
              const title =
                language === "vi"
                  ? t(`projectsData.${project.slug}.title`)
                  : project.title;
              const description =
                language === "vi"
                  ? t(`projectsData.${project.slug}.description`)
                  : project.description;

              return (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <Icon
                          icon="lucide:image"
                          className="w-10 h-10 text-gray-400"
                        />
                      </div>
                    )}

                    {/* Dark gradient overlay for text readability if needed, though news style usually doesn't have it */}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase leading-tight group-hover:text-[#0078D4] transition-colors line-clamp-2">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {description}
                    </p>

                    {/* Footer / Read More */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[#0078D4] font-bold text-sm hover:underline">
                        {t("common.readMore") || "Đọc thêm"}
                        <span className="ml-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] rounded-2xl p-12">
              <Icon
                icon="lucide:rocket"
                className="w-12 h-12 text-white mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("projectPage.cta.title")}
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                {t("projectPage.cta.description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0078D4] font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                {t("projectPage.cta.button")}
                <Icon icon="lucide:arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
