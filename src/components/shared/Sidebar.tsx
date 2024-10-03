'use client';
import React, { useState, useEffect, useContext } from 'react';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  UsersIcon,
  ChartBarIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from 'lucide-react';
import Link from 'next/link';
import { UserContext } from '@/src/provider/user.provider';
import { usePathname, useRouter } from 'next/navigation';
import { logoutUser } from '@/src/services/auth/auth.services';
import { toast } from 'sonner';
import { Divider } from '@nextui-org/react';

export default function Sidebar({ menuItems }: { menuItems: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  // const { data: session } = useSession();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setLoading(true);
    logoutUser();
    toast.success(`${user?.username} logged out successfully!`);
    if (protectedRoutes.some((r) => pathname.match(r))) {
      router.push('/');
    }
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <Button
          className="fixed top-0 left-0 z-50"
          isIconOnly
          aria-label="Toggle Menu"
          onClick={toggleSidebar}
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </Button>
      )}
      <div
        className={`h-screen bg-gray-100 dark:bg-gray-800 w-72 lg:w-80 fixed left-0 top-0 transition-all duration-300 ease-in-out ${
          isOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col items-center py-4">
            <Avatar src={user?.profilePicture} size="lg" />
            <span className="font-bold mt-2">{user?.username}</span>
            <span className="text-sm text-gray-500 uppercase">
              {user?.role}
            </span>
          </div>
          <nav className="flex-grow">
            {menuItems.map((item: any) => (
              <div key={item.key}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                      onClick={() => {
                        setOpenItem(openItem === item.key ? null : item.key);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <ChevronDownIcon
                        className={`transition-transform ${
                          openItem === item.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openItem === item.key && (
                      <div className="ml-4">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                            onClick={() => isMobile && toggleSidebar()}
                          >
                            {child.icon}
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 py-3 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                    onClick={() => isMobile && toggleSidebar()}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}

            <Divider />
            <Link
              className="flex items-center gap-2 py-3 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              href="/"
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
          </nav>
          <Button
            color="danger"
            onClick={() => logoutHandler()}
            variant="light"
            startContent={<LogOutIcon />}
            className="w-full justify-start mt-auto"
          >
            Log Out
          </Button>
        </div>
      </div>
      {/* {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )} */}
    </>
  );
}
