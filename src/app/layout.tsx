"use client";

import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import StarParticles from "./components/StarParticles";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";

const jost = Jost({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(jost.className,"relative")}>
        <StarParticles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
