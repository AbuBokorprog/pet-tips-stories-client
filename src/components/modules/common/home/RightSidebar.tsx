'use client';

import FollowUserSkeleton from '@/src/components/skeleton/FollowUserSkeleton';
import FollowUserCard from '@/src/components/ui/home/FollowUserCard';
import { useAllUsersHook } from '@/src/hooks/user/user.hook';
import { useUser } from '@/src/provider/user.provider';
import { IUser } from '@/src/types/user.type';
import React from 'react';

export default function RightSidebar() {
  const { data: users, isPending, isLoading } = useAllUsersHook();
  const { user }: any = useUser();
  return (
    <>
      {isLoading ? (
        <FollowUserSkeleton />
      ) : (
        <div className="bg-white dark:bg-gray-950 shadow-md rounded-lg p-4 h-screen sticky top-0">
          <div className="users-sidebar">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              People You May Know
            </h2>
            <ul className="users-list space-y-4">
              {users?.data?.data
                ?.filter((Iuser: IUser) => user?.id !== Iuser._id)
                .map((Iuser: IUser) => (
                  <li key={Iuser._id}>
                    <FollowUserCard user={Iuser} currentUser={user} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
