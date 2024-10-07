import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';

const PostDetailsSkeleton = () => {
  return (
    <div>
      <Card className="w-full p-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-default-300 animate-pulse" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <div className="h-3 w-24 bg-default-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-default-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-20 bg-default-200 rounded-full animate-pulse" />
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600">
          <div className="mb-10">
            <div className="w-full h-64 bg-default-300 rounded-md animate-pulse" />
          </div>
          <div className="h-6 w-3/4 bg-default-200 rounded animate-pulse mb-4" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-default-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-default-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-default-200 rounded animate-pulse" />
          </div>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="h-8 w-20 bg-default-200 rounded-full animate-pulse" />
          <div className="h-8 w-20 bg-default-200 rounded-full animate-pulse" />
          <div className="h-8 w-20 bg-default-200 rounded-full animate-pulse" />
        </CardFooter>

        <div className="mt-6">
          <div className="h-6 w-32 bg-default-200 rounded animate-pulse mb-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-3 bg-default-100 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-default-300 animate-pulse mr-2" />
                    <div className="h-4 w-24 bg-default-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="h-3 w-full bg-default-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="h-24 w-full bg-default-200 rounded animate-pulse mb-2" />
            <div className="h-8 w-24 bg-default-200 rounded-full animate-pulse" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostDetailsSkeleton;
