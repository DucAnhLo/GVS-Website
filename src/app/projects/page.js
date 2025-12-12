"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
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
              <span className="text-white/90 text-sm font-medium">Our Portfolio</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Recent Projects
            </h1>

            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Explore our portfolio of successful digital transformations. Each project represents our commitment to excellence and innovation.
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
            {projectsData.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#0078D4] hover:shadow-2xl hover:shadow-[#0078D4]/10 hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient || 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                        <Icon icon="lucide:briefcase" className="w-20 h-20 text-white/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.accent || '#0078D4' }}
                        ></div>
                        <span className="text-xs font-semibold text-gray-900">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0078D4] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-gray-500">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0078D4]">
                      <span className="transition-transform duration-300 group-hover:translate-x-1">View Case Study</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: project.accent || '#0078D4' }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-[#0078D4] to-[#005A9E] rounded-2xl p-12">
              <Icon icon="lucide:rocket" className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your digital presence
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0078D4] font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                Get in Touch
                <Icon icon="lucide:arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
