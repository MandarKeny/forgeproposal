import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Leadership() {
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

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-black">The Team</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile: Mandar Keny */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Mandar Keny</h2>
              <h3 className="text-xl mb-4 text-blue-400">Chief Problem Finder</h3>
              <p className="text-gray-600">
                Mandar, a Senior Technology Sales Professional with 20+ years of
                experience, envisioned ProposalForge to address inefficiencies in IT
                services business development. Drawing on his expertise in AI
                transformations and global sales, Mandar identified the need for an
                AI-driven solution to streamline RFP responses and proposal
                generation.
              </p>
            </CardContent>
          </Card>

          {/* Profile: Shreenidhi Sudhakar */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Shreenidhi Sudhakar</h2>
              <h3 className="text-xl mb-4 text-blue-400">AI Alchemist</h3>
              <p className="text-gray-600">
                A Machine Learning Engineer at Walmart Global Tech, Shreenidhi has
                experience at Amazon, eBay, and Cisco. He excels in anomaly detection
                and ML pipelines and is pursuing an Executive MBA at Chicago Booth.
                Passionate about AI, he mentors engineers&apos; transitioning into the
                field and is certified in digital marketing by Google and Meta.
              </p>
            </CardContent>
          </Card>

          {/* Profile: Lokesh Dange */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Lokesh Dange</h2>
              <h3 className="text-xl mb-4 text-blue-400">Product Prophet</h3>
              <p className="text-gray-600">
                A fintech innovator at Moglix, Lokesh has scaled Credlix AUM to $50M
                and managed Vedanta&apos;s $15B e-commerce portal. With 5+ years of
                product management experience, he combines growth marketing and
                analytics expertise to drive success in India&apos;s dynamic startup
                ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
