"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projects";

const ProjectDetail = ({ project }) => {
  const { t, language } = useLanguage();
  const { image, images, tech, accent, liveUrl, year, slug } = project;

  // Get translations or fallback to project data
  const title =
    language === "vi" ? t(`projectsData.${slug}.title`) : project.title;
  const description =
    language === "vi"
      ? t(`projectsData.${slug}.description`)
      : project.description;
  const category =
    language === "vi" ? t(`projectsData.${slug}.category`) : project.category;

  // Case Study data
  const baseCaseStudy = project.caseStudy;
  const challenge =
    language === "vi"
      ? t(`projectsData.${slug}.caseStudy.challenge`)
      : baseCaseStudy.challenge;
  const solution =
    language === "vi"
      ? t(`projectsData.${slug}.caseStudy.solution`)
      : baseCaseStudy.solution;
  const features =
    language === "vi"
      ? t(`projectsData.${slug}.caseStudy.features`)
      : baseCaseStudy.features;
  const client = baseCaseStudy.client;
  const duration = baseCaseStudy.duration;

  // Filter other projects for sidebar
  const otherProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb - Clean & Minimal */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
          <Link href="/" className="hover:text-[#0078D4] transition-colors">
            {t("navigation.home")}
          </Link>
          <span>/</span>
          <Link
            href="/#projects"
            className="hover:text-[#0078D4] transition-colors"
          >
            {t("navigation.projects")}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px]">
            {title}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8">
            {/* Header Section */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#0078D4] font-bold tracking-wider text-sm uppercase">
                  {category}
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500 text-sm">{year}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-500 border-y border-gray-100 py-4">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:user" className="w-4 h-4" />
                  <span className="font-medium text-gray-900">{client}</span>
                </div>
                <div className="w-px h-4 bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:clock" className="w-4 h-4" />
                  <span>{duration}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-gray-50 text-xs text-gray-500 italic text-center border-t border-gray-200">
                {title} - Project Showcase
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-gray-700">
              {/* Introduction */}
              <p className="lead text-xl font-medium text-gray-900 italic mb-8 border-l-4 border-[#0078D4] pl-4">
                {description}
              </p>

              {/* Problem Section */}
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-10 mb-4">
                <Icon
                  icon="lucide:alert-circle"
                  className="w-6 h-6 text-[#0078D4]"
                />
                {t("projectDetail.problem")}
              </h3>
              <p className="mb-8">{challenge}</p>

              {/* Solution Section */}
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-10 mb-4">
                <Icon
                  icon="lucide:check-circle-2"
                  className="w-6 h-6 text-green-600"
                />
                {t("projectDetail.solution")}
              </h3>
              <p className="mb-8">{solution}</p>

              {/* Key Features List */}
              <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
                {t("projectDetail.keyFeatures")}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <Icon
                      icon="lucide:check"
                      className="w-5 h-5 text-[#0078D4] mt-0.5 shrink-0"
                    />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Site Button */}
              {liveUrl && (
                <div className="mt-10">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078D4] text-white font-bold rounded hover:bg-[#005A9E] transition-colors"
                  >
                    {t("projectDetail.viewLiveSite")}
                    <Icon icon="lucide:external-link" className="w-4 h-4" />
                  </a>
                </div>
              )}
            </article>

            {/* Gallery Images */}
            {images && images.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("projectDetail.gallery")}
                </h3>
                <div className="grid gap-6">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden border border-gray-200"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Sidebar Widget: Related Projects */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-[#0078D4] pl-3 uppercase">
                {t("projects.sectionTitleBold")}
              </h3>

              <div className="space-y-6">
                {otherProjects.map((p, idx) => {
                  const pTitle =
                    language === "vi"
                      ? t(`projectsData.${p.slug}.title`)
                      : p.title;

                  return (
                    <Link
                      key={idx}
                      href={`/projects/${p.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-md overflow-hidden relative">
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={pTitle}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <Icon
                                icon="lucide:image"
                                className="w-6 h-6 text-gray-400"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#0078D4] transition-colors line-clamp-2">
                            {pTitle}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {p.year}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/#projects"
                  className="block w-full py-3 bg-gray-900 text-white text-center font-bold text-sm uppercase rounded hover:bg-[#0078D4] transition-colors"
                >
                  {t("projects.viewAll")}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
