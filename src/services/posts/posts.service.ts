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
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTopPosts = async () => {
  try {
    const response = await axiosInstance.get('/post?sort=-upVotes');
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
    const response = await axiosInstance.post('/post/create-post', post);
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

export const upVotePost = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/post/${id}/upvote`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const downVotePost = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/post/${id}/downvote`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
