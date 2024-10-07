import React from 'react';

const PostCardSkeleton = () => {
  return (
    <div className="mx-auto space-y-4">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="w-full p-2 bg-default-200 shadow rounded-lg animate-pulse"
        >
          <div className="flex justify-between mb-4">
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-default-200"></div>
              <div className="flex flex-col gap-1">
                <div className="w-24 h-4 bg-default-200 rounded"></div>
                <div className="w-16 h-3 bg-default-200 rounded"></div>
              </div>
            </div>
            <div className="w-20 h-8 bg-default-200 rounded-full"></div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="w-full h-40 bg-default-200 rounded"></div>
            <div className="w-3/4 h-6 bg-default-200 rounded"></div>
            <div className="w-full h-16 bg-default-200 rounded"></div>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-8 bg-default-200 rounded-full"></div>
            <div className="w-16 h-8 bg-default-200 rounded-full"></div>
            <div className="w-16 h-8 bg-default-200 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCardSkeleton;