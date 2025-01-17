import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import React from 'react';

const TagsCard = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h3>#tag-name</h3>
        <p className="text-gray-600 text-sm">789 products</p>
      </CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        distinctio necessitatibus illum sed quibusdam nulla nobis. Ratione
        consequuntur praesentium sunt.
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Button color="primary">Follow</Button>
        <Button color="primary" variant="bordered">
          Following
        </Button>
        <Button variant="ghost">Hide</Button>
      </CardFooter>
    </Card>
  );
};

export default TagsCard;
