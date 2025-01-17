import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-2 lg:px-0 flex-grow">{children}</main>
  );
}
