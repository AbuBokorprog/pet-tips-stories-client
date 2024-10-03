import UserDashboard from '@/src/components/modules/dashboard/UserDashboard';
import { getUserMe } from '@/src/services/user/user.service';
import { IUser } from '@/src/types/user.type';

interface IUserWithPosts extends IUser {
  success: boolean;
  message: string;
  data: IUser;
}

export default async function UserDashboardPage() {
  const user: IUserWithPosts = await getUserMe();

  return (
    <>
      <UserDashboard user={user.data} />
    </>
  );
}
