import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Sparkles, FileEdit, Palette } from 'lucide-react'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Banner */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="text-4xl font-bold text-red-500 font-[&apos;Arial&apos;]">
          ProposalForge
        </div>
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

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/5 border-gray-800">
            <CardContent className="p-6 space-y-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                <span className="text-blue-500">Guaranteed</span> Quick Integration & Adoption
              </h3>
              <p className="text-gray-300">
                Realize value quickly and eliminate the need for your team to learn a new platform. 
                ProposalForge integrates smoothly with SharePoint, Excel, Word, and over 400 content libraries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-gray-800">
            <CardContent className="p-6 space-y-4">
              <Sparkles className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                <span className="text-blue-500">Create</span> Complete Proposals Quickly
              </h3>
              <p className="text-gray-300">
                Generate entire 40-60-page Shipley-quality drafts at once. Save days in editing time 
                as ProposalForge integrates win themes seamlessly throughout your proposal in a consistent voice and style.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-gray-800">
            <CardContent className="p-6 space-y-4">
              <FileEdit className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                Accurate & Compliant <span className="text-blue-500">Every Time</span>
              </h3>
              <p className="text-gray-300">
                ProposalForge generates hallucination, citation, and compliance reports at the push of a button 
                with every draft, helping reduce the risk of inaccuracies and overlooked requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-gray-800">
            <CardContent className="p-6 space-y-4">
              <Palette className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-bold">
                Iterate on Strategy, <span className="text-blue-500">Not Words</span>
              </h3>
              <p className="text-gray-300">
                Spend more time perfecting your winning strategy. ProposalForge allows you to rapidly iterate 
                on high-level concepts, helping you fine-tune innovative strategies quickly.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Experience the next generation of proposal development</h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Winning content</h3>
                <p className="text-gray-300">
                  Powered by Shipley's know-how, ProposalForge guides you in creating winning content that is not only 
                  accurate and compliant, but also resonates with your unique voice and value proposition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Empowered teams</h3>
                <p className="text-gray-300">
                  ProposalForge empowers your team with Shipley's expertise, fostering collaboration and knowledge 
                  sharing, allowing for quicker and more effective responses to opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive edge</h3>
                <p className="text-gray-300">
                  Shipley's proven business development best practices are embedded within ProposalForge, ensuring 
                  your proposals are crafted with the insights and expertise that give you a clear competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

