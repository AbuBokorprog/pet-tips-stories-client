import {
  getAllUsers,
  getUserById,
  getUserMe,
} from '@/src/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useAllUsersHook = () => {
  return useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => await getAllUsers(),
    refetchOnWindowFocus: true,
  });
};

export const useUserMeHook = () => {
  return useQuery({
    queryKey: ['userMe'],
    queryFn: async () => await getUserMe(),
  });
};

export const useUserByIdHook = (id: string) => {
  return useQuery({
    queryKey: ['userById', id],
    queryFn: async () => await getUserById(id),
  });
};
