import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Following',
    template: `%s - Following`,
  },
  description:
    'This is the following page where users can see who they are following.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function FollowingPage() {
  return <div></div>;
}
