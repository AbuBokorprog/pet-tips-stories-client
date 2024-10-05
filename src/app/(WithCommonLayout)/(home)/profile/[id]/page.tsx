'use client';
import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
  Textarea,
  Link,
} from '@nextui-org/react';
import { useUserByIdHook } from '@/src/hooks/user/user.hook';
import { IPost } from '@/src/types/post.type';
import PostCard from '@/src/components/ui/home/PostCard';
import ProfileUpdate from '@/src/components/ui/home/ProfileUpdate';

export default function ProfilePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: userMe, isPending, isSuccess } = useUserByIdHook(id);
  // console.log(userMe.data);
  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Card className="mb-6 w-full">
          <CardBody className="flex flex-col items-center text-center">
            <div className="mx-auto flex flex-col items-center justify-center">
              <Avatar
                src={userMe?.data?.profilePicture}
                alt={userMe?.data?.username}
                size="lg"
                isBordered
                radius="full"
              />
              <div className="my-4">
                <h1 className="text-2xl font-bold">{userMe?.data?.username}</h1>
                <p className="text-default-500">
                  {userMe?.data?.bio && userMe?.data?.bio}
                </p>
              </div>
            </div>
            <div className="mt-4 flex space-x-8">
              <div>
                <span className="font-bold">
                  {userMe?.data?.followers?.length}
                </span>{' '}
                Followers
              </div>
              <div>
                <span className="font-bold">
                  {userMe?.data?.following?.length}
                </span>{' '}
                Following
              </div>
            </div>
            <ProfileUpdate user={userMe?.data} />
            {/* <div className="mt-4 w-full">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-2 text-default-500">
                Passionate web developer with 5 years of experience. Love coding
                and learning new technologies.
              </p>
            </div> */}
          </CardBody>
        </Card>

        <Card className="mb-6 w-full">
          <CardBody>
            <div className="flex items-center space-x-2">
              <Avatar
                src={userMe?.data?.profilePicture}
                alt={userMe?.data?.username}
                isBordered
                radius="full"
                size="md"
              />
              <Link href="/posts/create-post" className="w-full">
                <div className="flex-grow p-2 border w-full rounded-lg bg-default-100 hover:bg-default-200 cursor-pointer transition-colors">
                  <p className="text-default-400 w-full">
                    What's on your mind, {userMe?.data?.username || 'User'}?
                  </p>
                </div>
              </Link>
            </div>
          </CardBody>
        </Card>

        <div className="mx-auto space-y-4">
          {userMe?.data?.posts?.map((post: IPost) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
