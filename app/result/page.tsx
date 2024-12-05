"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ResultsContent = () => {
  const searchParams = useSearchParams();

  const incidentTickets = parseInt(searchParams.get("incidentTickets") || "0", 10);
  const serviceRequests = parseInt(searchParams.get("serviceRequests") || "0", 10);
  const changeTickets = parseInt(searchParams.get("changeTickets") || "0", 10);

  // Safely retrieve data from localStorage
  const [proposal, setProposal] = useState("Loading proposal...");

  useEffect(() => {
    const storedProposal = localStorage.getItem("generatedProposal") || "No proposal generated.";
    setProposal(storedProposal);
  }, []);

  const calculateCosts = (
    incidentTickets: number,
    serviceRequests: number,
    changeTickets: number
  ) => {
    const MAX_INCIDENT_TICKETS = 80;
    const MAX_SERVICE_REQUESTS = 250;
    const MAX_CHANGE_TICKETS = 80;
    const PRICE_PER_ENGINEER_INDIA = 4500;
    const PRICE_PER_ENGINEER_USA = 16000;

    const engineersForIncidents = Math.ceil(incidentTickets / MAX_INCIDENT_TICKETS);
    const engineersForServiceRequests = Math.ceil(serviceRequests / MAX_SERVICE_REQUESTS);
    const engineersForChangeTickets = Math.ceil(changeTickets / MAX_CHANGE_TICKETS);

    const totalEngineers =
      engineersForIncidents + engineersForServiceRequests + engineersForChangeTickets;

    const engineersInIndia = Math.floor(totalEngineers * 0.8);
    const engineersInUSA = totalEngineers - engineersInIndia;

    const monthlyCostInIndia = engineersInIndia * PRICE_PER_ENGINEER_INDIA;
    const monthlyCostInUSA = engineersInUSA * PRICE_PER_ENGINEER_USA;
    const totalMonthlyCost = monthlyCostInIndia + monthlyCostInUSA;

    const totalYear1Cost = totalMonthlyCost * 12;
    const totalYear2Cost = totalYear1Cost * 0.85;
    const totalYear3Cost = totalYear2Cost * 0.95;

    return {
      monthlyCost: totalMonthlyCost,
      year1Cost: totalYear1Cost,
      year2Cost: totalYear2Cost,
      year3Cost: totalYear3Cost,
    };
  };

  const costs = calculateCosts(incidentTickets, serviceRequests, changeTickets);

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

      {/* Page Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Proposal Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-7 text-center flash-animation">
            Your custom application support proposal document
          </h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md overflow-y-scroll max-h-96 border-2 border-blue-900 max-w-5xl mx-auto">
            <pre className="whitespace-pre-line">{proposal}</pre>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-7 text-center flash-animation">
            Budgetary quote based on client input ticket data
          </h2>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <table className="table-auto w-full text-center border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border px-4 py-2">Metric</th>
                  <th className="border px-4 py-2">Year 1</th>
                  <th className="border px-4 py-2">Year 2</th>
                  <th className="border px-4 py-2">Year 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monthly Cost</td>
                  <td className="border px-4 py-2">${costs.monthlyCost.toFixed(2)}</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Yearly Cost</td>
                  <td className="border px-4 py-2">${costs.year1Cost.toFixed(2)}</td>
                  <td className="border px-4 py-2">${costs.year2Cost.toFixed(2)}</td>
                  <td className="border px-4 py-2">${costs.year3Cost.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            {/* Pricing Assumptions Box */}
            <div className="mt-4 bg-white p-4 rounded-lg border border-blue-900">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Pricing Assumptions:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Pricing is excluding VAT and any local taxes</li>
                <li>Year 2 and Year 3 pricing is valid if the contract is signed for 3 years</li>
                <li>Year-over-Year productivity benefits are baked into Year 2 and Year 3 pricing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default function ResultPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
