export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  followers?: IUser[];
  following?: IUser[];
  tagFollowing?: IUser[];
  posts?: any[];
  role: string;
  bio?: any;
  isPremium?: boolean;
  paymentHistory?: any[];
  subscriptionExpiresAt?: any;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
