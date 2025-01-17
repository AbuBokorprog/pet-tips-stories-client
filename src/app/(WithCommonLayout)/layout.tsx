import Container from '@/src/components/container';
import { Navbar } from '@/src/components/navbar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
