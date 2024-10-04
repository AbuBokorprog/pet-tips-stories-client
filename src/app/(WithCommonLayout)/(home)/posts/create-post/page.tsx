import CreatePost from '@/src/components/modules/common/home/CreatePost';
import React from 'react';

export default function CreatePostPage() {
  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>
      <CreatePost />
    </div>
  );
}
