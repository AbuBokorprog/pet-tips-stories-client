'use server';

import { axiosInstance } from '@/src/lib/axiosInstance';

export const createCommentService = async (comment: any) => {
  const response = await axiosInstance.post('/comment/create-comment', comment);
  return response.data;
};
