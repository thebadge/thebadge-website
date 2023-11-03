import React from 'react';
import { BackgroundGradient } from '@/src/components/Layout/BackgroundGradient';
import Footer from '@/src/components/Layout/Footer';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundGradient />
      {children}
      <Footer />
    </>
  );
}
