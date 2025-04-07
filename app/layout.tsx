import { Playfair_Display, Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

// Load fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "HackSecure",
  description: "WebGL Fluid Simulation using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5466226922716879"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${playfair.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
