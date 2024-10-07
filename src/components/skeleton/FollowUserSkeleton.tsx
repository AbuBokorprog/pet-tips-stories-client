import React from 'react';

const FollowUserSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-md rounded-lg p-4 h-screen sticky top-0">
      <div className="users-sidebar">
        <h2 className="text-xl font-semibold mb-4 bg-gray-200 dark:bg-gray-700 h-6 w-3/4 rounded"></h2>
        <ul className="users-list space-y-4">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="user-item flex items-center">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
              <div className="user-info flex-grow">
                <div className="bg-gray-200 dark:bg-gray-700 h-4 w-1/2 rounded"></div>
              </div>
              <div className="follow-button w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowUserSkeleton;
