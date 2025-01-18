import Sidebar from '@/src/components/shared/Sidebar';
import {
  FileTextIcon,
  HomeIcon,
  PawPrint,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';
import React from 'react';

export default function userDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userMenuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <HomeIcon />,
      href: '/dashboard',
    },
    {
      key: 'contents',
      label: 'Contents',
      icon: <FileTextIcon />,
      children: [
        {
          key: 'all-posts',
          label: 'All Posts',
          href: '/dashboard/content/all-posts',
        },
      ],
    },
    {
      key: 'pet-nutrition',
      label: 'Pet Nutrition',
      icon: <PawPrint />,
      href: '/dashboard/pet-nutrition',
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      href: '/dashboard/settings',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:gap-10">
      <div className="mb-10 md:mb-0 lg:w-80">
        <Sidebar menuItems={userMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto md:ml-60 lg:ml-28 xl:ml-0">
        {children}
      </main>
    </div>
  );
}
