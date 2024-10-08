import Setting from '@/src/components/modules/dashboard/Settings';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Admin - Settings',
    template: `%s - Admin Settings`,
  },
  description: 'This is setting page only for admin.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function SettingPage() {
  return (
    <div>
      <Setting />
    </div>
  );
}
