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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Challenge/Solution - Top Priority */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="fluent:lightbulb-24-filled"
                  className="w-8 h-8 text-amber-500"
                />
                <h3 className="text-xl font-bold text-gray-900">The Problem</h3>
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
                <h3 className="text-xl font-bold text-gray-900">What We Solved</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </section>

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
