import { useMutation } from '@tanstack/react-query';
import { RegisterUser } from '@/src/services/auth/auth.services';
import { toast } from 'sonner';

export const userRegisterMutation = () => {
  return useMutation({
    mutationKey: ['REGISTER'],
    mutationFn: (payload: any) => RegisterUser(payload),
    onSuccess: () => {
      toast.success('User registered successfully');
    },
    onError: (error) => {
      toast.error('Error registering user');
    },
  });
};
