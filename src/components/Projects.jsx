"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const projects = projectsData;

  return (
    <section className="relative py-32 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-azure-blue/5 dark:bg-azure-blue/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-azure-green/5 dark:bg-azure-green/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 bg-azure-blue/10 border border-azure-blue/20 dark:border-azure-blue/30 mb-6"
            style={{ animation: "fadeInUp 0.6s ease-out both" }}
          >
            <div className="w-2 h-2 bg-azure-blue rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-azure-blue">
              Portfolio
            </span>
          </div>
          <h2
            className="text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              animation: "fadeInUp 0.6s ease-out 0.1s both",
            }}
          >
            Featured Projects
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl transition-colors duration-300"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            Transforming ideas into powerful digital experiences
          </p>
        </div>

        {/* Projects Grid - Uniform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.slug ? `/projects/${project.slug}` : "#"}
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `cardPop 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-gray-300 dark:hover:border-white/20">
                {/* Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"
                  style={{ backgroundColor: project.accent }}
                ></div>

                {/* Project Banner Image */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  {/* Project Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
                      <Icon
                        icon="fluent-emoji:laptop"
                        className="w-24 h-24 opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                  )}

                  {/* Category Badge - Overlaid on image */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-md border border-white/20">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      ></div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex flex-col min-h-[280px]">
                  {/* Title */}
                  <h3
                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight transition-colors duration-300"
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-slate-400 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-slate-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Section - CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300"
                        style={{ color: project.accent }}
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          View Project
                        </span>
                        <Icon
                          icon="fluent:arrow-right-24-filled"
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </div>

                      {/* External Link Icon if available */}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Icon
                          icon="fluent:arrow-up-right-24-filled"
                          className="w-5 h-5 text-gray-500 dark:text-slate-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner Accent Glow */}
                <div
                  className="absolute bottom-8 right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-500 pointer-events-none"
                  style={{ backgroundColor: project.accent }}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-azure-blue hover:text-white hover:shadow-2xl hover:shadow-azure-blue/30 hover:-translate-y-1 group"
          >
            View All Projects
            <Icon
              icon="fluent:arrow-right-24-filled"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardPop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
