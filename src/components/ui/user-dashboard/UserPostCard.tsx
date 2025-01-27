'use client';
import {
  deletePostHook,
  useDownVotePostMutation,
  useUpVotePostMutation,
} from '@/src/hooks/posts/posts.hook';
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
  Link,
} from '@nextui-org/react';
import DOMPurify from 'dompurify';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MessageCircleIcon,
  RepeatIcon,
  StarIcon,
} from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'sonner';

export default function UserPostCard({ post }: { post: IPost }) {
  const router = useRouter();
  const timeAgo = moment(post?.createdAt).fromNow();
  const content = DOMPurify.sanitize(post?.content);

  const { user }: any = useContext(UserContext);
  const { data: userMe, isPending } = useUserMeHook();
  const { mutate: deletePost } = deletePostHook();
  // check if the user has upvoted the post
  const hasUpvoted = post?.upVotes?.includes(user?.id);
  const hasDownvoted = post?.downVotes?.includes(user?.id);

  // upvote and downvote handler
  const { mutate: upVotePost } = useUpVotePostMutation();
  const { mutate: downVotePost } = useDownVotePostMutation();

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

  const deletePostHandler = (id: string) => {
    deletePost(id);
  };

  return (
    <div>
      <Card key={post?._id} className="w-full p-2">
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
                {post?.authorId?.username}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {timeAgo}
              </h5>
              <span
                className={`text-xs ${
                  post?.isPublished ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {post?.isPublished ? 'Published' : 'Unpublished'}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {post?.type === 'premium' && (
              <span className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 mr-1 text-yellow-400" />
              </span>
            )}
            <Button color="primary" radius="full" size="sm">
              <Link
                href={`/dashboard/content/${post?._id}`}
                className="text-default-900 text-sm"
              >
                Edit
              </Link>
            </Button>
            <Button
              color="danger"
              radius="full"
              size="sm"
              type="button"
              onClick={() => deletePostHandler(post?._id)}
            >
              Delete
            </Button>
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
          <div className="">
            <Link href={`/posts/${post._id}`} className="text-default-500">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content.length > 150
                      ? content.slice(0, 150) + '...'
                      : content,
                }}
              />
            </Link>
          </div>
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
    </div>
  );
}
