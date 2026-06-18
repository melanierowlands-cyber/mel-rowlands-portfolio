import type { Metadata } from "next";
import { Hanken_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

const heading = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mel Rowlands — Product Designer",
  description:
    "Product designer, founder and AI-augmented builder. I design products, build prototypes and ship solutions with AI. Based in Cape Town.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
