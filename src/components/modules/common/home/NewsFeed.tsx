import React from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import { getAllPosts } from '@/src/services/posts/posts.service';

export default async function NewsFeed() {
  const { data } = await getAllPosts();
  return (
    <div className="mx-auto space-y-4 lg:px-4">
      {data?.data?.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
