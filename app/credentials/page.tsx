"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Credentials() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { username, password });
  };

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
        <h1 className="text-3xl font-bold mb-8 text-black">Login</h1>
        
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-1 text-black">Username</label>
                <Input 
                  id="username" 
                  placeholder="Your Username" 
                  className="bg-white border-gray-200 text-black" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1 text-black">Password</label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Your Password" 
                  className="bg-white border-gray-200 text-black" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}