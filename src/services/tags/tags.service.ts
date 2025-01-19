'use server';

import { axiosInstance } from '@/src/lib/axiosInstance';
import { TTags } from '@/src/types/tags.type';
import { revalidateTag } from 'next/cache';

export const tagCreated = async (data: TTags) => {
  try {
    const response = await axiosInstance.post('/tags', data);
    revalidateTag('tags');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const retrieveAllTags = async () => {
  try {
    const response = await axiosInstance.get('/tags');
    revalidateTag('tags');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const retrieveSpecificTags = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/tags/${id}`);
    revalidateTag('tags');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTags = async (id: string, data: Partial<TTags>) => {
  try {
    const response = await axiosInstance.patch(`/tags/${id}`, data);
    revalidateTag('tags');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTags = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/tags/${id}`);
    revalidateTag('tags');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const followTag = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/tags/${id}/follow`);
    revalidateTag('user');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const unFollowTag = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/tags/${id}/unfollow`);
    revalidateTag('user');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
