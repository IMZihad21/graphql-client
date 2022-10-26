import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      payload
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!
    $password1: String!
    $password2: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      input: {
        email: $email
        password1: $password1
        password2: $password2
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      payload
    }
  }
`;
