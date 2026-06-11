import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WombTo18 | India’s First Integrated Platform for Child Health & Sustainability",
  description: "WombTo18™ is India’s first digital wellness platform supporting mothers and children through vaccine reminders, milestone tracking, health promoting, and emergency preparedness programs—with a tree planted for every registration.",
  keywords: ["child health", "immunization tracker", "vaccine reminders", "sustainability", "carbon-neutral child cohort", "parenting portal", "India Startup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
