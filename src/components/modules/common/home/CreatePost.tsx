'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { Button, Input, Select, SelectItem, Divider } from '@nextui-org/react';
import { createPostHook } from '@/src/hooks/posts/posts.hook';

// Dynamically import ReactQuill and disable SSR
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
}) as any;

import 'react-quill/dist/quill.snow.css';
import { useUserMeHook } from '@/src/hooks/user/user.hook';

const CreatePost = () => {
  const { data: userMe } = useUserMeHook();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('general');
  const { mutate: createPost, isPending, isSuccess } = createPostHook();

  const categories = ['tips', 'story'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { title, content, image, category, type };
    createPost(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      setTitle('');
      setContent('');
      setImageUrl('');
      setCategory('');
    }
  }, [isPending, isSuccess]);

  return (
    <div className=" mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
        {userMe?.data?.isPremium && (
          <Select
            label="Type"
            placeholder="Select post type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mb-4"
          >
            <SelectItem key="general" value="general">
              General
            </SelectItem>
            <SelectItem key="premium" value="premium">
              Premium
            </SelectItem>
          </Select>
        )}
        <div className="my-10 h-96">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="h-72"
            modules={{
              toolbar: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
                ['link', 'image', 'video'],
                ['clean'],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
              ],
            }}
            formats={[
              'header',
              'font',
              'size',
              'bold',
              'italic',
              'underline',
              'strike',
              'blockquote',
              'list',
              'bullet',
              'indent',
              'link',
              'image',
              'video',
              'color',
              'background',
              'align',
            ]}
          />
        </div>
        <Divider />
        <Select
          label="Category"
          placeholder="Select a category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </Select>
        {/* <div className="flex flex-col gap-4">
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            label="Upload Images"
          />
        </div> */}
        <Input
          label="Image"
          value={image}
          name="image"
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste image url"
        />
        <div className="text-center mx-auto">
          <Button type="submit" color="primary" className="w-full">
            Create Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
