import UserPostCard from '@/src/components/ui/user-dashboard/UserPostCard';
import { Post } from '@/src/types/post.type';
import React from 'react';

export default function UnpublishedPostsPage() {
  const samplePosts: Post[] = [
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      content:
        'Just finished a great coding session! #programming #productivity',
      timestamp: '2 hours ago',
      upVotes: 15,
      downVotes: 3,
      comments: 2,
      shares: 1,
      isPublished: false,
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      content:
        'Check out this amazing sunset I captured today! 🌅 #photography',
      timestamp: '5 hours ago',
      upVotes: 42,
      downVotes: 7,
      comments: 5,
      shares: 5,
      isPublished: false,
    },
    // Add more sample posts as needed
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        All Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <UserPostCard post={post} />
          </div>
        ))}
      </div>
      {samplePosts.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          No posts found.
        </p>
      )}
    </div>
  );
}
