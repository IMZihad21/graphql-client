declare type BlogProps = {
  __typename: string;
  id: string;
  slug: string;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
};
