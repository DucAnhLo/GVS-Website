'use client'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      type: 'Project-Based',
      location: 'Remote / Hanoi, Vietnam',
      department: 'Design',
      icon: 'fluent-emoji:artist-palette',
      description: 'We are looking for a talented UI/UX Designer to join our team on a project basis. You will be responsible for creating beautiful, intuitive user interfaces and engaging visual designs for both internal and client projects.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create UI/UX designs that are both functional and aesthetically pleasing',
        'Design posters, banners, and marketing materials for internal projects',
        'Develop visual designs for client projects including presentations and promotional materials',
        'Collaborate with developers to ensure design feasibility',
        'Create design mockups, wireframes, and prototypes',
        'Maintain design consistency across all project deliverables',
        'Iterate designs based on client and team feedback'
      ],
      requirements: [
        'Proven experience in UI/UX design with a strong portfolio',
        'Proficiency in design tools (Figma, Adobe XD, Sketch, or similar)',
        'Experience with Adobe Creative Suite (Photoshop, Illustrator) for poster design',
        'Strong understanding of user-centered design principles',
        'Ability to create wireframes, mockups, and high-fidelity prototypes',
        'Knowledge of responsive design and mobile-first approaches',
        'Good understanding of typography, color theory, and layout',
        'Excellent communication and collaboration skills',
        'Ability to work independently and meet project deadlines',
        'Portfolio showcasing UI/UX work and graphic design projects'
      ],
      preferred: [
        'Experience with motion design or animation',
        'Knowledge of HTML/CSS basics',
        'Familiarity with design systems',
        'Experience working in agile environments',
        'Understanding of accessibility standards'
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-azure-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-azure-green/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white tracking-wider uppercase px-4 py-2 bg-gradient-to-r from-azure-blue to-azure-cloud rounded-full">
              Join Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Career Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of a dynamic team building innovative digital solutions
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white border-2 border-gray-200 hover:border-azure-blue transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Job Card Header */}
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-azure-sky flex items-center justify-center group-hover:bg-azure-blue transition-colors duration-300">
                      <Icon icon={job.icon} className="w-10 h-10" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1 text-gray-600">
                            <Icon icon="fluent:briefcase-24-filled" className="w-4 h-4 text-azure-blue" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <Icon icon="fluent:location-24-filled" className="w-4 h-4 text-azure-blue" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <Icon icon="fluent:folder-24-filled" className="w-4 h-4 text-azure-blue" />
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                        className="px-6 py-2 bg-azure-blue text-white font-semibold hover:bg-azure-dark transition-colors"
                      >
                        {selectedJob?.id === job.id ? 'Close' : 'View Details'}
                      </button>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Expandable Details */}
                {selectedJob?.id === job.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200 space-y-8 animate-fadeIn">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Icon icon="fluent:clipboard-task-24-filled" className="w-6 h-6 text-azure-blue" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon icon="fluent:checkmark-circle-24-filled" className="w-5 h-5 text-azure-green mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Icon icon="fluent:star-24-filled" className="w-6 h-6 text-azure-blue" />
                        Requirements
                      </h4>
                      <ul className="space-y-3">
                        {job.requirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon icon="fluent:checkmark-circle-24-filled" className="w-5 h-5 text-azure-blue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preferred Qualifications */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Icon icon="fluent:trophy-24-filled" className="w-6 h-6 text-azure-cloud" />
                        Preferred Qualifications
                      </h4>
                      <ul className="space-y-3">
                        {job.preferred.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon icon="fluent:add-circle-24-filled" className="w-5 h-5 text-azure-cloud mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                      <a
                        href="mailto:careers@globalsoft.vn?subject=Application for UI/UX Designer Position"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-azure-blue to-azure-cloud text-white font-semibold hover:shadow-xl transition-shadow duration-300"
                      >
                        <Icon icon="fluent:mail-24-filled" className="w-5 h-5" />
                        Apply Now
                      </a>
                      <a
                        href="/careers/ui-ux-designer"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-azure-blue text-azure-blue font-semibold hover:bg-azure-blue hover:text-white transition-colors duration-300"
                      >
                        <Icon icon="fluent:document-pdf-24-filled" className="w-5 h-5" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see a position that fits? We're always looking for talented people.
          </p>
          <a
            href="mailto:careers@globalsoft.vn"
            className="inline-flex items-center gap-2 text-azure-blue font-semibold hover:text-azure-dark transition-colors"
          >
            Send us your resume
            <Icon icon="fluent:arrow-right-24-filled" className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Careers;
