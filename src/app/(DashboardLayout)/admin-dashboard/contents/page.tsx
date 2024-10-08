import AllPostsSkeleton from '@/src/components/skeleton/AllPostsSkeleton';
import ContentsCard from '@/src/components/ui/admin-dashboard/ContentsCard';
import { getAllPosts } from '@/src/services/posts/posts.service';
import { IPost } from '@/src/types/post.type';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Admin - All Posts',
    template: `%s - Admin Posts`,
  },
  description: 'This is the all posts page for administrators.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function ContentsPage() {
  const { data } = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<AllPostsSkeleton />}>
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
      </Suspense>
    </div>
  );
}
