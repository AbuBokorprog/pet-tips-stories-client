'use client';
import { IUser } from '@/src/types/user.type';
import React from 'react';

export default function FollowUserCard({
  user,
  currentUser,
}: {
  user: IUser | null;
  currentUser: IUser | null;
}) {
  const isFollowing = currentUser?.following?.includes(user?._id);
  return (
    <div className="user-item flex items-center">
      <img
        src={user?.profilePicture}
        alt={user?.username}
        className="user-avatar w-12 h-12 rounded-full mr-3"
      />
      <div className="user-info flex-grow">
        <span className="user-name font-medium text-gray-800 dark:text-gray-200">
          {user?.username}
        </span>
      </div>
      <button
        className={`follow-button px-4 py-2 rounded-full text-sm font-medium ${
          isFollowing
            ? 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
            : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
        }`}
        onClick={() => console.log(`Follow/Unfollow ${user?.username}`)}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
