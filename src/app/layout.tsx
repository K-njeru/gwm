import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';

// Metadata remains the same
export const metadata: Metadata = {
  title: "Godly Wisdom",
  description: "Rediscover the Joy of the Open Road",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-tahoma antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
