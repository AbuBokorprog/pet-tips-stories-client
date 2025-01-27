'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/src/config/site';
import { ThemeSwitch } from '@/src/components/theme-switch';
import {
  SearchIcon,
  Logo,
  CategoryIcon,
  CloseIcon,
  NextUILogo,
} from '@/src/components/icons';
import { Avatar } from '@nextui-org/react';
import NavbarDropdown from './ui/home/NavbarDropdown';
import { useContext, useState } from 'react';
import { UserContext } from '../provider/user.provider';
import { useUserMeHook } from '../hooks/user/user.hook';
import RightSidebar from './modules/common/home/RightSidebar';
import SearchField from './shared/SearchField';

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, loading }: any = useContext(UserContext);
  const { data: userMe } = useUserMeHook();

  const userMenu = [
    {
      name: 'Profile',
      href: `/profile/${userMe?.data?._id}`,
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Create Post',
      href: '/posts/create-post',
    },
    {
      name: 'Premium Subscription',
      href: '/dashboard/premium',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const adminMenu = [
    {
      name: 'Profile',
      href: `/profile/${userMe?.data?._id}`,
    },
    {
      name: 'Admin Dashboard',
      href: '/admin-dashboard',
    },
  ];

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="shadow border-b ">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          // aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <NextUILogo />
            <p className="font-bold text-xl lg:text-2xl">
              PE<span className="text-blue-500">TS</span>
            </p>
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="hidden lg:flex w-full">
          <SearchField />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {user?.role ? (
          <NavbarItem>
            <NavbarDropdown
              menu={user?.role === 'admin' ? adminMenu : userMenu}
            >
              <Avatar src={userMe?.data?.profilePicture} />
            </NavbarDropdown>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href="/login" color="primary">
              <Button color="primary">Login</Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* small devices */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <CategoryIcon />
          </Button>
          {showSidebar && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
              className="absolute top-full left-0 z-50 w-full bg-white dark:bg-black px-4"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Suggestions for you</p>
                <Button
                  variant="light"
                  isIconOnly
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <CloseIcon />
                </Button>
              </div>
              <RightSidebar />
            </motion.div>
          )}
        </NavbarItem>
        <ThemeSwitch />
        {user?.role ? (
          <NavbarItem>
            <NavbarDropdown
              menu={user?.role === 'admin' ? adminMenu : userMenu}
            >
              <Avatar
                alt={userMe?.data?.username}
                src={userMe?.data?.profilePicture}
              />
            </NavbarDropdown>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href="/login" color="primary">
              <Button color="primary">Login</Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <SearchField />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem className="category-item">
            <Link
              href="/"
              color="foreground"
              className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="category-icon mr-3">🏠</span>
              <span className=" font-medium">Home</span>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="category-item">
            <Link
              href="/reading-list"
              color="foreground"
              className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="category-icon mr-3">📚</span>
              <span className=" font-medium">Reading List</span>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="category-item">
            <Link
              href="/tags"
              color="foreground"
              className="category-link flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="category-icon mr-3">🏷️</span>
              <span className=" font-medium">Tags</span>
            </Link>
          </NavbarMenuItem>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
