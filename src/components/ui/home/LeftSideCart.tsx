import React from 'react';

export default function LeftSideCart() {
  return (
    <div>
      <li className="category-item">
        <a
          href="#"
          className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <span className="category-icon mr-3">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </a>
      </li>
    </div>
  );
}
