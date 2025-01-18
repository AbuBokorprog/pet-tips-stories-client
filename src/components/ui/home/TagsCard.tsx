import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import React from 'react';

type TTagCardProps = {
  _id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

const TagsCard: React.FC<TTagCardProps> = (tagsData) => {
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
        <Button color="primary">Follow</Button>
        {/* <Button color="primary" variant="bordered">
          Following
        </Button> */}
        <Button variant="ghost">Hide</Button>
      </CardFooter>
    </Card>
  );
};

export default TagsCard;
