"use client"; // Mark this file as a Client Component

import React from "react"; // Ensure React types are available
import localFont from "next/font/local";
import "./globals.css"; // Custom global styles
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos"; // AOS library
import { useEffect } from "react"; // React hook

// Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize AOS on the client side
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in ms)
      once: true, // Whether animations should run only once
      offset: 100, // Offset from the trigger point
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
