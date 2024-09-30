import Sidebar from '@/src/components/shared/Sidebar';
import {
  ChartBarIcon,
  FileTextIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react';
import React from 'react';

export default function adminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminMenuItems = [
    { key: 'home', label: 'Home', icon: <HomeIcon />, href: '/' },
    { key: 'profile', label: 'Profile', icon: <UserIcon />, href: '/profile' },
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      href: '/settings',
    },
    { key: 'users', label: 'Users', icon: <UsersIcon />, href: '/admin/users' },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: <ChartBarIcon />,
      href: '/admin/analytics',
    },
    {
      key: 'post-management',
      label: 'Post Management',
      icon: <FileTextIcon />,
      children: [
        {
          key: 'create-post',
          label: 'Create Post',
          href: '/admin/posts/create',
        },
        { key: 'all-posts', label: 'All Posts', href: '/admin/posts' },
      ],
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="mb-10 md:mb-0">
        <Sidebar menuItems={adminMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
