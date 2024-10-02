import { useMutation } from '@tanstack/react-query';
import { RegisterUser, LoginUser } from '@/src/services/auth/auth.services';
import { toast } from 'sonner';

export const userRegisterMutation = () => {
  return useMutation({
    mutationKey: ['REGISTER'],
    mutationFn: async (payload: any) => await RegisterUser(payload),
    onSuccess: () => {
      toast.success('User registered successfully');
    },
    onError: (error) => {
      toast.error('Error registering user');
    },
  });
};

export const userLoginMutation = () => {
  return useMutation({
    mutationKey: ['LOGIN'],
    mutationFn: async (payload: any) => await LoginUser(payload),
    onSuccess: () => {
      toast.success('User logged in successfully!');
    },
    onError: (error) => {
      toast.error('Error logged in user!');
    },
  });
};
