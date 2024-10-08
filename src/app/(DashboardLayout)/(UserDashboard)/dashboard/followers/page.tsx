import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Follower',
    template: `%s - Follower`,
  },
  description:
    'This is the follower page where users can see who they are follower.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function FollowersPage() {
  return (
    <div>
      <h2>The follower and following page.</h2>
    </div>
  );
}
