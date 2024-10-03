import React from 'react';
import { Card, CardBody, Avatar, Button } from '@nextui-org/react';

interface FollowerCardProps {
  name: string;
  username: string;
  avatarUrl: string;
  isFollowing: boolean;
  onFollowToggle: () => void;
}

const FollowerCard: React.FC<FollowerCardProps> = ({
  name,
  username,
  avatarUrl,
  isFollowing,
  onFollowToggle,
}) => {
  return (
    <Card className="max-w-sm">
      <CardBody className="flex flex-row items-center p-4">
        <Avatar src={avatarUrl} alt={name} className="w-12 h-12" />
        <div className="ml-4 flex-grow">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
        <Button
          color={isFollowing ? 'default' : 'primary'}
          onClick={onFollowToggle}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardBody>
    </Card>
  );
};

export default FollowerCard;
