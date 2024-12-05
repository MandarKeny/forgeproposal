"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [messageDisplayed, setMessageDisplayed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageDisplayed(true);
  };

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

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-black mb-8 text-center">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
            Us
          </span>
        </h1>

        <Card className="max-w-2xl mx-auto bg-gray-50 border-gray-200">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                rows={4}
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-red-600 text-white"
            >
              Send Message
            </Button>
          </form>

          {/* Feedback Message */}
          {messageDisplayed && (
            <div className="p-6 bg-blue-50 border-t border-blue-200">
              <p className="text-gray-600">
                We value your feedback and collaboration. If you have any
                suggestions to improve this platform or are interested in
                partnering with us, feel free to contact Mandar at the email
                below.
              </p>
            </div>
          )}
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have questions about ProposalForge? We are here to help! Reach out
            using the form above or contact us directly:
          </p>
          <p className="text-gray-600">
            Email: kenymandar@gmail.com
            <br />
            Phone: +1 (858) 123 4567
            <br />
            Address: 12345 La Jolla, San Diego 92128
          </p>
        </div>
      </div>
    </div>
  );
}
