import PremiumContent from '@/src/components/modules/dashboard/PremiumContent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Premium Subscription',
    template: `%s - Premium Subscription`,
  },
  description: 'This is premium subscription page.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function PremiumContentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Premium Membership
      </h1>

      <PremiumContent />
    </div>
  );
}
