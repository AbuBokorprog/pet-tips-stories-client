'use server';

import { axiosInstance } from '@/src/lib/axiosInstance';

export const createCommentService = async (comment: any) => {
  try {
    const response = await axiosInstance.post(
      '/comment/create-comment',
      comment
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const replyCommentService = async (id: string, comment: any) => {
  try {
    const response = await axiosInstance.post(`/comment/${id}/reply`, comment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCommentService = async (id: string, comment: any) => {
  try {
    const response = await axiosInstance.put(`/comment/${id}`, comment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCommentService = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/comment/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
