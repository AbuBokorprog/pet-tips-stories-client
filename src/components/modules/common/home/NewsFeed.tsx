'use client';
import React, { useMemo, useState } from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import {
  getAllPostsHook,
  getPostsByCategoryHook,
  getTopPostsHook,
} from '@/src/hooks/posts/posts.hook';

export default function NewsFeed() {
  const [activeTab, setActiveTab] = useState('discover');
  const { data: allPosts } = getAllPostsHook();
  const { data: topPosts } = getTopPostsHook();
  const { data: postsByCategory } = getPostsByCategoryHook(activeTab);

  const filteredPosts = useMemo(() => {
    if (activeTab === 'discover') return allPosts?.data?.data;
    if (activeTab === 'top') return topPosts?.data?.data;
    return postsByCategory?.data?.data;
  }, [allPosts, topPosts, postsByCategory, activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mb-4">
        <div className="flex space-x-4 overflow-x-auto p-4">
          {['discover', 'top', 'tips', 'story'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                activeTab === tab
                  ? 'text-white bg-blue-500 hover:bg-blue-600'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto space-y-4 lg:px-4">
        {filteredPosts?.map((post: IPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}
