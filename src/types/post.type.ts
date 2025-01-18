import { IUser } from './user.type';

export interface IPost {
  _id: string;
  title: string;
  type: string;
  content: string;
  category: string;
  authorId: IUser;
  comments: any[];
  downVotes: any[];
  tags?: any[];
  upVotes: any[];
  image: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
