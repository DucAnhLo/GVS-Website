"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ProjectDetail = ({ project }) => {
  const {
    title,
    description,
    image,
    category,
    tech,
    accent,
    caseStudy,
    liveUrl,
    year,
  } = project;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-lg hover:shadow-xl border border-gray-200 text-gray-700 hover:text-gray-900 text-sm font-medium transition-all rounded-lg"
        >
          <Icon icon="fluent:arrow-left-24-filled" className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Hero - Full Width Image */}
      <section className="relative h-[70vh] bg-gray-900 overflow-hidden">
        {image && (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full"
                style={{ backgroundColor: accent }}
              >
                {caseStudy.client}
              </span>
              <span className="text-white/60 text-sm">{year}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-sm">
                {caseStudy.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-6">
              {description}
            </p>

            {liveUrl && liveUrl !== "#" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all group text-white shadow-lg hover:shadow-xl rounded-lg"
                style={{ backgroundColor: accent }}
              >
                <Icon icon="fluent:globe-24-filled" className="w-5 h-5" />
                <span>View Live Site</span>
                <Icon
                  icon="fluent:arrow-right-24-filled"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: accent }}
                >
                  {result.metric}
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Screenshots Gallery - Primary Focus */}
        {caseStudy.screenshots && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Interface Showcase
              </h2>
              {liveUrl && liveUrl !== "#" && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline flex items-center gap-2"
                  style={{ color: accent }}
                >
                  Explore Live{" "}
                  <Icon
                    icon="fluent:arrow-right-24-filled"
                    className="w-4 h-4"
                  />
                </a>
              )}
            </div>

            {/* Large Featured Screenshot */}
            <div className="mb-6">
              <div className="relative group overflow-hidden rounded-xl shadow-2xl bg-gray-900">
                <img
                  src={caseStudy.screenshots[0].image}
                  alt={caseStudy.screenshots[0].title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {caseStudy.screenshots[0].title}
                  </h3>
                  <p className="text-white/80">
                    {caseStudy.screenshots[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshot Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.screenshots.slice(1).map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-900 hover:shadow-2xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {caseStudy.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white hover:bg-gray-900 p-5 rounded-xl border border-gray-200 hover:border-gray-900 transition-all cursor-default shadow-sm hover:shadow-lg"
              >
                <Icon
                  icon="fluent:checkmark-circle-24-filled"
                  className="w-6 h-6 mb-3 group-hover:text-white transition-colors"
                  style={{ color: accent }}
                />
                <p className="text-sm font-medium text-gray-900 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.technologies &&
              caseStudy.technologies.map((technology, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg"
                      style={{ backgroundColor: accent + "15" }}
                    >
                      <Icon
                        icon="fluent:code-24-filled"
                        className="w-6 h-6"
                        style={{ color: accent }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {technology.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{technology.purpose}</p>
                </div>
              ))}
          </div>

          {/* All Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((technology, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Before/After Comparison */}
        {caseStudy.beforeAfter && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-lg">
                    <Icon
                      icon="fluent:warning-24-filled"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-red-600 uppercase font-bold tracking-wide">
                      Before
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Old System
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {caseStudy.beforeAfter.before.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon
                        icon="fluent:dismiss-circle-24-filled"
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2"
                style={{ borderColor: accent + "40" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: accent }}
                  >
                    <Icon
                      icon="fluent:checkmark-24-filled"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase font-bold tracking-wide"
                      style={{ color: accent }}
                    >
                      After
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      New Platform
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {caseStudy.beforeAfter.after.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon
                        icon="fluent:checkmark-circle-24-filled"
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: accent }}
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Minimal Challenge/Solution */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="fluent:lightbulb-24-filled"
                  className="w-8 h-8 text-amber-500"
                />
                <h3 className="text-xl font-bold text-gray-900">Challenge</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="fluent:target-24-filled"
                  className="w-8 h-8"
                  style={{ color: accent }}
                />
                <h3 className="text-xl font-bold text-gray-900">Solution</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full"
            style={{ backgroundColor: accent }}
          >
            <Icon
              icon="fluent:rocket-24-filled"
              className="w-8 h-8 text-white"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Platform?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-all inline-flex items-center justify-center gap-3 group rounded-lg text-gray-900"
              style={{ backgroundColor: accent }}
            >
              Start Your Project
              <Icon
                icon="fluent:arrow-right-24-filled"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-3 rounded-lg"
            >
              View More Work
              <Icon icon="fluent:grid-24-filled" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
