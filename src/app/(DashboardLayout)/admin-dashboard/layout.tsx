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
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <HomeIcon />,
      href: '/admin-dashboard',
    },
    {
      key: 'profile',
      label: 'My Profile',
      icon: <UserIcon />,
      href: '/admin-dashboard/my-profile',
    },
    {
      key: 'users',
      label: 'Users',
      icon: <UsersIcon />,
      href: '/admin-dashboard/users',
    },
    {
      key: 'all-posts',
      label: 'All Posts',
      icon: '',
      href: '/admin-dashboard/posts',
    },
    {
      key: 'monetization-management',
      label: 'Monetization Management',
      icon: <FileTextIcon />,
      children: [
        {
          key: 'payment-history',
          label: 'Payment history',
          href: '/admin-dashboard/monetization/payment-history',
        },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      href: '/settings',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="mb-10 md:mb-0 lg:w-80">
        <Sidebar menuItems={adminMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
