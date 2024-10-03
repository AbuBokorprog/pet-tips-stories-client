'use client';
import { IPost } from '@/src/types/post.type';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MessageCircleIcon,
  RepeatIcon,
} from 'lucide-react';
import React from 'react';

export default function ContentsCard({ post }: { post: IPost }) {
  return (
    <div>
      {/* <Card key={post.id} className="w-full p-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={post.avatar} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {post.author}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {post.timestamp}
              </h5>
              <span
                className={`text-xs ${
                  post.isPublished ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {post.isPublished ? 'Published' : 'Unpublished'}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button color="success" radius="full" size="sm">
              Publish
            </Button>
            <Button color="warning" radius="full" size="sm">
              Unpublish
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>{post.content}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <Button size="sm" variant="light">
            <ArrowUpIcon className="w-4 h-4 mr-1" />
            {post.upVotes}
          </Button>
          <Button size="sm" variant="light">
            <ArrowDownIcon className="w-4 h-4 mr-1" />
            {post.downVotes}
          </Button>
          <Button size="sm" variant="light">
            <MessageCircleIcon className="w-4 h-4 mr-1" />
            {post.comments}
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}
