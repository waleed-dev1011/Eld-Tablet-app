import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($accountnumber: Int!, $password: String!) {
    login(accountnumber: $accountnumber, password: $password) {
      token
    }
  }
`;
