import {
  deleteUser,
  followUser,
  getAllUsers,
  getUserById,
  getUserMe,
  unFollowUser,
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

export const useFollowUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['FOLLOW_USER'],
    mutationFn: async (id: string) => await followUser(id),
    onSuccess: () => {
      toast.success('User followed successfully');
      queryClient.invalidateQueries({ queryKey: ['USER_ME', 'ALL_USERS'] });
    },
    onError: (error) => {
      toast.error('Failed to follow user');
    },
  });
};

export const useUnFollowUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['UNFOLLOW_USER'],
    mutationFn: async (id: string) => await unFollowUser(id),
    onSuccess: () => {
      toast.success('User unfollowed successfully');
      queryClient.invalidateQueries({ queryKey: ['USER_ME', 'ALL_USERS'] });
    },
    onError: (error) => {
      toast.error('Failed to unfollow user');
    },
  });
};

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['DELETE_USER'],
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: () => {
      toast.success('User deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_USERS'] });
    },
    onError: (error) => {
      toast.error('Failed to delete user');
    },
  });
};
