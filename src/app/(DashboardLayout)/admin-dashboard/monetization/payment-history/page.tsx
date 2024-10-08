import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Admin - Payment History',
    template: `%s - Admin Payment History`,
  },
  description: 'This is the payment history of users only for admin.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function PaymentHistory() {
  return (
    <div>
      <h2>Paayment history</h2>
    </div>
  );
}
