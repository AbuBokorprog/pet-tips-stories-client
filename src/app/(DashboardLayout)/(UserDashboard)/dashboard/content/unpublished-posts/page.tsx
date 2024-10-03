import UserPostCard from '@/src/components/ui/user-dashboard/UserPostCard';
import { getCurrentUser } from '@/src/services/auth/auth.services';
import { getPostsByUser } from '@/src/services/posts/posts.service';
import { IPost } from '@/src/types/post.type';
import React from 'react';

type AllPostsByAuthor = {
  success: boolean;
  message: string;
  data: IPost[];
};

export default async function UnpublishedPostsPage() {
  const user: any = await getCurrentUser();
  const posts: AllPostsByAuthor = await getPostsByUser(user?.id);
  const unpublishedPosts = posts?.data?.filter(
    (post: IPost) => post?.isPublished === false
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Unpublished Posts.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {unpublishedPosts?.map((post: IPost) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <UserPostCard post={post} />
          </div>
        ))}
      </div>
      {unpublishedPosts?.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          No posts found.
        </p>
      )}
    </div>
  );
}
