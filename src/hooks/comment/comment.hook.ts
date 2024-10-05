import {
  createCommentService,
  deleteCommentService,
  replyCommentService,
  updateCommentService,
} from '@/src/services/comment/comment.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const createCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['CREATE_COMMENT'],
    mutationFn: async (comment: any) => await createCommentService(comment),
    onSuccess: () => {
      toast.success('Comment created successfully');
      queryClient.invalidateQueries({ queryKey: ['POST_BY_ID'] });
    },
    onError: (error) => {
      toast.error('Error creating comment');
    },
  });
};

export const replyCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['REPLY_COMMENT'],
    mutationFn: async ({ id, comment }: { id: string; comment: any }) =>
      await replyCommentService(id, comment),
    onSuccess: () => {
      toast.success('Comment replied successfully');
      queryClient.invalidateQueries({ queryKey: ['POST_BY_ID'] });
    },
    onError: (error) => {
      toast.error('Error replying comment');
    },
  });
};

export const updateCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['UPDATE_COMMENT'],
    mutationFn: async ({ id, comment }: { id: string; comment: any }) =>
      await updateCommentService(id, comment),
    onSuccess: () => {
      toast.success('Comment updated successfully');
      queryClient.invalidateQueries({ queryKey: ['POST_BY_ID'] });
    },
    onError: (error) => {
      toast.error('Error updating comment');
    },
  });
};

export const deleteCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['DELETE_COMMENT'],
    mutationFn: async (id: string) => await deleteCommentService(id),
    onSuccess: () => {
      toast.success('Comment deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['POST_BY_ID'] });
    },
    onError: (error) => {
      toast.error('Error deleting comment');
    },
  });
};
