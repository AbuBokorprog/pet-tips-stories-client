'use client';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import { getAllPostsHook } from '@/src/hooks/posts/posts.hook';
import { Avatar, Link } from '@nextui-org/react';
import { UserContext } from '@/src/provider/user.provider';
import NewsFeedSkeleton from '@/src/components/skeleton/NewsFeedSkeleton';
import NewsFeedTab from '@/src/components/ui/home/NewsFeedTab';

export default function NewsFeed() {
  const { user }: any = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('discover');
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<IPost[]>([]); // Store the fetched posts
  const [isFetching, setIsFetching] = useState(false);
  const limit = 8;
  let category = '';
  let sorting = false;

  if (activeTab === 'tips' || activeTab === 'story') {
    category = activeTab;
  } else if (activeTab === 'top') {
    sorting = true;
  }

  const {
    data: allPosts,
    isLoading: isLoadingAllPosts,
    refetch,
  } = getAllPostsHook(page, limit, category, sorting);

  // Fetch more posts when new data is available
  useEffect(() => {
    if (allPosts?.data?.data) {
      setPosts((prevPosts) => [...prevPosts, ...allPosts.data.data]); // Append new posts
    }
  }, [allPosts]);

  useEffect(() => {
    refetch();
  }, [activeTab]);

  // Handle scrolling and fetching next page
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isFetching &&
      page < allPosts?.data?.meta?.totalPage // Only fetch if not at last page
    ) {
      setIsFetching(true);
      setPage((prevPage) => prevPage + 1);
      setIsFetching(false);
    }
  }, [isFetching, page, allPosts?.data?.meta?.totalPage]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // handle active tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setPage(1);
    setPosts([]);
  };

  return (
    <>
      {isLoadingAllPosts ? (
        <NewsFeedSkeleton />
      ) : (
        <div>
          <NewsFeedTab activeTab={activeTab} handleTabClick={handleTabClick} />
          <div className="flex items-center space-x-2 mb-4 lg:px-4">
            <Link href={`${!user?.id ? '/login' : `/profile/${user?.id}`}`}>
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={user?.profilePicture}
              />
            </Link>
            <Link
              href={`${!user?.id ? '/login' : '/posts/create-post'}`}
              className="w-full"
            >
              <div className="flex-grow p-2 border w-full rounded-lg bg-default-100 hover:bg-default-200 cursor-pointer transition-colors">
                <p className="text-default-400 w-full">
                  What's on your mind, {user?.username || 'User'}?
                </p>
              </div>
            </Link>
          </div>
          <div className="mx-auto space-y-4 lg:px-4">
            {posts.map((post: IPost) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
