'use client';
import React, { useContext, useMemo, useState } from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import {
  getAllPostsHook,
  getPostsByCategoryHook,
  getTopPostsHook,
} from '@/src/hooks/posts/posts.hook';
import { Avatar, Link } from '@nextui-org/react';
import { UserContext } from '@/src/provider/user.provider';
import NewsFeedSkeleton from '@/src/components/skeleton/NewsFeedSkeleton';

export default function NewsFeed() {
  const { user }: any = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('discover');
  const { data: allPosts, isLoading: isLoadingAllPosts } = getAllPostsHook();
  const { data: topPosts, isLoading: isLoadingTopPosts } = getTopPostsHook();
  const { data: postsByCategory, isLoading: isLoadingPostsByCategory } =
    getPostsByCategoryHook(activeTab);

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
      {isLoadingAllPosts || isLoadingTopPosts || isLoadingPostsByCategory ? (
        <NewsFeedSkeleton />
      ) : (
        <div>
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
          <div className="flex items-center space-x-2 mb-4 lg:px-4">
            <Avatar
              src={user?.profilePicture}
              alt={user?.username}
              isBordered
              radius="full"
              size="md"
            />
            <Link href="/posts/create-post" className="w-full">
              <div className="flex-grow p-2 border w-full rounded-lg bg-default-100 hover:bg-default-200 cursor-pointer transition-colors">
                <p className="text-default-400 w-full">
                  What's on your mind, {user?.username || 'User'}?
                </p>
              </div>
            </Link>
          </div>
          <div className="mx-auto space-y-4 lg:px-4">
            {filteredPosts?.map((post: IPost) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
