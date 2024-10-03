import React from 'react';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';

export default function NewsFeed({ data }: { data: IPost[] | null }) {
  return (
    <div className="mx-auto space-y-4 lg:px-4">
      {data?.map((post: IPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
