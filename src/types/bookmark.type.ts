import { IPost } from './post.type';

export type TBookmark = {
  id: string;
  userId?: string;
};

export interface TAllBookmark {
  _id: string;
  id: IPost;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
}
