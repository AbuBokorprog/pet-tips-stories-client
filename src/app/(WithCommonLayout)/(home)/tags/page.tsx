import Container from '@/src/components/container';
import TagsCard from '@/src/components/ui/home/TagsCard';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import React from 'react';

export default function AllTagsPage() {
  return (
    <Container>
      <div className="py-5 lg:py-10 lg:px-5">
        <h2 className=" text-3xl font-semibold">Tags</h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto items-center justify-center lg:px-5">
        {[1, 2, 4, 5, 6].map((T) => (
          <TagsCard key={T} />
        ))}
      </div>
    </Container>
  );
}
