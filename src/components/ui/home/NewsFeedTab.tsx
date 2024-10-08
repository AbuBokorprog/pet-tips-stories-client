import React from 'react';

type NewsFeedTabProps = {
  activeTab: string;
  handleTabClick: (tab: string) => void;
};

const NewsFeedTab: React.FC<NewsFeedTabProps> = ({
  activeTab,
  handleTabClick,
}) => {
  return (
    <div className="mb-4">
      <div className="flex space-x-4 overflow-x-auto p-4">
        {['discover', 'top', 'tips', 'story'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
              activeTab === tab
                ? 'text-white bg-blue-500 hover:bg-blue-600'
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsFeedTab;
