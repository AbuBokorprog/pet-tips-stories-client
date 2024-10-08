import Contact from '@/src/components/modules/common/home/Contact';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Contact',
    template: `%s - Contact`,
  },
  description: 'This is Contact page.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
