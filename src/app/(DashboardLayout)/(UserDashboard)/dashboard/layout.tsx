import Sidebar from '@/src/components/shared/Sidebar';
import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';
import React from 'react';

export default function userDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userMenuItems = [
    { key: 'home', label: 'Home', icon: <HomeIcon />, href: '/' },
    { key: 'profile', label: 'Profile', icon: <UserIcon />, href: '/profile' },
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      href: '/settings',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="mb-10 md:mb-0">
        <Sidebar menuItems={userMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
