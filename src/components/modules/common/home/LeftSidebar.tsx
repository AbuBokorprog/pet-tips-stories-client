'use client';

import Link from 'next/link';
import React from 'react';

export default function LeftSidebar() {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-md text-gray-800 dark:text-gray-200 rounded-lg h-screen sticky top-0 overflow-y-auto">
      <div className="left-sidebar p-4">
        <nav>
          <ul className="category-list space-y-2">
            <li className="category-item">
              <Link
                href="/"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">🏠</span>
                <span className=" font-medium">Home</span>
              </Link>
            </li>
            <li className="category-item">
              <Link
                href="/reading-list"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📚</span>
                <span className=" font-medium">Reading List</span>
              </Link>
            </li>
            <li className="category-item">
              <Link
                href="/tags"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">🏷️</span>
                <span className=" font-medium">Tags</span>
              </Link>
            </li>

            {/* <li className="category-item">
              <Link
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📹</span>
                <span className=" font-medium">Videos</span>
              </Link>
            </li> */}

            <li className="category-item">
              <Link
                href="/about"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">👥</span>
                <span className=" font-medium">About</span>
              </Link>
            </li>
            <li className="category-item">
              <Link
                href="/contact"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📞</span>
                <span className=" font-medium">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
