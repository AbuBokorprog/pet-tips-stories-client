import {
  bookmarkCreated,
  deleteBookmark,
  retrieveUserAllBookmark,
  updateBookmark,
} from '@/src/services/bookmark/bookmark.service';
import { TBookmark } from '@/src/types/bookmark.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const createBookmarkHook = async (data: TBookmark) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create_tag'],
    mutationFn: async () => await bookmarkCreated(data),
    onSuccess: () => {
      toast.success('Bookmark created successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};

export const updateBookmarkHook = async (id: string, data: TBookmark) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update_tag', id],
    mutationFn: async () => await updateBookmark(id, data),
    onSuccess: () => {
      toast.success('Bookmark updated successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};
export const deleteBookmarkHook = async (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete_tag'],
    mutationFn: async () => await deleteBookmark(id),
    onSuccess: () => {
      toast.success('Bookmark deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};
export const retrieveBookmarkHook = async () => {
  return useQuery({
    queryKey: ['all_tag'],
    queryFn: async () => await retrieveUserAllBookmark(),
  });
};
