import type { Metadata } from "next";
import { Inter, Maven_Pro, Yellowtail } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-maven-pro",
});

const yellowtail = Yellowtail({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yellowtail",
});

export const metadata: Metadata = {
  title: "dbwebdev.io",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${maven_pro.variable} ${yellowtail.variable}`}
        // ${inter.variable} ${maven_pro.variable} ${yellowtail.variable}
        // maven_pro.className
      >
        <div className="w-screen h-screen bg-gradient-to-b from-[#191d24] to-[#001229] font-pro">
          <div className="h-24 text-white">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
