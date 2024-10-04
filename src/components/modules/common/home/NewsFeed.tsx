'use client';
import React from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import { getAllPostsHook } from '@/src/hooks/posts/posts.hook';

export default function NewsFeed() {
  const { data } = getAllPostsHook();

  return (
    <div className="mx-auto space-y-4 lg:px-4">
      {data?.data?.data.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
