import PremiumContent from '@/src/components/modules/dashboard/PremiumContent';
import React from 'react';

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
