import Setting from '@/src/components/modules/dashboard/Settings';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Settings',
    template: `%s - Settings`,
  },
  description: 'This is setting page.',
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
