import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jefrey & Kristine — December 28, 2026",
  description:
    "You are invited to the wedding of Jefrey Lopez & Kristine Abero at St. Paul Chapel, Mataragan, Malibcong, Abra on Sunday, December 28, 2026 at 4 PM.",
  openGraph: {
    type: "website",
    title: "Jefrey & Kristine — December 28, 2026",
    description:
      "You are invited to the wedding of Jefrey Lopez & Kristine Abero.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased flex min-h-dvh flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}