import Container from '@/src/components/container';
import LeftSidebar from '@/src/components/modules/common/home/LeftSidebar';
import TagsCard from '@/src/components/ui/home/TagsCard';
import React from 'react';

export default function ReadingListPage() {
  return (
    <Container>
      <div className="py-5 lg:py-10 lg:px-5">
        <h2 className=" text-3xl font-semibold">Reading List</h2>
      </div>

      <div className="lg:flex items-start justify-between">
        <div className="left-sidebar md:w-[400px] hidden lg:block sticky top-14 ">
          <LeftSidebar />
        </div>
        <div className="w-full grid grid-cols-1 gap-5 mx-auto items-center justify-center lg:px-5">
          {[1, 2, 4, 5, 6].map((T) => (
            <TagsCard key={T} />
          ))}
        </div>
      </div>
    </Container>
  );
}
