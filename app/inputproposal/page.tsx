"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define TypeScript interfaces
interface FormDataType {
  companyName: string;
  clientName: string;
  clientObjectives: string[];
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
  model: string;
}

interface ErrorType {
  message: string;
}

const InputProposalPage: React.FC = () => {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    companyName: "",
    clientName: "",
    clientObjectives: [],
    incidentTickets: 0,
    serviceRequests: 0,
    changeTickets: 0,
    model: "gpt-4o-mini",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTopicSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const topic = e.target.value;
    if (topic === "Application Support") {
      setSelectedTopic(topic);
    } else {
      e.preventDefault();
      window.alert(
        "Currently, ProposalForge is only configured for Application Support proposals. More options coming soon!"
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    // Handle checkboxes for clientObjectives
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const { name, value, checked } = target;

      if (name === "clientObjectives") {
        const updatedObjectives = checked
          ? [...formData.clientObjectives, value]
          : formData.clientObjectives.filter((obj) => obj !== value);

        setFormData({ ...formData, clientObjectives: updatedObjectives });
      }
    } else {
      // Handle other input types (text, number, and select)
      const { name, value } = target;
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
        body: JSON.stringify({
          companyName: formData.companyName,
          clientName: formData.clientName,
          clientObjectives: formData.clientObjectives,
          model: formData.model,
        }),
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
    } catch (error) {
      const typedError = error as ErrorType;
      console.error("Error generating proposal:", typedError.message);
      alert(`Error: ${typedError.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
        <img
            src="/images/your-image-file-name.png"
            alt="ProposalForge Logo"
            className="h-32"
          />
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
      ProposalForge is a versatile platform that can be tailored for any B2B proposal generation setup, offering customizable solutions to meet your specific business needs. 
      The beta version is currently set up for IT services, with a focus on generating responses for application maintenance proposals. 
      Application maintenance involves supporting and enhancing critical enterprise systems such as SAP and CRM applications to ensure optimal performance and reliability.
      </div>

      {/* Topic Selection Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Select Proposal Topic</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 border-blue-300">
            <input
              type="radio"
              name="topic"
              value="Application Support"
              checked={selectedTopic === "Application Support"}
              onChange={handleTopicSelection}
              className="mr-2"
            />
            <span>Application Support</span>
          </label>

          {["Infrastructure Support", "Service Desk"].map((topic) => (
            <label
              key={topic}
              className="flex items-center p-4 border rounded-lg opacity-50 cursor-not-allowed bg-gray-100 border-gray-300"
            >
              <input
                type="radio"
                name="topic"
                value={topic}
                checked={selectedTopic === topic}
                onChange={handleTopicSelection}
                className="mr-2"
              />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Form Section - Only shown if Application Support is selected */}
      {selectedTopic === "Application Support" && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold mb-6">Submit Your Details</h1>
          <form onSubmit={handleSubmit}>
            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium"
              >
                Your Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter the name of the IT services company creating the proposal"
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
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter the client name for which you want to create a proposal"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Model Selection */}
            <div className="mb-4">
              <label htmlFor="model" className="block text-sm font-medium">
                Select the LLM model
              </label>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="gpt-3.5-turbo">GPT-3.5 (Turbo)</option>
                <option value="gpt-4o-mini">GPT-4O (Mini)</option>
              </select>
            </div>

            {/* Client Objectives */}
            <div className="mb-4">
              <label
                htmlFor="clientObjectives"
                className="block text-sm font-medium"
              >
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
                  <label
                    key={objective}
                    className="flex items-center space-x-2"
                  >
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
              <label
                htmlFor="incidentTickets"
                className="block text-sm font-medium"
              >
                Incident Tickets* (per month)
              </label>
              <input
                type="number"
                id="incidentTickets"
                name="incidentTickets"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter number"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Service Requests */}
            <div className="mb-4">
              <label
                htmlFor="serviceRequests"
                className="block text-sm font-medium"
              >
                Service Requests* (per month)
              </label>
              <input
                type="number"
                id="serviceRequests"
                name="serviceRequests"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter number"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Change Tickets */}
            <div className="mb-4">
              <label
                htmlFor="changeTickets"
                className="block text-sm font-medium"
              >
                Change Tickets* (per month)
              </label>
              <input
                type="number"
                id="changeTickets"
                name="changeTickets"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
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
      isProcessing
        ? "bg-red-500"
        : "bg-blue-900 hover:bg-blue-800"
    } text-white`}
    disabled={isProcessing}
  >
    {isProcessing
      ? "Processing...ProposalForge is hard at work crafting your masterpiece."
      : "Submit"}
  </button>
  {isProcessing && (
    <div
      className="mt-4 text-2xl font-bold italic animate-bounce text-blue-700"
      style={{
        animation: "pulseColor 1.5s infinite, bounce 1s infinite",
      }}
    >
      Sit tight and avoid refreshing the magic!
    </div>
  )}
</div>

<style jsx>{`
  @keyframes pulseColor {
    0% {
      color: #1e40af; /* dark blue */
    }
    50% {
      color: #2563eb; /* lighter blue */
    }
    100% {
      color: #1e40af; /* dark blue */
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>

            {/* Information Box */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-base font-semibold mb-2 text-blue-700 italic">
                Importance of Ticket Count in Support Pricing
              </h3>
              <p className="text-sm mb-2 text-blue-700 italic">
                Ticket count influences pricing as it reflects the workload.
                More tickets require additional resources, impacting costs.
              </p>
              <h4 className="text-sm mb-1 text-blue-700 italic">
                Types of Tickets
              </h4>
              <ol className="text-sm pl-5 space-y-1 text-blue-700 italic">
                <li>
                  <span className="font-bold">Incident Tickets:</span> Address
                  disruptions (e.g., crashes, errors) to restore normal
                  operations quickly.
                </li>
                <li>
                  <span className="font-bold">Service Requests:</span> Handle
                  routine tasks like account setup or permissions.
                </li>
                <li>
                  <span className="font-bold">Change Tickets:</span> Manage
                  controlled changes, such as updates or feature modifications.
                </li>
              </ol>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InputProposalPage;