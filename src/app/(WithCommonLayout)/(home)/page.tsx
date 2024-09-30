import LeftSidebar from '@/src/components/modules/common/home/LeftSidebar';
import NewsFeed from '@/src/components/modules/common/home/NewsFeed';
import RightSidebar from '@/src/components/modules/common/home/RightSidebar';
import React from 'react';

export default function page() {
  return (
    <div className="home-layout flex justify-between w-full items-start min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="left-sidebar w-1/5 hidden md:block">
        <LeftSidebar />
      </div>
      <div className="main-content w-full md:w-2/3 lg:px-4">
        <NewsFeed />
      </div>
      <div className="right-sidebar w-1/5 hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}
