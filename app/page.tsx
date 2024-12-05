import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles, FileEdit, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <Link href="/">
          <img
            src="/images/your-image-file-name.png"
            alt="ProposalForge Logo"
            className="h-36"
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
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-black mb-8">
          Experience the next generation of{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
            proposal development
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Transform your proposal process with automation, expert guidance, and
          seamless collaboration, all powered by ProposalForge.
        </p>
        <Link href="/credentials">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg">
            Get Started Now
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <Card className="bg-white border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Guaranteed Results
              </h3>
              <p className="text-gray-600">
                Realize value quickly and eliminate the need for your team to
                learn a new platform. ProposalForge integrates seamlessly with
                SharePoint, Excel, Word, and more.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-white border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <Sparkles className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Create Proposals Quickly
              </h3>
              <p className="text-gray-600">
                Generate complete, review-ready proposals of 40-60 pages in
                minutes with consistent voice, style, and win themes.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-white border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <FileEdit className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Accurate & Compliant
              </h3>
              <p className="text-gray-600">
                Includes hallucination, citation, and compliance reports for
                reliable, accurate proposals every time.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="bg-white border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <Palette className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold text-blue-500">
                Iterate on Strategy
              </h3>
              <p className="text-gray-600">
                Focus on refining your strategy while ProposalForge handles the
                words. Rapidly iterate on high-level concepts and win themes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
