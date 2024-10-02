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
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
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
import LeftSidebar from './modules/common/home/LeftSidebar';
import { UserContext } from '../provider/user.provider';

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, loading }: any = useContext(UserContext);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="2xl" position="sticky">
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
        <NavbarItem className="hidden lg:flex w-full">{searchInput}</NavbarItem>
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
            <NavbarDropdown>
              <Avatar src={user.profilePicture} />
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
                <p className="text-lg font-bold">Categories</p>
                <Button
                  variant="light"
                  isIconOnly
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <CloseIcon />
                </Button>
              </div>
              <LeftSidebar />
            </motion.div>
          )}
        </NavbarItem>
        <ThemeSwitch />
        {user?.role ? (
          <NavbarItem>
            <NavbarDropdown>
              <Avatar alt="User" />
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
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
