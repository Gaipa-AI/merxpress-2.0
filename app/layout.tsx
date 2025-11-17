import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { Header } from "@/components/Header";
import SideNav from "@/components/sidebar/SideNav";
import { CartProvider } from "@/components/cart/CartContext";

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
  //title: { default: 'My Site', template: '%s | My Site' },
  description: "A modern e-commerce platform built with Next.js",
  keywords: [
    "e-commerce",
    "next.js",
    "react",
    "shopping",
    "online store",
    "merxpress",
  ],
  openGraph: {
    title: 'Merxpress',
    description: 'Your one-stop e-commerce platform built with Next.js',
    url: 'https://merxpressv-2-0.vercel.app/',
    siteName: 'Merxpress',
    images: [{ url: 'https://res.cloudinary.com/dbfydxolq/image/upload/v1762521112/Merxpress-Logo_xqi1nc.png' }]
  },
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
        <SideNav />
        <CartProvider>
          <Header />
        </CartProvider>
          {children}
          <Mid />
          
          {/* <FloatingChat /> */}
        
        <Footer />
     </body>
    </html>
  );
}
