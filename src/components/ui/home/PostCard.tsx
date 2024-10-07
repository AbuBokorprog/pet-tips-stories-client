'use client';
import {
  useDownVotePostMutation,
  useUpVotePostMutation,
} from '@/src/hooks/posts/posts.hook';
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
  useUserMeHook,
} from '@/src/hooks/user/user.hook';
import { UserContext } from '@/src/provider/user.provider';
import { IPost } from '@/src/types/post.type';
import { IUser } from '@/src/types/user.type';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MessageCircleIcon,
  RepeatIcon,
} from 'lucide-react';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'sonner';
import DOMPurify from 'dompurify';
import Image from 'next/image';

export default function PostCard({ post }: { post: IPost }) {
  const router = useRouter();
  const content = DOMPurify.sanitize(post?.content);
  const fromAgo = moment(post?.createdAt).fromNow();
  const { user }: any = useContext(UserContext);
  const { data: userMe, isPending } = useUserMeHook();

  // check if the user is following the post author
  const isFollowing = userMe?.data?.following?.some(
    (follower: IUser) => follower._id === post.authorId._id
  );

  // check if the user has upvoted the post
  const hasUpvoted = post?.upVotes?.includes(user?.id);
  const hasDownvoted = post?.downVotes?.includes(user?.id);

  // follow and unfollow handler
  const { mutate: followUser } = useFollowUserMutation();
  const { mutate: unFollowUser } = useUnFollowUserMutation();

  // upvote and downvote handler
  const { mutate: upVotePost } = useUpVotePostMutation();
  const { mutate: downVotePost } = useDownVotePostMutation();

  const handleFollow = (id: string) => {
    if (!user?.id) {
      toast.error('Please login to follow user');
      router.push('/login');
      if (isFollowing) {
        unFollowUser(id);
      } else {
        followUser(id);
      }
    }
  };

  const upVoteHandler = (id: string) => {
    if (!user?.id) {
      toast.error('Please login to upvote');
      router.push('/login');
    } else {
      upVotePost(id);
    }
  };

  const downVoteHandler = (id: string) => {
    if (!user?.id) {
      toast.error('Please login to downvote');
      router.push('/login');
    } else {
      downVotePost(id);
    }
  };

  return (
    <Card key={post._id} className="w-full p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link
            href={`${!user?.id ? '/login' : `/profile/${post?.authorId?._id}`}`}
          >
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={post?.authorId?.profilePicture}
            />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <Link
              href={`${
                !user?.id ? '/login' : `/profile/${post?.authorId?._id}`
              }`}
            >
              <h4 className="text-small font-semibold leading-none text-default-600">
                {post.authorId?.username}
              </h4>
            </Link>
            <h5 className="text-small tracking-tight text-default-400">
              {fromAgo}
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post?.type === 'premium' && (
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
              Premium
            </span>
          )}
          {user?.id !== post?.authorId?._id && !isFollowing && (
            <Button
              color="primary"
              radius="full"
              size="sm"
              onClick={() => handleFollow(user?._id as string)}
            >
              Follow
            </Button>
          )}
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-600">
        <Link href={`/posts/${post?._id}`}>
          {post?.image && post?.image !== 'null' && (
            <Image
              src={post?.image}
              alt={post?.title}
              width={500}
              height={500}
              className="w-full lg:h-40 object-cover rounded-md"
            />
          )}
        </Link>
        <Link
          className="text-large text-default-800 font-semibold"
          href={`/posts/${post._id}`}
        >
          {post.title}
        </Link>
        <Link href={`/posts/${post._id}`} className="text-default-500">
          <div
            dangerouslySetInnerHTML={{
              __html:
                content.length > 500 ? content.slice(0, 500) + '...' : content,
            }}
          />
        </Link>
      </CardBody>
      <CardFooter className="gap-3">
        <Button
          size="sm"
          variant={hasUpvoted ? 'solid' : 'light'}
          color={hasUpvoted ? 'success' : 'default'}
          onClick={() => upVoteHandler(post._id)}
          // isDisabled={hasDownvoted}
        >
          <ArrowUpIcon className="w-4 h-4 mr-1" />
          {post.upVotes?.length}
        </Button>
        <Button
          size="sm"
          variant={hasDownvoted ? 'solid' : 'light'}
          color={hasDownvoted ? 'danger' : 'default'}
          onClick={() => downVoteHandler(post._id)}
        >
          <ArrowDownIcon className="w-4 h-4 mr-1" />
          {post.downVotes?.length}
        </Button>
        <Link href={`/posts/${post._id}`}>
          <Button size="sm" variant="light">
            <MessageCircleIcon className="w-4 h-4 mr-1" />
            {post.comments?.length}
          </Button>
        </Link>
        {/* <Button size="sm" variant="light">
          <RepeatIcon className="w-4 h-4 mr-1" />
          {post.shares}
        </Button> */}
      </CardFooter>
    </Card>
  );
}
