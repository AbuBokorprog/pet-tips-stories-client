'use client';
import React from 'react';
import { Card, CardBody, Skeleton } from '@nextui-org/react';
import PostCardSkeleton from './PostCardSkeleton';

const ProfileSkeleton = () => {
  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Card className="mb-6 w-full">
          <CardBody className="flex flex-col items-center text-center">
            <div className="mx-auto flex flex-col items-center justify-center">
              <Skeleton className="rounded-full w-20 h-20" />
              <div className="my-4">
                <Skeleton className="h-8 w-48 rounded-lg" />
                <Skeleton className="h-4 w-32 rounded-lg mt-2" />
              </div>
            </div>
            <div className="mt-4 flex space-x-8">
              <Skeleton className="h-6 w-24 rounded-lg" />
              <Skeleton className="h-6 w-24 rounded-lg" />
            </div>
            <Skeleton className="h-10 w-32 rounded-lg mt-4" />
          </CardBody>
        </Card>

        <Card className="mb-6 w-full">
          <CardBody>
            <div className="flex items-center space-x-2">
              <Skeleton className="rounded-full w-12 h-12" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </CardBody>
        </Card>

        <div className="mx-auto space-y-4">
          <PostCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
