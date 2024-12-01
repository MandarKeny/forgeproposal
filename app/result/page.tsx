"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

// Define types for the calculation function
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

const ResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const incidentTickets = parseInt(searchParams.get("incidentTickets") || "0", 10);
  const serviceRequests = parseInt(searchParams.get("serviceRequests") || "0", 10);
  const changeTickets = parseInt(searchParams.get("changeTickets") || "0", 10);

  const { monthlyCost, year1Cost, year2Cost, year3Cost } = calculateCosts(
    incidentTickets,
    serviceRequests,
    changeTickets
  );

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <a href="/">
          <img src="/images/your-image-file-name.png" alt="Logo" className="h-48" />
        </a>
        <div className="flex gap-4">
          <a href="/platform">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Platform
            </button>
          </a>
          <a href="/leadership">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Leadership
            </button>
          </a>
          <a href="/faqs">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              FAQs
            </button>
          </a>
          <a href="/contact">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Contact Us
            </button>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col h-[calc(100vh-64px)]">
        {/* Top Section */}
        <section className="flex-1 flex items-center justify-center border-b border-gray-300">
          <div className="border-4 border-blue-500 rounded-lg px-12 py-6 text-center">
            <h1 className="text-3xl font-bold">Application Support Service Proposal</h1>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="flex-1 bg-gray-50 p-8">
          <h2 className="text-xl font-bold mb-6 text-center">
            Application Support Service YoY Cost Breakdown
          </h2>

          {/* Cost Breakdown Table */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <table className="table-auto w-full border-collapse border border-gray-700 text-center">
              <thead>
                <tr className="bg-gray-300 text-black">
                  <th className="border border-gray-600 px-4 py-2"></th>
                  <th className="border border-gray-600 px-4 py-2">Year 1</th>
                  <th className="border border-gray-600 px-4 py-2">Year 2</th>
                  <th className="border border-gray-600 px-4 py-2">Year 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2 font-medium">
                    Monthly Cost (USD)
                  </td>
                  <td className="border border-gray-600 px-4 py-2">${monthlyCost}</td>
                  <td className="border border-gray-600 px-4 py-2">-</td>
                  <td className="border border-gray-600 px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2 font-medium">
                    Yearly Cost (USD)
                  </td>
                  <td className="border border-gray-600 px-4 py-2">${year1Cost}</td>
                  <td className="border border-gray-600 px-4 py-2">${year2Cost}</td>
                  <td className="border border-gray-600 px-4 py-2">${year3Cost}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-8 bg-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Terms and Conditions</h3>
            <ul className="list-disc list-inside text-sm text-black">
              <li>Above price is excluding VAT or any other taxes.</li>
              <li>
                Price for Year 2 and Year 3 is valid if the contract is signed for 3 years.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultsPage;
