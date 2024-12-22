import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, Zap, Server, Calculator, FileOutput } from 'lucide-react';

export default function Platform() {
  const painPoints = [
    {
      title: "The extensive time investment required to create professional proposals",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: "The challenge of maintaining consistency while personalizing content for each client",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: "The need for accurate resource planning and cost estimation in IT service proposals",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    }
  ];

  const processSteps = [
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "User Authentication and Security",
      description: "Secure user authentication system ensuring proposal data privacy and role-based access control for organizational security."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Data Collection and Analysis",
      description: "Intuitive forms capture essential client information with structured input for service volumes and smart validation ensuring data accuracy."
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "AI-Powered Proposal Generation",
      description: "Integration with advanced language models (GPT-3.5 and GPT-4) for customizable proposal templates and automated content generation."
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Cost Calculation and Resource Planning",
      description: "Sophisticated algorithms for resource allocation, automated calculation of global delivery team composition, and three-year cost projection."
    },
    {
      icon: <FileOutput className="w-8 h-8 text-white" />,
      title: "Output and Review",
      description: "Generated proposals in a professional, ready-to-review format with interactive cost breakdowns and easy export capabilities."
    }
  ];

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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          The Trigger Behind{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
            ProposalForge
          </span>
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
        In the fast-paced world of IT services, creating compelling and accurate business proposals has long been a time-consuming challenge. The traditional proposal creation process often involves multiple stakeholders, numerous revisions, and countless hours spent gathering and formatting information. We recognized that service providers were spending valuable time on proposal documentation rather than focusing on strategic client solutions.
        </p>

        {/* Pain Points Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8">Critical Pain Points We Address:</h2>
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-lg text-gray-700">{point.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/teams.png"
              alt="Teams Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* How ProposalForge Works */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">How ProposalForge Works</h2>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="max-w-7xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Technical Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Frontend:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Next.js 13+ with React for a responsive, modern user interface</li>
                <li>Tailwind CSS for sophisticated styling and responsive design</li>
                <li>TypeScript for type-safe development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Backend:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Next.js API routes for serverless backend functionality</li>
                <li>OpenAI API integration for proposal generation</li>
                <li>Supabase for authentication and database management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}