'use client'
import React from 'react';

export default function UIUXDesignerJob() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-azure-blue text-white font-semibold hover:bg-azure-dark transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Document Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-8 pb-6 border-b-2 border-azure-blue">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            UI/UX Designer
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Global Soft Vietnam
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Position Type:</span>
              <span>Project-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Location:</span>
              <span>Remote / Hanoi, Vietnam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Department:</span>
              <span>Design</span>
            </div>
          </div>
        </div>

        {/* About the Role */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
          <p className="text-gray-700 leading-relaxed">
            We are looking for a talented UI/UX Designer to join our team on a project basis. You will be responsible for creating beautiful, intuitive user interfaces and engaging visual designs for both internal and client projects. This role requires a blend of UI/UX design skills and graphic design capabilities to deliver comprehensive design solutions.
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Design user interfaces for web and mobile applications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Create UI/UX designs that are both functional and aesthetically pleasing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Design posters, banners, and marketing materials for internal projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Develop visual designs for client projects including presentations and promotional materials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Collaborate with developers to ensure design feasibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Create design mockups, wireframes, and prototypes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Maintain design consistency across all project deliverables</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Iterate designs based on client and team feedback</span>
            </li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Proven experience in UI/UX design with a strong portfolio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Proficiency in design tools (Figma, Adobe XD, Sketch, or similar)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Experience with Adobe Creative Suite (Photoshop, Illustrator) for poster design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Strong understanding of user-centered design principles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Ability to create wireframes, mockups, and high-fidelity prototypes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Knowledge of responsive design and mobile-first approaches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Good understanding of typography, color theory, and layout</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Excellent communication and collaboration skills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Ability to work independently and meet project deadlines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-blue font-bold flex-shrink-0">•</span>
              <span className="text-gray-700">Portfolio showcasing UI/UX work and graphic design projects</span>
            </li>
          </ul>
        </section>

        {/* Preferred Qualifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preferred Qualifications</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-azure-cloud font-bold flex-shrink-0">+</span>
              <span className="text-gray-700">Experience with motion design or animation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-cloud font-bold flex-shrink-0">+</span>
              <span className="text-gray-700">Knowledge of HTML/CSS basics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-cloud font-bold flex-shrink-0">+</span>
              <span className="text-gray-700">Familiarity with design systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-cloud font-bold flex-shrink-0">+</span>
              <span className="text-gray-700">Experience working in agile environments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-azure-cloud font-bold flex-shrink-0">+</span>
              <span className="text-gray-700">Understanding of accessibility standards</span>
            </li>
          </ul>
        </section>

        {/* How to Apply */}
        <section className="mt-12 pt-6 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you're interested in this position, please send your resume, portfolio, and a brief cover letter to:
          </p>
          <div className="bg-azure-sky p-6 border-l-4 border-azure-blue">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Email: careers@globalsoft.vn
            </p>
            <p className="text-gray-600">
              Subject: Application for UI/UX Designer Position
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Global Soft Vietnam - Building Digital Excellence</p>
          <p className="mt-2">www.globalsoft.vn</p>
        </div>
      </div>
    </div>
  );
}
