import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export const metadata = {
  title: 'Vietnamese Education Portal - Case Study | Global Soft Vietnam',
  description: 'Comprehensive school discovery platform helping Vietnamese families find and compare schools across Vietnam.',
};

export default function VietnameseEducationPortal() {
  const project = {
    title: 'Vietnamese Education Portal',
    description: 'Comprehensive school discovery platform helping Vietnamese families find and compare schools across Vietnam with detailed information and resources.',
    liveUrl: 'https://education.vietnameseconnect.com/',
    category: 'Education Platform',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Google Maps API'],
    client: 'Vietnamese Connect Community',
    duration: '8 months',
    year: '2024',
    challenge: 'Vietnamese families needed a centralized platform to discover, compare, and research schools across Vietnam. Existing solutions lacked comprehensive information, filtering options, and user-friendly interfaces.',
    solution: 'Developed a modern, responsive education portal with advanced search and filtering capabilities. Integrated Google Maps for location-based discovery, built comprehensive school profiles with detailed information, and implemented user-friendly comparison tools.',
    results: [
      { metric: '1000+', label: 'Schools Listed Nationwide' },
      { metric: '50K+', label: 'Monthly Active Users' },
      { metric: '8 min', label: 'Average Engagement Time' },
      { metric: '4.8/5', label: 'User Satisfaction Rating' }
    ],
    features: [
      'Advanced school search & filtering',
      'Location-based school discovery',
      'Detailed school profiles & information',
      'School comparison tools',
      'Interactive maps integration',
      'Curriculum and program listings',
      'Tuition fee information',
      'Contact & application details',
      'School ratings & reviews',
      'Multi-language support (Vietnamese/English)',
      'Mobile-responsive design',
      'Favorites & saved schools'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-azure-blue to-azure-cloud text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <Icon icon="fluent:arrow-left-24-filled" className="w-5 h-5" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-white/20 text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Icon icon="fluent:building-24-filled" className="w-5 h-5" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="fluent:clock-24-filled" className="w-5 h-5" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="fluent:calendar-24-filled" className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-azure-blue font-semibold hover:bg-gray-100 transition-colors"
              >
                <Icon icon="fluent:arrow-up-right-24-filled" className="w-5 h-5" />
                Visit Live Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((result, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-azure-blue mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-600 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Challenge */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-azure-blue/10 flex items-center justify-center">
                <Icon icon="fluent:target-24-filled" className="w-6 h-6 text-azure-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-azure-cloud/10 flex items-center justify-center">
                <Icon icon="fluent:lightbulb-24-filled" className="w-6 h-6 text-azure-cloud" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-azure-green/10 flex items-center justify-center">
                <Icon icon="fluent:star-24-filled" className="w-6 h-6 text-azure-green" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-azure-sky transition-colors">
                  <Icon icon="fluent:checkmark-circle-24-filled" className="w-6 h-6 text-azure-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-900/10 flex items-center justify-center">
                <Icon icon="fluent:code-24-filled" className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-azure-blue to-azure-cloud text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-azure-blue font-semibold hover:bg-gray-100 transition-colors"
            >
              <Icon icon="fluent:arrow-up-right-24-filled" className="w-5 h-5" />
              View Live Project
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-azure-blue transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
