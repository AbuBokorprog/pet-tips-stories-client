'use server';
import { axiosInstance } from '@/src/lib/axiosInstance';

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserMe = async () => {
  try {
    const response = await axiosInstance.get('/user/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};
