import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-stone-900 text-stone-300`}>
        <div className="flex flex-col h-screen max-w-3xl mx-auto">
          <NavBar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
