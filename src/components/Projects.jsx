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
              className="group"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white dark:bg-white/5 border-2 border-gray-200/50 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-azure-blue/20 hover:-translate-y-2">
                {/* Project Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        project.gradient || "from-azure-blue/20 to-azure-sky/10"
                      } flex items-center justify-center`}
                    >
                      <Icon
                        icon="fluent-emoji:laptop"
                        className="w-24 h-24 opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-full">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.accent || azureBlue }}
                      ></div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-900 dark:text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col min-h-[240px]">
                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 leading-tight transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-slate-400 border border-gray-200 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-slate-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="mt-auto">
                    <div
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                      style={{ color: project.accent || azureBlue }}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {t("projects.viewProject")}
                      </span>
                      <Icon
                        icon="fluent:arrow-right-24-filled"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full rounded-bl-2xl"
                  style={{ backgroundColor: project.accent || azureBlue }}
                ></div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 rounded-tr-2xl"
                  style={{
                    background: `radial-gradient(circle at top right, ${
                      project.accent || azureBlue
                    }, transparent 70%)`,
                  }}
                ></div>
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
