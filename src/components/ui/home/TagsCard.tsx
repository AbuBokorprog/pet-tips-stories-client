'use client';
import {
  useTagFollowMutation,
  useTagUnFollowMutation,
} from '@/src/hooks/tags/tags.hook';
import { useUser } from '@/src/provider/user.provider';
import { IUser } from '@/src/types/user.type';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

type TTagCardProps = {
  _id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  followers?: IUser[];
  _v: number;
};

const TagsCard: React.FC<TTagCardProps> = (tagsData) => {
  const { user }: any = useUser();
  const router = useRouter();

  const isFollowing = tagsData?.followers?.some(
    (follower: IUser) => follower?._id === user?.id
  );

  const { mutate: followTag, data } = useTagFollowMutation();
  const { mutate: unFollowTag } = useTagUnFollowMutation();

  const handleFollow = (id: string) => {
    if (!user) {
      toast.error('Please login to follow user');
      router.push('/login');
    }
    if (isFollowing) {
      unFollowTag(id);
    } else {
      followTag(id);
    }
  };

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h3>#{tagsData?.name}</h3>
        {/* <p className="text-gray-600 text-sm">789 products</p> */}
      </CardHeader>
      <CardBody className="h-32">
        {tagsData?.description?.slice(0, 150)}
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {isFollowing ? (
          <Button
            color="primary"
            variant="bordered"
            onClick={() => handleFollow(tagsData?._id)}
          >
            Following
          </Button>
        ) : (
          <Button color="primary" onClick={() => handleFollow(tagsData?._id)}>
            Follow
          </Button>
        )}

        {/* <Button variant="ghost">Hide</Button> */}
      </CardFooter>
    </Card>
  );
};

export default TagsCard;
