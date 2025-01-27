import EditPost from '@/src/components/modules/common/home/EditPost';
import { getPostById } from '@/src/services/posts/posts.service';
import React from 'react';

import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const data = await getPostById(id);
  // Assume we have the post title from params or fetched data
  const postTitle = data?.data?.title || 'Edit Post';

  return {
    title: {
      default: postTitle,
      template: `%s - Edit Post`,
    },
    description: `You are editing the post titled "${postTitle}".`,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getPostById(id);

  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>
      <EditPost post={data?.data} />
    </div>
  );
}
