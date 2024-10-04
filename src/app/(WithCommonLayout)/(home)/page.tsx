import LeftSidebar from '@/src/components/modules/common/home/LeftSidebar';
import NewsFeed from '@/src/components/modules/common/home/NewsFeed';
import RightSidebar from '@/src/components/modules/common/home/RightSidebar';
import { getAllPosts } from '@/src/services/posts/posts.service';
import React from 'react';

export default async function page() {
  return (
    <div className="home-layout flex justify-between w-full items-start h-full bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="left-sidebar w-80 hidden md:block sticky top-0">
        <LeftSidebar />
      </div>
      <div className="main-content w-full md:w-2/3 lg:px-4">
        <NewsFeed />
      </div>
      <div className="right-sidebar md:w-80 hidden lg:block sticky top-0">
        <RightSidebar />
      </div>
    </div>
  );
}
