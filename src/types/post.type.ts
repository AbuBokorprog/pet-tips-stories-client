export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  upVotes: number;
  downVotes: number;
  comments: number;
  shares: number;
}
