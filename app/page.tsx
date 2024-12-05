import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles, FileEdit, Palette, Twitter, Linkedin } from "lucide-react";

export default function Home() {
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
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/abstract-background.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-5xl font-bold text-black mb-6 leading-tight">
            From Business Proposal to Signed Deal{" "}
            <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
              in Record Time
            </span>
          </h1>
          <p className="text-lg font-bold text-gray-600 leading-relaxed mb-12">
            Where AI Precision Meets Your Expertise to Generate Custom, Persuasive Proposals in Minutes, Not Days
          </p>
          <Link href="/credentials">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105">
              Explore the Beta Version Set Up for IT Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Key Features
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore the standout capabilities that make ProposalForge exceptional.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-none hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4 text-center">
              <Clock className="w-12 h-12 text-blue-500 transform hover:rotate-45 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-blue-500">
                Guaranteed Results
              </h3>
              <p className="text-gray-600">
                Realize value quickly and eliminate the need for your team to learn a new platform. ProposalForge integrates seamlessly with SharePoint, Excel, Word, and more.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-none hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4 text-center">
              <Sparkles className="w-12 h-12 text-green-500 transform hover:rotate-45 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-green-500">
                Create Proposals Quickly
              </h3>
              <p className="text-gray-600">
                Generate complete, review-ready proposals of 40-60 pages in minutes with consistent voice, style, and win themes.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-none hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4 text-center">
              <FileEdit className="w-12 h-12 text-purple-500 transform hover:rotate-45 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-purple-500">
                Accurate &amp; Compliant
              </h3>
              <p className="text-gray-600">
                Includes hallucination, citation, and compliance reports for reliable, accurate proposals every time.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-none hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 space-y-4 text-center">
              <Palette className="w-12 h-12 text-pink-500 transform hover:rotate-45 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-pink-500">
                Iterate on Strategy
              </h3>
              <p className="text-gray-600">
                Focus on refining your strategy while ProposalForge handles the words. Rapidly iterate on high-level concepts and win themes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;ProposalForge has transformed our workflow. We&apos;ve saved countless hours and seen a 50% increase in proposal acceptance rates!&quot;
              </p>
              <footer className="mt-4 text-sm text-gray-500">— Ramesh Kumar, CEO at TechVision</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;The accuracy and speed of ProposalForge are unmatched. It&apos;s like having a dedicated team working round the clock for you.&quot;
              </p>
              <footer className="mt-4 text-sm text-gray-500">— Priya Sharma, Director at InnovateIndia</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                &quot;We&apos;ve cut proposal creation time by over 70% thanks to ProposalForge. It&apos;s a must-have for any competitive business.&quot;
              </p>
              <footer className="mt-4 text-sm text-gray-500">— Vikram Malhotra, Manager at StratEdge</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <Twitter />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <Linkedin />
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} ProposalForge. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
