import About from '@/src/components/modules/common/home/About';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'About',
    template: `%s - About`,
  },
  description: 'This is About page',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}
