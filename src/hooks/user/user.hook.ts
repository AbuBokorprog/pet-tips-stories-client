import {
  getAllUsers,
  getUserById,
  getUserMe,
  updateUser,
} from '@/src/services/user/user.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { revalidateTag } from 'next/cache';
import { toast } from 'sonner';

export const useAllUsersHook = () => {
  return useQuery({
    queryKey: ['ALL_USERS'],
    queryFn: async () => await getAllUsers(),
    refetchOnWindowFocus: true,
  });
};

export const useUserMeHook = () => {
  return useQuery({
    queryKey: ['USER_ME'],
    queryFn: async () => await getUserMe(),
  });
};

export const useUserByIdHook = (id: string) => {
  return useQuery({
    queryKey: ['USER_BY_ID', id],
    queryFn: async () => await getUserById(id),
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['UPDATE_USER'],
    mutationFn: async (data: any) => await updateUser(data),
    onSuccess: () => {
      toast.success('User updated successfully');
      queryClient.invalidateQueries({ queryKey: ['USER_ME'] });
    },
    onError: (error) => {
      toast.error('Failed to update user');
    },
  });
};
