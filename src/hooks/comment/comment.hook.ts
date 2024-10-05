import { createCommentService } from '@/src/services/comment/comment.service';
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
