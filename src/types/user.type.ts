export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  followers?: any[];
  following?: any[];
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
