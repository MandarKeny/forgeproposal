"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    incidentTickets: 0,
    serviceRequests: 0,
    changeTickets: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value, 10) || 0,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Navigate to the results page with form data as query parameters
    router.push(
      `/result?incidentTickets=${formData.incidentTickets}&serviceRequests=${formData.serviceRequests}&changeTickets=${formData.changeTickets}`
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <a href="/">
          <img src="/images/your-image-file-name.png" alt="ProposalForge Logo" className="h-48" />
        </a>
        <div className="flex gap-4">
          <a href="/platform">ProposalForge Platform</a>
          <a href="/leadership">Leadership</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>

      {/* Input Fields Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="incidentTickets" className="block text-sm font-medium text-gray-700">
              Incident Tickets (per month)
            </label>
            <input
              type="number"
              id="incidentTickets"
              name="incidentTickets"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter number"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceRequests" className="block text-sm font-medium text-gray-700">
              Service Requests (per month)
            </label>
            <input
              type="number"
              id="serviceRequests"
              name="serviceRequests"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter number"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="changeTickets" className="block text-sm font-medium text-gray-700">
              Change Tickets (per month)
            </label>
            <input
              type="number"
              id="changeTickets"
              name="changeTickets"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter number"
              required
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
