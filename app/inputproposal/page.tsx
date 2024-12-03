"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const InputProposalPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: "",
    clientName: "",
    clientObjectives: [] as string[], // Store selected objectives
    incidentTickets: 0,
    serviceRequests: 0,
    changeTickets: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked } = e.target;

    if (name === "clientObjectives") {
      // Handle checkbox updates
      const updatedObjectives = checked
        ? [...formData.clientObjectives, value]
        : formData.clientObjectives.filter((obj) => obj !== value);
      setFormData({ ...formData, clientObjectives: updatedObjectives });
    } else {
      setFormData({
        ...formData,
        [name]:
          name === "incidentTickets" ||
          name === "serviceRequests" ||
          name === "changeTickets"
            ? parseInt(value, 10) || 0
            : value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.clientName ||
      formData.clientObjectives.length === 0
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch("/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Failed to generate proposal.");
      }

      const { proposal } = await response.json();
      localStorage.setItem("generatedProposal", proposal);

      router.push(
        `/result?incidentTickets=${formData.incidentTickets}&serviceRequests=${formData.serviceRequests}&changeTickets=${formData.changeTickets}`
      );
    } catch (error: any) {
      console.error("Error generating proposal:", error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
          <img src="/images/your-image-file-name.png" alt="ProposalForge Logo" className="h-48" />
        </Link>
        <div className="flex gap-4">
          <Link href="/platform">
            <button className="font-[Arial] bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              ProposalForge Platform
            </button>
          </Link>
          <Link href="/leadership">
            <button className="font-[Arial] bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              Leadership
            </button>
          </Link>
          <Link href="/faqs">
            <button className="font-[Arial] bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              FAQs
            </button>
          </Link>
          <Link href="/contact">
            <button className="font-[Arial] bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {/* Info Box */}
      <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md mb-8 text-center">
        ProposalForge currently specializes in generating responses for application support proposals, helping enterprises maintain critical systems like SAP and CRM applications. Our platform streamlines the process of creating proposals for application support services, with new features planned for release in the coming months.
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium">
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
            <label htmlFor="clientName" className="block text-sm font-medium">
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
            <label htmlFor="clientObjectives" className="block text-sm font-medium">
              Client Objectives
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {[
                "High operational and maintenance costs",
                "Frequent application downtime or outages",
                "Difficulty managing legacy systems",
                "Insufficient resources or skilled personnel",
                "Lack of real-time issue resolution",
                "Inefficient incident management and reporting",
                "Integration issues with modern technologies",
                "Poor scalability for growing businesses",
                "Inadequate security and compliance measures",
                "Unclear or poorly defined SLAs",
              ].map((objective) => (
                <label key={objective} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="clientObjectives"
                    value={objective}
                    onChange={handleInputChange}
                    className="form-checkbox h-4 w-4"
                  />
                  <span>{objective}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Incident Tickets */}
          <div className="mb-4">
            <label htmlFor="incidentTickets" className="block text-sm font-medium">
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
            <label htmlFor="serviceRequests" className="block text-sm font-medium">
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
            <label htmlFor="changeTickets" className="block text-sm font-medium">
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

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded ${
                isProcessing ? "bg-red-500" : "bg-blue-900 hover:bg-blue-800"
              } text-white`}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Submit"}
            </button>
            {isProcessing && (
              <div className="mt-4 text-2xl font-bold text-bg-blue-900 animate-pulse">
                Your proposal is getting generated by ProposalForge - Do not refresh
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputProposalPage;
