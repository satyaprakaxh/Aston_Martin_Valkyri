import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aston Martin Valkyrie | Engineered Beyond Road Limits",
  description:
    "Aston Martin Valkyrie — a road-legal Formula 1–inspired hypercar engineered in collaboration with Red Bull Advanced Technologies. 1,139 PS. 11,100 RPM. $3,000,000+.",
  keywords: [
    "Aston Martin",
    "Valkyrie",
    "Hypercar",
    "V12",
    "Formula 1",
    "Red Bull Advanced Technologies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
