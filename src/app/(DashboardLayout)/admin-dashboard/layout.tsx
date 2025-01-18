import Sidebar from '@/src/components/shared/Sidebar';
import {
  ChartBarIcon,
  DollarSignIcon,
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
      key: 'users',
      label: 'Users',
      icon: <UsersIcon />,
      href: '/admin-dashboard/users',
    },
    {
      key: 'contents',
      label: 'Contents',
      icon: <FileTextIcon />,
      href: '/admin-dashboard/contents',
    },
    {
      key: 'monetization',
      label: 'Monetization',
      icon: <DollarSignIcon />,
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
      href: '/admin-dashboard/settings',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:gap-10">
      <div className="mb-10 md:mb-0 lg:w-80">
        <Sidebar menuItems={adminMenuItems} />
      </div>
      <main className="flex-grow p-4 md:p-8 overflow-auto md:ml-60 lg:ml-28 xl:ml-0">
        {children}
      </main>
    </div>
  );
}
