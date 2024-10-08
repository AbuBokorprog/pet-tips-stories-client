import NewsFeed from '@/src/components/modules/common/home/NewsFeed';
import RightSidebar from '@/src/components/modules/common/home/RightSidebar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: `%s - Home`,
  },
  description: 'Home',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function page() {
  return (
    <div className="home-layout flex justify-between w-full items-start h-full bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="main-content w-full lg:px-4">
        <NewsFeed />
      </div>
      <div className="right-sidebar md:w-96 hidden lg:block sticky top-0">
        <RightSidebar />
      </div>
    </div>
  );
}
