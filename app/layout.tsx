import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KS Concepts - Custom Home Builder | DFW Area",
  description: "KS Concepts creates custom homes distinguished by timeless design, meticulous craftsmanship, and uncompromising quality. Serving the DFW area for more than 15 years.",
  keywords: "custom homes, home builder, DFW, Dallas Fort Worth, land development, construction, Cedar Hill, Grand Prairie",
  openGraph: {
    title: "KS Concepts - Rooted In Craft. Building Your Future",
    description: "Custom home builder serving the DFW area with precision, reliability, and quality craftsmanship.",
    type: "website",
    url: "https://ksconcepts.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
