import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Leadership() {
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
        <h1 className="text-3xl font-bold mb-8 text-black">Leadership</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Mandar Keny</h2>
              <h3 className="text-xl mb-4 text-blue-400">Chief Problem Finder</h3>
              <p className="text-gray-600">
                Mandar is a seasoned Senior Technology Sales Professional with over 20 years of experience, currently serving as a Client Relationship Director at Cognizant. He specializes in guiding organizations through Digital and AI technology transformations, with a focus on retail and commercial banking clients. His global experience spans countries like India, the Netherlands, Belgium, and the United States, enhancing his capabilities in bid management and account management.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Shreenidhi Sudhakar</h2>
              <h3 className="text-xl mb-4 text-blue-400">AI Alchemist</h3>
              <p className="text-gray-600">
                Shreenidhi is a Machine Learning Engineer at Walmart Global Tech, bringing experience from Amazon, eBay, and Cisco. He excels in anomaly detection systems and ML pipelines, while pursuing an Executive MBA at Chicago Booth. Alongside his technical work, he helps engineers transition into AI careers and has recently expanded into digital marketing with Google and Meta certifications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-black">Lokesh Dange</h2>
              <h3 className="text-xl mb-4 text-blue-400">Product Prophet</h3>
              <p className="text-gray-600">
                From a small town in Maharashtra to National Capital startup ecosystem, Lokesh Dange turned from civil engineering to product management, where he now drives fintech innovation at Moglix. With over 5 years of experience, he has scaled Credlix AUM to $50M and previously led Vedanta e-commerce portal handling $15B in annual orders. A continuous learner and strategic thinker, Lokesh combines his expertise in product management, growth marketing, and analytics to help businesses scale effectively in the India dynamic startup landscape.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

