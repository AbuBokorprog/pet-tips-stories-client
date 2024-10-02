'use server';
import { cookies } from 'next/headers';
import { axiosInstance } from '../../lib/axiosInstance';
import { jwtDecode } from 'jwt-decode';

export const RegisterUser = async (payload: any) => {
  try {
    const { data }: any = await axiosInstance.post('/auth/register', payload);
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const LoginUser = async (payload: any) => {
  try {
    const { data }: any = await axiosInstance.post('/auth/login', payload);

    if (data.success) {
      cookies().set('accessToken', data.data.accessToken);
      cookies().set('refreshToken', data.data.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const getCurrentUser = async () => {
  const token = cookies().get('accessToken')?.value;
  let decoded: any = [];

  if (token) {
    decoded = jwtDecode(token);

    return {
      email: decoded?.email,
      role: decoded?.role,
      username: decoded?.username,
      id: decoded?.id,
      profilePicture: decoded?.profilePicture,
    };
  }

  return token;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get('refreshToken')?.value;

    const res = await axiosInstance({
      url: '/auth/refresh-token',
      method: 'POST',
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error('Failed to get new access token');
  }
};

export const logoutUser = async () => {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
};
