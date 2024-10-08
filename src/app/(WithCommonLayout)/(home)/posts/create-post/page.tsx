import CreatePost from '@/src/components/modules/common/home/CreatePost';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Create Post',
    template: `%s - Create Post`,
  },
  description:
    'This is create post page. Where user can create they are contents',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function CreatePostPage() {
  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>
      <CreatePost />
    </div>
  );
}
