import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <Link href="/">
          <div className="text-4xl font-bold text-red-500 font-[&apos;Arial&apos;]">
            ProposalForge
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/platform">
            <Button variant="secondary" className="font-['Arial']">
              ProposalForge Platform
            </Button>
          </Link>
          <Link href="/leadership">
            <Button variant="secondary" className="font-['Arial']">
              Leadership
            </Button>
          </Link>
          <Link href="/faqs">
            <Button variant="secondary" className="font-['Arial']">
              FAQs
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" className="font-['Arial']">
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <Card className="bg-white/5 border-gray-800">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your Name" className="bg-white/10 border-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-white/10 border-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="bg-white/10 border-gray-700 text-white" rows={4} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">
            Have questions about ProposalForge? We are here to help! Reach out to us using the form above or contact us directly:
          </p>
          <p className="text-gray-300">
            Email: info@proposalforge.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 AI Street, Tech City, TC 12345
          </p>
        </div>
      </div>
    </div>
  )
}

