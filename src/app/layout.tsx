import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Suspense } from "react";

// Load the Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"], // Specify the subset(s) you need
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-urbanist", // Define a CSS variable for the font
});

// Metadata remains the same
export const metadata: Metadata = {
  title: "Godly Wisdom",
  description: "Impacting Lives for Significance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${urbanist.variable} font-sans`}>
      <body className="font-tahoma antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScroll />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}