import React from 'react';
import { Post } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/PostCard';

const samplePosts: Post[] = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    content: 'Just finished a great coding session! #programming #productivity',
    timestamp: '2 hours ago',
    upVotes: 15,
    downVotes: 3,
    comments: 2,
    shares: 1,
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    content: 'Check out this amazing sunset I captured today! 🌅 #photography',
    timestamp: '5 hours ago',
    upVotes: 42,
    downVotes: 7,
    comments: 5,
    shares: 5,
  },
  // Add more sample posts as needed
];

export default function NewsFeed() {
  return (
    <div className="mx-auto space-y-4 lg:px-4">
      {samplePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
