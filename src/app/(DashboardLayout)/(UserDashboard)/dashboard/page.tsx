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

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="col-span-1">
          <CardBody className="p-6">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="John Doe"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">Your Profile</h4>
            <p className="text-default-600 mb-4">
              Manage your account settings and preferences
            </p>
            <Button variant="bordered" fullWidth>
              Edit Profile
            </Button>
          </CardBody>
        </Card>
        <Card className="col-span-1">
          <CardBody className="p-6">
            <FileTextIcon size={48} className="mx-auto mb-4 text-green-500" />
            <h4 className="text-lg font-semibold mb-2">Published Content</h4>
            <p className="text-default-600 mb-4">
              <span className="font-bold text-green-500">5</span> published
              posts
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
            <FileTextIcon size={48} className="mx-auto mb-4 text-yellow-500" />
            <h4 className="text-lg font-semibold mb-2">Unpublished Content</h4>
            <p className="text-default-600 mb-4">
              <span className="font-bold text-yellow-500">5</span> unpublished
              posts
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
            <PawPrint size={48} className="mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Pet Nutrition</h4>
            <p className="text-default-600 mb-4">
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
}
