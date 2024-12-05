import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Platform() {
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold text-black mb-8">
          Explore the{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
            ProposalForge Platform
          </span>
        </h1>
        <p className="text-2xl font-extrabold text-gray-700 leading-relaxed mb-6">
          Transform your proposal process with innovative AI-powered tools,
          seamless content management, and powerful automation.
        </p>
      </div>

      {/* Image and Features Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/teams.png"
            alt="Teams Collaboration"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Features Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Content Management</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Upload and organize documents like past RFPs and project data.</li>
              <li>Quickly find what you need with a smart search engine.</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">AI-Assisted Drafting</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Generate complete proposal drafts ready for review.</li>
              <li>Tailor drafts to match your style and project requirements.</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Interactive Search</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Use conversational queries to interact with your content.</li>
              <li>Filter results by client, project, or document type.</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Automated Reports</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Check RFX coverage and completeness.</li>
              <li>Review source citations and ensure output accuracy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
