"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const ResultsContent = () => {
  const searchParams = useSearchParams();

  const incidentTickets = parseInt(searchParams.get("incidentTickets") || "0", 10);
  const serviceRequests = parseInt(searchParams.get("serviceRequests") || "0", 10);
  const changeTickets = parseInt(searchParams.get("changeTickets") || "0", 10);
  const proposal = localStorage.getItem("generatedProposal") || "No proposal generated.";

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
      <div className="flex flex-col h-[calc(100vh-64px)]">
        {/* Proposal Section */}
        <section className="flex-1 overflow-auto border-b border-gray-300 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Generated Proposal</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md overflow-y-scroll max-h-96 whitespace-pre-line">
              {proposal}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="flex-1 bg-gray-50 p-8">
          <h2 className="text-xl font-bold mb-6 text-center">Cost Breakdown</h2>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <table className="table-auto w-full text-center border-collapse">
              <thead>
                <tr>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultsContent;
