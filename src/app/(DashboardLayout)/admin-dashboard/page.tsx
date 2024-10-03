import React from 'react';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600">
          <h3 className="text-xl font-semibold text-white mb-2">Total Users</h3>
          <p className="text-4xl font-bold text-white">10,000</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-600">
          <h3 className="text-xl font-semibold text-white mb-2">
            Total Content
          </h3>
          <p className="text-4xl font-bold text-white">5,000</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-purple-600">
          <h3 className="text-xl font-semibold text-white mb-2">
            Published Contents
          </h3>
          <p className="text-4xl font-bold text-white">3,500</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-yellow-600">
          <h3 className="text-xl font-semibold text-white mb-2">
            Unpublished Contents
          </h3>
          <p className="text-4xl font-bold text-white">1,500</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-pink-500 to-pink-600">
          <h3 className="text-xl font-semibold text-white mb-2">
            Premium Users
          </h3>
          <p className="text-4xl font-bold text-white">2,000</p>
        </div>
      </div>
    </div>
  );
}
