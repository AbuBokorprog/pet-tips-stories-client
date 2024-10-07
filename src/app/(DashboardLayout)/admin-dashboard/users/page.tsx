import AllUsers from '@/src/components/modules/dashboard/AllUsers';
import AllUserSkeleton from '@/src/components/skeleton/AllUserSkeleton';
import { getAllUsers } from '@/src/services/user/user.service';
import React, { Suspense } from 'react';

export default async function UsersPage() {
  const users = await getAllUsers();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>
      <Suspense fallback={<AllUserSkeleton />}>
        <AllUsers users={users?.data?.data} />
      </Suspense>
    </div>
  );
}
