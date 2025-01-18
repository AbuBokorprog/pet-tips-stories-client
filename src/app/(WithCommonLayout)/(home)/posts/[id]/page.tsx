import PostDetails from '@/src/components/ui/home/PostDetails';
import { getPostById } from '@/src/services/posts/posts.service';

import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const data = await getPostById(id);
  // Assume we have the post title from params or fetched data
  const postTitle = data?.data?.title || 'Details page';

  return {
    title: {
      default: postTitle,
      template: `%s - Details`,
    },
    description: `Viewing the post titled "${postTitle}".`,
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <>
      <div className="home-layout w-full items-start h-full bg-white dark:bg-black text-gray-800 dark:text-gray-200">
        <div className="main-content w-full lg:px-4">
          <PostDetails id={id} />
        </div>
      </div>
    </>
  );
}
