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
import { toast } from 'sonner';
import Link from 'next/link';
import { useUserMeHook } from '@/src/hooks/user/user.hook';

export default function NavbarDropdown({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu: any;
}) {
  const { user, setLoading }: any = useContext(UserContext);
  const { data: userMe } = useUserMeHook();
  const protectedRoutes = [
    '/dashboard/:path*',
    '/admin-dashboard/:path*',
    '/login',
    '/registration',
    '/profile',
  ];
  const router = useRouter();
  const pathname = usePathname();

  const logoutHandler = () => {
    setLoading(true);
    logoutUser();
    toast.success(`${user?.username} logged out successfully!`);
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
          <p className="font-semibold">{userMe?.data?.username}</p>
          <p className="font-normal text-default-500">{userMe?.data?.email}</p>
        </DropdownItem>
        {menu.map((item: any) => (
          <DropdownItem key={item.name} href={item.href}>
            {item.name}
          </DropdownItem>
        ))}
        <DropdownItem
          onClick={logoutHandler}
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
