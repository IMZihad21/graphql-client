import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query Blogs {
    allBlogs {
      id
      slug
      title
      content
      isActive
      createdAt
      updatedAt
      author {
        firstName
        lastName
        email
      }
    }
  }
`;

export const GET_BLOG = gql`
  query Blog($slug: String!) {
    blog(slug: $slug) {
      id
      slug
      title
      content
      isActive
      createdAt
      updatedAt
      author {
        firstName
        lastName
        email
      }
    }
  }
`;
