import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles, FileEdit, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
          <img src="/images/your-image-file-name.png" alt="ProposalForge Logo" className="h-48" />
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

      {/* Hero Section - Moved to top with enhanced styling */}
      <div className="container mx-auto px-4 py-16 mb-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-5xl font-bold text-black text-center mb-8 animate-fade-in">
            Experience the next generation of
            <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text"> proposal development</span>
          </h1>

          <div className="space-y-16">
            {/* Winning Content Section */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-blue-500 text-center mb-4">
                Winning content
              </h2>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Powered by ProposalForge&apos;s know-how, ProposalForge guides you in creating winning content that is not only 
                accurate and compliant, but also resonates with your unique voice and value proposition.
              </p>
            </div>

            {/* Empowered Teams Section */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-blue-500 text-center mb-4">
                Empowered teams
              </h2>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                ProposalForge empowers your team with ProposalForge&apos;s expertise, fostering collaboration and knowledge 
                sharing, allowing for quicker and more effective responses to opportunities.
              </p>
            </div>

            {/* Competitive Edge Section */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-blue-500 text-center mb-4">
                Competitive edge
              </h2>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                ProposalForge&apos;s proven business development best practices are embedded within ProposalForge, ensuring 
                your proposals are crafted with the insights and expertise that give you a clear competitive edge.
              </p>
            </div>

            {/* New Call-to-Action Box */}
            <div className="flex justify-center mt-12 mb-12">
              <Link href="/credentials">
                <div className="bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-300 rounded-lg shadow-lg px-8 py-4 cursor-pointer">
                  <h3 className="text-2xl font-bold text-white text-center">
                    Click here to generate your proposal
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid - Moved after hero section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6 space-y-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Guaranteed
              </h3>
              <p className="text-gray-600">
                Realize value quickly and eliminate the need for your team to learn a new platform. 
                ProposalForge integrates smoothly with SharePoint, Excel, Word, and over 400 content libraries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6 space-y-4">
              <Sparkles className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Create Complete Proposals Quickly
              </h3>
              <p className="text-gray-600">
                Generate entire 40-60-page ProposalForge-quality drafts at once. Save days in editing time 
                as ProposalForge integrates win themes seamlessly throughout your proposal in a consistent voice and style.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6 space-y-4">
              <FileEdit className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Accurate &amp; Compliant <span className="text-blue-500">Every Time</span>
              </h3>
              <p className="text-gray-600">
                ProposalForge generates hallucination, citation, and compliance reports at the push of a button 
                with every draft, helping reduce the risk of inaccuracies and overlooked requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6 space-y-4">
              <Palette className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Iterate on Strategy, Not Words
              </h3>
              <p className="text-gray-600">
                Spend more time perfecting your winning strategy. ProposalForge allows you to rapidly iterate 
                on high-level concepts, helping you fine-tune innovative strategies quickly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
