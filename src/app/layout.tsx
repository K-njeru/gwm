import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-tahoma antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
