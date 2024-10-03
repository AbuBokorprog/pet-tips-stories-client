'use client';
import { useUserMeHook } from '@/src/hooks/user/user.hook';
import { UserContext } from '@/src/provider/user.provider';
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
import moment from 'moment';
import React, { useContext } from 'react';

export default function PostCard({ post }: { post: IPost }) {
  const fromAgo = moment(post?.createdAt).fromNow();
  const { user }: any = useContext(UserContext);
  const { data: userMe, isPending } = useUserMeHook();
  const isFollowing = userMe?.data?.following?.includes(post?.authorId?._id);

  return (
    <Card key={post._id} className="w-full p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={post?.authorId?.profilePicture}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {post.authorId?.username}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {fromAgo}
            </h5>
          </div>
        </div>
        {user?.id !== post?.authorId?._id && (
          <Button color="primary" radius="full" size="sm">
            Follow
          </Button>
        )}
        {isFollowing && (
          <Button color="primary" radius="full" size="sm">
            Unfollow
          </Button>
        )}
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{post.content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <Button size="sm" variant="light">
          <ArrowUpIcon className="w-4 h-4 mr-1" />
          {post.upVotes?.length}
        </Button>
        <Button size="sm" variant="light">
          <ArrowDownIcon className="w-4 h-4 mr-1" />
          {post.downVotes?.length}
        </Button>
        <Button size="sm" variant="light">
          <MessageCircleIcon className="w-4 h-4 mr-1" />
          {post.comments?.length}
        </Button>
        {/* <Button size="sm" variant="light">
          <RepeatIcon className="w-4 h-4 mr-1" />
          {post.shares}
        </Button> */}
      </CardFooter>
    </Card>
  );
}
