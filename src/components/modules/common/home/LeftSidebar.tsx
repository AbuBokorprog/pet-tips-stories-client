import React from 'react';

export default function LeftSidebar() {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-md text-gray-800 dark:text-gray-200 rounded-lg h-screen sticky top-0 overflow-y-auto">
      <div className="left-sidebar p-4">
        <nav>
          <ul className="category-list space-y-2">
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">🏠</span>
                <span className="text-sm font-medium">Home</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📚</span>
                <span className="text-sm font-medium">Reading List</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">🏷️</span>
                <span className="text-sm font-medium">Tags</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">🎙️</span>
                <span className="text-sm font-medium">Podcasts</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📹</span>
                <span className="text-sm font-medium">Videos</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">💼</span>
                <span className="text-sm font-medium">Jobs</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">👥</span>
                <span className="text-sm font-medium">About</span>
              </a>
            </li>
            <li className="category-item">
              <a
                href="#"
                className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="category-icon mr-3">📞</span>
                <span className="text-sm font-medium">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
