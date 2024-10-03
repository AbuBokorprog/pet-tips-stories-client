'use server';
import { axiosInstance } from '@/src/lib/axiosInstance';

export const getUserMe = async () => {
  try {
    const response = await axiosInstance.get('/user/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};
