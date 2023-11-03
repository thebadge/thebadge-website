import { BackgroundGradient } from '@/src/components/Layout/BackgroundGradient';
import Footer from '@/src/components/Layout/Footer';
import React from 'react';

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BackgroundGradient />
      {children}
      <Footer />
    </div>
  );
}
