'use server';
import { axiosInstance } from '@/src/lib/axiosInstance';
import { revalidateTag } from 'next/cache';

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

export const updateUser = async (data: any) => {
  try {
    const response = await axiosInstance.put('/user/update/me', data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const promoteUser = async (id: string, role: string) => {
  try {
    const response = await axiosInstance.put(`/user/${id}`, { role });
    revalidateTag('user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const followUser = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/user/${id}/follow`);
    revalidateTag('user');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const unFollowUser = async (id: string) => {
  try {
    const response = await axiosInstance.patch(`/user/${id}/unfollow`);
    revalidateTag('user');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/user/${id}`);
    revalidateTag('user');
    return response.data;
  } catch (error) {
    throw error;
  }
};
