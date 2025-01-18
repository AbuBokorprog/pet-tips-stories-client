'use server';
import { axiosInstance } from '@/src/lib/axiosInstance';
import { TBookmark } from '@/src/types/bookmark.type';
import { revalidateTag } from 'next/cache';

export const bookmarkCreated = async (data: TBookmark) => {
  try {
    const response = await axiosInstance.post('/bookmarks', data);
    revalidateTag('bookmarks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const retrieveUserAllBookmark = async () => {
  try {
    const response = await axiosInstance.get('/bookmarks');
    revalidateTag('bookmarks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBookmark = async (id: string, data: Partial<TBookmark>) => {
  try {
    const response = await axiosInstance.patch(`/bookmarks/${id}`, data);
    revalidateTag('bookmarks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/bookmarks/${id}`);
    revalidateTag('bookmarks');
    return response.data;
  } catch (error) {
    throw error;
  }
};
