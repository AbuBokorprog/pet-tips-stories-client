'use client';

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
              <div className="user-item flex items-center">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="user-avatar w-12 h-12 rounded-full mr-3"
                />
                <div className="user-info flex-grow">
                  <span className="user-name font-medium text-gray-800 dark:text-gray-200">
                    {user.name}
                  </span>
                </div>
                <button
                  className={`follow-button px-4 py-2 rounded-full text-sm font-medium ${
                    user.isFollowing
                      ? 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
                      : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                  }`}
                  onClick={() => console.log(`Follow/Unfollow ${user.id}`)}
                >
                  {user.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
