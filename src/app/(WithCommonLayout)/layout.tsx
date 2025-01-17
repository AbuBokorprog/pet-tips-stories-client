import Container from '@/src/components/container';
import { Navbar } from '@/src/components/navbar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className=" fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>
      <div className="mt-16">{children}</div>
    </Container>
  );
}
