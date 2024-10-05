'use server';

import { axiosInstance } from '@/src/lib/axiosInstance';
import { revalidateTag } from 'next/cache';

export const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get('/post');
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByCategory = async (category: string) => {
  try {
    const response = await axiosInstance.get(`/post?category=${category}`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopPosts = async () => {
  try {
    const response = await axiosInstance.get('/post?sort=-upVotes');
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUser = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/post/author/${userId}`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/post/${id}`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post: any) => {
  try {
    const response = await axiosInstance.post('/post/create-post', post);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id: string, post: any) => {
  try {
    const response = await axiosInstance.put(`/post/${id}`, post);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/post/${id}`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const upVotePost = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/post/${id}/upvote`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const downVotePost = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/post/${id}/downvote`);
    revalidateTag('posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};
