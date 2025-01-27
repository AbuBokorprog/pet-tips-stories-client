'use client';
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from '@/src/hooks/user/user.hook';
import { IUser } from '@/src/types/user.type';
import { Link } from '@nextui-org/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

export default function FollowUserCard({
  user,
  currentUser,
}: {
  user: IUser | null;
  currentUser: any;
}) {
  const router = useRouter();
  const isFollowing = user?.followers?.some(
    (follower: IUser) => follower?._id === currentUser?.id
  );

  const { mutate: followUser, data } = useFollowUserMutation();
  const { mutate: unFollowUser } = useUnFollowUserMutation();

  const handleFollow = (id: string) => {
    if (!currentUser) {
      toast.error('Please login to follow user');
      router.push('/login');
    }
    if (isFollowing) {
      unFollowUser(id);
    } else {
      followUser(id);
    }
  };

  return (
    <div className="user-item flex gap-1 items-center">
      <Link href={`${!currentUser ? '/login' : `/profile/${user?._id}`}`}>
        <img
          src={user?.profilePicture}
          alt={user?.username}
          className="user-avatar w-12 h-12 rounded-full mr-3"
        />
      </Link>
      <div className="user-info flex-grow">
        <Link
          href={`${!currentUser ? '/login' : `/profile/${user?._id}`}`}
          className="user-name font-medium text-gray-800 dark:text-gray-200"
        >
          {user?.username}
        </Link>
      </div>
      <button
        className={`follow-button px-4 py-2 rounded-full text-sm font-medium ${
          isFollowing
            ? 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
        }`}
        onClick={() => handleFollow(user?._id as string)}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}
