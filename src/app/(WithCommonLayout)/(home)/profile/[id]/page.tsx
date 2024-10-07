import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import { IUser } from '@/src/types/user.type';
import Profile from '@/src/components/modules/common/home/Profile';
import { getUserById } from '@/src/services/user/user.service';
import { getPostsByUser } from '@/src/services/posts/posts.service';

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const userMe = await getUserById(id);
  const isFollowing = userMe?.data?.following?.some(
    (user: IUser) => user._id === id
  );

  const posts = await getPostsByUser(userMe?.data?._id);

  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Profile id={id} userMe={userMe} />

        <div className="mx-auto space-y-4">
          {posts?.data?.map((post: IPost) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
