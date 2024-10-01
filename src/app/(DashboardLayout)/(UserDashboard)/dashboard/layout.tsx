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
      key: 'profile',
      label: 'My Profile',
      icon: <UserIcon />,
      href: '/dashboard/my-profile',
    },
    {
      key: 'post-management',
      label: 'Post Management',
      icon: <FileTextIcon />,
      children: [
        {
          key: 'create-post',
          label: 'Create Post',
          href: '/dashboard/create-post',
        },
        { key: 'my-posts', label: 'My Posts', href: '/dashboard/my-posts' },
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
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="mb-10 md:mb-0 lg:w-80">
        <Sidebar menuItems={userMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
