import Container from '@/src/components/container';
import TagsCard from '@/src/components/ui/home/TagsCard';
import { retrieveAllTags } from '@/src/services/tags/tags.service';
import { TAllTag } from '@/src/types/tags.type';
import React from 'react';

export default async function AllTagsPage() {
  const allTagsData = await retrieveAllTags();

  return (
    <Container>
      <div className="py-5 lg:py-10 lg:px-5">
        <h2 className=" text-3xl font-semibold">Tags</h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto items-center justify-center lg:px-5">
        {allTagsData?.data?.map((tag: TAllTag) => (
          <TagsCard
            key={tag?._id}
            _v={tag?._v}
            _id={tag?._id}
            createdAt={tag?.createdAt}
            name={tag?.name}
            updatedAt={tag?.updatedAt}
            description={tag?.description}
          />
        ))}
      </div>
    </Container>
  );
}
