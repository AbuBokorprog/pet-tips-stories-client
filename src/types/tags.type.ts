export type TTags = {
  name: string;
  description?: string;
};

export type TAllTag = {
  _id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};
