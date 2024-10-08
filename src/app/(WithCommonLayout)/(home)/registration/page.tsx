import Registration from '@/src/components/modules/common/home/Registration';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Registration',
    template: `%s - Registration`,
  },
  description:
    'This is registration page. Where user can create they are account',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RegistrationPage() {
  return (
    <div>
      <Registration />
    </div>
  );
}
