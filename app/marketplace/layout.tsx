import React from 'react';
//import { NavigationMenuDemo } from '@/components/NavMenu';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { CartProvider } from '@/components/cart/CartContext';

export const metadata: Metadata = {
  title: "Marketplace",
  description: "A modern e-commerce platform built with Next.js",
};

export default function Layout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>
        <CartProvider>
        {/* <Header /> */}
        {children}
        </CartProvider>
        </>
    );
    }
