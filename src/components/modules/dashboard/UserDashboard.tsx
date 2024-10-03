'use client';
import React from 'react';
import {
  Card,
  Button,
  User,
  Spacer,
  CardBody,
  Avatar,
} from '@nextui-org/react';
import { FileTextIcon, PawPrint, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { IUser } from '@/src/types/user.type';
import { IPost } from '@/src/types/post.type';

const UserDashboard = ({ user }: { user: IUser }) => {
  const unPublishedPosts = user?.posts?.filter(
    (post: IPost) => !post.isPublished
  );
  const publishedPosts = user?.posts?.filter((post: IPost) => post.isPublished);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">
        {user?.username} Welcome to Your Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="col-span-1">
          <CardBody className="p-6">
            <Avatar
              src={user?.profilePicture}
              alt={user?.username}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">Your Profile</h4>
            <p className="text-default-600 mb-4 h-14">
              Manage your account settings and preferences
            </p>
            <Button variant="bordered" fullWidth>
              Edit Profile
            </Button>
          </CardBody>
        </Card>
        <Card className="col-span-1">
          <CardBody className="p-6">
            <FileTextIcon
              size={48}
              className="mx-auto h-16 mb-4 text-green-500"
            />
            <h4 className="text-lg font-semibold mb-2">Published Content</h4>
            <p className="text-default-600 mb-4 h-14">
              <span className="font-bold text-green-500">
                {publishedPosts?.length}
              </span>{' '}
              published posts
            </p>
            <Button variant="bordered" fullWidth color="success">
              <Link href="/dashboard/content/published-posts">
                View Published Posts
              </Link>
            </Button>
          </CardBody>
        </Card>
        <Card className="col-span-1">
          <CardBody className="p-6">
            <FileTextIcon
              size={48}
              className="mx-auto h-16 mb-4 text-yellow-500"
            />
            <h4 className="text-lg font-semibold mb-2">Unpublished Content</h4>
            <p className="text-default-600 mb-4 h-14">
              <span className="font-bold text-yellow-500">
                {unPublishedPosts?.length}{' '}
              </span>
              unpublished posts
            </p>
            <Button variant="bordered" fullWidth color="warning">
              <Link href="/dashboard/content/unpublished-posts">
                View Unpublished Posts
              </Link>
            </Button>
          </CardBody>
        </Card>
        <Card className="col-span-1">
          <CardBody className="p-6">
            <PawPrint size={48} className="mx-auto h-16 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Pet Nutrition</h4>
            <p className="text-default-600 mb-4 h-14">
              Explore nutrition plans for your pets
            </p>
            <Button variant="bordered" fullWidth>
              <Link href="/dashboard/pet-nutrition">Explore Plans</Link>
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
