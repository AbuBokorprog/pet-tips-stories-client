export interface IUser {
  isPremiumUser?: boolean;
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  followers?: any[];
  following?: any[];
  posts?: string[];
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
