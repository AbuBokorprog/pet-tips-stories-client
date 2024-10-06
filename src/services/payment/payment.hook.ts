'use server';

import { axiosInstance } from '@/src/lib/axiosInstance';
import { revalidateTag } from 'next/cache';

export const createPaymentIntent = async (data: any) => {
  try {
    const response = await axiosInstance.post('/payment/initialize', data);
    revalidateTag('payment');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
