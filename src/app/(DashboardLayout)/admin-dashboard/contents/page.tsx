import ContentsCard from '@/src/components/ui/admin-dashboard/ContentsCard';
import { IPost } from '@/src/types/post.type';
import React from 'react';

export default function ContentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        All Posts
      </h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <ContentsCard post={post} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
