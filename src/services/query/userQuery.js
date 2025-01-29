import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query {
    getUsers {
      id
      city
      email
      firstName
      accountnumber
      lastName
      organizationName
      phone
    }
  }
`;
