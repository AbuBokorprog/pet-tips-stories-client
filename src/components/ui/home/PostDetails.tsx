'use client';

import {
  createCommentMutation,
  deleteCommentMutation,
  updateCommentMutation,
} from '@/src/hooks/comment/comment.hook';
import {
  getPostByIdHook,
  useDownVotePostMutation,
  useUpVotePostMutation,
} from '@/src/hooks/posts/posts.hook';
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
  useUserMeHook,
} from '@/src/hooks/user/user.hook';
import { IUser } from '@/src/types/user.type';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from '@nextui-org/react';
import DOMPurify from 'dompurify';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MessageCircleIcon,
  RepeatIcon,
} from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import PostDetailsSkeleton from '../../skeleton/PostDetailsSkeleton';

const PostDetails = ({ id }: { id: string }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedCommentId, setEditedCommentId] = useState('');
  const { data: post, isLoading: isLoadingPost } = getPostByIdHook(id);
  const router = useRouter();
  const content = DOMPurify.sanitize(post?.data?.content || '');
  const fromAgo = moment(post?.data?.createdAt).fromNow();

  const {
    data: userMe,
    isPending,
    isLoading: isLoadingUserMe,
  } = useUserMeHook();

  // check if the user is following the post author
  const isFollowing = userMe?.data?.following?.some(
    (follower: IUser) => follower._id === post?.data?.authorId._id
  );

  // check if the user has upvoted the post
  const hasUpvoted = post?.upVotes?.includes(userMe?.data?._id);
  const hasDownvoted = post?.downVotes?.includes(userMe?.data?._id);

  // follow and unfollow handler
  const { mutate: followUser } = useFollowUserMutation();
  const { mutate: unFollowUser } = useUnFollowUserMutation();

  // upvote and downvote handler
  const { mutate: upVotePost } = useUpVotePostMutation();
  const { mutate: downVotePost } = useDownVotePostMutation();

  const handleFollow = (id: string) => {
    if (!userMe?.data?.id) {
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
    if (!userMe?.data?.id) {
      toast.error('Please login to upvote');
      router.push('/login');
    } else {
      upVotePost(id);
    }
  };

  const downVoteHandler = (id: string) => {
    if (!userMe?.data?.id) {
      toast.error('Please login to downvote');
      router.push('/login');
    } else {
      downVotePost(id);
    }
  };

  const { mutate: createComment } = createCommentMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const data = {
      postId: post?.data?._id,
      content: comment,
    };
    createComment(data);
    e.target.reset();
  };

  const { mutate: updateComment } = updateCommentMutation();
  const { mutate: deleteComment } = deleteCommentMutation();

  const updateCommentHandler = (e: any) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    updateComment({ id: editedCommentId, comment: { content: comment } });
    setEditModalOpen(false);
  };

  const handleDelete = (id: string) => {
    deleteComment(id);
  };

  return (
    <>
      {isLoadingPost || isLoadingUserMe ? (
        <PostDetailsSkeleton />
      ) : (
        <Card key={post?.data?._id} className="w-full p-2">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Link
                href={`${
                  !userMe?.data?.id
                    ? '/login'
                    : `/profile/${post?.authorId?._id}`
                }`}
              >
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  alt="profile"
                  src={post?.data?.authorId?.profilePicture}
                />
              </Link>
              <div className="flex flex-col gap-1 items-start justify-center">
                <Link
                  href={`${
                    !userMe?.data?.id
                      ? '/login'
                      : `/profile/${post?.data?.authorId?._id}`
                  }`}
                >
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {post?.data?.authorId?.username}
                  </h4>
                </Link>
                <h5 className="text-small tracking-tight text-default-400">
                  {fromAgo}
                </h5>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {post?.data?.type === 'premium' && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                  Premium
                </span>
              )}
              {userMe?.data?.id !== post?.data?.authorId?._id &&
                !isFollowing && (
                  <Button
                    color="primary"
                    radius="full"
                    size="sm"
                    onClick={() => handleFollow(userMe?.data?._id as string)}
                  >
                    Follow
                  </Button>
                )}
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-600">
            <div className="mb-10">
              {post?.data?.image && post?.data?.image !== 'null' && (
                <Image
                  src={post?.data?.image}
                  alt={post?.data?.title}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-md"
                />
              )}
            </div>
            <Link
              className="text-large text-default-800 font-semibold"
              href={`/posts/${post?.data?._id}`}
            >
              {post?.data?.title}
            </Link>
            <div>
              {post?.data?.type === 'premium' &&
              !userMe?.data?.isPremium &&
              userMe?.data?.role === 'user' ? (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        content?.slice(0, Math.floor(content.length / 2)) +
                        '...',
                    }}
                  />
                  <Link
                    href="/dashboard/premium"
                    className="mt-2 flex items-center justify-center"
                  >
                    <Button size="sm" color="warning">
                      Become Premium to Read More
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                  {content?.length > 500 && (
                    <Button
                      size="sm"
                      variant="light"
                      onClick={() => {
                        console.log('read more');
                      }}
                    >
                      Read More
                    </Button>
                  )}
                </>
              )}
            </div>
          </CardBody>
          <CardFooter className="gap-3">
            <Button
              size="sm"
              variant={hasUpvoted ? 'solid' : 'light'}
              color={hasUpvoted ? 'success' : 'default'}
              onClick={() => upVoteHandler(post?.data?._id)}
              // isDisabled={hasDownvoted}
            >
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              {post?.data?.upVotes?.length}
            </Button>
            <Button
              size="sm"
              variant={hasDownvoted ? 'solid' : 'light'}
              color={hasDownvoted ? 'danger' : 'default'}
              onClick={() => downVoteHandler(post?.data?._id)}
            >
              <ArrowDownIcon className="w-4 h-4 mr-1" />
              {post?.data?.downVotes?.length}
            </Button>
            <Button size="sm" variant="light">
              <MessageCircleIcon className="w-4 h-4 mr-1" />
              {post?.data?.comments?.length}
            </Button>
            {/* <Button size="sm" variant="light">
          <RepeatIcon className="w-4 h-4 mr-1" />
          {post?.data?.shares}
        </Button> */}
          </CardFooter>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            {post?.data?.comments?.length > 0 ? (
              post.data.comments.map((comment: any) => (
                <div
                  key={comment._id}
                  className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Avatar
                        src={comment.authorId.profilePicture}
                        size="sm"
                        className="mr-2"
                      />
                      <span className="font-medium">
                        {comment.authorId.username}
                      </span>
                    </div>
                    {comment.authorId._id === userMe?.data?._id && (
                      <div>
                        <Button
                          size="sm"
                          variant="light"
                          className="mr-2"
                          onClick={() => {
                            setEditModalOpen(true);
                            setEditedCommentId(comment._id);
                          }}
                        >
                          Edit
                        </Button>
                        <Modal
                          isOpen={editModalOpen}
                          onClose={() => setEditModalOpen(false)}
                        >
                          <ModalContent>
                            <ModalHeader>Edit Comment</ModalHeader>
                            <form
                              className="mt-4"
                              onSubmit={updateCommentHandler}
                            >
                              <ModalBody>
                                {' '}
                                <Textarea
                                  name="comment"
                                  defaultValue={comment.content}
                                  placeholder="Add a comment..."
                                  className="w-full mb-2"
                                />
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={() => setEditModalOpen(false)}
                                >
                                  Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                  Save
                                </Button>
                              </ModalFooter>
                            </form>
                          </ModalContent>
                        </Modal>
                        <Button
                          size="sm"
                          variant="light"
                          color="danger"
                          onClick={() => handleDelete(comment._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
            <form className="mt-4" onSubmit={handleSubmit}>
              <Textarea
                name="comment"
                placeholder="Add a comment..."
                className="w-full mb-2"
              />
              <Button size="sm" type="submit">
                Post Comment
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
};

export default PostDetails;
