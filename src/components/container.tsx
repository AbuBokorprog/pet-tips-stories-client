import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4 lg:px-10 flex-grow">
      {children}
    </main>
  );
}
