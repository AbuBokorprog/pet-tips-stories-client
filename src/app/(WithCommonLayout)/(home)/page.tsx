import LeftSidebar from '@/src/components/modules/common/home/LeftSidebar';
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
    <div className="home-layout flex justify-center gap-10 w-full items-start h-full bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="left-sidebar md:w-[500px] hidden lg:block sticky top-14">
        <LeftSidebar />
      </div>
      <div className="main-content w-full">
        <NewsFeed />
      </div>
      <div className="right-sidebar md:w-[500px] hidden lg:block sticky top-14">
        <RightSidebar />
      </div>
    </div>
  );
}
