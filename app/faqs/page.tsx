import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQs() {
  const faqs = [
    {
      question: "What is ProposalForge?",
      answer:
        "ProposalForge is an advanced RFP response platform designed to streamline the proposal creation process for IT services organizations. It offers innovative features like a powerful Knowledge Repository, intuitive chat interfaces, strategic proposal management with Flight Plan, and AI-powered Reflective Response Engine. ProposalForge helps reduce turnaround time and improve proposal quality while ensuring compliance and accuracy. Version 1 specializes in Application Support proposals, with future updates expanding to Application Development, Service Desk, Cloud, and other IT services."
    },
    {
      question: "How can I get started with ProposalForge?",
      answer:
        "Getting started is easy! Contact us through our contact form, and our team will guide you through implementing ProposalForge for your organization. We provide full onboarding support to ensure smooth adoption, including training and integration with your existing systems."
    },
    {
      question: "Can ProposalForge integrate with our existing systems?",
      answer:
        "Yes! ProposalForge offers seamless integration with tools like SharePoint, Excel, Word, and over 400 content libraries. This ensures your organization can enhance collaboration and maximize workflow efficiency without disrupting current processes."
    },
    {
      question: "What makes ProposalForge different from other proposal tools?",
      answer:
        "ProposalForge is tailored for IT services proposals and leverages advanced AI to create ProposalForge-compliant drafts of 40-60 pages in minutes. It automatically integrates win themes, maintains consistent voice and style, and reduces editing time. Features like semantic search, automatic indexing, compliance checks, and push-button reports set it apart as a comprehensive solution."
    },
    {
      question: "How does ProposalForge ensure proposal accuracy?",
      answer:
        "ProposalForge includes advanced compliance checking tools, such as hallucination, citation, and completeness reports. These features ensure accuracy, traceability, and alignment with all RFP requirements, giving users confidence in their submissions."
    },
    {
      question: "How long does it take to generate a proposal using ProposalForge?",
      answer:
        "ProposalForge can generate complete, review-ready proposal drafts in record time, significantly faster than traditional methods. Its AI-powered engine produces comprehensive 40-60 page drafts in minutes, saving days in the proposal development process."
    },
    {
      question: "What types of proposals does ProposalForge currently support?",
      answer:
        "Version 1 focuses on Application Support proposals. Upcoming versions will expand to include Application Development, Service Desk, Cloud Services, and other IT service areas, enabling comprehensive support for diverse business needs."
    },
    {
      question: "How does ProposalForge help in strategy development?",
      answer:
        "ProposalForge&apos;s Flight Plan feature empowers teams to define strategic approaches and win themes while guiding the proposal development process. By automating content creation and solutioning frameworks, ProposalForge allows teams to focus on refining strategies to win more business."
    },
    {
      question: "Is training required to use ProposalForge?",
      answer:
        "ProposalForge is designed for intuitive use, minimizing the need for extensive training. The platform&apos;s user-friendly interface enables quick integration and adoption, allowing teams to realize value immediately."
    },
    {
      question: "How secure is our proposal data in ProposalForge?",
      answer:
        "ProposalForge prioritizes data security with strict encryption protocols and adherence to industry best practices. Your sensitive proposal data is safeguarded to ensure privacy and compliance with security standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
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

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-black">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-2 text-black">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
