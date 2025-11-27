'use client'
import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Vietnamese Education Portal',
      description: 'Comprehensive school discovery platform helping Vietnamese families find and compare schools across Vietnam with detailed information and resources.',
      slug: 'vietnamese-education-portal',
      image: '/projects/education.jpg',
      liveUrl: 'https://education.vietnameseconnect.com/',
      category: 'Education Platform',
      tech: ['Next.js', 'React', 'PostgreSQL', 'Google Maps API'],
      color: 'azure-blue',
      caseStudy: {
        client: 'Vietnamese Connect Community',
        duration: '8 months',
        challenge: 'Vietnamese families needed a centralized platform to discover, compare, and research schools across Vietnam. Existing solutions lacked comprehensive information, filtering options, and user-friendly interfaces.',
        solution: 'Developed a modern, responsive education portal with advanced search and filtering capabilities. Integrated Google Maps for location-based discovery, built comprehensive school profiles with detailed information, and implemented user-friendly comparison tools.',
        results: [
          '1000+ schools listed nationwide',
          '50K+ monthly active users',
          'Average 8 minutes user engagement time',
          '4.8/5 user satisfaction rating'
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
      }
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management software with task tracking, team collaboration, and automated reporting.',
      image: '/projects/project-mgmt.jpg',
      liveUrl: '#',
      category: 'SaaS Platform',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
      color: 'azure-cloud',
      caseStudy: {
        client: 'Tech Startup Inc.',
        duration: '4 months',
        challenge: 'Growing startup needed a custom project management solution that integrates with their existing tools and scales with team growth.',
        solution: 'Developed a Next.js-based SaaS platform with PostgreSQL database, deployed on AWS with auto-scaling. Integrated Slack, GitHub, and calendar APIs.',
        results: [
          '80% reduction in project delays',
          '500+ active users across 50 teams',
          '95% user satisfaction rate',
          '40% improvement in team productivity'
        ],
        features: [
          'Kanban & Gantt chart views',
          'Real-time collaboration',
          'Custom workflow automation',
          'Time tracking & reporting',
          'Third-party integrations',
          'Role-based access control'
        ]
      }
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: '/projects/healthcare.jpg',
      liveUrl: '#',
      category: 'Enterprise Solution',
      tech: ['Vue.js', 'Python', 'Docker'],
      color: 'azure-green',
      caseStudy: {
        client: 'Regional Medical Center',
        duration: '8 months',
        challenge: 'Healthcare provider needed HIPAA-compliant digital platform for patient management, telemedicine, and secure medical record storage.',
        solution: 'Built secure Vue.js frontend with Python backend, implemented end-to-end encryption, video consultation feature, and integrated with existing medical systems.',
        results: [
          '70% reduction in administrative time',
          '5000+ patients onboarded',
          '200+ daily video consultations',
          'HIPAA compliance certified'
        ],
        features: [
          'Secure patient portal',
          'Video telemedicine integration',
          'Electronic health records (EHR)',
          'Appointment scheduling system',
          'Prescription management',
          'Medical billing integration'
        ]
      }
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-slate-800 overflow-hidden">
      {/* Background Elements - Matching Hero Style */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure-cloud/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white tracking-wider uppercase px-4 py-2 bg-gradient-to-r from-azure-blue to-azure-cloud rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real-world applications we've built and deployed for businesses like yours
          </p>
        </div>

        {/* Projects Grid - Optimized */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group relative bg-white border-2 border-gray-200 hover:border-azure-blue transition-colors duration-200 overflow-hidden shadow-md hover:shadow-xl block"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon icon="fluent-emoji:laptop" className="w-24 h-24 opacity-50" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-xs font-semibold text-gray-900">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-azure-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <Icon icon="fluent:book-open-24-filled" className="w-5 h-5" />
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-azure-sky text-azure-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-azure-blue to-azure-cloud text-white font-semibold hover:shadow-xl transition-shadow duration-200 group"
          >
            View All Projects
            <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Projects;
