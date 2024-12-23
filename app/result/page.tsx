"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ResultsComponent = () => {
  const searchParams = useSearchParams();

  // Retrieve `companyName` and `clientName` from query parameters or fallback to default values
  const companyName = searchParams.get("companyName") || "Your Company Name";
  const clientName = searchParams.get("clientName") || "Client Name";

  const [proposalPart1, setProposalPart1] = useState("Loading Part 1...");
  const [proposalPart2, setProposalPart2] = useState(
    "Click 'Generate Part 2 of Proposal' to load content."
  );
  const [buttonText, setButtonText] = useState("Generate Part 2 of Proposal");
  const [isGeneratingPart2, setIsGeneratingPart2] = useState(false);

  useEffect(() => {
    // Load Part 1 content from localStorage
    const storedProposal = localStorage.getItem("generatedProposal") || "No proposal generated.";
    setProposalPart1(storedProposal);
  }, []);

  const generatePart2 = async () => {
    setIsGeneratingPart2(true);
    setButtonText("Generating Part 2...");

    setTimeout(() => {
      setButtonText("Part 2 of Proposal");
    }, 4000);

    try {
      const response = await fetch("/api/generatePart2Proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          clientName,
          model: "gpt-4o-mini",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProposalPart2(data.result);
      } else {
        setProposalPart2("Error generating Part 2 of the proposal.");
      }
    } catch (error) {
      setProposalPart2("Failed to connect to the API.");
      console.error("API Request Error:", error);
    }

    setIsGeneratingPart2(false);
  };

  const downloadAsWord = async () => {
    try {
      const response = await fetch("/api/generateWord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          clientName,
          part1Content: proposalPart1,
          part2Content: proposalPart2,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${companyName}-Proposal-for-${clientName}.docx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      } else {
        console.error("Error generating Word document");
        alert("Failed to generate Word document. Please try again.");
      }
    } catch (error) {
      console.error("Download Error:", error);
      alert("Failed to download document. Please try again.");
    }
  };

  const calculateCosts = () => {
    const incidentTickets = parseInt(searchParams.get("incidentTickets") || "0", 10);
    const serviceRequests = parseInt(searchParams.get("serviceRequests") || "0", 10);
    const changeTickets = parseInt(searchParams.get("changeTickets") || "0", 10);

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

  const costs = calculateCosts();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
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
            <Button variant="secondary" className="font-[Arial]">
              ProposalForge Platform
            </Button>
          </Link>
          <Link href="/leadership">
            <Button variant="secondary" className="font-[Arial]">
              Leadership
            </Button>
          </Link>
          <Link href="/faqs">
            <Button variant="secondary" className="font-[Arial]">
              FAQs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="font-[Arial]">
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-7 text-left">
          ProposalForge generated proposal
        </h1>

        <h2 className="text-xs text-white mb-7 text-left">
          {`${companyName}'s proposal to ${clientName}`}
        </h2>

        {/* Part 1 Button */}
        <div className="text-left mb-4">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md">
            Part 1 of Proposal
          </button>
        </div>

        {/* Part 1 Box */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md overflow-y-scroll max-h-96 border-2 border-blue-900 max-w-5xl mb-8">
          <pre
            className="whitespace-pre-line font-[Arial]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {proposalPart1}
          </pre>
        </div>

        {/* Generate Part 2 Button */}
        <div className="text-left mb-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
            onClick={generatePart2}
            disabled={isGeneratingPart2}
          >
            {buttonText}
          </button>
        </div>

        {/* Part 2 Box */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md overflow-y-scroll max-h-96 border-2 border-blue-900 max-w-5xl mb-8">
          <pre
            className="whitespace-pre-line font-[Arial]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {proposalPart2}
          </pre>
        </div>

        {/* Download as Word Button */}
        <div className="text-left mb-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
            onClick={downloadAsWord}
          >
            Download as MS Word
          </button>
        </div>

        {/* Budgetary Quote Section */}
        <h2 className="text-3xl font-bold text-blue-900 mb-7 text-left">
          Budgetary quote based on ticket data
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

          {/* Pricing Assumptions */}
          <div className="mt-4 bg-white p-4 rounded-lg border border-blue-900">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Pricing Assumptions:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pricing excludes VAT and local taxes.</li>
              <li>Year 2 and Year 3 pricing is valid for a 3-year contract.</li>
              <li>Year-over-year productivity benefits are applied to pricing.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsContent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResultsComponent />
  </Suspense>
);

export default ResultsContent;
