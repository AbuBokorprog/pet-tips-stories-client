import EditPost from '@/src/components/modules/common/home/EditPost';
import { getPostById } from '@/src/services/posts/posts.service';
import React from 'react';

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
