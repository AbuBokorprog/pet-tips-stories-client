import { axiosInstance } from '@/src/lib/axiosInstance';

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get('/post');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUser = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/post/author/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post: any) => {
  try {
    const response = await axiosInstance.post('/post', post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id: string, post: any) => {
  try {
    const response = await axiosInstance.put(`/post/${id}`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
