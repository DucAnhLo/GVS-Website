'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const ProjectDetail = ({ project }) => {
  const { title, description, image, category, tech, accent, caseStudy, liveUrl, year } = project;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors"
          >
            <Icon icon="lucide:arrow-left" className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      {/* Hero - Minimal */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 mb-4">
            <span>{category}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Banner Image */}
        <div className="my-12">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover border border-gray-200"
          />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-8 text-sm pb-12 border-b border-gray-100">
          <div>
            <div className="text-gray-500 mb-1">Client</div>
            <div className="font-medium text-gray-900">{caseStudy.client}</div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Duration</div>
            <div className="font-medium text-gray-900">{caseStudy.duration}</div>
          </div>
          {liveUrl && liveUrl !== "#" && (
            <div>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium transition-colors"
                style={{ color: accent }}
              >
                Visit Site
                <Icon icon="lucide:external-link" className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Results - Minimal Stats */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index}>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: accent }}
                >
                  {result.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Challenge */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 py-3 border-b border-gray-100"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: accent }}
                ></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Technology
          </h2>
          <div className="flex flex-wrap gap-3">
            {tech.map((technology, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium border transition-colors hover:bg-gray-50"
                style={{ borderColor: accent, color: accent }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-12 border-t border-gray-100">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all"
          >
            View More Projects
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
