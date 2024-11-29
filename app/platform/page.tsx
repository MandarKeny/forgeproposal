import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Platform() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
          <div className="text-4xl font-bold text-red-500 font-[&apos;Arial&apos;]">
            ProposalForge
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/platform">
            <Button variant="secondary" className="font-[&apos;Arial&apos;]">
              ProposalForge Platform
            </Button>
          </Link>
          <Link href="/leadership">
            <Button variant="secondary" className="font-[&apos;Arial&apos;]">
              Leadership
            </Button>
          </Link>
          <Link href="/faqs">
            <Button variant="secondary" className="font-[&apos;Arial&apos;]">
              FAQs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="font-[&apos;Arial&apos;]">
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-black">ProposalForge Platform</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Knowledge Repository</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Effortlessly load and manage diverse content, including past RFPs, capabilities, CPARs, and more.</li>
              <li>Leverage a powerful semantic search engine for precise and quick content retrieval.</li>
              <li>Benefit from automatic indexing that organizes your documents for seamless accessibility.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Intuitive Chat Interface</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Interact with your content naturally using conversational language.</li>
              <li>Refine search results by parameters such as type, client, or project.</li>
              <li>Ensure traceability with reference citations included in responses.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Flight Plan: Strategic Proposal Management</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Define strategic approaches and winning themes to guide your proposal development.</li>
              <li>Utilize auto-generated tables of contents and solutioning frameworks.</li>
              <li>Customize the AI engine to align with your preferred writing style and solution points.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Reflective Response Engine</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Generate complete, review-ready proposal drafts with no manual prompt engineering.</li>
              <li>Enjoy content refined by ProposalForge based on ProposalForge best practices and thought leadership.</li>
              <li>Access over 40 domain-specific prompt modules tailored to each proposal section.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Push-Button Reports</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Gain insight into RFX requirement coverage with response completeness grades.</li>
              <li>Verify source reliability with detailed citation reports.</li>
              <li>Ensure high-quality outputs with hallucination-check reports powered by ProposalForge.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

