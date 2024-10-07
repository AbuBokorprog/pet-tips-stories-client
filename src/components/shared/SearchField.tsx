import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import React, { useState } from 'react';
import { SearchIcon } from '../icons';
import { getPostsBySearchTermHook } from '@/src/hooks/posts/posts.hook';
import { IPost } from '@/src/types/post.type';
import DOMPurify from 'dompurify';
import { useDebounce } from 'use-debounce';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const { data, isLoading } = getPostsBySearchTermHook(
    debouncedSearchTerm !== '' ? debouncedSearchTerm : undefined
  );

  return (
    <div className="relative">
      <form className="flex">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search"
          classNames={{
            inputWrapper: 'bg-default-100 w-full 2xl:w-[700px]',
            input: 'text-sm',
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={['command']}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      </form>

      {debouncedSearchTerm && (
        <div className="absolute top-10 left-0 right-0 bg-default-50 shadow-lg rounded-lg p-4 z-50">
          <h2 className="text-lg font-semibold mb-2">Search Results</h2>
          <div className="flex flex-col gap-2">
            {isLoading && (
              <div className="p-4 bg-default-100 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-default-300"></div>
                  <div>
                    <h3 className="text-sm font-semibold">Loading...</h3>
                    <p className="text-xs text-default-500">Loading...</p>
                  </div>
                </div>
              </div>
            )}
            {data?.data?.data?.map((post: IPost) => (
              <div
                key={post?._id}
                className="p-4 bg-default-100 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={post?.authorId?.profilePicture}
                    alt="Profile Picture"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">{post?.title}</h3>
                    <p className="text-xs text-default-500">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(post?.content).slice(
                            0,
                            100
                          ),
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchField;
