import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React from 'react';

export default function NavbarDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <Button variant="solid" isIconOnly radius="full">
          {children}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions">
        <DropdownItem key="username" className="h-14 gap-2">
          <p className="font-semibold">John Doe</p>
          <p className="font-normal text-default-500">john@example.com</p>
        </DropdownItem>
        <DropdownItem key="profile" href="#">
          Profile
        </DropdownItem>
        <DropdownItem key="dashboard" href="#">
          Dashboard
        </DropdownItem>
        <DropdownItem key="create-post" href="#">
          Create Post
        </DropdownItem>
        <DropdownItem key="logout" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
