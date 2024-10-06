import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPaymentIntent } from '@/src/services/payment/payment.hook';
import { toast } from 'sonner';

export const PaymentInitialize = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createPaymentIntent'],
    mutationFn: async (data: any) => await createPaymentIntent(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['ALL_USERS'] });
      queryClient.invalidateQueries({ queryKey: ['USER_ME'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
