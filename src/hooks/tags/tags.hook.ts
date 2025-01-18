import {
  deleteTags,
  retrieveAllTags,
  retrieveSpecificTags,
  tagCreated,
  updateTags,
} from '@/src/services/tags/tags.service';
import { TTags } from '@/src/types/tags.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const createTagHook = async (data: TTags) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create_tag'],
    mutationFn: async () => await tagCreated(data),
    onSuccess: () => {
      toast.success('Tag created successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};

export const updateTagHook = async (id: string, data: TTags) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['update_tag', id],
    mutationFn: async () => await updateTags(id, data),
    onSuccess: () => {
      toast.success('Tag updated successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};
export const deleteTagHook = async (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete_tag'],
    mutationFn: async () => await deleteTags(id),
    onSuccess: () => {
      toast.success('Tag deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['all_tag'] });
    },
    onError: (error: any) => {
      toast.error(error?.data?.message);
    },
  });
};
export const retrieveTagHook = async () => {
  return useQuery({
    queryKey: ['all_tag'],
    queryFn: async () => await retrieveAllTags(),
  });
};
export const retrieveSpecificTagHook = async (id: string) => {
  return useQuery({
    queryKey: ['specific_tag', id],
    queryFn: async () => await retrieveSpecificTags(id),
  });
};
