"use client"; // Required for Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const InputProposalPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: "",
    clientName: "",
    clientObjectives: "",
    incidentTickets: 0,
    serviceRequests: 0,
    changeTickets: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "incidentTickets" ||
        name === "serviceRequests" ||
        name === "changeTickets"
          ? parseInt(value, 10) || 0
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.companyName || !formData.clientName || !formData.clientObjectives) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      // Send data to the backend API
      const response = await fetch("/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Parse the error response to display meaningful feedback
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Failed to generate proposal.");
      }

      const { proposal } = await response.json();

      // Save proposal to localStorage
      localStorage.setItem("generatedProposal", proposal);

      // Redirect to the results page
      router.push(
        `/result?incidentTickets=${formData.incidentTickets}&serviceRequests=${formData.serviceRequests}&changeTickets=${formData.changeTickets}`
      );
    } catch (error: any) {
      console.error("Error generating proposal:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <a href="/">
          <img
            src="/images/your-image-file-name.png"
            alt="ProposalForge Logo"
            className="h-48"
          />
        </a>
        <div className="flex gap-4">
          <a href="/platform">ProposalForge Platform</a>
          <a href="/leadership">Leadership</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Your Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter your company name"
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Client Name */}
          <div className="mb-4">
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter client name"
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Client Objectives */}
          <div className="mb-4">
            <label
              htmlFor="clientObjectives"
              className="block text-sm font-medium text-gray-700"
            >
              Client Objectives
            </label>
            <textarea
              id="clientObjectives"
              name="clientObjectives"
              className="mt-1 block w-full border-gray-300"
              placeholder="Enter client objectives"
              rows={4}
              required
              onChange={handleInputChange}
            />
          </div>

          {/* Incident Tickets */}
          <div className="mb-4">
            <label
              htmlFor="incidentTickets"
              className="block text-sm font-medium text-gray-700"
            >
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

          {/* Service Requests */}
          <div className="mb-4">
            <label
              htmlFor="serviceRequests"
              className="block text-sm font-medium text-gray-700"
            >
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

          {/* Change Tickets */}
          <div className="mb-4">
            <label
              htmlFor="changeTickets"
              className="block text-sm font-medium text-gray-700"
            >
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

          {/* Submit Button */}
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

export default InputProposalPage;
