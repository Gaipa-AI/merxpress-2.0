import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Mid } from './MidSection';


export default function Layout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <>
        <Header/>
        {children}
        <Mid/>
        <Footer/>
        </>
    );
    }