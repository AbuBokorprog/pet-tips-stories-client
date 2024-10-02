import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '@/src/types/user.type';
import { getCurrentUser } from '../services/auth/auth.services';

type UserContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const handleGetUser = async () => {
    try {
      const fetchedUser: any = await getCurrentUser();
      setUser(fetchedUser);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or an error occurs
    }
  };

  useEffect(() => {
    handleGetUser();
  }, [loading]);

  const value = {
    loading,
    setLoading,
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserProvider;
