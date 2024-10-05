import {
  deletePost,
  downVotePost,
  getPostsByCategory,
  getTopPosts,
  upVotePost,
  updatePost,
} from '@/src/services/posts/posts.service';
import {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUser,
} from '@/src/services/posts/posts.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const getAllPostsHook = () => {
  return useQuery({
    queryKey: ['ALL_POSTS'],
    queryFn: async () => await getAllPosts(),
  });
};

export const getPostsByCategoryHook = (category: string) => {
  return useQuery({
    queryKey: ['POSTS_BY_CATEGORY', category],
    queryFn: async () => await getPostsByCategory(category),
  });
};

export const getTopPostsHook = () => {
  return useQuery({
    queryKey: ['TOP_POSTS'],
    queryFn: async () => await getTopPosts(),
  });
};

export const getPostsByUserIdHook = (id: string) => {
  return useQuery({
    queryKey: ['POSTS_BY_USER_ID', id],
    queryFn: async () => await getPostsByUser(id),
  });
};

export const getPostByIdHook = (id: string) => {
  return useQuery({
    queryKey: ['POST_BY_ID', id],
    queryFn: async () => await getPostById(id),
  });
};

export const createPostHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['CREATE_POST'],
    mutationFn: async (data: any) => await createPost(data),
    onSuccess: () => {
      toast.success('Post created successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_POSTS'] });
    },
    onError: (error) => {
      toast.error('Failed to create post');
    },
  });
};

export const updatePostHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['UPDATE_POST'],
    mutationFn: async ({ id, data }: { id: string; data: any }) =>
      await updatePost(id, data),
    onSuccess: () => {
      toast.success('Post updated successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_POSTS'] });
    },
    onError: (error) => {
      toast.error('Failed to update post');
    },
  });
};

export const deletePostHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['DELETE_POST'],
    mutationFn: async (id: string) => await deletePost(id),
    onSuccess: () => {
      toast.success('Post deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_POSTS'] });
    },
    onError: (error) => {
      toast.error('Failed to delete post');
    },
  });
};

export const useUpVotePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['UP_VOTE_POST'],
    mutationFn: async (id: string) => await upVotePost(id),
    onSuccess: () => {
      //   toast.success('Post upvoted successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_POSTS'] });
    },
    onError: (error) => {
      toast.error('Failed to upvote post');
    },
  });
};

export const useDownVotePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['DOWN_VOTE_POST'],
    mutationFn: async (id: string) => await downVotePost(id),
    onSuccess: () => {
      //   toast.success('Post downvoted successfully');
      queryClient.invalidateQueries({ queryKey: ['ALL_POSTS'] });
    },
    onError: (error) => {
      toast.error('Failed to downvote post');
    },
  });
};
