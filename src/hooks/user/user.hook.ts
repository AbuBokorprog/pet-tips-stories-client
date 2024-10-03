import { getUserMe } from '@/src/services/user/user.service';
import { useQuery } from '@tanstack/react-query';

export const useUserMeHook = () => {
  return useQuery({
    queryKey: ['userMe'],
    queryFn: async () => await getUserMe(),
  });
};
