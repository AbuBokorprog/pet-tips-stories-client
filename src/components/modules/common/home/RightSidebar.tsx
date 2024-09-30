'use client';

import FollowUserCard from '@/src/components/ui/home/FollowUserCard';
import React from 'react';

export default function RightSidebar() {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-md rounded-lg p-4 h-screen sticky top-0">
      <div className="users-sidebar">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          People You May Know
        </h2>
        <ul className="users-list space-y-4">
          {[
            {
              id: 1,
              name: 'John Doe',
              profilePicture: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
              mutualFriends: 5,
              isFollowing: false,
            },
            {
              id: 2,
              name: 'Jane Smith',
              profilePicture: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
              mutualFriends: 3,
              isFollowing: true,
            },
            {
              id: 3,
              name: 'Bob Johnson',
              profilePicture: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
              mutualFriends: 2,
              isFollowing: false,
            },
          ].map((user) => (
            <li key={user.id}>
              <FollowUserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
