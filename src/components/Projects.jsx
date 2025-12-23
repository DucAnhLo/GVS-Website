"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const projects = projectsData;
  const azureBlue = "#0078D4";
  const { t } = useLanguage();

  return (
    <section className="relative py-20 dark:from-gray-900 dark:to-slate-900 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Minimalist Style */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="font-normal">{t("projects.sectionTitle")}</span>{" "}
            <span className="font-bold">{t("projects.sectionTitleBold")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.slug ? `/projects/${project.slug}` : "#"}
              className="group flex flex-col"
            >
              {/* Card Container */}
              <div className="flex flex-col h-full bg-white dark:bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:bg-white/10">
                {/* Image Section - Top */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        project.gradient || "from-azure-blue/20 to-azure-sky/10"
                      } flex items-center justify-center`}
                    >
                      <Icon
                        icon="fluent-emoji:laptop"
                        className="w-16 h-16 opacity-60 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Meta Row: Source */}
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <span
                      className="font-medium"
                      style={{ color: project.accent || azureBlue }}
                    >
                      {project.caseStudy?.client || project.title}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-azure-blue transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* View Project Link - visual indicator similar to before but cleaner */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-azure-blue transition-colors">
                      {t("projects.viewProject")}
                    </span>
                    <Icon
                      icon="fluent:arrow-right-24-filled"
                      className="w-5 h-5 text-gray-400 group-hover:text-azure-blue transition-colors transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-10 py-4 border border-brand-black bg-white text-brand-black text-sm font-semibold rounded-full hover:bg-brand-black hover:text-white transition-all group"
          >
            <span>{t("projects.viewAll")}</span>
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
