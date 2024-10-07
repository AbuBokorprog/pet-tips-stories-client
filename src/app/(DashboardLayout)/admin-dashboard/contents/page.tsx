import ContentsCard from '@/src/components/ui/admin-dashboard/ContentsCard';
import { getCurrentUser } from '@/src/services/auth/auth.services';
import { getAllPosts } from '@/src/services/posts/posts.service';
import { IPost } from '@/src/types/post.type';
import React from 'react';

export default async function ContentsPage() {
  const { data } = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.data?.map((post: IPost) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <ContentsCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
