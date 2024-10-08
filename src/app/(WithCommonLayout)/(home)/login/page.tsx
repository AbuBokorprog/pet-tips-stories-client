import Login from '@/src/components/modules/common/home/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Login',
    template: `%s - Login`,
  },
  description: 'This is login page. Where user can login',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}
