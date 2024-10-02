'use client';
import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Button,
  Textarea,
} from '@nextui-org/react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Card className="mb-6 w-full">
          <CardBody className="flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Avatar
                src="/placeholder-profile.jpg"
                alt="Profile Picture"
                size="lg"
              />
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-default-500">Web Developer</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-8">
              <div>
                <span className="font-bold">500</span> Followers
              </div>
              <div>
                <span className="font-bold">200</span> Following
              </div>
            </div>
            <div className="mt-4 w-full">
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-2 text-default-500">
                Passionate web developer with 5 years of experience. Love coding
                and learning new technologies.
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="mb-6 w-full">
          <CardBody>
            <div className="flex items-center space-x-2 mb-2">
              <Avatar
                src="/placeholder-profile.jpg"
                alt="Profile Picture"
                size="sm"
              />
              <Textarea
                placeholder="What's on your mind, John?"
                minRows={2}
                className="flex-grow"
              />
            </div>
          </CardBody>
        </Card>

        <div className="space-y-4 w-full">
          <Card className="w-full">
            <CardHeader className="flex items-center space-x-2">
              <Avatar src="/placeholder-profile.jpg" alt="User" size="sm" />
              <span className="font-semibold">John Doe</span>
            </CardHeader>
            <CardBody>
              <p>
                This is a sample post. Here's where the content of the post
                would go.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
