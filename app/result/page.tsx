'use client';

import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200">
        <a href="/">
          <Image 
            src="/images/your-image-file-name.png" 
            alt="Logo" 
            width={257} 
            height={48} 
            className="h-48" 
          />
        </a>
        <div className="flex gap-4">
          <a href="/platform">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Platform
            </button>
          </a>
          <a href="/leadership">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Leadership
            </button>
          </a>
          <a href="/faqs">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              FAQs
            </button>
          </a>
          <a href="/contact">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-lg hover:bg-gray-300">
              Contact Us
            </button>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-gray-100">
        <div className="border-4 border-blue-500 rounded-lg px-12 py-6 text-center">
          <h1 className="text-4xl font-bold">Welcome to ProposalForge</h1>
          <p className="mt-4 text-lg text-gray-700">
            Streamline your proposal creation process with ease.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
