'use client';
import { UserContext } from '@/src/provider/user.provider';
import { logoutUser } from '@/src/services/auth/auth.services';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react';

export default function NavbarDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setLoading }: any = useContext(UserContext);
  const protectedRoutes = [
    '/dashboard/:path*',
    '/admin-dashboard/:path*',
    '/login',
    '/registration',
  ];
  const router = useRouter();
  const pathname = usePathname();
  const logoutHandler = () => {
    logoutUser();

    setLoading(true);
    if (protectedRoutes.some((r) => pathname.match(r))) {
      router.push('/');
    }
  };

  return (
    <Dropdown size="lg">
      <DropdownTrigger>
        <Button variant="solid" isIconOnly radius="full">
          {children}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions">
        <DropdownItem key="username" className="h-14 gap-2">
          <p className="font-semibold">{user?.username}</p>
          <p className="font-normal text-default-500">{user?.email}</p>
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
        <DropdownItem
          onClick={() => logoutHandler()}
          key="logout"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
