'use client';

import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@nextui-org/react';

const AllPostsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-48 mx-auto mb-6 rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Card className="w-full p-1">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Skeleton className="rounded-full w-12 h-12" />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <Skeleton className="h-4 w-24 rounded-lg" />
                    <Skeleton className="h-3 w-16 rounded-lg" />
                    <Skeleton className="h-3 w-20 rounded-lg" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-20 rounded-full" />
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-600">
                <Skeleton className="w-full h-40 rounded-lg mb-2" />
                <Skeleton className="h-6 w-3/4 rounded-lg mb-2" />
                <Skeleton className="h-4 w-full rounded-lg mb-1" />
                <Skeleton className="h-4 w-full rounded-lg mb-1" />
                <Skeleton className="h-4 w-2/3 rounded-lg" />
              </CardBody>
              <CardFooter className="gap-3">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-20 rounded-full" />
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPostsSkeleton;
