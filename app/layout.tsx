import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { Header } from "@/components/Header";
import SideNav from "@/components/sidebar/SideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merxpress",
  description: "A modern e-commerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Merxpress</title>
        
        <link rel="text/javascript" href="clarity.js"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors={true} />
        {/* <CartProvider> */}
          <SideNav />
          <Header />
          {children}
          <Mid />
          
          {/* <FloatingChat /> */}
        {/* </CartProvider> */}
        <Footer />
     </body>
    </html>
  );
}
