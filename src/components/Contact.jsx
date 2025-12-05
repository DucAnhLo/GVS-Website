'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">Get in touch for your next project</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900"
              placeholder="+84 123 456 789"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900"
              placeholder="Project Enquiry"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900 resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Email</h3>
              <a href="" className="text-gray-600 hover:text-gray-900">
                hello@globalsoftvietnam.com
              </a>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
              <a href="" className="text-gray-600 hover:text-gray-900">
                +84 (0) 962062999
              </a>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Hanoi, Vietnam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
